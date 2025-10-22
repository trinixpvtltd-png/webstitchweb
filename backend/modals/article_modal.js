const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  tag: { type: String, required: true },
  image: { type: String, required: false, default: '' },
  heading: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  authorPosition: { type: String, required: true },
  date: { type: Date, required: true },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
