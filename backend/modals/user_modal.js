const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  purchasedTemplates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Template' }],
  likedTemplates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Template' }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);