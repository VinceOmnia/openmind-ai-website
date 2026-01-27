import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Send, 
  Mail, 
  Clock, 
  CheckCircle, 
  Calculator,
  BarChart3,
  Calendar,
  Zap,
  Users,
  Target
} from 'lucide-react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    companySize: '',
    goals: '',
    services: [],
    additionalInfo: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real implementation, you would send this to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        company: '',
        companySize: '',
        goals: '',
        services: [],
        additionalInfo: '',
        consent: false
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    { id: 'ai-automation', label: 'AI Automation', icon: <Zap className="h-4 w-4" /> },
    { id: 'ai-training', label: 'AI Training & Workshops', icon: <Users className="h-4 w-4" /> },
    { id: 'aeo-optimization', label: 'AEO Optimization', icon: <BarChart3 className="h-4 w-4" /> }
  ]

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-gray-100 text-black">
            <Mail className="h-4 w-4 mr-2" />
            Free AI Consultation
          </Badge>
          <h1 className="text-4xl font-bold text-black mb-4">
            Get Your Free AI Transformation Audit
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how AI can transform your business with a personalized consultation. 
            No obligation, no sales pressure – just actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6 border-gray-200">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-black">Request Your Free AI Audit</CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours with your personalized AI assessment.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">Thank you! We'll be in touch within 24 hours.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <span className="text-red-800">Something went wrong. Please try again or email us directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-black">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                </div>

                {/* Company Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-black">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companySize" className="text-black">Company Size</Label>
                    <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-black focus:ring-black">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Goals */}
                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-black">What are your primary goals with AI?</Label>
                  <Select value={formData.goals} onValueChange={(value) => handleInputChange('goals', value)}>
                    <SelectTrigger className="border-gray-300 focus:border-black focus:ring-black">
                      <SelectValue placeholder="Select your main objective" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reduce-costs">Reduce operational costs</SelectItem>
                      <SelectItem value="improve-efficiency">Improve process efficiency</SelectItem>
                      <SelectItem value="enhance-customer-experience">Enhance customer experience</SelectItem>
                      <SelectItem value="automate-workflows">Automate manual workflows</SelectItem>
                      <SelectItem value="gain-competitive-advantage">Gain competitive advantage</SelectItem>
                      <SelectItem value="improve-decision-making">Improve decision making</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Services */}
                <div className="space-y-3">
                  <Label className="text-black">Which services interest you? (Select all that apply)</Label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={service.id}
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                          className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black"
                        />
                        <Label htmlFor={service.id} className="text-sm text-gray-700 flex items-center cursor-pointer">
                          {service.icon}
                          <span className="ml-2">{service.label}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-black">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Tell us about your current challenges, specific processes you'd like to automate, or any questions you have..."
                    rows={4}
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange('consent', checked)}
                    className="mt-1 border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black"
                  />
                  <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                    I agree to receive communications from DOUSATSU about AI solutions and services. 
                    I understand I can unsubscribe at any time.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  disabled={isSubmitting || !formData.consent || !formData.fullName || !formData.email}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Request Free AI Audit
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Benefits */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="p-6 border-gray-200">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-black">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-black" />
                  <div>
                    <div className="font-medium text-black">Email</div>
                    <div className="text-gray-600">chris.hampson@dousatsu.co.uk</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-black" />
                  <div>
                    <div className="font-medium text-black">Response Time</div>
                    <div className="text-gray-600">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You Get */}
            <Card className="p-6 bg-gray-50 border-gray-200">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-black">What You'll Receive</CardTitle>
                <CardDescription className="text-gray-600">
                  Your free AI audit includes comprehensive analysis and actionable recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="flex items-start gap-3">
                  <Calculator className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black">ROI Projections</div>
                    <div className="text-sm text-gray-600">
                      Detailed analysis of potential cost savings and efficiency gains
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black">Process Assessment</div>
                    <div className="text-sm text-gray-600">
                      Identification of automation opportunities in your workflows
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black">Implementation Roadmap</div>
                    <div className="text-sm text-gray-600">
                      Step-by-step plan with timelines and milestones
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black">45-Minute Strategy Session</div>
                    <div className="text-sm text-gray-600">
                      Personalized consultation with AI implementation expert
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="p-6 bg-black text-white">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-white">Risk-Free Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-300 leading-relaxed">
                  We guarantee measurable results or we'll work for free until you see them. 
                  Your initial consultation is completely free with no obligation to continue.
                </p>
              </CardContent>
            </Card>

            {/* Value Proposition */}
            <Card className="p-6 border-gray-200">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-black">Why Choose DOUSATSU?</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-black" />
                  <span className="text-sm text-gray-600">300-500% average ROI for our clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-black" />
                  <span className="text-sm text-gray-600">8-week typical implementation timeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-black" />
                  <span className="text-sm text-gray-600">Proven methodology across industries</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
