import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
// import StarVideoBackground from '@/components/StarVideoBackground';
import {
  getServices,
  addService,
  editService,
  deleteService,
  getProjects,
  addProject,
  editProject,
  deleteProject,
  getArticles,
  addArticle,
  editArticle,
  deleteArticle,
} from "../lib/Api";
import Admin3D from "@/components/Admin3D";

const AdminDashboard = () => {
  // Edit modal state for projects
  const [showEditProjectModal, setShowEditProjectModal] = useState(false);
  const [editProjectId, setEditProjectId] = useState<string | null>(null);
  const [editProjectForm, setEditProjectForm] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    techStack: "",
    isFeatured: false,
  });
  const [editProjectLoading, setEditProjectLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "services" | "projects" | "articles"
  >("services");
  // Article state
  const [articles, setArticles] = useState<any[]>([]);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [articleForm, setArticleForm] = useState({
    tag: "",
    image: "",
    heading: "",
    description: "",
    author: "",
    authorPosition: "",
    date: "",
    isFeatured: false,
  });
  const [articleLoading, setArticleLoading] = useState(false);
  // Edit modal state for articles
  const [showEditArticleModal, setShowEditArticleModal] = useState(false);
  const [editArticleId, setEditArticleId] = useState<string | null>(null);
  const [editArticleForm, setEditArticleForm] = useState({
    tag: "",
    image: "",
    heading: "",
    description: "",
    author: "",
    authorPosition: "",
    date: "",
    isFeatured: false,
  });
  const [editArticleLoading, setEditArticleLoading] = useState(false);

  // Services & Projects state (restored)
  const [services, setServices] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState("");

  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    image: "",
    tags: "", // comma separated
    techStack: "",
    isFeatured: false,
  });
  const [projectLoading, setProjectLoading] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [serviceForm, setServiceForm] = useState({
    title: "",
    description: "",
    keyBenefits: "", // comma separated
    isPopular: false,
    icon: "",
    tag: "",
    ctaText: "Get Started",
  });
  // Edit modal state for services
  const [showEditServiceModal, setShowEditServiceModal] = useState(false);
  const [editServiceId, setEditServiceId] = useState<string | null>(null);
  const [editServiceForm, setEditServiceForm] = useState({
    title: "",
    description: "",
    keyBenefits: "",
    isPopular: false,
    icon: "",
    tag: "",
    ctaText: "Get Started",
  });
  const [editServiceLoading, setEditServiceLoading] = useState(false);
  const [serviceLoading, setServiceLoading] = useState(false);

  useEffect(() => {
    getServices()
      .then(setServices)
      .catch((err) => setError(err.message));
    getProjects()
      .then(setProjects)
      .catch((err) => setError(err.message));
    getArticles()
      .then(setArticles)
      .catch((err) => setError(err.message));
  }, []);

  // Article CRUD
  const handleAddArticle = async (article: any) => {
    setArticleLoading(true);
    try {
      const newArticle = await addArticle(article);
      setArticles([...articles, newArticle]);
      setShowArticleModal(false);
      setArticleForm({
        tag: "",
        image: "",
        heading: "",
        description: "",
        author: "",
        authorPosition: "",
        date: "",
        isFeatured: false,
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setArticleLoading(false);
    }
  };

  const handleEditArticle = async (id: string, updates: any) => {
    setEditArticleLoading(true);
    try {
      const updated = await editArticle(id, updates);
      setArticles(articles.map((a) => (a._id === id ? updated : a)));
      setShowEditArticleModal(false);
      setEditArticleId(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setEditArticleLoading(false);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    try {
      await deleteArticle(id);
      setArticles(articles.filter((a) => a._id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Service CRUD (create)
  const handleAddService = async (service: any) => {
    setServiceLoading(true);
    try {
      const newService = await addService(service);
      setServices([...services, newService]);
      setShowServiceModal(false);
      setServiceForm({
        title: "",
        description: "",
        keyBenefits: "",
        isPopular: false,
        icon: "",
        tag: "",
        ctaText: "Get Started",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setServiceLoading(false);
    }
  };

  const handleEditService = async (id: string, updates: any) => {
    setEditServiceLoading(true);
    try {
      const updated = await editService(id, updates);
      setServices(services.map((s) => (s._id === id ? updated : s)));
      setShowEditServiceModal(false);
      setEditServiceId(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setEditServiceLoading(false);
    }
  };

  const handleDeleteService = async (id: string) => {
    try {
      await deleteService(id);
      setServices(services.filter((s) => s._id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Project CRUD
  const handleAddProject = async (project: any) => {
    setProjectLoading(true);
    try {
      const newProject = await addProject(project);
      setProjects([...projects, newProject]);
      setShowProjectModal(false);
      setProjectForm({
        title: "",
        description: "",
        image: "",
        tags: "",
        techStack: "",
        isFeatured: false,
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setProjectLoading(false);
    }
  };

  const handleEditProject = async (id: string, updates: any) => {
    setEditProjectLoading(true);
    try {
      const updated = await editProject(id, updates);
      setProjects(projects.map((p) => (p._id === id ? updated : p)));
      setShowEditProjectModal(false);
      setEditProjectId(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setEditProjectLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteProject(id);
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen text-[#e3e8f0] font-sans">
      {/* <StarVideoBackground /> */}
      <Admin3D />
      <div className="absolute inset-0">
        <Navigation />
        <div className="flex pt-20 gap-8">
          <aside className="w-72 bg-gradient-to-br from-[#23263a]/80 to-[#6366f1]/30 backdrop-blur-xl shadow-2xl p-8 flex flex-col rounded-3xl border-r border-white/10 min-h-[80vh]">
            <h2 className="text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-lg">
              Admin Dashboard
            </h2>
            <nav className="flex flex-col gap-4">
              <button
                className={`text-left px-5 py-3 rounded-xl transition font-semibold text-lg ${
                  activeTab === "services"
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-xl"
                    : "text-[#a5b4fc] hover:bg-white/10"
                }`}
                onClick={() => setActiveTab("services")}
              >
                Services
              </button>
              <button
                className={`text-left px-5 py-3 rounded-xl transition font-semibold text-lg ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-xl"
                    : "text-[#a5b4fc] hover:bg-white/10"
                }`}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button>
              <button
                className={`text-left px-5 py-3 rounded-xl transition font-semibold text-lg ${
                  activeTab === "articles"
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-xl"
                    : "text-[#a5b4fc] hover:bg-white/10"
                }`}
                onClick={() => setActiveTab("articles")}
              >
                Articles
              </button>
            </nav>
          </aside>
          <main className="flex-1 p-8">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {activeTab === "services" && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-lg">
                    Services
                  </h2>
                  <button
                    className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition text-lg"
                    onClick={() => setShowServiceModal(true)}
                  >
                    + Create Service
                  </button>
                </div>
                {/* Modal for creating service */}
                {showServiceModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-black rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                        onClick={() => setShowServiceModal(false)}
                      >
                        &times;
                      </button>
                      <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
                        Create Service
                      </h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleAddService({
                            ...serviceForm,
                            keyBenefits: serviceForm.keyBenefits
                              .split(",")
                              .map((k) => k.trim())
                              .filter(Boolean),
                          });
                        }}
                        className="flex flex-col gap-4"
                      >
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Title"
                          required
                          value={serviceForm.title}
                          onChange={(e) =>
                            setServiceForm((f) => ({
                              ...f,
                              title: e.target.value,
                            }))
                          }
                        />
                        <textarea
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Description"
                          required
                          value={serviceForm.description}
                          onChange={(e) =>
                            setServiceForm((f) => ({
                              ...f,
                              description: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Key Benefits (comma separated)"
                          required
                          value={serviceForm.keyBenefits}
                          onChange={(e) =>
                            setServiceForm((f) => ({
                              ...f,
                              keyBenefits: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Icon URL (optional)"
                          value={serviceForm.icon}
                          onChange={(e) =>
                            setServiceForm((f) => ({
                              ...f,
                              icon: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="CTA Text"
                          value={serviceForm.ctaText}
                          onChange={(e) =>
                            setServiceForm((f) => ({
                              ...f,
                              ctaText: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Tag"
                          value={serviceForm.tag}
                          onChange={(e) =>
                            setServiceForm((f) => ({
                              ...f,
                              tag: e.target.value,
                            }))
                          }
                        />
                        <label className="flex items-center gap-2 text-white">
                          <input
                            type="checkbox"
                            checked={serviceForm.isPopular}
                            onChange={(e) =>
                              setServiceForm((f) => ({
                                ...f,
                                isPopular: e.target.checked,
                              }))
                            }
                          />
                          Popular Service
                        </label>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                          disabled={serviceLoading}
                        >
                          {serviceLoading ? "Creating..." : "Create Service"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                <div className="overflow-x-auto">
                  <div className="rounded-2xl shadow-2xl bg-gradient-to-br from-[#23263a]/80 to-[#6366f1]/10 p-2">
                    <table className="w-full border-separate border-spacing-y-2">
                      <thead>
                        <tr className="bg-white/10 text-[#a5b4fc] rounded-xl">
                          <th className="p-4 text-lg text-center">Title</th>
                          <th className="p-4 text-lg text-center">
                            Description
                          </th>
                          <th className="p-4 text-lg text-center">Tag</th>
                          <th className="p-4 text-lg text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((service: any) => (
                          <tr
                            key={service._id}
                            className="rounded-xl bg-black/60 hover:bg-white/10 transition shadow-xl"
                          >
                            <td className="p-4 rounded-l-xl font-semibold text-white/90 text-center">
                              {service.title}
                            </td>
                            <td className="p-4 text-white/80 text-center">
                              {service.description}
                            </td>
                            <td className="p-4 text-white/80 text-center">
                              {service.tag}
                            </td>
                            <td className="p-4 flex gap-2 rounded-r-xl justify-center">
                              <button
                                className="px-4 py-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
                                onClick={() => {
                                  setEditServiceId(service._id);
                                  setEditServiceForm({
                                    title: service.title,
                                    description: service.description,
                                    keyBenefits: Array.isArray(
                                      service.keyBenefits
                                    )
                                      ? service.keyBenefits.join(", ")
                                      : service.keyBenefits || "",
                                    isPopular: service.isPopular || false,
                                    icon: service.icon || "",
                                    tag: service.tag || "",
                                    ctaText: service.ctaText || "Get Started",
                                  });
                                  setShowEditServiceModal(true);
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="px-4 py-2 bg-red-500/80 text-white rounded-lg hover:bg-red-600 transition font-semibold"
                                onClick={() => handleDeleteService(service._id)}
                              >
                                Delete
                              </button>
                            </td>
                            {/* Modal for editing service */}
                            {showEditServiceModal && (
                              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                                <div className="bg-black rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10">
                                  <button
                                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                                    onClick={() =>
                                      setShowEditServiceModal(false)
                                    }
                                  >
                                    &times;
                                  </button>
                                  <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
                                    Edit Service
                                  </h3>
                                  <form
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      if (editServiceId)
                                        handleEditService(editServiceId, {
                                          ...editServiceForm,
                                          keyBenefits:
                                            editServiceForm.keyBenefits
                                              .split(",")
                                              .map((k) => k.trim())
                                              .filter(Boolean),
                                        });
                                    }}
                                    className="flex flex-col gap-4"
                                  >
                                    <input
                                      className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                                      placeholder="Title"
                                      required
                                      value={editServiceForm.title}
                                      onChange={(e) =>
                                        setEditServiceForm((f) => ({
                                          ...f,
                                          title: e.target.value,
                                        }))
                                      }
                                    />
                                    <textarea
                                      className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                                      placeholder="Description"
                                      required
                                      value={editServiceForm.description}
                                      onChange={(e) =>
                                        setEditServiceForm((f) => ({
                                          ...f,
                                          description: e.target.value,
                                        }))
                                      }
                                    />
                                    <input
                                      className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                                      placeholder="Key Benefits (comma separated)"
                                      required
                                      value={editServiceForm.keyBenefits}
                                      onChange={(e) =>
                                        setEditServiceForm((f) => ({
                                          ...f,
                                          keyBenefits: e.target.value,
                                        }))
                                      }
                                    />
                                    <input
                                      className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                                      placeholder="Icon URL (optional)"
                                      value={editServiceForm.icon}
                                      onChange={(e) =>
                                        setEditServiceForm((f) => ({
                                          ...f,
                                          icon: e.target.value,
                                        }))
                                      }
                                    />
                                    <input
                                      className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                                      placeholder="CTA Text"
                                      value={editServiceForm.ctaText}
                                      onChange={(e) =>
                                        setEditServiceForm((f) => ({
                                          ...f,
                                          ctaText: e.target.value,
                                        }))
                                      }
                                    />
                                    <input
                                      className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                                      placeholder="Tags (comma separated)"
                                      value={editServiceForm.tag}
                                      onChange={(e) =>
                                        setEditServiceForm((f) => ({
                                          ...f,
                                          tag: e.target.value,
                                        }))
                                      }
                                    />
                                    <label className="flex items-center gap-2 text-white">
                                      <input
                                        type="checkbox"
                                        checked={editServiceForm.isPopular}
                                        onChange={(e) =>
                                          setEditServiceForm((f) => ({
                                            ...f,
                                            isPopular: e.target.checked,
                                          }))
                                        }
                                      />
                                      Popular Service
                                    </label>
                                    <button
                                      type="submit"
                                      className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                                      disabled={editServiceLoading}
                                    >
                                      {editServiceLoading
                                        ? "Saving..."
                                        : "Save Changes"}
                                    </button>
                                  </form>
                                </div>
                              </div>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "projects" && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-lg">
                    Projects
                  </h2>
                  <button
                    className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition text-lg"
                    onClick={() => setShowProjectModal(true)}
                  >
                    + Create Project
                  </button>
                </div>
                {/* Modal for creating project */}
                {showProjectModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-black rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                        onClick={() => setShowProjectModal(false)}
                      >
                        &times;
                      </button>
                      <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
                        Create Project
                      </h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleAddProject({
                            ...projectForm,
                            tags: projectForm.tags
                              .split(",")
                              .map((t) => t.trim())
                              .filter(Boolean),
                            techStack: projectForm.techStack
                              .split(",")
                              .map((t) => t.trim())
                              .filter(Boolean),
                          });
                        }}
                        className="flex flex-col gap-4"
                      >
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Title"
                          required
                          value={projectForm.title}
                          onChange={(e) =>
                            setProjectForm((f) => ({
                              ...f,
                              title: e.target.value,
                            }))
                          }
                        />
                        <textarea
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Description"
                          required
                          value={projectForm.description}
                          onChange={(e) =>
                            setProjectForm((f) => ({
                              ...f,
                              description: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Image URL (optional)"
                          value={projectForm.image}
                          onChange={(e) =>
                            setProjectForm((f) => ({
                              ...f,
                              image: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Tags (comma separated)"
                          value={projectForm.tags}
                          onChange={(e) =>
                            setProjectForm((f) => ({
                              ...f,
                              tags: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Tech Stack (comma separated)"
                          value={projectForm.techStack}
                          onChange={(e) =>
                            setProjectForm((f) => ({
                              ...f,
                              techStack: e.target.value,
                            }))
                          }
                        />
                        <label className="flex items-center gap-2 text-white">
                          <input
                            type="checkbox"
                            checked={projectForm.isFeatured}
                            onChange={(e) =>
                              setProjectForm((f) => ({
                                ...f,
                                isFeatured: e.target.checked,
                              }))
                            }
                          />
                          Featured Project
                        </label>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                          disabled={projectLoading}
                        >
                          {projectLoading ? "Creating..." : "Create Project"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                {/* Edit Project Modal */}
                {showEditProjectModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-black rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                        onClick={() => setShowEditProjectModal(false)}
                      >
                        &times;
                      </button>
                      <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
                        Edit Project
                      </h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleEditProject(editProjectId!, {
                            ...editProjectForm,
                            tags: editProjectForm.tags
                              .split(",")
                              .map((t) => t.trim())
                              .filter(Boolean),
                            techStack: editProjectForm.techStack
                              .split(",")
                              .map((t) => t.trim())
                              .filter(Boolean),
                          });
                        }}
                        className="flex flex-col gap-4"
                      >
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Title"
                          required
                          value={editProjectForm.title}
                          onChange={(e) =>
                            setEditProjectForm((f) => ({
                              ...f,
                              title: e.target.value,
                            }))
                          }
                        />
                        <textarea
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Description"
                          required
                          value={editProjectForm.description}
                          onChange={(e) =>
                            setEditProjectForm((f) => ({
                              ...f,
                              description: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Image URL (optional)"
                          value={editProjectForm.image}
                          onChange={(e) =>
                            setEditProjectForm((f) => ({
                              ...f,
                              image: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Tags (comma separated)"
                          value={editProjectForm.tags}
                          onChange={(e) =>
                            setEditProjectForm((f) => ({
                              ...f,
                              tags: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Tech Stack (comma separated)"
                          value={editProjectForm.techStack}
                          onChange={(e) =>
                            setEditProjectForm((f) => ({
                              ...f,
                              techStack: e.target.value,
                            }))
                          }
                        />
                        <label className="flex items-center gap-2 text-white">
                          <input
                            type="checkbox"
                            checked={editProjectForm.isFeatured}
                            onChange={(e) =>
                              setEditProjectForm((f) => ({
                                ...f,
                                isFeatured: e.target.checked,
                              }))
                            }
                          />
                          Featured Project
                        </label>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                          disabled={editProjectLoading}
                        >
                          {editProjectLoading ? "Saving..." : "Save Changes"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                <div className="overflow-x-auto">
                  <div className="rounded-2xl shadow-2xl bg-gradient-to-br from-[#23263a]/80 to-[#6366f1]/10 p-2">
                    <table className="w-full border-separate border-spacing-y-2">
                      <thead>
                        <tr className="bg-white/10 text-[#a5b4fc] rounded-xl">
                          <th className="p-4 text-lg">Title</th>
                          <th className="p-4 text-lg">Description</th>
                          <th className="p-4 text-lg">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.map((project: any) => (
                          <tr
                            key={project._id}
                            className="rounded-xl bg-black/60 hover:bg-white/10 transition shadow-xl"
                          >
                            <td className="p-4 rounded-l-xl font-semibold text-white/90 text-center">
                              {project.title}
                            </td>
                            <td className="p-4 text-white/80 text-center">
                              {project.description}
                            </td>
                            <td className="p-4 flex gap-2 rounded-r-xl justify-center">
                              <button
                                className="px-4 py-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
                                onClick={() => {
                                  setEditProjectId(project._id);
                                  setEditProjectForm({
                                    title: project.title,
                                    description: project.description,
                                    image: project.image || "",
                                    tags: project.tags?.join(", ") || "",
                                    techStack:
                                      project.techStack?.join(", ") || "",
                                    isFeatured: project.isFeatured ?? false,
                                  });
                                  setShowEditProjectModal(true);
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="px-4 py-2 bg-red-500/80 text-white rounded-lg hover:bg-red-600 transition font-semibold"
                                onClick={() => handleDeleteProject(project._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "articles" && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-lg">
                    Articles
                  </h2>
                  <button
                    className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition text-lg"
                    onClick={() => setShowArticleModal(true)}
                  >
                    + Create Article
                  </button>
                </div>
                {/* Article Table */}
                <div className="overflow-x-auto">
                  <div className="rounded-2xl shadow-2xl bg-gradient-to-br from-[#23263a]/80 to-[#6366f1]/10 p-2">
                    <table className="w-full border-separate border-spacing-y-2">
                      <thead>
                        <tr className="bg-white/10 text-[#a5b4fc] rounded-xl">
                          <th className="p-4 text-lg text-center">Heading</th>
                          <th className="p-4 text-lg text-center">Tag</th>
                          <th className="p-4 text-lg text-center">Author</th>
                          <th className="p-4 text-lg text-center">Date</th>
                          <th className="p-4 text-lg text-center">Featured</th>
                          <th className="p-4 text-lg text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {articles.map((article: any) => (
                          <tr
                            key={article._id}
                            className="rounded-xl bg-black/60 hover:bg-white/10 transition shadow-xl"
                          >
                            <td className="p-4 rounded-l-xl font-semibold text-white/90 text-center">
                              {article.heading}
                            </td>
                            <td className="p-4 text-white/80 text-center">
                              {article.tag}
                            </td>
                            <td className="p-4 text-white/80 text-center">
                              {article.author}
                            </td>
                            <td className="p-4 text-white/80 text-center">
                              {article.date}
                            </td>
                            <td className="p-4 text-white/80 text-center">
                              {article.isFeatured ? "Yes" : "No"}
                            </td>
                            <td className="p-4 flex gap-2 rounded-r-xl justify-center">
                              <button
                                className="px-4 py-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
                                onClick={() => {
                                  setEditArticleId(article._id);
                                  setEditArticleForm({
                                    tag: article.tag || "",
                                    image: article.image || "",
                                    heading: article.heading || "",
                                    description: article.description || "",
                                    author: article.author || "",
                                    authorPosition:
                                      article.authorPosition || "",
                                    date: article.date || "",
                                    isFeatured: article.isFeatured || false,
                                  });
                                  setShowEditArticleModal(true);
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="px-4 py-2 bg-red-500/80 text-white rounded-lg hover:bg-red-600 transition font-semibold"
                                onClick={() => handleDeleteArticle(article._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Article Create Modal */}
                {showArticleModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-black rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                        onClick={() => setShowArticleModal(false)}
                      >
                        &times;
                      </button>
                      <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
                        Create Article
                      </h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleAddArticle(articleForm);
                        }}
                        className="flex flex-col gap-4"
                      >
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Heading"
                          required
                          value={articleForm.heading}
                          onChange={(e) =>
                            setArticleForm((f) => ({
                              ...f,
                              heading: e.target.value,
                            }))
                          }
                        />
                        <textarea
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Description"
                          required
                          value={articleForm.description}
                          onChange={(e) =>
                            setArticleForm((f) => ({
                              ...f,
                              description: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Tag"
                          required
                          value={articleForm.tag}
                          onChange={(e) =>
                            setArticleForm((f) => ({
                              ...f,
                              tag: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Image URL (optional)"
                          value={articleForm.image}
                          onChange={(e) =>
                            setArticleForm((f) => ({
                              ...f,
                              image: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Author"
                          required
                          value={articleForm.author}
                          onChange={(e) =>
                            setArticleForm((f) => ({
                              ...f,
                              author: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Author Position"
                          required
                          value={articleForm.authorPosition}
                          onChange={(e) =>
                            setArticleForm((f) => ({
                              ...f,
                              authorPosition: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Date (YYYY-MM-DD)"
                          value={articleForm.date}
                          onChange={(e) =>
                            setArticleForm((f) => ({
                              ...f,
                              date: e.target.value,
                            }))
                          }
                        />
                        <label className="flex items-center gap-2 text-white">
                          <input
                            type="checkbox"
                            checked={articleForm.isFeatured}
                            onChange={(e) =>
                              setArticleForm((f) => ({
                                ...f,
                                isFeatured: e.target.checked,
                              }))
                            }
                          />
                          Featured Article
                        </label>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                          disabled={articleLoading}
                        >
                          {articleLoading ? "Creating..." : "Create Article"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                {/* Article Edit Modal */}
                {showEditArticleModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-black rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                        onClick={() => setShowEditArticleModal(false)}
                      >
                        &times;
                      </button>
                      <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
                        Edit Article
                      </h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (editArticleId)
                            handleEditArticle(editArticleId, editArticleForm);
                        }}
                        className="flex flex-col gap-4"
                      >
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Heading"
                          required
                          value={editArticleForm.heading}
                          onChange={(e) =>
                            setEditArticleForm((f) => ({
                              ...f,
                              heading: e.target.value,
                            }))
                          }
                        />
                        <textarea
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Description"
                          required
                          value={editArticleForm.description}
                          onChange={(e) =>
                            setEditArticleForm((f) => ({
                              ...f,
                              description: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Tag"
                          required
                          value={editArticleForm.tag}
                          onChange={(e) =>
                            setEditArticleForm((f) => ({
                              ...f,
                              tag: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Image URL (optional)"
                          value={editArticleForm.image}
                          onChange={(e) =>
                            setEditArticleForm((f) => ({
                              ...f,
                              image: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Author"
                          required
                          value={editArticleForm.author}
                          onChange={(e) =>
                            setEditArticleForm((f) => ({
                              ...f,
                              author: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Author Position"
                          required
                          value={editArticleForm.authorPosition}
                          onChange={(e) =>
                            setEditArticleForm((f) => ({
                              ...f,
                              authorPosition: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Date (YYYY-MM-DD)"
                          value={editArticleForm.date}
                          onChange={(e) =>
                            setEditArticleForm((f) => ({
                              ...f,
                              date: e.target.value,
                            }))
                          }
                        />
                        <label className="flex items-center gap-2 text-white">
                          <input
                            type="checkbox"
                            checked={editArticleForm.isFeatured}
                            onChange={(e) =>
                              setEditArticleForm((f) => ({
                                ...f,
                                isFeatured: e.target.checked,
                              }))
                            }
                          />
                          Featured Article
                        </label>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                          disabled={editArticleLoading}
                        >
                          {editArticleLoading ? "Saving..." : "Save Changes"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
