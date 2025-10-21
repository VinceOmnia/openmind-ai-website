import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle,
  Download,
  ArrowRight
} from 'lucide-react'

export function ROICalculatorPage() {
  const [inputs, setInputs] = useState({
    employees: 10,
    avgSalary: 75000,
    hoursPerWeek: 40,
    manualTaskPercentage: 41,
    errorRate: 3,
    automationCostReduction: 50,
    implementationWeeks: 8
  })

  const [results, setResults] = useState({})

  useEffect(() => {
    calculateROI()
  }, [inputs])

  const calculateROI = () => {
    const annualSalaryPerEmployee = inputs.avgSalary
    const totalAnnualSalaries = annualSalaryPerEmployee * inputs.employees
    const hoursPerYear = inputs.hoursPerWeek * 52
    const manualHoursPerYear = hoursPerYear * (inputs.manualTaskPercentage / 100)
    const manualCostPerEmployee = (manualHoursPerYear / hoursPerYear) * annualSalaryPerEmployee
    const totalManualCost = manualCostPerEmployee * inputs.employees
    
    const automationSavings = totalManualCost * (inputs.automationCostReduction / 100)
    const errorCostReduction = totalAnnualSalaries * (inputs.errorRate / 100) * 0.1 // Assume error costs 10% of salary
    const totalAnnualSavings = automationSavings + errorCostReduction
    
    // Typical AI automation implementation cost
    const implementationCost = inputs.employees * 5000 // £5k per employee is typical
    const monthlyROI = (totalAnnualSavings / 12) - (implementationCost / 12)
    const paybackPeriod = implementationCost / (totalAnnualSavings / 12)
    const threeYearROI = ((totalAnnualSavings * 3) - implementationCost) / implementationCost * 100

    setResults({
      totalManualCost: Math.round(totalManualCost),
      automationSavings: Math.round(automationSavings),
      errorCostReduction: Math.round(errorCostReduction),
      totalAnnualSavings: Math.round(totalAnnualSavings),
      implementationCost: Math.round(implementationCost),
      monthlyROI: Math.round(monthlyROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      threeYearROI: Math.round(threeYearROI),
      hoursReclaimed: Math.round(manualHoursPerYear * inputs.employees * (inputs.automationCostReduction / 100))
    })
  }

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Calculator className="h-4 w-4 mr-2" />
            AI ROI Calculator
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Calculate Your AI Automation ROI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how much you could save with AI automation. Get personalized projections 
            based on your business size and current processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Your Business Details
              </CardTitle>
              <CardDescription>
                Enter your current business metrics to calculate potential savings
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0 space-y-6">
              {/* Number of Employees */}
              <div className="space-y-2">
                <Label htmlFor="employees">Number of Employees</Label>
                <Input
                  id="employees"
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                  className="text-lg"
                />
              </div>

              {/* Average Salary */}
              <div className="space-y-2">
                <Label htmlFor="salary">Average Annual Salary (£)</Label>
                <Input
                  id="salary"
                  type="number"
                  value={inputs.avgSalary}
                  onChange={(e) => handleInputChange('avgSalary', parseInt(e.target.value) || 0)}
                  className="text-lg"
                />
              </div>

              {/* Hours per Week */}
              <div className="space-y-2">
                <Label htmlFor="hours">Hours Worked per Week</Label>
                <Input
                  id="hours"
                  type="number"
                  value={inputs.hoursPerWeek}
                  onChange={(e) => handleInputChange('hoursPerWeek', parseInt(e.target.value) || 0)}
                  className="text-lg"
                />
              </div>

              {/* Manual Task Percentage */}
              <div className="space-y-3">
                <Label>Percentage of Time on Manual/Repetitive Tasks: {inputs.manualTaskPercentage}%</Label>
                <Slider
                  value={[inputs.manualTaskPercentage]}
                  onValueChange={(value) => handleInputChange('manualTaskPercentage', value[0])}
                  max={80}
                  min={10}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Industry average: 41% (Knowledge workers spend nearly half their time on repetitive tasks)
                </p>
              </div>

              {/* Error Rate */}
              <div className="space-y-3">
                <Label>Current Error Rate in Manual Processes: {inputs.errorRate}%</Label>
                <Slider
                  value={[inputs.errorRate]}
                  onValueChange={(value) => handleInputChange('errorRate', value[0])}
                  max={10}
                  min={1}
                  step={0.5}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Typical range: 1-5% for data entry and manual processes
                </p>
              </div>

              {/* Automation Efficiency */}
              <div className="space-y-3">
                <Label>Expected Automation Efficiency: {inputs.automationCostReduction}%</Label>
                <Slider
                  value={[inputs.automationCostReduction]}
                  onValueChange={(value) => handleInputChange('automationCostReduction', value[0])}
                  max={90}
                  min={30}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Our clients typically see 40-60% cost reduction from AI automation
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {/* ROI Summary */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <TrendingUp className="h-5 w-5" />
                  Your AI Automation ROI
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">
                      {formatCurrency(results.totalAnnualSavings || 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      {results.threeYearROI || 0}%
                    </div>
                    <div className="text-sm text-muted-foreground">3-Year ROI</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Breakdown */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Savings Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Manual Process Cost</span>
                  <span className="font-semibold">{formatCurrency(results.totalManualCost || 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Automation Savings</span>
                  <span className="font-semibold text-green-600">-{formatCurrency(results.automationSavings || 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Error Reduction Savings</span>
                  <span className="font-semibold text-green-600">-{formatCurrency(results.errorCostReduction || 0)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Annual Savings</span>
                    <span className="font-bold text-green-600">{formatCurrency(results.totalAnnualSavings || 0)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Details */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Implementation Details
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Implementation Cost</span>
                  <span className="font-semibold">{formatCurrency(results.implementationCost || 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Payback Period</span>
                  <span className="font-semibold">{results.paybackPeriod || 0} months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Hours Reclaimed Annually</span>
                  <span className="font-semibold">{(results.hoursReclaimed || 0).toLocaleString()} hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monthly ROI (After Payback)</span>
                  <span className="font-semibold text-green-600">{formatCurrency(Math.max(0, results.monthlyROI || 0))}</span>
                </div>
              </CardContent>
            </Card>

            {/* Key Benefits */}
            <Card className="p-6 bg-muted/30">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Why These Numbers Matter</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Immediate Impact</div>
                      <div className="text-sm text-muted-foreground">See results within 2-4 weeks of implementation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Scalable Solution</div>
                      <div className="text-sm text-muted-foreground">Savings multiply as your business grows</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Competitive Advantage</div>
                      <div className="text-sm text-muted-foreground">Free up team for strategic, high-value work</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
            <CardContent>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Turn These Projections Into Reality?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get a personalized AI automation strategy session to validate these numbers 
                and create your implementation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link to="/contact">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Report
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                45-minute consultation • $5,000 value • No obligation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
