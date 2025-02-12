import { useState } from 'react';
import { Check } from 'lucide-react';
import ContactModal from './ContactModal';

export default function PricingSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Starter',
      avatars: 1,
      videos: 10,
      price: 1350,
      originalPrice: 1500,
      features: [
        '1 AI Avatar creation',
        '10 edited videos',
        'Commercial usage rights',
        'Priority support',
        'Video script assistance'
      ]
    },
    {
      name: 'Professional',
      avatars: 3,
      videos: 30,
      price: 3900,
      originalPrice: 4200,
      features: [
        '3 AI Avatar creations',
        '30 edited videos',
        'Commercial usage rights',
        'Priority support',
        'Video script assistance',
        'Custom branding',
        'Advanced editing options'
      ]
    },
    {
      name: 'Business',
      avatars: 5,
      videos: 60,
      price: 6900,
      originalPrice: 7600,
      features: [
        '5 AI Avatar creations',
        '60 edited videos',
        'Commercial usage rights',
        'Priority support',
        'Video script assistance',
        'Custom branding',
        'Advanced editing options',
        'Dedicated account manager'
      ]
    },
    {
      name: 'Enterprise',
      avatars: 5,
      videos: 90,
      price: 9500,
      originalPrice: 9850,
      features: [
        '5 AI Avatar creations',
        '90 edited videos',
        'Commercial usage rights',
        'Priority support',
        'Video script assistance',
        'Custom branding',
        'Advanced editing options',
        'Dedicated account manager',
        'Custom integration support'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Pricing
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Choose the perfect plan for your video marketing needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#75d031]/5 backdrop-blur-lg rounded-xl p-8 border border-[#75d031]/10 hover:border-[#75d031]/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="ml-2 text-gray-400 line-through">${plan.originalPrice}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {plan.avatars} avatar{plan.avatars > 1 ? 's' : ''} + {plan.videos} videos
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#75d031] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="w-full py-3 px-6 rounded-lg bg-[#75d031] text-white font-semibold hover:bg-[#4a8c13] transition-colors duration-300"
                onClick={() => {
                  setSelectedPlan(plan.name);
                  setIsContactModalOpen(true);
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          selectedPlan={selectedPlan}
        />
      </div>
    </section>
  );
}