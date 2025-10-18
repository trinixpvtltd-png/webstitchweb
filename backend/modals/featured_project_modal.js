const mongoose = require('mongoose');

const featuredProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, 
  tags: [{ type: String }],
  techStack: [{ type: String }],
  isFeatured: { type: Boolean},
  
}, { timestamps: true });

module.exports = mongoose.model('FeaturedProject', featuredProjectSchema);