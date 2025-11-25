const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, required: true, default: 0 },
  visitLink: { type: String },
  category: { type: String, enum: ['3d', '2d', 'app', 'chatbot', 'other'], required: true },
  mainImage: {
    url: { type: String },
    key: { type: String }
  },
  gallery: [{
    url: { type: String },
    key: { type: String }
  }],
  assets: [{
    name: { type: String },
    url: { type: String },
    key: { type: String }
  }],
  features: [String],
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  published: { type: Boolean, default: true }
}, { timestamps: true });

templateSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Template', templateSchema);
