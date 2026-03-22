import { Bot, Zap, Calendar, Mail, BarChart, CheckCircle2 } from 'lucide-react';

export function Solution() {
  const features = [
    {
      icon: Bot,
      title: "Instant replies 24/7",
      description: "AI responds to Instagram + WhatsApp messages in seconds, any time of day"
    },
    {
      icon: Zap,
      title: "Automatic lead capture & qualification",
      description: "Smart AI qualifies leads and routes them to the right place"
    },
    {
      icon: Calendar,
      title: "Smart appointment booking system",
      description: "Customers can book appointments directly through chat"
    },
    {
      icon: Mail,
      title: "Automated follow-ups",
      description: "Email + WhatsApp follow-ups keep leads warm automatically"
    },
    {
      icon: BarChart,
      title: "Built-in analytics to track leads",
      description: "See exactly where your leads come from and how they convert"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0B0F19]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-4">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We automate your business<br />with AI
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our AI automation system works 24/7 to capture leads, respond instantly, and book appointments
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/40 transition-all h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Fully automated system — works 24/7 while you sleep</span>
          </div>
        </div>
      </div>
    </section>
  );
}
