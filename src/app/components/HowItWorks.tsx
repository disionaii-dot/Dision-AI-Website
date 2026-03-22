import { MessageSquare, Sparkles, Calendar, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Customer sends a message",
      description: "Your customer reaches out via Instagram or WhatsApp with a question or inquiry"
    },
    {
      number: "02",
      icon: Sparkles,
      title: "AI replies instantly & qualifies the lead",
      description: "Our AI responds in seconds, answers questions, and determines if they're a qualified lead"
    },
    {
      number: "03",
      icon: Calendar,
      title: "Customer books automatically",
      description: "The AI seamlessly guides them to book an appointment that fits their schedule"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Lead is tracked & followed up",
      description: "Every interaction is logged, tracked, and followed up automatically until conversion"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0B0F19]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From first message to booked appointment in minutes
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              )}
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/30">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 rounded-xl">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20 rounded-2xl blur-xl"></div>
          <div className="relative p-6 md:p-8 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Fully automated system — works 24/7</h3>
            </div>
            <p className="text-gray-400">No manual work required. Your AI assistant never sleeps, never takes breaks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
