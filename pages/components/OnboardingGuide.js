import React, { useState } from 'react';
import { 
  DollarSign, 
  Star, 
  Trophy,
  Package,
  Truck,
  Box,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Warehouse,
  Globe,
  BarChart,
  Users,
  ShieldCheck,
  Settings
} from 'lucide-react';

const OnboardingGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedInfo, setExpandedInfo] = useState(null);
  const [showTooltip, setShowTooltip] = useState(null);

  const steps = [
    {
      title: "Welcome to Quetico 3PL",
      content: "Your partner in end-to-end supply chain solutions",
      icon: <Package className="text-sky-400" size={24} />,
      details: [
        {
          title: "What is 3PL?",
          content: "Third-Party Logistics (3PL) providers like Quetico manage outsourced logistics operations, including warehousing, fulfillment, and distribution. We help businesses scale efficiently without massive infrastructure investments.",
          subPoints: [
            "Warehouse Management",
            "Inventory Control",
            "Order Fulfillment",
            "Distribution Network",
            "Technology Integration"
          ]
        },
        {
          title: "Why Choose Quetico?",
          content: "With years of industry experience and cutting-edge technology, Quetico provides comprehensive logistics solutions tailored to your business needs.",
          subPoints: [
            "Industry Expertise",
            "Advanced Technology",
            "Strategic Locations",
            "Scalable Solutions",
            "Dedicated Support"
          ]
        }
      ]
    },
    {
      title: "Retail Fulfillment Excellence",
      content: "Discover our comprehensive retail compliance and distribution capabilities",
      icon: <Truck className="text-sky-400" size={24} />,
      details: [
        {
          title: "EDI Integration",
          content: "Seamless electronic data interchange with major retailers ensures accurate and timely communication.",
          subPoints: [
            "Automated Order Processing",
            "Real-time Updates",
            "Error Prevention",
            "Retailer Compliance",
            "Documentation Management"
          ]
        },
        {
          title: "Routing Guide Compliance",
          content: "Meet specific retailer requirements for packaging, labeling, and delivery.",
          subPoints: [
            "Custom Labeling",
            "Packaging Standards",
            "Delivery Scheduling",
            "Documentation",
            "Quality Control"
          ]
        },
        {
          title: "Cross-Docking Operations",
          content: "Efficient handling of time-sensitive merchandise with minimal storage time.",
          subPoints: [
            "Quick Turnaround",
            "Reduced Handling",
            "Inventory Optimization",
            "Cost Reduction",
            "Speed to Market"
          ]
        }
      ]
    },
    {
      title: "eCommerce Solutions",
      content: "Scale your online business with our advanced fulfillment services",
      icon: <Globe className="text-sky-400" size={24} />,
      details: [
        {
          title: "Same-Day Shipping",
          content: "Meet customer expectations with rapid order processing and shipping.",
          subPoints: [
            "Quick Processing",
            "Multiple Carriers",
            "Real-time Tracking",
            "Delivery Options",
            "SLA Compliance"
          ]
        },
        {
          title: "Returns Management",
          content: "Streamlined returns processing with quality inspection and inventory updates.",
          subPoints: [
            "Easy Returns Portal",
            "Quality Inspection",
            "Quick Processing",
            "Inventory Updates",
            "Customer Communication"
          ]
        }
      ]
    },
    {
      title: "Warehouse Operations",
      content: "State-of-the-art facilities and efficient processes",
      icon: <Warehouse className="text-sky-400" size={24} />,
      details: [
        {
          title: "Inventory Management",
          content: "Advanced WMS for real-time inventory tracking and optimization.",
          subPoints: [
            "Cycle Counting",
            "Location Management",
            "Stock Rotation",
            "Batch Tracking",
            "Inventory Alerts"
          ]
        },
        {
          title: "Quality Control",
          content: "Rigorous quality assurance processes at every step.",
          subPoints: [
            "Receiving Inspection",
            "Storage Standards",
            "Pick Accuracy",
            "Packaging Quality",
            "Shipping Verification"
          ]
        }
      ]
    },
    {
      title: "Technology Integration",
      content: "Seamless connectivity with your systems",
      icon: <Settings className="text-sky-400" size={24} />,
      details: [
        {
          title: "System Integration",
          content: "Connect your platforms with our advanced technology stack.",
          subPoints: [
            "API Integration",
            "EDI Setup",
            "Real-time Sync",
            "Data Security",
            "Custom Solutions"
          ]
        },
        {
          title: "Reporting & Analytics",
          content: "Comprehensive insights into your supply chain operations.",
          subPoints: [
            "Performance Metrics",
            "Custom Reports",
            "Real-time Dashboard",
            "Trend Analysis",
            "Optimization Tools"
          ]
        }
      ]
    },
    {
      title: "Getting Started",
      content: "Launch your partnership with Quetico",
      icon: <Star className="text-sky-400" size={24} />,
      details: [
        {
          title: "Onboarding Process",
          content: "Structured implementation process for smooth transition.",
          subPoints: [
            "Account Setup",
            "System Integration",
            "Training",
            "Testing",
            "Go-Live Support"
          ]
        },
        {
          title: "Ongoing Support",
          content: "Dedicated team for continuous assistance and optimization.",
          subPoints: [
            "Account Management",
            "Technical Support",
            "Performance Reviews",
            "Process Optimization",
            "Growth Planning"
          ]
        }
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', padding: '1.5rem' }}>
<div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1.5rem',
          backgroundColor: '#1e293b',
          padding: '1.5rem',
          borderRadius: '0.5rem'
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
              Quetico 3PL Onboarding Guide
            </h1>
            <p style={{ color: '#94a3b8' }}>
              Your journey to optimized logistics operations
            </p>
          </div>
          <div style={{
            backgroundColor: '#0ea5e9',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            color: 'white'
          }}>
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {/* Progress Steps */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '2rem',
          position: 'relative',
          padding: '0 1rem'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              width: `${100 / steps.length}%`,
              zIndex: 1
            }}>
              <button
                onClick={() => setCurrentStep(index)}
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  backgroundColor: index <= currentStep ? '#0ea5e9' : '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={() => setShowTooltip(index)}
                onMouseLeave={() => setShowTooltip(null)}
              >
                {index < currentStep ? (
                  <CheckCircle color="white" size={24} />
                ) : (
                  steps[index].icon
                )}
              </button>
              {showTooltip === index && (
                <div style={{
                  position: 'absolute',
                  top: '-2.5rem',
                  backgroundColor: '#1e293b',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  color: 'white',
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                  zIndex: 50
                }}>
                  {step.title}
                </div>
              )}
              <span style={{ 
                color: index <= currentStep ? '#0ea5e9' : '#94a3b8',
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                Step {index + 1}
              </span>
            </div>
          ))}
          {/* Progress Line */}
          <div style={{
            position: 'absolute',
            top: '1.75rem',
            left: '10%',
            right: '10%',
            height: '2px',
            backgroundColor: '#334155',
            zIndex: 0
          }}>
            <div style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
              height: '100%',
              backgroundColor: '#0ea5e9',
              transition: 'width 0.3s ease-in-out'
            }} />
          </div>
        </div>

        {/* Current Step Content */}
        <div style={{
          backgroundColor: '#1e293b',
          padding: '2rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '1.5rem',
            padding: '1rem',
            backgroundColor: '#0f172a',
            borderRadius: '0.5rem'
          }}>
            <div style={{ 
              backgroundColor: '#0ea5e9',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginRight: '1rem'
            }}>
              {steps[currentStep].icon}
            </div>
            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: 'white',
                marginBottom: '0.25rem'
              }}>
                {steps[currentStep].title}
              </h2>
              <p style={{ color: '#94a3b8' }}>
                {steps[currentStep].content}
              </p>
            </div>
          </div>

          {/* Detailed Information Panels */}
          <div className="space-y-4">
            {steps[currentStep].details.map((detail, index) => (
              <div key={index} style={{
                backgroundColor: '#0f172a',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setExpandedInfo(expandedInfo === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ 
                    color: 'white',
                    fontSize: '1.125rem',
                    fontWeight: '500'
                  }}>
                    {detail.title}
                  </span>
                  {expandedInfo === index ? (
                    <ChevronUp color="#0ea5e9" />
                  ) : (
                    <ChevronDown color="#0ea5e9" />
                  )}
                </button>
                
                {expandedInfo === index && (
                  <div style={{
                    padding: '1rem',
                    borderTop: '1px solid #334155'
                  }}>
                    <p style={{ 
                      color: '#94a3b8',
                      marginBottom: '1rem'
                    }}>
                      {detail.content}
                    </p>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '0.75rem'
                    }}>
                      {detail.subPoints.map((point, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          backgroundColor: '#1e293b',
                          padding: '0.75rem',
                          borderRadius: '0.375rem',
                          color: 'white'
                        }}>
                          <CheckCircle size={16} style={{ 
                            color: '#0ea5e9',
                            marginRight: '0.5rem'
                          }} />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          backgroundColor: '#1e293b',
          borderRadius: '0.5rem'
        }}>
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              backgroundColor: currentStep > 0 ? '#0ea5e9' : '#334155',
              color: 'white',
              cursor: currentStep > 0 ? 'pointer' : 'not-allowed',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            disabled={currentStep === 0}
          >
            ← Previous
          </button>
          <button
            onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              backgroundColor: currentStep < steps.length - 1 ? '#0ea5e9' : '#334155',
              color: 'white',
              cursor: currentStep < steps.length - 1 ? 'pointer' : 'not-allowed',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            disabled={currentStep === steps.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export { OnboardingGuide };
