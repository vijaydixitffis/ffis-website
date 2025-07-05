import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Target, 
  Lightbulb, 
  Shield,
  TrendingUp,
  Zap,
  Globe,
  Code,
  Database,
  Cloud,
  Smartphone,
  Cog,
  Award,
  Clock,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  Building,
  CreditCard,
  ShoppingCart,
  Truck,
  Wifi,
  Heart,
  FileText,
  Briefcase,
  Settings,
  BarChart3,
  Rocket,
  Brain,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAssessmentWidget, setShowAssessmentWidget] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'domains', 'why-us', 'approach', 'engagement', 'case-studies', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scrolling when assessment widget is open
  useEffect(() => {
    if (showAssessmentWidget) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showAssessmentWidget]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Enabled Solutions",
      description: "Generative AI solutions for various industry domains",
      features: [
        "Risk assessment and recommendation engines",
        "BPO Automation with intelligent document extraction",
        "Enhanced digital solutions with AI capabilities",
        "Modernization with AI-powered insights"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Enablement & Setup",
      description: "Comprehensive cloud migration and infrastructure services",
      features: [
        "Migrate existing servers and infrastructure to cloud",
        "AWS/Azure/Google cloud assessment and migration",
        "New infrastructure setup for cloud-native digital startups",
        "Enterprise architecture & certified implementations"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Bespoke software solutions across multiple technologies",
      features: [
        "Java, .NET, Python, Open Source development",
        "Angular, React, modern web frameworks",
        "Database design with MySQL, MongoDB",
        "Full-stack enterprise applications"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Startups",
      description: "Complete setup of Digital native startup businesses",
      features: [
        "Fintech, Healthcare and multi-sector expertise",
        "MVP roadmaps and software product plans",
        "Concepts to go-live release and deployments",
        "Cloud infrastructure and secure networking"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Product Development",
      description: "Outsourced product development and management",
      features: [
        "Product development and release management",
        "Product support and maintenance",
        "Software evaluation and assessments",
        "500+ offshore technology partner capacity"
      ]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Comprehensive ongoing support and enhancement services",
      features: [
        "Business continuity and resilience",
        "Security, scalability, and performance optimization",
        "Vendor selection and technology assessments",
        "Fiber optic networking and secure infrastructure"
      ]
    }
  ];

  const whyUsPoints = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "25+ Years Experience",
      description: "Proven track record across various industry domains working for global customers in US, UK, Europe and South Africa"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Successfully delivered 50+ projects including modernizations and AI enabled digital solutions worldwide"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industry Certifications",
      description: "Enterprise architecture, AWS, Azure certified professionals ensuring enterprise-grade quality and compliance"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Scalable Teams",
      description: "500+ offshore technology partner capacity with fully setup offices including secure infrastructure"
    }
  ];

  const domains = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Insurance",
      description: "Comprehensive insurance solutions and digital transformation",
      clients: ["Discovery", "Liberty", "Sanlam", "Old Mutual", "Prudential", "AA", "Assurant", "AAA"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Banking & Financial Services",
      description: "Digital banking platforms and financial technology solutions",
      clients: ["BNY Mellon", "CitiBank", "Barclays", "EBRD", "CItioare", "First Abu Dhabi Bank", "StandardBank", "WesBank", "NedBank"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Retail, Manufacturing & Supply Chain",
      description: "End-to-end retail and manufacturing digital solutions",
      clients: ["JohnLewis", "Boots", "Morrisons", "British American Tobacco", "Christies", "ColeHaan", "Danaher"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics, Utilities & Media",
      description: "Smart logistics and utility management systems",
      clients: ["Avis", "Wyndham", "TNT", "SmartestEnergy", "MorrisonsUtilities", "Sedex", "Alaska Airlines", "Site Impact"]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Telecoms",
      description: "Telecommunications infrastructure and digital services",
      clients: ["Carphone Warehouse", "Qualcomm", "Verizon", "SKY"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare & Government",
      description: "Healthcare technology and government sector solutions",
      clients: ["NHS", "Boots", "Office for National Stats", "Ordnance Survey", "European Union - UN"]
    }
  ];

  const methodologyPhases = [
    {
      phase: "01",
      title: "Plan and Engage",
      icon: <Users className="w-6 h-6" />,
      activities: [
        "Meet & engage with stakeholders",
        "Understand high level requirements",
        "Agree ways of working (SOW, Work packaging)",
        "Agree on business outcomes and deliverables"
      ]
    },
    {
      phase: "02", 
      title: "Business and IT Strategy",
      icon: <Lightbulb className="w-6 h-6" />,
      activities: [
        "Business solution overview & capability modeling",
        "Define business outcomes and critical success factors",
        "Define roadmap and high level plan",
        "IT solution overview"
      ]
    },
    {
      phase: "03",
      title: "Business Case and Kick Off", 
      icon: <FileText className="w-6 h-6" />,
      activities: [
        "Prepare business case including business benefits, investments, resource requirements",
        "Cost-benefit & ROI analysis, Define TCO",
        "Obtain sponsorship"
      ]
    },
    {
      phase: "04",
      title: "Portfolio and Program Management",
      icon: <Briefcase className="w-6 h-6" />,
      activities: [
        "Prepare budgets sanctions",
        "Identify work streams",
        "Identify Programs in each work stream",
        "Identify projects under each program",
        "Allocate resources, schedule governance"
      ]
    },
    {
      phase: "05",
      title: "Execute Projects",
      icon: <Rocket className="w-6 h-6" />,
      activities: [
        "Create project plans & identify milestones and deliverables",
        "Identify and mobilize resources",
        "Allocate funds",
        "Select and adopt methodology & execute"
      ]
    }
  ];

  const engagementModels = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time & Material",
      description: "Flexible engagement for evolving requirements",
      features: ["Hourly billing with transparent reporting", "Flexible scope adjustments", "Regular milestone reviews", "Suitable for R&D and innovation projects"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fixed Price",
      description: "Predictable costs for well-defined projects",
      features: ["Fixed budget with clear deliverables", "Comprehensive project timeline", "Risk mitigation strategies", "Quality assurance guarantees"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Offshore Team",
      description: "Extended team model leveraging our 500+ capacity",
      features: ["Dedicated offshore resources", "Full-time commitment with secure infrastructure", "Direct communication channels", "Scalable team size with fiber optic connectivity"]
    }
  ];

  const caseStudies = [
    {
      title: "AI-Powered Insurance Risk Assessment",
      industry: "Insurance - Major UK Insurer",
      challenge: "Manual underwriting processes causing delays and inconsistent risk evaluation across multiple product lines",
      solution: "Implemented ML-based risk assessment engine with automated document processing and recommendation systems",
      results: ["70% reduction in underwriting time", "95% accuracy in risk evaluation", "£2M annual operational cost savings"]
    },
    {
      title: "Digital Banking Platform Migration",
      industry: "Banking - Global Financial Institution",
      challenge: "Legacy core banking system limiting digital transformation and customer experience innovation",
      solution: "Complete AWS cloud migration with microservices architecture and real-time transaction processing",
      results: ["99.9% system uptime achieved", "50% reduction in infrastructure costs", "10x improved transaction processing speed"]
    },
    {
      title: "Fintech Startup MVP Development",
      industry: "Financial Technology",
      challenge: "Rapid MVP development for digital payment platform with regulatory compliance requirements",
      solution: "React Native mobile app with secure backend infrastructure and integrated compliance frameworks",
      results: ["3-month MVP to market delivery", "50k+ active users in first quarter", "$5M Series A funding secured"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Assessment Widget Overlay */}
      {showAssessmentWidget && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[95vw] h-[95vh] flex flex-col">
            {/* Widget Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowAssessmentWidget(false)}
                  className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back to Website
                </button>
                <div className="h-6 w-px bg-gray-300"></div>
                <h2 className="text-xl font-bold text-gray-900">AI Readiness & Application Modernity Assessments</h2>
              </div>
              <button
                onClick={() => setShowAssessmentWidget(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Widget Content */}
            <div className="flex-1 overflow-y-auto assessment-widget-scroll" style={{ maxHeight: 'calc(95vh - 120px)' }}>
              <iframe
                src="https://vijaydixitffis.github.io/ffis-modern/"
                className="w-full border-0"
                title="AI Readiness and Application Modernity Assessments"
                style={{ 
                  minHeight: '100%',
                  height: '100vh',
                  maxHeight: 'none'
                }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="./FFIS-logo-new.png" 
                alt="Future Focus IT Solutions" 
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'domains', label: 'Domains' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'approach', label: 'Approach' },
                { id: 'engagement', label: 'Engagement' },
                { id: 'case-studies', label: 'Case Studies' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                    activeSection === item.id ? 'text-teal-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'domains', label: 'Domains' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'approach', label: 'Approach' },
                { id: 'engagement', label: 'Engagement' },
                { id: 'case-studies', label: 'Case Studies' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                  25+ Years Global Experience
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Driving Business 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Outcomes</span>
              </h1>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-teal-600">Future Focus IT Solutions</h2>
                <p className="text-lg text-gray-600">Your Trusted Technology Partner</p>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with cutting-edge technology solutions. From AI-enabled innovations to cloud transformations, we deliver results across US, UK, Europe and South Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors"
                >
                  Get Consultation
                </button>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Enablement Expertise</h3>
                  <p className="text-sm text-gray-600">Generative AI & ML solutions</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Industry and Cloud Certified</h3>
                  <p className="text-sm text-gray-600">Enterprise architecture experts and cloud specialists</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow -mt-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">50+ Projects</h3>
                  <p className="text-sm text-gray-600">Successful digital transformations</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">500+ Capacity</h3>
                  <p className="text-sm text-gray-600">Offshore technology partners</p>
                </div>
              </div>

              {/* Assessment Card */}
              <div className="mt-8">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Know your AI Readiness or Modernity Index</h3>
                      <p className="text-indigo-100 text-sm">Evaluate your digital readiness</p>
                    </div>
                  </div>
                  <p className="text-indigo-100 mb-4 text-sm">
                    Take our comprehensive AI Readiness and Application Modernity assessments to understand your current state and transformation opportunities.
                  </p>
                  <button
                    onClick={() => setShowAssessmentWidget(true)}
                    className="w-full bg-white text-indigo-600 px-4 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center group"
                  >
                    Start Assessment
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technology Capabilities & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across the entire technology spectrum, from AI innovation to cloud transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Domains Section */}
      <section id="domains" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry Domains & Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving multinational corporations across diverse industries with specialized domain expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {domain.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{domain.title}</h3>
                <p className="text-gray-600 mb-6">{domain.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Notable Clients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {domain.clients.map((client, idx) => (
                      <span key={idx} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Future Focus IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique combination of global experience, industry certifications, and scalable delivery model sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsPoints.map((point, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {point.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">25+</div>
                <p className="text-gray-700">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-700">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-gray-700">Offshore Capacity</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Global</div>
                <p className="text-gray-700">US, UK, EU, SA Presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach for Cloud-native Digital Startups, refined over 25+ years of global project delivery
            </p>
          </div>

          {/* Methodology Flow */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              {methodologyPhases.map((phase, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 min-w-[200px]">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="text-white">
                          {phase.icon}
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <div className="text-xs text-teal-600 font-semibold mb-3">Phase {phase.phase}</div>
                    </div>
                  </div>
                  {index < methodologyPhases.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-teal-600 mx-2 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Governance Bar */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4 rounded-lg text-center">
              <div className="flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                <span className="font-semibold">Governance, Operations/SLA management, stakeholder management and reporting</span>
              </div>
            </div>
          </div>

          {/* Detailed Phase Breakdown */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {methodologyPhases.map((phase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {phase.phase}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{phase.title}</h3>
                </div>
                <ul className="space-y-3">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Real Project Example */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Real Project Example: Fintech Payment Platform</h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Project Overview</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Industry:</strong> Financial Technology</li>
                  <li><strong>Timeline:</strong> 20 weeks (5 phases × 4 weeks each)</li>
                  <li><strong>Team Size:</strong> 12 professionals across offshore locations</li>
                  <li><strong>Technologies:</strong> React Native, Node.js/Python, AWS/Azure</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Key Deliverables</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mobile payment application (iOS/Android)</li>
                  <li>• Secure backend infrastructure with compliance</li>
                  <li>• Real-time transaction processing system</li>
                  <li>• Comprehensive testing and security framework</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
                <div className="text-2xl font-bold text-teal-600 mb-2">4 Months</div>
                <p className="text-gray-700">MVP to Market</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <div className="text-2xl font-bold text-blue-600 mb-2">50k+</div>
                <p className="text-gray-700">Active Users (Q1)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <div className="text-2xl font-bold text-purple-600 mb-2">$3M</div>
                <p className="text-gray-700">Series A Funding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section id="engagement" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Engagement Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible engagement options leveraging our global delivery capabilities and offshore technology partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-white">
                    {model.icon}
                  </div>  
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <ul className="space-y-3">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples from our portfolio of 50+ successful projects across global markets
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                      {study.industry}
                    </span>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-teal-500 shadow-sm">
                          <p className="text-sm text-gray-700 font-medium">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Let's Start Your Digital Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to leverage our 25+ years of global experience? Connect with our certified experts for a consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@futurefocusit.solutions</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Contact</h3>
                    <p className="text-gray-600">+91 8275421793</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Certifications</h3>
                    <p className="text-gray-600">Enterprise Architecture, AWS, Azure Certified</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-3">Why Partner With Us?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    25+ years proven track record
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    500+ offshore technology capacity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Global delivery across 4 continents
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Industry-certified professionals
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry Domain</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors">
                    <option>Select Industry</option>
                    <option>Insurance</option>
                    <option>Banking & Financial Services</option>
                    <option>Retail & Manufacturing</option>
                    <option>Logistics & Utilities</option>
                    <option>Telecoms</option>
                    <option>Healthcare & Government</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your digital transformation needs, technology requirements, or specific challenges..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="./FFIS-logo-new.png" 
                alt="Future Focus IT Solutions" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-4">Driving business outcomes through innovative technology solutions for 25+ years.</p>
              <div className="text-sm text-gray-400">
                <p>Global Presence:</p>
                <p>US | UK | Europe | South Africa</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI Enabled Solutions</li>
                <li>Cloud Migration</li>
                <li>Software Development</li>
                <li>Digital Startups</li>
                <li>Product Development</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Insurance</li>
                <li>Banking & Finance</li>
                <li>Retail & Manufacturing</li>
                <li>Healthcare</li>
                <li>Telecoms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Enterprise Architecture</li>
                <li>AWS Partner</li>
                <li>Azure Certified</li>
                <li>ISO Compliant</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Future Focus IT Solutions. All rights reserved. | 25+ Years of Global Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;