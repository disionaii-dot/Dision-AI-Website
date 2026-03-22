import { Clock, Target, TrendingUp, Workflow, LineChart, CheckCircle2 } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Save hours of manual work",
      description: "Free up your time to focus on what matters — growing your business and serving customers"
    },
    {
      icon: Target,
      title: "Never miss a lead again",
      description: "Capture every inquiry that comes through Instagram and WhatsApp, even while you sleep"
    },
    {
      icon: TrendingUp,
      title: "Increase bookings & conversions",
      description: "Instant responses mean higher conversion rates and more booked appointments"
    },
    {
      icon: Workflow,
      title: "Fully automated sales system",
      description: "From first contact to booked appointment, everything runs on autopilot"
    },
    {
      icon: LineChart,
      title: "Data-driven insights",
      description: "Know exactly where your leads come from, response times, and conversion metrics"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-4">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Businesses Choose<br />Dision AI
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of businesses that automated their way to success
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-[#1F2937]/30 backdrop-blur-sm border border-blue-500/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
              3x
            </div>
            <p className="text-gray-400">More leads captured</p>
          </div>
          <div className="text-center p-6 bg-[#1F2937]/30 backdrop-blur-sm border border-blue-500/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-gray-400">Always available</p>
          </div>
          <div className="text-center p-6 bg-[#1F2937]/30 backdrop-blur-sm border border-blue-500/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
              48h
            </div>
            <p className="text-gray-400">Setup time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
