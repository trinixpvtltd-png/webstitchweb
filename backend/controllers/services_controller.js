const Service = require('../modals/service_modal');

// Create a new service (admin only)
exports.createService = async (req, res) => {
  try {
  const service = new Service(req.body);
  await service.save();
  res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ message: 'Error creating service', error });
  }
};

// Update a service (admin only)
exports.updateService = async (req, res) => {
  try {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!service) return res.status(404).json({ message: 'Service not found' });
  res.json(service);
  } catch (error) {
    res.status(400).json({ message: 'Error updating service', error });
  }
};

// Delete a service (admin only)
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting service', error });
  }
};

// Get all services (open to all)
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services', error });
  }
};
