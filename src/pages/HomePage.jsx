import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { FAQ } from '@/components/FAQ'
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  Zap,
  BarChart3,
  Mail,
  Send
} from 'lucide-react'

export function HomePage() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState(null)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setIsSubscribing(true)
    
    try {
      // Simulate subscription
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubscribeStatus('success')
      setEmail('')
    } catch (error) {
      setSubscribeStatus('error')
    } finally {
      setIsSubscribing(false)
    }
  }

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-black" />,
      title: "AI Automation",
      subtitle: "Streamline Operations, Multiply Efficiency",
      description: "Transform manual processes into intelligent automation that works around the clock. Our clients see 40-60% cost reduction and 300-500% ROI.",
      features: ["Manufacturing optimization", "Financial services automation", "Customer service enhancement"],
      cta: "Get Free AI Audit"
    },
    {
      icon: <Users className="h-8 w-8 text-black" />,
      title: "AI Training & Workshops",
      subtitle: "Bridge the Skills Gap with Expert-Led Learning",
      description: "Empower your team with practical AI knowledge through comprehensive training programs and hands-on workshops.",
      features: ["Custom AI training programs", "Hands-on practical application", "Industry-specific workshops"],
      cta: "Book Custom Workshop"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-black" />,
      title: "AEO (AI-Enhanced Optimization)",
      subtitle: "Future-Proof Your Digital Presence",
      description: "Stay ahead of the AI search revolution. AEO ensures your brand gets cited by ChatGPT, Perplexity AI, and Microsoft Copilot.",
      features: ["AI search optimization", "First-mover advantage", "Future-focused strategy"],
      cta: "Get AEO Assessment",
      badge: "25% of organic traffic moving to AI by 2026"
    }
  ]

  const methodology = [
    {
      step: "1",
      title: "Exploratory Sprint",
      description: "Identify highest-impact opportunities where AI can generate immediate value"
    },
    {
      step: "2", 
      title: "Rapid Prototyping",
      description: "Create working proof of concept within 1-2 weeks that demonstrates tangible results"
    },
    {
      step: "3",
      title: "MVP Validation", 
      description: "Test and refine AI solution in real-world conditions for optimal performance"
    },
    {
      step: "4",
      title: "Full Deployment",
      description: "Complete solution integrated with existing tools, ready for daily use"
    }
  ]

  const results = [
    { metric: "40-60%", label: "Cost Reduction", icon: <TrendingUp className="h-6 w-6" /> },
    { metric: "300-500%", label: "ROI Achieved", icon: <Target className="h-6 w-6" /> },
    { metric: "8 Weeks", label: "Implementation Time", icon: <Clock className="h-6 w-6" /> }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Theme with Original Message */}
      <section className="relative bg-black py-20 lg:py-32 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium mb-6">
              Transform Your Business with AI
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation, Expert Training & 
              <span className="text-gray-300"> Next-Generation AEO</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop struggling with manual processes and outdated digital strategies. 
              Get measurable results in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-4 bg-white hover:bg-gray-100 text-black">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white">
                <Link to="/roi-calculator">Download ROI Calculator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Adoption Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              The AI Adoption Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your business is at a critical crossroads. Every day you delay AI implementation, 
              competitors gain ground, costs accumulate, and opportunities slip away.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-xl text-black">Manual Processes Drain Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Knowledge workers spend 41% of their time on repetitive tasks that could be automated. 
                  For a 10-person team, that's over £300,000 in wasted productivity annually.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-xl text-black">Skills Gap Widens Daily</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your team lacks AI expertise needed to implement intelligent systems, 
                  while competitors who adapt first capture emerging markets.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-xl text-black">Digital Visibility Shifts to AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  25% of organic traffic is moving to AI chatbots and virtual agents. 
                  Traditional SEO strategies are becoming obsolete.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our AI Solutions */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just talk about AI transformation – we deliver it with proven methodologies 
              that generate measurable results from day one.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover relative border-gray-200 bg-white">
                {service.badge && (
                  <Badge className="absolute -top-3 left-6 bg-black text-white">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <div>
                      <CardTitle className="text-xl text-black">{service.title}</CardTitle>
                      <CardDescription className="font-medium text-gray-600">
                        {service.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-black" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                    <Link to="/contact">{service.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Proven 4-Phase Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach that minimizes risk while maximizing impact, 
              refined through hundreds of successful projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((phase, index) => (
              <Card key={index} className="card-hover text-center border-gray-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  <CardTitle className="text-lg text-black">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Measurable Results From Day One
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="card-hover text-center border-gray-200 bg-white">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {result.icon}
                  </div>
                  <div className="text-4xl font-bold text-black mb-2">{result.metric}</div>
                  <div className="text-gray-600 font-medium">{result.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Subscription Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-black text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-4">Stay Ahead of the AI Revolution</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Get weekly insights on AI trends, implementation strategies, and industry updates delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {subscribeStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg text-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mx-auto mb-2" />
                  <span className="text-green-100">Thank you for subscribing! Check your email for confirmation.</span>
                </div>
              )}

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white text-black border-gray-300 focus:border-gray-500"
                />
                <Button 
                  type="submit" 
                  disabled={isSubscribing || !email}
                  className="bg-white text-black hover:bg-gray-100 font-semibold"
                >
                  {isSubscribing ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  Subscribe
                </Button>
              </form>
              
              <p className="text-center text-gray-400 text-sm mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about AI transformation, AEO optimization, and our services.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Every day you wait, competitors gain ground and opportunities disappear. 
            The time for AI adoption is now.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white text-black border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Free AI Transformation Consultation</CardTitle>
                <CardDescription className="text-gray-600">45-minute personalized session - £5,000 value</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-black border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Free AI Automation Audit</CardTitle>
                <CardDescription className="text-gray-600">Detailed workflow analysis with ROI projections</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                  <Link to="/contact">Get Free Audit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Risk-Free Guarantee</h3>
            <p className="text-gray-300">
              We guarantee measurable results or we'll work for free until you see them. 
              Your initial consultation is completely free with no obligation to continue.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
