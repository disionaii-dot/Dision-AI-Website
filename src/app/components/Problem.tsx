import { AlertCircle, MessageCircleX, TrendingDown, XCircle, BarChart3 } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: MessageCircleX,
      title: "Slow or no replies to messages",
      description: "Customers leave when they don't get instant responses"
    },
    {
      icon: TrendingDown,
      title: "Missed leads from Instagram & WhatsApp",
      description: "Potential customers slip through the cracks daily"
    },
    {
      icon: XCircle,
      title: "No follow-up system = lost sales",
      description: "Without automated follow-ups, leads go cold"
    },
    {
      icon: BarChart3,
      title: "No visibility on leads and performance",
      description: "You're flying blind without proper tracking"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] to-[#111827]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 backdrop-blur-sm border border-red-500/20 mb-4">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Are you losing customers<br />every day?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Most businesses lose 60%+ of potential customers due to slow responses and lack of automation
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 bg-[#1F2937]/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-red-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                    <p className="text-gray-400">{problem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
