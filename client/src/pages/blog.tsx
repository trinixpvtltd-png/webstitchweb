import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
// import StarVideoBackground from "@/components/StarVideoBackground";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  User,
  ChevronRight,
  Tag,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { getArticles } from "../lib/Api";
import Blog3D from "@/components/Blog3D";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Separate featured and latest articles
  const featuredArticles = articles.filter((article) => article.isFeatured);
  const latestArticles = articles.filter((article) => !article.isFeatured);

  // All unique categories and tags for filtering
  const allCategories = [
    "All",
    ...new Set(articles.map((article) => article.tag)),
  ];
  const allTags = [
    "All",
    ...new Set(articles.flatMap((article) => [article.tag])),
  ];

  // Filter articles based on selected tag
  const filteredArticles =
    selectedTag === "All"
      ? latestArticles
      : latestArticles.filter((article) => article.tag === selectedTag);

  return (
    <div className="min-h-screen relative text-[#e3e8f0] overflow-x-hidden">
      <Blog3D />
      {/* <StarVideoBackground /> */}
      <Navigation />
      <main className="pt-24 pb-16 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[40vh] px-4 mb-12">
          <Reveal>
            <div className="relative max-w-3xl w-full mx-auto px-4 py-8 flex flex-col items-center text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-2xl mb-4">
                Tech Insights & Trends
              </h1>
              <p className="mt-2 text-lg text-white/85">
                Stay ahead of the curve with expert insights on web development,
                digital marketing, and emerging technologies from the WebStitch
                team.
              </p>
              <div className="relative max-w-lg mx-auto mt-8 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#c7d2fe]" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 bg-transparent border border-white/20 focus:border-[#7c3aed] text-white placeholder:text-white/60"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Categories Tabs */}
        <section className="py-8 border-b border-[#e3e8f0] dark:border-[#353a50]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 overflow-x-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-transparent w-full justify-start">
                {allCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category.toLowerCase()}
                    className="data-[state=active]:bg-[#7c3aed] data-[state=active]:text-white text-[#3f51b5] border border-[#c7d2fe] rounded-full px-4 py-1 mx-1 dark:text-[#a5b4fc] dark:border-[#6366f1]"
                    onClick={() => setSelectedTag(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {loading && (
              <div className="text-center py-8">Loading articles...</div>
            )}
            {error && (
              <div className="text-center py-8 text-red-500">{error}</div>
            )}
            {!loading && !error && (
              <>
                <Reveal>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#3f51b5] dark:text-[#a5b4fc]">
                    Featured Articles
                  </h2>
                </Reveal>
                {featuredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featuredArticles.map((article, index) => (
                      <Reveal key={article._id} delay={index * 100}>
                        <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                          <div className="relative h-60 overflow-hidden">
                            <Badge className="absolute top-4 left-4 z-10 bg-[#ede9fe] text-[#7c3aed] font-bold dark:bg-[#353a50] dark:text-[#a78bfa]">
                              {article.tag}
                            </Badge>
                            <img
                              src={
                                article.image ||
                                `https://placehold.co/800x400/ede9fe/7c3aed?text=${article.tag}`
                              }
                              alt={article.heading}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardContent className="flex-grow pt-6">
                            <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[#1a237e] dark:text-white">
                              {article.heading}
                            </h3>
                            <p className="mb-4 line-clamp-3 text-[#3f51b5] dark:text-[#a5b4fc]">
                              {article.description}
                            </p>
                            <div className="flex items-center gap-3 text-sm text-[#5c6bc0] dark:text-[#a5b4fc]">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {new Date(article.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    }
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>5 min read</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="border-t border-[#e3e8f0] pt-4">
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#ede9fe] overflow-hidden">
                                  <img
                                    src={`https://placehold.co/100/ede9fe/7c3aed?text=${article.author.charAt(
                                      0
                                    )}`}
                                    alt={article.author}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-[#1a237e] dark:text-white">
                                    {article.author}
                                  </p>
                                  <p className="text-xs text-[#5c6bc0] dark:text-[#a5b4fc]">
                                    {article.authorPosition}
                                  </p>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-1 text-[#7c3aed] dark:text-[#a78bfa]"
                              >
                                Read <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      </Reveal>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-[#3f51b5] dark:text-[#a5b4fc]">
                    No featured articles yet.
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Latest Articles */}
        {/*
        <section className="py-16 bg-transparent">
          <div
            className="max-w-7xl mx-auto px-6 lg:px-12 bg-[#23263a]/80 rounded-3xl p-8"
            style={{ backdropFilter: "blur(2px)" }}
          >
            {!loading && !error && (
              <>
                <div className="mb-8">
                  <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#3f51b5] dark:text-[#a5b4fc]">
                      Latest Articles
                    </h2>
                  </Reveal>
                </div>
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                      <Reveal key={article._id} delay={index * 75}>
                        <Card className="bg-white/10 backdrop-blur-md rounded-2xl border border-[#e3e8f0]/30 shadow hover:shadow-xl transition-all overflow-hidden h-full flex flex-col dark:bg-[#23263a]/30 dark:border-[#353a50]/30 dark:shadow-2xl">
                          <div className="relative h-48 overflow-hidden">
                            <Badge className="absolute top-3 left-3 z-10 bg-[#ede9fe] text-[#7c3aed] font-bold dark:bg-[#353a50] dark:text-[#a78bfa]">
                              {article.tag}
                            </Badge>
                            <img
                              src={
                                article.image ||
                                `https://placehold.co/600x300/ede9fe/7c3aed?text=${article.tag}`
                              }
                              alt={article.heading}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardContent className="flex-grow pt-5">
                            <div className="flex items-center gap-3 text-xs text-[#5c6bc0] mb-2 dark:text-[#a5b4fc]">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>
                                  {new Date(article.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    }
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>5 min read</span>
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-[#1a237e] dark:text-white">
                              {article.heading}
                            </h3>
                            <p className="text-sm mb-3 line-clamp-2 text-[#3f51b5] dark:text-[#a5b4fc]">
                              {article.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge className="text-xs border border-[#c7d2fe] bg-[#ede9fe] text-[#7c3aed] dark:bg-[#353a50] dark:text-[#a78bfa] dark:border-[#6366f1]">
                                {article.tag}
                              </Badge>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs gap-1 ml-auto group text-[#7c3aed] dark:text-[#a78bfa]"
                            >
                              Read article
                              <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </Reveal>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="text-center py-8 text-[#3f51b5] dark:text-[#a5b4fc]">
                      No articles found for this category.
                    </div>
                  </>
                )}
                {filteredArticles.length > 6 && (
                  <div className="mt-12 text-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-[#7c3aed] text-[#7c3aed]"
                    >
                      Load more articles
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
        */}
        
        {/* Newsletter Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal>
              <div className="p-0 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Stay Updated with Tech Insights
                </h3>
                <p className="text-white/80 max-w-2xl mx-auto mt-4 mb-6">
                  Subscribe to our newsletter and get the latest articles,
                  updates, and relevant insights delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white border border-[#c7d2fe] text-[#1a237e] dark:bg-[#23263a] dark:border-[#353a50] dark:text-white"
                  />
                  <Button className="whitespace-nowrap bg-[#7c3aed] text-white hover:bg-[#6366f1] dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]">
                    Subscribe
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
