const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  keyBenefits: [{ type: String, required: true }],
  isPopular: { type: Boolean, default: false },
  icon: { type: String },
  tag: [{ type: String }],
  ctaText: { type: String, default: "Get Started" }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);