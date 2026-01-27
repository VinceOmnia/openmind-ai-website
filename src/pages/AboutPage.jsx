import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Brain, 
  Users, 
  Award, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Linkedin,
  Mail,
  Shield,
  Zap,
  BarChart3,
  Clock,
  TrendingUp,
  Globe
} from 'lucide-react'

export function AboutPage() {
  const values = [
    {
      icon: <Target className="h-6 w-6 text-black" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes, not just implementation. Every solution is designed to deliver clear ROI and tangible business improvements."
    },
    {
      icon: <Clock className="h-6 w-6 text-black" />,
      title: "Rapid Implementation",
      description: "While others take months, we deliver working solutions in weeks. Our proven methodology ensures fast time-to-value without compromising quality."
    },
    {
      icon: <Users className="h-6 w-6 text-black" />,
      title: "Partnership Approach",
      description: "We don't just deliver solutions and leave. We work alongside your team, providing training, support, and ongoing optimization."
    },
    {
      icon: <Shield className="h-6 w-6 text-black" />,
      title: "Industry Expertise",
      description: "Deep specialization across multiple industries ensures solutions that meet the highest standards and regulatory requirements."
    }
  ]

  const achievements = [
    { metric: "300-500%", label: "Average Client ROI" },
    { metric: "8 Weeks", label: "Typical Implementation" },
    { metric: "95%", label: "Process Efficiency Gains" }
  ]

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-black" />,
      title: "AI Automation",
      description: "Transform manual processes into intelligent automation that scales with your business growth."
    },
    {
      icon: <Users className="h-8 w-8 text-black" />,
      title: "AI Training & Workshops",
      description: "Empower your team with practical AI knowledge through hands-on, industry-specific training programs."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-black" />,
      title: "AEO Optimization",
      description: "Future-proof your digital presence with AI-Enhanced Optimization for next-generation search."
    }
  ]

  const differentiators = [
    {
      title: "Rapid Implementation",
      description: "See results in weeks, not months. Our proven methodology delivers working solutions quickly."
    },
    {
      title: "Measurable ROI",
      description: "Every solution is designed to deliver clear, quantifiable business value and returns."
    },
    {
      title: "Industry Expertise",
      description: "Specialized knowledge across multiple industries including regulated environments."
    },
    {
      title: "AEO Pioneers",
      description: "Leading the next evolution beyond SEO with AI-Enhanced Optimization strategies."
    },
    {
      title: "Partnership Approach",
      description: "We work alongside your team, providing training and ongoing support for long-term success."
    },
    {
      title: "Risk-Free Guarantee",
      description: "We guarantee measurable results or we'll work for free until you see them."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-gray-100 text-black">
              <Brain className="h-4 w-4 mr-2" />
              About DOUSATSU
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Transforming Businesses Through 
              <span className="text-gray-600"> Intelligent AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that artificial intelligence should be an accessible and powerful tool for every business, 
              not just the tech giants. Our mission is to demystify AI and help our clients unlock real, 
              measurable growth through practical implementation and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  DOUSATSU was founded on a simple observation: countless businesses were intrigued by AI's potential 
                  but intimidated by its complexity and cost. While tech giants dominated the headlines, small and 
                  medium-sized businesses struggled to find practical, affordable AI solutions that delivered real value.
                </p>
                <p>
                  We created DOUSATSU to bridge that gap. Instead of building complex custom solutions from scratch, 
                  we leverage proven AI models from industry leaders like OpenAI, Claude, and Gemini, then customize them 
                  to address specific business challenges. This approach delivers enterprise-level capabilities at a 
                  fraction of traditional costs and implementation time.
                </p>
                <p>
                  Our breakthrough came through understanding that the most successful AI implementations combine 
                  cutting-edge technology with deep industry knowledge and practical business understanding.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center border-gray-200">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-black mb-2">{achievement.metric}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just build technology; we build business solutions. From our transparent AI Audits 
              to our data-driven content strategies, every service is designed to deliver a clear return on investment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <CardTitle className="text-xl text-black">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg text-black">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving AI transformation for businesses worldwide.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="card-hover border-gray-200">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">C</span>
                </div>
                <CardTitle className="text-2xl text-black">Chris</CardTitle>
                <CardDescription className="text-lg font-medium text-gray-600">
                  Founder & Lead AI Strategist
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Chris brings years of experience in AI implementation and business transformation. 
                  His vision for making AI accessible to all businesses led to the creation of DOUSATSU. 
                  Chris specializes in translating complex AI concepts into practical business solutions 
                  that deliver measurable results.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Openmind AI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Why Choose DOUSATSU?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another AI consulting firm. Here's what sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="card-hover border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center text-black">
                    <CheckCircle className="h-5 w-5 text-black mr-2" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's build the future of your business together. Schedule a free consultation 
            to learn how DOUSATSU can help you achieve your goals.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link to="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm mt-4 text-gray-400">
            45-minute personalized session • £5,000 value • No obligation
          </p>
        </div>
      </section>
    </div>
  )
}
