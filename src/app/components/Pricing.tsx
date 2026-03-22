import { Check, Zap, Flame, Rocket, MessageSquare, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/917481952818?text=Hi%20I%20want%20AI%20automation";

export function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      badge: null,
      setupPrice: "₹5,999",
      monthlyPrice: "₹3,999",
      description: "Perfect for small businesses getting started with automation",
      features: [
        "WhatsApp Automation",
        "Instagram Auto Reply",
        "Basic Chatbot",
        "Lead Capture",
        "Basic Follow-up"
      ],
      icon: Zap,
      popular: false
    },
    {
      name: "Growth Plan",
      badge: "Most Popular 🔥",
      setupPrice: "₹9,999",
      monthlyPrice: "₹6,999",
      description: "For businesses ready to scale with complete automation",
      features: [
        "Instagram + WhatsApp Automation",
        "Booking System",
        "Follow-ups (Email + WhatsApp)",
        "CRM + Lead Tracking",
        "Analytics Dashboard",
        "Priority Support"
      ],
      icon: Flame,
      popular: true
    },
    {
      name: "Pro Plan",
      badge: "Scaling 🚀",
      setupPrice: "₹12,999",
      monthlyPrice: "₹8,999",
      description: "Complete automation suite for serious growth",
      features: [
        "Full AI Automation System",
        "Multi-channel automation",
        "Funnel setup",
        "Advanced analytics",
        "Custom automation",
        "Dedicated support"
      ],
      icon: Rocket,
      popular: false
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0B0F19]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[200px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No hidden fees. Get your AI system live in 48 hours.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className="relative group">
              {/* Glow Effect - Stronger for popular */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.popular ? 'from-blue-500/40 to-blue-600/40' : 'from-blue-500/20 to-transparent'} rounded-3xl blur-xl ${plan.popular ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}></div>
              
              {/* Card */}
              <div className={`relative p-8 bg-[#1F2937]/50 backdrop-blur-sm border ${plan.popular ? 'border-blue-500/50' : 'border-blue-500/20'} rounded-3xl hover:border-blue-400/60 transition-all ${plan.popular ? 'scale-105 md:scale-110' : 'hover:scale-105'}`}>
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">{plan.setupPrice}</span>
                    <span className="text-gray-400">setup</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-blue-400">{plan.monthlyPrice}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white/5 text-white border border-blue-500/30'} rounded-xl font-semibold hover:scale-105 transition-all group`}
                >
                  <MessageSquare className="w-5 h-5" />
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center">
          <p className="text-gray-400">
            All plans include onboarding, training, and 30-day support. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
