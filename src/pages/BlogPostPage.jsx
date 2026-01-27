import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  Share2,
  Linkedin,
  Twitter,
  Mail,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Brain,
  Target
} from 'lucide-react'

export function BlogPostPage() {
  const { slug } = useParams()

  // Sample blog post data - in a real app, this would be fetched based on the slug
  const blogPost = {
    id: 1,
    title: "The Complete Guide to AI Automation in 2025: Transform Your Business Operations",
    excerpt: "Discover how leading companies are using AI automation to reduce costs by 40-60% and achieve 300-500% ROI. Learn the proven 4-phase methodology that delivers results in weeks, not months.",
    content: `
# The Complete Guide to AI Automation in 2025

The business landscape is transforming at an unprecedented pace, and artificial intelligence is at the forefront of this revolution. Companies that embrace AI automation today are positioning themselves for sustainable competitive advantage, while those who delay risk being left behind.

## The Current State of AI Automation

In 2025, AI automation is no longer a futuristic concept—it's a business imperative. Recent studies show that **knowledge workers spend 41% of their time on repetitive tasks** that could be automated. For a typical 10-person team, this represents over **£300,000 in wasted productivity annually**.

### Key Statistics:
- 67% of businesses report significant ROI from AI automation within 6 months
- Average cost reduction: 40-60%
- Typical ROI: 300-500% within the first year
- Implementation time: 6-8 weeks for most processes

## The 4-Phase AI Automation Methodology

Our proven methodology has helped hundreds of companies successfully implement AI automation. Here's how it works:

### Phase 1: Exploratory Sprint (Week 1-2)
The foundation of successful AI automation lies in identifying the right opportunities. We conduct a comprehensive audit of your current processes to pinpoint where AI can generate the highest impact.

**Key Activities:**
- Process mapping and documentation
- ROI potential assessment
- Technical feasibility analysis
- Stakeholder interviews

### Phase 2: Rapid Prototyping (Week 3-4)
Rather than lengthy development cycles, we create working prototypes that demonstrate tangible value within weeks.

**Deliverables:**
- Functional proof of concept
- Initial performance metrics
- User feedback integration
- Technical architecture plan

### Phase 3: MVP Validation (Week 5-6)
We test and refine the AI solution in real-world conditions, ensuring optimal performance before full deployment.

**Focus Areas:**
- Performance optimization
- Error handling and edge cases
- User training and adoption
- Integration testing

### Phase 4: Full Deployment (Week 7-8)
Complete solution rollout with comprehensive training, documentation, and ongoing support.

**Includes:**
- Production deployment
- Team training sessions
- Documentation and playbooks
- Performance monitoring setup

## Common AI Automation Use Cases

### Customer Service Automation
AI-powered chatbots and virtual assistants can handle 80% of routine customer inquiries, freeing up human agents for complex issues.

**Benefits:**
- 24/7 availability
- Instant response times
- Consistent service quality
- Reduced operational costs

### Document Processing
Automated document analysis, data extraction, and processing can eliminate hours of manual work.

**Applications:**
- Invoice processing
- Contract analysis
- Compliance documentation
- Report generation

### Data Analysis and Reporting
AI can analyze vast datasets and generate insights that would take humans weeks to uncover.

**Capabilities:**
- Predictive analytics
- Automated reporting
- Anomaly detection
- Trend identification

## Implementation Best Practices

### Start Small, Scale Fast
Begin with a single, high-impact process rather than attempting organization-wide transformation immediately.

### Focus on ROI
Every AI automation project should have clear, measurable success criteria and ROI targets.

### Invest in Training
Your team's AI literacy is crucial for long-term success. Comprehensive training ensures smooth adoption and ongoing optimization.

### Plan for Change Management
Successful AI automation requires cultural adaptation. Prepare your team for new workflows and responsibilities.

## Measuring Success

### Key Performance Indicators
- **Time Savings**: Hours saved per week/month
- **Cost Reduction**: Direct and indirect cost savings
- **Error Reduction**: Decrease in manual errors
- **Employee Satisfaction**: Improved job satisfaction scores
- **Customer Experience**: Enhanced service quality metrics

### ROI Calculation
Our ROI calculator helps you quantify the potential impact of AI automation on your business. The typical calculation includes:

- **Implementation Costs**: Initial setup and training
- **Ongoing Costs**: Maintenance and optimization
- **Time Savings**: Productivity gains
- **Quality Improvements**: Reduced errors and rework
- **Scalability Benefits**: Ability to handle increased volume

## Common Challenges and Solutions

### Challenge 1: Resistance to Change
**Solution**: Involve employees in the automation process and clearly communicate benefits.

### Challenge 2: Technical Complexity
**Solution**: Partner with experienced AI automation specialists who can handle technical implementation.

### Challenge 3: Integration Issues
**Solution**: Choose solutions that integrate seamlessly with existing systems and workflows.

### Challenge 4: Unrealistic Expectations
**Solution**: Set clear, achievable goals with defined timelines and success metrics.

## The Future of AI Automation

As we move through 2025, AI automation will become increasingly sophisticated and accessible. Key trends include:

- **No-Code AI Platforms**: Making automation accessible to non-technical users
- **Advanced Natural Language Processing**: More sophisticated document and communication handling
- **Predictive Automation**: AI that anticipates needs and takes proactive action
- **Cross-Platform Integration**: Seamless automation across multiple business systems

## Getting Started with AI Automation

The journey to AI automation success begins with a single step. Here's how to get started:

1. **Assess Your Current State**: Identify processes that consume significant time and resources
2. **Define Success Criteria**: Establish clear goals and ROI targets
3. **Choose the Right Partner**: Work with experienced AI automation specialists
4. **Start with a Pilot**: Begin with a single, high-impact process
5. **Scale Gradually**: Expand automation to additional processes based on initial success

## Conclusion

AI automation is not just about technology—it's about transforming how your business operates. Companies that embrace this transformation today will be the leaders of tomorrow.

The question isn't whether you should implement AI automation, but how quickly you can get started. Every day of delay represents lost productivity, increased costs, and missed opportunities.

Ready to transform your business with AI automation? Our free consultation can help you identify the highest-impact opportunities and create a roadmap for success.
    `,
    category: "AI Automation",
    author: "Chris",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    slug: "complete-guide-ai-automation-2025",
    tags: ["AI Automation", "Business Transformation", "ROI", "Process Optimization"],
    metaDescription: "Complete guide to AI automation in 2025. Learn the proven 4-phase methodology that helps businesses achieve 300-500% ROI and 40-60% cost reduction.",
    featured: true
  }

  // Related posts (in a real app, this would be fetched based on category/tags)
  const relatedPosts = [
    {
      id: 2,
      title: "AEO vs SEO: Why AI-Enhanced Optimization is the Future",
      excerpt: "With 25% of organic traffic moving to AI platforms by 2026, traditional SEO isn't enough.",
      category: "AEO",
      slug: "aeo-vs-seo-future-digital-marketing",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "5 AI Training Strategies That Actually Work",
      excerpt: "Build AI competency in your team with hands-on, results-driven training strategies.",
      category: "AI Training",
      slug: "ai-training-strategies-that-work",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "ROI Calculator: Cost of Manual Processes",
      excerpt: "Calculate your potential savings with AI automation and discover hidden costs.",
      category: "Business Strategy",
      slug: "roi-calculator-manual-processes-cost",
      readTime: "5 min read"
    }
  ]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'AI Automation': <Zap className="h-4 w-4" />,
      'AEO': <BarChart3 className="h-4 w-4" />,
      'AI Training': <Users className="h-4 w-4" />,
      'Business Strategy': <Target className="h-4 w-4" />
    }
    return icons[category] || <Brain className="h-4 w-4" />
  }

  const shareUrl = `${window.location.origin}/blog/${blogPost.slug}`
  const shareTitle = blogPost.title

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <div className="mb-6">
            <Badge className="bg-white/10 text-white border-white/20">
              {getCategoryIcon(blogPost.category)}
              <span className="ml-2">{blogPost.category}</span>
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {blogPost.title}
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {blogPost.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-black font-semibold">C</span>
              </div>
              <span>By {blogPost.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(blogPost.date)}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {blogPost.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="aspect-video bg-gray-100 rounded-lg mb-12 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Brain className="h-16 w-16 mx-auto mb-4" />
              <p>Featured Image Placeholder</p>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600">Share this article:</span>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-gray-300 text-gray-600">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {blogPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-black mt-12 mb-6">
                      {paragraph.replace('# ', '')}
                    </h1>
                  )
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-black mt-10 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-black mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                      <h4 className="font-semibold text-black mb-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </h4>
                    </div>
                  )
                } else if (paragraph.includes('- **')) {
                  const items = paragraph.split('\n').filter(item => item.trim())
                  return (
                    <ul key={index} className="space-y-2 ml-6">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ 
                            __html: item.replace(/- \*\*(.*?)\*\*: (.*)/, '<strong>$1</strong>: $2')
                          }} />
                        </li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split('').map((char, i) => 
                        char === '*' ? '' : char
                      ).join('').replace(/<strong>/g, '<strong class="text-black font-semibold">').replace(/<\/strong>/g, '</strong>')}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-black text-white rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Get a free consultation to discover how AI automation can reduce your costs by 40-60% 
              and achieve 300-500% ROI within the first year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/roi-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="card-hover border-gray-200 bg-white">
                <div className="aspect-video bg-gray-100 relative">
                  <Badge className="absolute top-4 left-4 bg-white/90 text-black">
                    {getCategoryIcon(post.category)}
                    <span className="ml-1">{post.category}</span>
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-black hover:text-gray-700 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full border-gray-300 text-gray-600 hover:bg-gray-50">
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

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blogPost.title,
            "description": blogPost.metaDescription,
            "author": {
              "@type": "Person",
              "name": blogPost.author
            },
            "datePublished": blogPost.date,
            "dateModified": blogPost.date,
            "publisher": {
              "@type": "Organization",
              "name": "DOUSATSU",
              "logo": {
                "@type": "ImageObject",
                "url": `${window.location.origin}/dousatsu-logo.svg`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": shareUrl
            },
            "keywords": blogPost.tags.join(", ")
          })
        }}
      />
    </div>
  )
}
