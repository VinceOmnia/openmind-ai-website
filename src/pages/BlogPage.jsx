import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Brain,
  Target
} from 'lucide-react'

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Sample blog posts - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to AI Automation in 2025: Transform Your Business Operations",
      excerpt: "Discover how leading companies are using AI automation to reduce costs by 40-60% and achieve 300-500% ROI. Learn the proven 4-phase methodology that delivers results in weeks, not months.",
      category: "AI Automation",
      author: "Chris",
      date: "2024-12-15",
      readTime: "8 min read",
      image: "/api/placeholder/600/300",
      slug: "complete-guide-ai-automation-2025",
      featured: true,
      tags: ["AI Automation", "Business Transformation", "ROI", "Process Optimization"]
    },
    {
      id: 2,
      title: "AEO vs SEO: Why AI-Enhanced Optimization is the Future of Digital Marketing",
      excerpt: "With 25% of organic traffic moving to AI platforms by 2026, traditional SEO isn't enough. Learn how AEO ensures your brand gets cited by ChatGPT, Perplexity, and Google AI Overview.",
      category: "AEO",
      author: "Chris",
      date: "2024-12-12",
      readTime: "6 min read",
      image: "/api/placeholder/600/300",
      slug: "aeo-vs-seo-future-digital-marketing",
      featured: true,
      tags: ["AEO", "SEO", "Digital Marketing", "AI Search", "ChatGPT"]
    },
    {
      id: 3,
      title: "5 AI Training Strategies That Actually Work: Building AI-Ready Teams",
      excerpt: "Most AI training programs fail because they focus on theory instead of practical application. Here's how to build AI competency in your team with hands-on, results-driven training.",
      category: "AI Training",
      author: "Chris",
      date: "2024-12-10",
      readTime: "7 min read",
      image: "/api/placeholder/600/300",
      slug: "ai-training-strategies-that-work",
      featured: false,
      tags: ["AI Training", "Team Development", "Skills Gap", "Workforce"]
    },
    {
      id: 4,
      title: "ROI Calculator: How Much Money Are You Losing to Manual Processes?",
      excerpt: "Knowledge workers spend 41% of their time on repetitive tasks. For a 10-person team, that's £300,000 in wasted productivity annually. Calculate your potential savings with AI automation.",
      category: "Business Strategy",
      author: "Chris",
      date: "2024-12-08",
      readTime: "5 min read",
      image: "/api/placeholder/600/300",
      slug: "roi-calculator-manual-processes-cost",
      featured: false,
      tags: ["ROI", "Productivity", "Cost Reduction", "Business Analysis"]
    },
    {
      id: 5,
      title: "ChatGPT for Business: 10 Practical Use Cases That Drive Real Results",
      excerpt: "Beyond basic chatbots, discover how businesses are using ChatGPT for customer service automation, content creation, data analysis, and process optimization to achieve measurable ROI.",
      category: "AI Automation",
      author: "Chris",
      date: "2024-12-05",
      readTime: "9 min read",
      image: "/api/placeholder/600/300",
      slug: "chatgpt-business-use-cases-real-results",
      featured: false,
      tags: ["ChatGPT", "Business Applications", "Use Cases", "Implementation"]
    },
    {
      id: 6,
      title: "The AEO Playbook: Get Your Brand Mentioned by AI Search Engines",
      excerpt: "Step-by-step guide to optimizing your content for AI platforms. Learn the specific techniques that get your brand cited by ChatGPT, Claude, and other AI assistants.",
      category: "AEO",
      author: "Chris",
      date: "2024-12-03",
      readTime: "10 min read",
      image: "/api/placeholder/600/300",
      slug: "aeo-playbook-brand-mentioned-ai-search",
      featured: false,
      tags: ["AEO", "Content Strategy", "AI Citations", "Brand Visibility"]
    },
    {
      id: 8,
      title: "Claude AI Training for UK SMEs: Why 90% Fail Without Structured Implementation",
      excerpt: "Between 2024 and 2025, UK SME AI adoption surged 14 percentage points. Yet nine out of ten businesses adopting AI tools fail to translate those investments into significant productivity gains.",
      category: "AI Training",
      author: "Chris",
      date: "2026-04-23",
      readTime: "8 min read",
      image: "/claude-ai-training-smes.png",
      slug: "claude-ai-training-uk-smes-structured-implementation",
      featured: true,
      tags: ["Claude AI", "AI Training", "UK SMEs", "Productivity", "Implementation"]
    },
    {
      id: 7,
      title: "Shadow AI in UK SMEs: 71% of Staff Already Use Unapproved Tools",
      excerpt: "71% of UK employees use unauthorised AI tools at work, creating 'workslop'—polished but inaccurate content. Discover how to detect and manage shadow AI in your SME before it costs you clients, reputation, or a GDPR fine.",
      category: "AI Governance",
      author: "Chris",
      date: "2026-02-24",
      readTime: "12 min read",
      image: "/images/shadow-ai-office.png",
      slug: "shadow-ai-in-uk-smes",
      featured: true,
      tags: ["Shadow AI", "AI Governance", "UK SMEs", "GDPR", "Workslop"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Posts', icon: <Brain className="h-4 w-4" /> },
    { id: 'AI Automation', name: 'AI Automation', icon: <Zap className="h-4 w-4" /> },
    { id: 'AEO', name: 'AEO', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'AI Training', name: 'AI Training', icon: <Users className="h-4 w-4" /> },
    { id: 'Business Strategy', name: 'Business Strategy', icon: <Target className="h-4 w-4" /> },
    { id: 'AI Governance', name: 'AI Governance', icon: <TrendingUp className="h-4 w-4" /> }
  ]

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category)
    return cat ? cat.icon : <Brain className="h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              AI Insights & Strategy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert insights on AI automation, AEO optimization, and business transformation. 
              Stay ahead of the AI revolution with actionable strategies and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-300 focus:border-black"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <TrendingUp className="h-6 w-6 text-black mr-3" />
              <h2 className="text-3xl font-bold text-black">Featured Articles</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="card-hover border-gray-200 overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    {post.image && !post.image.includes('/api/placeholder') ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                    <Badge className="absolute top-4 left-4 bg-black text-white">
                      Featured
                    </Badge>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-black">
                        {getCategoryIcon(post.category)}
                        <span className="ml-1">{post.category}</span>
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-black hover:text-gray-700 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                      <Link to={`/blog/${post.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">
            {selectedCategory === 'all' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>

          {regularPosts.length === 0 ? (
            <div className="text-center py-12">
              <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="card-hover border-gray-200 bg-white">
                  <div className="aspect-video bg-gray-100 relative">
                    <Badge className="absolute top-4 left-4 bg-white/90 text-black">
                      {getCategoryIcon(post.category)}
                      <span className="ml-1">{post.category}</span>
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-black hover:text-gray-700 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full border-gray-300 text-gray-600 hover:bg-gray-50">
                      <Link to={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Never Miss an AI Insight
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest AI strategies, case studies, and industry insights delivered to your inbox weekly.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link to="/#newsletter">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
