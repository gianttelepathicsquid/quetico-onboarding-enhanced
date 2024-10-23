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
  Settings
} from 'lucide-react';

const steps = [
  {
    title: "Welcome to Quetico 3PL",
    content: "Your partner in end-to-end supply chain solutions",
    icon: <Package color="#0ea5e9" size={24} />,
    details: [
      {
        title: "What is 3PL?",
        content: "Third-Party Logistics (3PL) providers like Quetico manage outsourced logistics operations, including warehousing, fulfillment, and distribution.",
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
        content: "With years of industry experience and cutting-edge technology, Quetico provides comprehensive logistics solutions.",
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
    title: "Retail Fulfillment",
    content: "Discover our retail compliance expertise",
    icon: <Truck color="#0ea5e9" size={24} />,
    details: [
      {
        title: "EDI Integration",
        content: "Seamless electronic data interchange with major retailers.",
        subPoints: [
          "Automated Orders",
          "Real-time Updates",
          "Error Prevention",
          "Retailer Compliance",
          "Documentation"
        ]
      },
      {
        title: "Routing Guide Compliance",
        content: "Meet retailer requirements for packaging and delivery.",
        subPoints: [
          "Custom Labeling",
          "Packaging Standards",
          "Delivery Windows",
          "Documentation",
          "Quality Control"
        ]
      }
    ]
  },
  {
    title: "eCommerce Solutions",
    content: "Scale your online business with our fulfillment services",
    icon: <Globe color="#0ea5e9" size={24} />,
    details: [
      {
        title: "Same-Day Shipping",
        content: "Meet customer expectations with rapid processing.",
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
        content: "Streamlined returns processing and updates.",
        subPoints: [
          "Easy Returns",
          "Quick Processing",
          "Quality Checks",
          "Inventory Updates",
          "Customer Service"
        ]
      }
    ]
  }
];

export function OnboardingGuide() {
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedInfo, setExpandedInfo] = useState(null);
  const [showTooltip, setShowTooltip] = useState(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', padding: '1.5rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <div style={{ 
          backgroundColor: '#1e293b',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem'
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
            Quetico 3PL Onboarding Guide
          </h1>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                backgroundColor: currentStep === index ? '#1e293b' : '#0f172a',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}
              onClick={() => setCurrentStep(index)}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {step.icon}
                <div style={{ marginLeft: '1rem' }}>
                  <h2 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>
                    {step.title}
                  </h2>
                  <p style={{ color: '#94a3b8' }}>{step.content}</p>
                </div>
              </div>

              {currentStep === index && (
                <div style={{ marginTop: '1.5rem' }}>
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      style={{
                        backgroundColor: '#0f172a',
                        borderRadius: '0.5rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedInfo(expandedInfo === detailIndex ? null : detailIndex);
                        }}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: 'white',
                          cursor: 'pointer'
                        }}
                      >
                        {detail.title}
                        {expandedInfo === detailIndex ? <ChevronUp /> : <ChevronDown />}
                      </button>

                      {expandedInfo === detailIndex && (
                        <div style={{ padding: '1rem', borderTop: '1px solid #1e293b' }}>
                          <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
                            {detail.content}
                          </p>
                          <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '0.5rem' 
                          }}>
                            {detail.subPoints.map((point, pointIndex) => (
                              <div
                                key={pointIndex}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  padding: '0.5rem',
                                  backgroundColor: '#1e293b',
                                  borderRadius: '0.25rem',
                                  color: 'white'
                                }}
                              >
                                <CheckCircle size={16} style={{ marginRight: '0.5rem', color: '#0ea5e9' }} />
                                {point}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
