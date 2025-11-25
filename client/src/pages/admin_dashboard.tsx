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
  getTemplates,
  addTemplate,
  editTemplate,
  deleteTemplate,
  getPresignedUrl,
  uploadFileToS3,
} from "../lib/Api";
import Admin3D from "@/components/Admin3D";

const AdminDashboard = () => {
  const [error, setError] = useState<string | null>(null);

  // Service State
  const [services, setServices] = useState<any[]>([]);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [serviceForm, setServiceForm] = useState({
    title: "",
    description: "",
    keyBenefits: "",
    icon: "",
    ctaText: "",
    tag: "",
    isPopular: false,
  });
  const [serviceLoading, setServiceLoading] = useState(false);
  const [showEditServiceModal, setShowEditServiceModal] = useState(false);
  const [editServiceId, setEditServiceId] = useState<string | null>(null);
  const [editServiceForm, setEditServiceForm] = useState({
    title: "",
    description: "",
    keyBenefits: "",
    icon: "",
    ctaText: "",
    tag: "",
    isPopular: false,
  });
  const [editServiceLoading, setEditServiceLoading] = useState(false);

  // Project State
  const [projects, setProjects] = useState<any[]>([]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    techStack: "",
    isFeatured: false,
  });
  const [projectLoading, setProjectLoading] = useState(false);

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
    "services" | "projects" | "articles" | "templates"
  >(() => {
    return (localStorage.getItem("adminActiveTab") as any) || "services";
  });

  useEffect(() => {
    localStorage.setItem("adminActiveTab", activeTab);
  }, [activeTab]);
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

  // Template State
  interface ImageFile {
    file?: File;
    url: string;
    key?: string;
    isMain: boolean;
  }
  const [templateImages, setTemplateImages] = useState<ImageFile[]>([]);

  const [templates, setTemplates] = useState<any[]>([]);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [templateForm, setTemplateForm] = useState({
    title: "",
    slug: "",
    description: "",
    price: 0,
    visitLink: "",
    category: "app",
    features: "", // comma separated
    published: true,
  });
  const [templateLoading, setTemplateLoading] = useState(false);
  const [templateFilter, setTemplateFilter] = useState("all");

  // Edit Template State
  const [showEditTemplateModal, setShowEditTemplateModal] = useState(false);
  const [editTemplateId, setEditTemplateId] = useState<string | null>(null);
  const [editTemplateForm, setEditTemplateForm] = useState({
    title: "",
    slug: "",
    description: "",
    price: 0,
    visitLink: "",
    category: "app",
    features: "",
    published: true,
  });
  const [editTemplateLoading, setEditTemplateLoading] = useState(false);

  const fetchServices = async () => {
    try {
      const data = await getServices();
      setServices(data);
    } catch (err) {
      console.error("Failed to fetch services", err);
    }
  };

  const handleAddService = async (data: any) => {
    setServiceLoading(true);
    try {
      await addService(data);
      setShowServiceModal(false);
      setServiceForm({
        title: "",
        description: "",
        keyBenefits: "",
        icon: "",
        ctaText: "",
        tag: "",
        isPopular: false,
      });
      fetchServices();
    } catch (err) {
      console.error("Failed to add service", err);
      setError("Failed to add service");
    } finally {
      setServiceLoading(false);
    }
  };

  const handleEditService = async (id: string, data: any) => {
    setEditServiceLoading(true);
    try {
      await editService(id, data);
      setShowEditServiceModal(false);
      setEditServiceId(null);
      fetchServices();
    } catch (err) {
      console.error("Failed to edit service", err);
      setError("Failed to edit service");
    } finally {
      setEditServiceLoading(false);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    try {
      await deleteService(id);
      fetchServices();
    } catch (err) {
      console.error("Failed to delete service", err);
      setError("Failed to delete service");
    }
  };

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      console.error("Failed to fetch projects", err);
    }
  };

  const handleAddProject = async (data: any) => {
    setProjectLoading(true);
    try {
      await addProject(data);
      setShowProjectModal(false);
      setProjectForm({
        title: "",
        description: "",
        image: "",
        tags: "",
        techStack: "",
        isFeatured: false,
      });
      fetchProjects();
    } catch (err) {
      console.error("Failed to add project", err);
      setError("Failed to add project");
    } finally {
      setProjectLoading(false);
    }
  };

  const handleEditProject = async (id: string, data: any) => {
    setEditProjectLoading(true);
    try {
      await editProject(id, data);
      setShowEditProjectModal(false);
      setEditProjectId(null);
      fetchProjects();
    } catch (err) {
      console.error("Failed to edit project", err);
      setError("Failed to edit project");
    } finally {
      setEditProjectLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      fetchProjects();
    } catch (err) {
      console.error("Failed to delete project", err);
      setError("Failed to delete project");
    }
  };

  const fetchArticles = async () => {
    try {
      const data = await getArticles();
      setArticles(data);
    } catch (err) {
      console.error("Failed to fetch articles", err);
    }
  };

  const handleAddArticle = async (data: any) => {
    setArticleLoading(true);
    try {
      await addArticle(data);
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
      fetchArticles();
    } catch (err) {
      console.error("Failed to add article", err);
      setError("Failed to add article");
    } finally {
      setArticleLoading(false);
    }
  };

  const handleEditArticle = async (id: string, data: any) => {
    setEditArticleLoading(true);
    try {
      await editArticle(id, data);
      setShowEditArticleModal(false);
      setEditArticleId(null);
      fetchArticles();
    } catch (err) {
      console.error("Failed to edit article", err);
      setError("Failed to edit article");
    } finally {
      setEditArticleLoading(false);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this article?")) return;
    try {
      await deleteArticle(id);
      fetchArticles();
    } catch (err) {
      console.error("Failed to delete article", err);
      setError("Failed to delete article");
    }
  };

  // Helper for file upload
  const handleFileUpload = async (file: File) => {
    const { url, key, publicUrl } = await getPresignedUrl(file.name, file.type);
    await uploadFileToS3(url, file);
    return { key, url: publicUrl };
  };

  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    addImages(files);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      addImages(files);
    }
  };

  const addImages = (files: File[]) => {
    const newImages = files.map((file, index) => ({
      file,
      url: URL.createObjectURL(file),
      isMain: templateImages.length === 0 && index === 0, // First image is main by default if list empty
    }));
    setTemplateImages([...templateImages, ...newImages]);
  };

  const removeImage = (index: number) => {
    const newImages = [...templateImages];
    const wasMain = newImages[index].isMain;
    newImages.splice(index, 1);
    if (wasMain && newImages.length > 0) {
      newImages[0].isMain = true; // Reassign main to first if main removed
    }
    setTemplateImages(newImages);
  };

  const setMainImage = (index: number) => {
    const newImages = templateImages.map((img, i) => ({
      ...img,
      isMain: i === index,
    }));
    setTemplateImages(newImages);
  };

  const fetchTemplates = async () => {
    try {
      const data = await getTemplates();
      setTemplates(data);
    } catch (err: any) {
      console.error("Failed to fetch templates", err);
      setError(err.message || "Failed to fetch templates");
    }
  };

  const handleAddTemplate = async (e: React.FormEvent) => {
    e.preventDefault();
    setTemplateLoading(true);
    try {
      let mainImageResult = { key: "", url: "" };
      const galleryResults = [];

      for (const img of templateImages) {
        let result = { key: img.key || "", url: img.url };
        if (img.file) {
          result = await handleFileUpload(img.file);
        }

        if (img.isMain) {
          mainImageResult = result;
        } else {
          galleryResults.push(result);
        }
      }

      // If no main image selected but images exist, take the first one?
      // Logic above ensures one isMain if list not empty.

      const featuresArray = templateForm.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean);

      await addTemplate({
        ...templateForm,
        features: featuresArray,
        mainImage: mainImageResult.url ? mainImageResult : undefined,
        gallery: galleryResults,
      });

      setShowTemplateModal(false);
      setTemplateForm({
        title: "",
        slug: "",
        description: "",
        price: 0,
        visitLink: "",
        category: "app",
        features: "",
        published: true,
      });
      setTemplateImages([]);
      fetchTemplates();
    } catch (err: any) {
      console.error("Failed to add template", err);
      setError(err.message || "Failed to add template");
    } finally {
      setTemplateLoading(false);
    }
  };

  const handleEditTemplate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTemplateId) return;
    setEditTemplateLoading(true);
    try {
      let mainImageResult = { key: "", url: "" };
      const galleryResults = [];

      for (const img of templateImages) {
        let result = { key: img.key || "", url: img.url };
        if (img.file) {
          result = await handleFileUpload(img.file);
        }

        if (img.isMain) {
          mainImageResult = result;
        } else {
          galleryResults.push(result);
        }
      }

      const featuresArray = editTemplateForm.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean);

      await editTemplate(editTemplateId, {
        ...editTemplateForm,
        features: featuresArray,
        mainImage: mainImageResult.url ? mainImageResult : undefined,
        gallery: galleryResults,
      });

      setShowEditTemplateModal(false);
      setEditTemplateId(null);
      setTemplateImages([]);
      fetchTemplates();
    } catch (err) {
      console.error("Failed to edit template", err);
      setError("Failed to edit template");
    } finally {
      setEditTemplateLoading(false);
    }
  };

  const handleDeleteTemplate = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this template?")) return;
    try {
      await deleteTemplate(id);
      fetchTemplates();
    } catch (err) {
      console.error("Failed to delete template", err);
      setError("Failed to delete template");
    }
  };

  useEffect(() => {
    if (activeTab === "services") {
      fetchServices();
    } else if (activeTab === "projects") {
      fetchProjects();
    } else if (activeTab === "articles") {
      fetchArticles();
    } else if (activeTab === "templates") {
      fetchTemplates();
    }
  }, [activeTab]);

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
              {/* <button
                className={`text-left px-5 py-3 rounded-xl transition font-semibold text-lg ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-xl"
                    : "text-[#a5b4fc] hover:bg-white/10"
                }`}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button> */}
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
              {/* 
              <button
                className={`text-left px-5 py-3 rounded-xl transition font-semibold text-lg ${
                  activeTab === "templates"
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-xl"
                    : "text-[#a5b4fc] hover:bg-white/10"
                }`}
                onClick={() => setActiveTab("templates")}
              >
                Templates
              </button>
              */}
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
            {/* {activeTab === "projects" && (
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
                {/* Modal for creating project * /}
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
                {/* Edit Project Modal * /}
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
            )} */}
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
            {activeTab === "templates" && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-lg">
                    Templates
                  </h2>
                  <button
                    className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition text-lg"
                    onClick={() => setShowTemplateModal(true)}
                  >
                    + Create Template
                  </button>
                </div>
                {/* Modal for creating template */}
                {showTemplateModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-black rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10 max-h-[85vh] overflow-y-auto">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                        onClick={() => setShowTemplateModal(false)}
                      >
                        &times;
                      </button>
                      <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
                        Create Template
                      </h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleAddTemplate(e);
                        }}
                        className="flex flex-col gap-4"
                      >
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Title"
                          required
                          value={templateForm.title}
                          onChange={(e) =>
                            setTemplateForm((f) => ({
                              ...f,
                              title: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Slug"
                          required
                          value={templateForm.slug}
                          onChange={(e) =>
                            setTemplateForm((f) => ({
                              ...f,
                              slug: e.target.value,
                            }))
                          }
                        />
                        <textarea
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Description"
                          required
                          value={templateForm.description}
                          onChange={(e) =>
                            setTemplateForm((f) => ({
                              ...f,
                              description: e.target.value,
                            }))
                          }
                        />
                        <input
                          type="number"
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Price"
                          required
                          value={templateForm.price}
                          onChange={(e) =>
                            setTemplateForm((f) => ({
                              ...f,
                              price: Number(e.target.value),
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Visit Link (e.g., https://example.com)"
                          value={templateForm.visitLink}
                          onChange={(e) =>
                            setTemplateForm((f) => ({
                              ...f,
                              visitLink: e.target.value,
                            }))
                          }
                        />
                        <select
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white"
                          value={templateForm.category}
                          onChange={(e) =>
                            setTemplateForm((f) => ({
                              ...f,
                              category: e.target.value,
                            }))
                          }
                        >
                          <option value="3d">3D</option>
                          <option value="2d">2D</option>
                          <option value="app">App</option>
                          <option value="chatbot">Chatbot</option>
                          <option value="other">Other</option>
                        </select>
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Features (comma separated)"
                          value={templateForm.features}
                          onChange={(e) =>
                            setTemplateForm((f) => ({
                              ...f,
                              features: e.target.value,
                            }))
                          }
                        />
                        <div>
                          <label className="block text-white mb-2">
                            Images (Drag & Drop or Click)
                          </label>
                          <div
                            className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-[#7c3aed] transition"
                            onDrop={handleImageDrop}
                            onDragOver={(e) => e.preventDefault()}
                            onClick={() => document.getElementById("template-images-input")?.click()}
                          >
                            <p className="text-gray-400">Drag images here or click to upload</p>
                            <input
                              id="template-images-input"
                              type="file"
                              multiple
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageSelect}
                            />
                          </div>
                          
                          {/* Image Preview Grid */}
                          {templateImages.length > 0 && (
                            <div className="grid grid-cols-3 gap-4 mt-4">
                              {templateImages.map((img, index) => (
                                <div key={index} className="relative group border border-white/10 rounded-lg overflow-hidden">
                                  <img
                                    src={img.url}
                                    alt={`Preview ${index}`}
                                    className="w-full h-24 object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => setMainImage(index)}
                                      className={`px-2 py-1 text-xs rounded ${img.isMain ? 'bg-green-500 text-white' : 'bg-white/20 text-white hover:bg-white/40'}`}
                                    >
                                      {img.isMain ? 'Main Image' : 'Set as Main'}
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => removeImage(index)}
                                      className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                  {img.isMain && (
                                    <div className="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1 rounded">
                                      MAIN
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <label className="flex items-center gap-2 text-white">
                          <input
                            type="checkbox"
                            checked={templateForm.published}
                            onChange={(e) =>
                              setTemplateForm((f) => ({
                                ...f,
                                published: e.target.checked,
                              }))
                            }
                          />
                          Published
                        </label>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                          disabled={templateLoading}
                        >
                          {templateLoading ? "Creating..." : "Create Template"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                {/* Edit Template Modal */}
                {showEditTemplateModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-black rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10 max-h-[85vh] overflow-y-auto">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                        onClick={() => setShowEditTemplateModal(false)}
                      >
                        &times;
                      </button>
                      <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
                        Edit Template
                      </h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleEditTemplate(e);
                        }}
                        className="flex flex-col gap-4"
                      >
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Title"
                          required
                          value={editTemplateForm.title}
                          onChange={(e) =>
                            setEditTemplateForm((f) => ({
                              ...f,
                              title: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Slug"
                          required
                          value={editTemplateForm.slug}
                          onChange={(e) =>
                            setEditTemplateForm((f) => ({
                              ...f,
                              slug: e.target.value,
                            }))
                          }
                        />
                        <textarea
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Description"
                          required
                          value={editTemplateForm.description}
                          onChange={(e) =>
                            setEditTemplateForm((f) => ({
                              ...f,
                              description: e.target.value,
                            }))
                          }
                        />
                        <input
                          type="number"
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Price"
                          required
                          value={editTemplateForm.price}
                          onChange={(e) =>
                            setEditTemplateForm((f) => ({
                              ...f,
                              price: Number(e.target.value),
                            }))
                          }
                        />
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Visit Link (e.g., https://example.com)"
                          value={editTemplateForm.visitLink}
                          onChange={(e) =>
                            setEditTemplateForm((f) => ({
                              ...f,
                              visitLink: e.target.value,
                            }))
                          }
                        />
                        <select
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white"
                          value={editTemplateForm.category}
                          onChange={(e) =>
                            setEditTemplateForm((f) => ({
                              ...f,
                              category: e.target.value,
                            }))
                          }
                        >
                          <option value="3d">3D</option>
                          <option value="2d">2D</option>
                          <option value="app">App</option>
                          <option value="chatbot">Chatbot</option>
                          <option value="other">Other</option>
                        </select>
                        <input
                          className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                          placeholder="Features (comma separated)"
                          value={editTemplateForm.features}
                          onChange={(e) =>
                            setEditTemplateForm((f) => ({
                              ...f,
                              features: e.target.value,
                            }))
                          }
                        />
                        <div>
                          <label className="block text-white mb-2">
                            Images (Drag & Drop or Click)
                          </label>
                          <div
                            className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-[#7c3aed] transition"
                            onDrop={handleImageDrop}
                            onDragOver={(e) => e.preventDefault()}
                            onClick={() => document.getElementById("edit-template-images-input")?.click()}
                          >
                            <p className="text-gray-400">Drag images here or click to upload</p>
                            <input
                              id="edit-template-images-input"
                              type="file"
                              multiple
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageSelect}
                            />
                          </div>
                          
                          {/* Image Preview Grid */}
                          {templateImages.length > 0 && (
                            <div className="grid grid-cols-3 gap-4 mt-4">
                              {templateImages.map((img, index) => (
                                <div key={index} className="relative group border border-white/10 rounded-lg overflow-hidden">
                                  <img
                                    src={img.url}
                                    alt={`Preview ${index}`}
                                    className="w-full h-24 object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => setMainImage(index)}
                                      className={`px-2 py-1 text-xs rounded ${img.isMain ? 'bg-green-500 text-white' : 'bg-white/20 text-white hover:bg-white/40'}`}
                                    >
                                      {img.isMain ? 'Main Image' : 'Set as Main'}
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => removeImage(index)}
                                      className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                  {img.isMain && (
                                    <div className="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1 rounded">
                                      MAIN
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <label className="flex items-center gap-2 text-white">
                          <input
                            type="checkbox"
                            checked={editTemplateForm.published}
                            onChange={(e) =>
                              setEditTemplateForm((f) => ({
                                ...f,
                                published: e.target.checked,
                              }))
                            }
                          />
                          Published
                        </label>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                          disabled={editTemplateLoading}
                        >
                          {editTemplateLoading ? "Saving..." : "Save Changes"}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                {/* Filter Buttons */}
                <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                  {["all", "3d", "2d", "app", "chatbot"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setTemplateFilter(filter)}
                      className={`px-4 py-2 rounded-lg font-semibold transition capitalize ${
                        templateFilter === filter
                          ? "bg-[#7c3aed] text-white"
                          : "bg-white/10 text-gray-400 hover:bg-white/20"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

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
                        {templates
                          .filter((t) => templateFilter === "all" || t.category === templateFilter)
                          .map((template: any) => (
                          <tr
                            key={template._id}
                            className="rounded-xl bg-black/60 hover:bg-white/10 transition shadow-xl"
                          >
                            <td className="p-4 rounded-l-xl font-semibold text-white/90 text-center">
                              {template.title}
                            </td>
                            <td className="p-4 text-white/80 text-center">
                              {template.description}
                            </td>
                            <td className="p-4 flex gap-2 rounded-r-xl justify-center">
                              <button
                                className="px-4 py-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
                                onClick={() => {
                                  setEditTemplateId(template._id);
                                  setEditTemplateForm({
                                    title: template.title,
                                    slug: template.slug,
                                    description: template.description,
                                    price: template.price,
                                    visitLink: template.visitLink || "",
                                    category: template.category,
                                    features: template.features.join(", "),
                                    published: template.published,
                                  });
                                  
                                  // Populate images
                                  const images: ImageFile[] = [];
                                  if (template.mainImage && template.mainImage.url) {
                                    images.push({
                                      url: template.mainImage.url,
                                      key: template.mainImage.key,
                                      isMain: true
                                    });
                                  }
                                  if (template.gallery && template.gallery.length > 0) {
                                    template.gallery.forEach((g: any) => {
                                      images.push({
                                        url: g.url,
                                        key: g.key,
                                        isMain: false
                                      });
                                    });
                                  }
                                  setTemplateImages(images);
                                  
                                  setShowEditTemplateModal(true);
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="px-4 py-2 bg-red-500/80 text-white rounded-lg hover:bg-red-600 transition font-semibold"
                                onClick={() => handleDeleteTemplate(template._id)}
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
