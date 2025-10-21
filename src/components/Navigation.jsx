import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Services', href: '/#services' },
    { name: 'Methodology', href: '/#methodology' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'ROI Calculator', href: '/roi-calculator' },
  ]

  const isActive = (href) => {
    if (href.startsWith('/#')) return location.pathname === '/'
    return location.pathname === href
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {/* Circle with dot logo */}
            <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-black tracking-wide">
              OPENMIND AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-black relative group ${
                  isActive(item.href) ? 'text-black' : 'text-gray-600'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-2"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-black hover:bg-gray-50 rounded-md ${
                    isActive(item.href) ? 'text-black bg-gray-50' : 'text-gray-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  asChild 
                  className="w-full bg-black hover:bg-gray-800 text-white font-medium"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
