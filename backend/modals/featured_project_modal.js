const mongoose = require('mongoose');

const featuredProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, 
  tags: [{ type: String }],
  link: { type: String },
  isFeatured: { type: Boolean, default: true },
  
}, { timestamps: true });

module.exports = mongoose.model('FeaturedProject', featuredProjectSchema);