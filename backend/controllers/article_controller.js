const Article = require('../modals/article_modal');

// Get all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching articles', error });
  }
};

// Get single article by ID
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching article', error });
  }
};

// Create new article
exports.createArticle = async (req, res) => {
  try {
    console.log('Received req.body:', req.body);  // Add this for debugging
    // Temporarily remove validation to test
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    //console.log('Error creating article:', error);  // Add this for debugging
    res.status(400).json({ message: 'Error creating article', error: error.message || error });
  }
};

// Update article
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(400).json({ message: 'Error updating article', error });
  }
};

// Delete article
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json({ message: 'Article deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting article', error });
  }
};
