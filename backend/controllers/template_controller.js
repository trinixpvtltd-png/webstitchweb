const Template = require('../modals/template_modal');
const User = require('../modals/user_modal');
const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

// Create Template (Admin)
exports.createTemplate = async (req, res) => {
  try {
    const { title, slug, description, price, visitLink, category, features, mainImage, gallery, assets, published } = req.body;
    
    const existingTemplate = await Template.findOne({ slug });
    if (existingTemplate) {
      return res.status(409).json({ message: 'Slug already exists.' });
    }

    const template = new Template({
      title,
      slug,
      description,
      price,
      visitLink,
      category,
      features,
      mainImage,
      gallery,
      assets,
      published,
      author: req.user.id
    });

    await template.save();
    res.status(201).json({ success: true, template });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Update Template (Admin)
exports.updateTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const template = await Template.findById(id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found.' });
    }


    
    if (updates.mainImage && template.mainImage && updates.mainImage.key !== template.mainImage.key) {
        // Delete old main image
        try {
            await s3.send(new DeleteObjectCommand({ Bucket: process.env.S3_BUCKET, Key: template.mainImage.key }));
        } catch (err) {
            console.error("Failed to delete old main image", err);
        }
    }


    const updatedTemplate = await Template.findByIdAndUpdate(id, updates, { new: true });
    res.json({ success: true, template: updatedTemplate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Delete Template (Admin)
exports.deleteTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const template = await Template.findById(id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found.' });
    }

    // Delete images from S3
    const keysToDelete = [];
    if (template.mainImage && template.mainImage.key) keysToDelete.push(template.mainImage.key);
    if (template.gallery) {
      template.gallery.forEach(img => {
        if (img.key) keysToDelete.push(img.key);
      });
    }
    if (template.assets) {
      template.assets.forEach(asset => {
        if (asset.key) keysToDelete.push(asset.key);
      });
    }

    for (const key of keysToDelete) {
      try {
        await s3.send(new DeleteObjectCommand({ Bucket: process.env.S3_BUCKET, Key: key }));
      } catch (err) {
        console.error(`Failed to delete S3 object: ${key}`, err);
      }
    }

    await Template.findByIdAndDelete(id);
    res.json({ message: 'Template deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get Admin Templates
exports.getAdminTemplates = async (req, res) => {
  try {
    const templates = await Template.find().sort({ createdAt: -1 });
    res.json(templates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get Public Templates
exports.getTemplates = async (req, res) => {
  try {
    const { page = 1, limit = 10, q, category, minPrice, maxPrice, sort } = req.query;
    const query = { published: true };

    if (q) {
      query.$text = { $search: q };
    }
    if (category) {
      query.category = category;
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    let sortOption = { createdAt: -1 };
    if (sort === 'price_asc') sortOption = { price: 1 };
    if (sort === 'price_desc') sortOption = { price: -1 };

    const templates = await Template.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select('title slug price category mainImage description author features gallery visitLink views likes likedBy'); // Select fields for grid & modal

    const total = await Template.countDocuments(query);

    res.json({
      templates,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get Liked Templates
exports.getLikedTemplates = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(`Fetching liked templates for user: ${userId}`);

    const user = await User.findById(userId).populate({
      path: 'likedTemplates',
      select: 'title slug price category mainImage description author features gallery visitLink views likes likedBy published'
    });

    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log(`Found ${user.likedTemplates.length} liked templates in user profile`);

    // Filter out nulls (deleted templates) and unpublished templates
    const templates = user.likedTemplates.filter(t => t && t.published);
    
    console.log(`Returning ${templates.length} valid templates`);
    res.json(templates);
  } catch (error) {
    console.error("Get Liked Templates Error:", error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get Template By Slug
exports.getTemplateBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const template = await Template.findOne({ slug, published: true }).populate('author', 'fullname email');
    if (!template) {
      return res.status(404).json({ message: 'Template not found.' });
    }
    res.json(template);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Purchase Template
exports.purchaseTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentToken } = req.body; // Mock payment token
    const userId = req.user.id;

    const template = await Template.findById(id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found.' });
    }

    // Mock Payment Verification
    if (template.price > 0 && !paymentToken) {
        return res.status(400).json({ message: 'Payment required.' });
    }

    // Add to user's purchased templates
    const user = await User.findById(userId);
    if (!user.purchasedTemplates.includes(id)) {
      user.purchasedTemplates.push(id);
      await user.save();
    }

    // Return assets (or signed URLs for assets)
    // For now, returning the asset objects directly as per prompt example
    res.json({ 
      success: true, 
      message: 'Purchase complete', 
      assets: template.assets 
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Increment View Count
exports.incrementView = async (req, res) => {
  try {
    const { id } = req.params;
    await Template.findByIdAndUpdate(id, { $inc: { views: 1 } });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Toggle Like
exports.toggleLike = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    console.log(`Toggle Like: Template ID: ${id}, User ID: ${userId}`);

    const template = await Template.findById(id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found.' });
    }

    const isLiked = template.likedBy.some(likedId => likedId.toString() === userId);
    console.log(`Is Liked: ${isLiked}`);

    let updateTemplate;
    let updateUser;

    if (isLiked) {
      updateTemplate = { $pull: { likedBy: userId }, $inc: { likes: -1 } };
      updateUser = { $pull: { likedTemplates: id } };
    } else {
      updateTemplate = { $addToSet: { likedBy: userId }, $inc: { likes: 1 } };
      updateUser = { $addToSet: { likedTemplates: id } };
    }

    const updatedTemplate = await Template.findByIdAndUpdate(id, updateTemplate, { new: true });
    const updatedUser = await User.findByIdAndUpdate(userId, updateUser, { new: true });

    console.log('Updated User Liked Templates:', updatedUser ? updatedUser.likedTemplates : 'User not found');

    res.json({ success: true, likes: updatedTemplate.likes, isLiked: !isLiked });
  } catch (error) {
    console.error("Toggle Like Error:", error);
    res.status(500).json({ message: 'Server error.' });
  }
};
