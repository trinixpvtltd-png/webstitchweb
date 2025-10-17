const FeaturedProject = require('../modals/featured_project_modal');

// Get all projects (open to all)
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await FeaturedProject.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};

// Create a new project (admin only)
exports.createProject = async (req, res) => {
  try {
    const project = new FeaturedProject(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error creating project', error });
  }
};

// Update a project (admin only)
exports.updateProject = async (req, res) => {
  try {
    const project = await FeaturedProject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error updating project', error });
  }
};

// Delete a project (admin only)
exports.deleteProject = async (req, res) => {
  try {
    const project = await FeaturedProject.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting project', error });
  }
};
