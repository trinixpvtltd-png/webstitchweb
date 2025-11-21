import Navigation from "@/components/Navigation";
// import StarVideoBackground from '@/components/StarVideoBackground';
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Briefcase,
  Smartphone,
  Layout,
  ShoppingCart,
  Brain,
} from "lucide-react";
import { useState, useEffect } from "react";
import { getProjects } from "../lib/Api";
import Anime3D from "@/components/Anime3D";

const stats = [
  {
    icon: <Briefcase className="w-7 h-7" />,
    label: "Projects Delivered",
    value: "150+",
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    label: "Client Satisfaction",
    value: "98%",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    label: "Average Performance",
    value: "96/100",
  },
  {
    icon: <Users className="w-7 h-7" />,
    label: "Industries Served",
    value: "12+",
  },
];

const filters = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "E-commerce",
  "AI Solutions",
];

export default function Portfolio() {
  // State for projects data
  const [projects, setProjects] = useState<any[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState<string | null>(null);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjectsLoading(true);
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error: any) {
        setProjectsError(error.message || "Failed to fetch projects");
      } finally {
        setProjectsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Separate featured and all projects
  const featuredProjects = projects.filter((project) => project.isFeatured);
  const allProjects = projects;
  return (
    <div className="min-h-screen relative text-[#e3e8f0] overflow-x-hidden">
      {/* <StarVideoBackground /> */}
      <Anime3D />
      <Navigation />
      <main className="pt-24 pb-16 flex flex-col items-center px-8 md:px-8 lg:px-16">
        {/* Header */}
        <section className="w-full flex flex-col items-center justify-center min-h-[40vh] px-4 mb-12">
          <div className="relative max-w-3xl w-full mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl px-8 py-16 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-2xl mb-4">
              Our Portfolio
            </h1>
            <p className="mt-2 text-lg text-[#a5b4fc]">
              WebStitch - powered by Trinix Pvt Ltd
            </p>
            <p className="mt-6 text-xl md:text-2xl text-[#e3e8f0] max-w-2xl mx-auto">
              Showcasing our finest work – innovative solutions that drive real
              business results
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-6 mb-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col justify-between h-full bg-[#23263a] rounded-2xl shadow-xl border-none px-8 py-10 text-center dark:bg-[#23263a]"
                style={{ minHeight: "220px" }}
              >
                <div className="flex justify-center mb-6">{stat.icon}</div>
                <div>
                  <div
                    className="text-4xl font-extrabold text-white mb-2"
                    style={{ fontFamily: "inherit" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-lg font-medium text-[#a5b4fc]"
                    style={{ fontFamily: "inherit" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="flex flex-wrap gap-3 justify-center mb-8">
          {filters.map((filter, i) => (
            <Badge
              key={i}
              className={`px-4 py-1 rounded-full text-base font-semibold tracking-wide shadow ${
                filter === "All"
                  ? "bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-lg dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]"
                  : "bg-[#e3e8f0] text-[#3f51b5] border border-[#c7d2fe] dark:bg-[#353a50] dark:text-[#a5b4fc] dark:border-[#6366f1]"
              }`}
            >
              {filter}
            </Badge>
          ))}
        </section>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#3f51b5] dark:text-[#a5b4fc]">
            Featured Projects
          </h2>
          {projectsLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-[#a5b4fc]">Loading projects...</div>
            </div>
          ) : projectsError ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-red-400">Error: {projectsError}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, i) => (
                <div
                  key={project._id || i}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.tags &&
                        project.tags.map((tag: string, j: number) => (
                          <Badge
                            key={j}
                            className={`px-3 py-1 text-xs rounded-full font-bold shadow bg-[#7c3aed] text-white dark:bg-[#a78bfa] dark:text-white`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      {project.isFeatured && (
                        <Badge className="px-3 py-1 text-xs rounded-full font-bold shadow bg-[#c7d2fe] text-[#1a237e] dark:bg-[#6366f1] dark:text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-[#1a237e] drop-shadow dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-[#3f51b5] mb-4 flex-1 dark:text-[#a5b4fc]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      {project.stats &&
                        project.stats.map((stat: any, k: number) => (
                          <div
                            key={k}
                            className="bg-[#e3e8f0] rounded-lg px-3 py-1 text-sm text-[#3f51b5] font-semibold border border-[#c7d2fe] dark:bg-[#353a50] dark:text-[#a5b4fc] dark:border-[#6366f1]"
                          >
                            <span className="font-bold mr-1 text-[#1a237e] dark:text-white">
                              {stat.value}
                            </span>
                            {stat.label}
                          </div>
                        ))}
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-[#3f51b5] mb-2 dark:text-[#a5b4fc]">
                        Tech Stack:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack &&
                          project.techStack.map((tech: string, l: number) => (
                            <Badge
                              key={l}
                              className="bg-light-purple-100 text-purple-800 px-3 py-1 text-xs rounded-full border border-purple-200 font-semibold dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700"
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* All Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#3f51b5] dark:text-[#a5b4fc]">
            All Projects
          </h2>
          {projectsLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-[#a5b4fc]">Loading projects...</div>
            </div>
          ) : projectsError ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-red-400">Error: {projectsError}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, i) => (
                <div
                  key={project._id || i}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col border border-[#e3e8f0] dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.tags &&
                        project.tags.map((tag: string, j: number) => (
                          <Badge
                            key={j}
                            className={`px-3 py-1 text-xs rounded-full font-bold shadow bg-[#7c3aed] text-white dark:bg-[#a78bfa] dark:text-white`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      {project.isFeatured && (
                        <Badge className="px-3 py-1 text-xs rounded-full font-bold shadow bg-[#c7d2fe] text-[#1a237e] dark:bg-[#6366f1] dark:text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-[#1a237e] drop-shadow dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-[#3f51b5] mb-3 flex-1 dark:text-[#a5b4fc]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-3">
                      {project.stats &&
                        project.stats.map((stat: any, k: number) => (
                          <div
                            key={k}
                            className="bg-[#e3e8f0] rounded-lg px-2 py-0.5 text-xs text-[#3f51b5] font-semibold border border-[#c7d2fe] dark:bg-[#353a50] dark:text-[#a5b4fc] dark:border-[#6366f1]"
                          >
                            <span className="font-bold mr-1 text-[#1a237e] dark:text-white">
                              {stat.value}
                            </span>
                            {stat.label}
                          </div>
                        ))}
                    </div>
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-[#3f51b5] mb-2 dark:text-[#a5b4fc]">
                        Tech Stack:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack &&
                          project.techStack.map((tech: string, l: number) => (
                            <Badge
                              key={l}
                              className="bg-purple-100 text-purple-800 px-3 py-1 text-xs rounded-full border border-purple-200 font-semibold dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700"
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-16 px-5 bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] rounded-3xl text-center max-w-5xl mx-auto mb-12 shadow-2xl border border-[#e3e8f0] dark:bg-gradient-to-r dark:from-[#23263a] dark:via-[#353a50] dark:to-[#181a20] dark:border-[#353a50]">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow dark:text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 mb-8 dark:text-[#a5b4fc]">
            Let's create something amazing together. Contact us for a free
            consultation.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#7c3aed] font-bold px-8 py-3 text-lg shadow-lg hover:bg-[#ede9fe] transition dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1] dark:text-white dark:hover:bg-[#7c3aed]/80"
          >
            Start Your Project →
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
