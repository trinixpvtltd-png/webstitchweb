import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Calendar, Clock, Search, User, ChevronRight, Tag } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState('All');

  // Featured articles
  const featuredArticles = [
    {
      id: 1,
      title: 'Why Progressive Web Apps Are the Future of Mobile Engagement',
      excerpt: "Discover how PWAs combine the best features of websites and native applications. Learn how today's interactive web apps are fundamentally shifting capabilities and engagement.",
      image: '/blog-pwa.jpg',
      author: 'Priya Sharma',
      authorRole: 'Frontend Developer',
      authorAvatar: '/avatars/priya.jpg',
      date: 'October 12, 2025',
      readTime: '5 min read',
      category: 'Development',
      tags: ['Web', 'PWA', 'Mobile']
    },
    {
      id: 2,
      title: 'A Guide to SEO in 2025: Trends and Best Practices',
      excerpt: 'Stay ahead of the curve with the latest SEO strategies. Learn how search engines have evolved and how to adapt your content strategy accordingly.',
      image: '/blog-seo.jpg',
      author: 'Vikram Singh',
      authorRole: 'SEO Specialist',
      authorAvatar: '/avatars/vikram.jpg',
      date: 'October 5, 2025',
      readTime: '7 min read',
      category: 'Marketing',
      tags: ['SEO', 'Digital Marketing', 'Content Strategy']
    }
  ];

  // Latest articles
  const latestArticles = [
    {
      id: 3,
      title: 'Why Progressive Web Apps Are the Future of Mobile Engagement',
      excerpt: 'Discover how PWAs combine the best features of websites and native applications.',
      image: '/blog-pwa.jpg',
      date: 'October 12, 2025',
      readTime: '5 min read',
      category: 'Development',
      tags: ['Web', 'PWA', 'Mobile']
    },
    {
      id: 4,
      title: 'A Guide to SEO in 2025: Trends and Best Practices',
      excerpt: 'Stay ahead of the curve with the latest SEO strategies. Learn how search engines have evolved.',
      image: '/blog-seo.jpg',
      date: 'October 5, 2025',
      readTime: '7 min read',
      category: 'Marketing',
      tags: ['SEO', 'Digital Marketing']
    },
    {
      id: 5,
      title: 'How DevOps Is Revolutionizing Software Delivery',
      excerpt: 'Explore how continuous integration and deployment have transformed software development practices.',
      image: '/blog-devops.jpg',
      date: 'September 28, 2025',
      readTime: '6 min read',
      category: 'DevOps',
      tags: ['DevOps', 'CI/CD', 'Automation']
    },
    {
      id: 6,
      title: 'React Performance Optimization: Advanced Techniques',
      excerpt: 'Unlock the secrets to blazing-fast React applications with these performance optimization strategies.',
      image: '/blog-react.jpg',
      date: 'September 21, 2025',
      readTime: '8 min read',
      category: 'Development',
      tags: ['React', 'JavaScript', 'Performance']
    },
    {
      id: 7,
      title: 'AI Automation: Transforming Business Operations in 2025',
      excerpt: 'Discover how AI-powered automation is reshaping workflows, improving efficiency, and creating competitive advantages.',
      image: '/blog-ai.jpg',
      date: 'September 14, 2025',
      readTime: '6 min read',
      category: 'AI & Automation',
      tags: ['AI', 'Automation', 'Business']
    },
    {
      id: 8,
      title: 'Mobile App Development Trends Shaping 2025',
      excerpt: 'Learn the dominant trends that are driving mobile app development in the current technological landscape.',
      image: '/blog-mobile.jpg',
      date: 'September 7, 2025',
      readTime: '5 min read',
      category: 'Mobile Development',
      tags: ['Mobile', 'App Development', 'Trends']
    },
    {
      id: 9,
      title: 'Web3 and Blockchain: The Future of Decentralized Applications',
      excerpt: 'Explore how Web3 technologies are enabling new possibilities for decentralized applications and digital ownership.',
      image: '/blog-web3.jpg',
      date: 'August 31, 2025',
      readTime: '9 min read',
      category: 'Blockchain',
      tags: ['Web3', 'Blockchain', 'Decentralized']
    },
    {
      id: 10,
      title: 'Cybersecurity Best Practices for Modern Web Applications',
      excerpt: 'Essential security practices every web developer should know to protect applications against emerging cyber threats.',
      image: '/blog-security.jpg',
      date: 'August 24, 2025',
      readTime: '6 min read',
      category: 'Security',
      tags: ['Security', 'Cybersecurity', 'Web']
    },
    {
      id: 11,
      title: 'Building Cloud-Native Applications: Architecture and Best Practices',
      excerpt: 'Learn how to design and build cloud-native applications that leverage microservice architectures and containers.',
      image: '/blog-cloud.jpg',
      date: 'August 17, 2025',
      readTime: '7 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Architecture', 'Microservices']
    }
  ];

  // All unique categories and tags for filtering
  const allCategories = ['All', ...new Set([
    ...featuredArticles.map(article => article.category),
    ...latestArticles.map(article => article.category)
  ])];

  const allTags = ['All', ...new Set([
    ...featuredArticles.flatMap(article => article.tags),
    ...latestArticles.flatMap(article => article.tags)
  ])];

  // Filter articles based on selected tag
  const filteredArticles = selectedTag === 'All' 
    ? latestArticles 
    : latestArticles.filter(article => article.tags.includes(selectedTag) || article.category === selectedTag);

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#f6f8fb] to-[#e9eefa] text-[#1a237e] dark:bg-gradient-to-br dark:from-[#181a20] dark:to-[#23263a] dark:text-[#e3e8f0]">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
  <section className="bg-gradient-to-b from-[#ede9fe] to-[#e9eefa] text-center py-16 md:py-20 dark:bg-gradient-to-b dark:from-[#23263a] dark:to-[#181a20]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1a237e] drop-shadow-lg dark:text-white">Tech Insights & Trends</h1>
            <p className="text-lg text-[#5c6bc0] max-w-3xl mx-auto dark:text-[#a5b4fc]">
              Stay ahead of the curve with expert insights on web development, digital marketing, and emerging technologies from the WebStitch team.
            </p>
            {/* Search bar */}
            <div className="relative max-w-lg mx-auto mt-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7c3aed]" />
              <Input 
                type="search" 
                placeholder="Search articles..." 
                className="pl-10 bg-white border border-[#c7d2fe] focus:border-[#7c3aed] text-[#1a237e] dark:bg-[#23263a] dark:border-[#353a50] dark:text-white"
              />
            </div>
          </div>
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
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#3f51b5] dark:text-[#a5b4fc]">Featured Articles</h2>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <Reveal key={article.id} delay={index * 100}>
                  <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                    <div className="relative h-60 overflow-hidden">
                      <Badge className="absolute top-4 left-4 z-10 bg-[#ede9fe] text-[#7c3aed] font-bold dark:bg-[#353a50] dark:text-[#a78bfa]">
                        {article.category}
                      </Badge>
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        onError={(e) => {
                          // Fallback image if the specified one fails to load
                          e.currentTarget.src = `https://placehold.co/800x400/ede9fe/7c3aed?text=${article.category}`;
                        }}
                      />
                    </div>
                    <CardContent className="flex-grow pt-6">
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[#1a237e] dark:text-white">{article.title}</h3>
                      <p className="mb-4 line-clamp-3 text-[#3f51b5] dark:text-[#a5b4fc]">{article.excerpt}</p>
                      <div className="flex items-center gap-3 text-sm text-[#5c6bc0] dark:text-[#a5b4fc]">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-[#e3e8f0] pt-4">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#ede9fe] overflow-hidden">
                            <img 
                              src={article.authorAvatar} 
                              alt={article.author}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback for avatar
                                e.currentTarget.src = `https://placehold.co/100/ede9fe/7c3aed?text=${article.author.charAt(0)}`;
                              }}
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#1a237e] dark:text-white">{article.author}</p>
                            <p className="text-xs text-[#5c6bc0] dark:text-[#a5b4fc]">{article.authorRole}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1 text-[#7c3aed] dark:text-[#a78bfa]">
                          Read <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
  <section className="py-16 bg-[#ede9fe]/40 dark:bg-[#23263a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-8">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3f51b5] dark:text-[#a5b4fc]">Latest Articles</h2>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <Reveal key={article.id} delay={index * 75}>
                  <Card className="bg-white rounded-2xl border border-[#e3e8f0] shadow hover:shadow-xl transition-all overflow-hidden h-full flex flex-col dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                    <div className="relative h-48 overflow-hidden">
                      <Badge className="absolute top-3 left-3 z-10 bg-[#ede9fe] text-[#7c3aed] font-bold dark:bg-[#353a50] dark:text-[#a78bfa]">
                        {article.category}
                      </Badge>
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        onError={(e) => {
                          // Fallback image
                          e.currentTarget.src = `https://placehold.co/600x300/ede9fe/7c3aed?text=${article.category}`;
                        }}
                      />
                    </div>
                    <CardContent className="flex-grow pt-5">
                      <div className="flex items-center gap-3 text-xs text-[#5c6bc0] mb-2 dark:text-[#a5b4fc]">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-[#1a237e] dark:text-white">{article.title}</h3>
                      <p className="text-sm mb-3 line-clamp-2 text-[#3f51b5] dark:text-[#a5b4fc]">{article.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.map(tag => (
                          <Badge 
                            key={tag} 
                            className="text-xs border border-[#c7d2fe] bg-[#ede9fe] text-[#7c3aed] dark:bg-[#353a50] dark:text-[#a78bfa] dark:border-[#6366f1]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="ghost" size="sm" className="text-xs gap-1 ml-auto group text-[#7c3aed] dark:text-[#a78bfa]">
                        Read article 
                        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </div>
            {filteredArticles.length > 6 && (
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="border-[#7c3aed] text-[#7c3aed]">Load more articles</Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
  <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal>
              <div className="rounded-2xl bg-white border border-[#e3e8f0] p-8 md:p-10 text-center shadow-lg dark:bg-[#23263a] dark:border-[#353a50] dark:shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a237e] dark:text-white">Stay Updated with Tech Insights</h3>
                <p className="text-[#3f51b5]/80 max-w-2xl mx-auto mt-4 mb-6 dark:text-[#a5b4fc]">
                  Subscribe to our newsletter and get the latest articles, updates, and relevant insights delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white border border-[#c7d2fe] text-[#1a237e] dark:bg-[#23263a] dark:border-[#353a50] dark:text-white"
                  />
                  <Button className="whitespace-nowrap bg-[#7c3aed] text-white hover:bg-[#6366f1] dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#6366f1]">Subscribe</Button>
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