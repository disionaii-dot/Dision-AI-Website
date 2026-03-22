import { MessageSquare, ArrowRight, Sparkles, Clock } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/917481952818?text=Hi%20I%20want%20AI%20automation";

export function FinalCTA() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0B0F19]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-blue-600/30 to-blue-500/30 rounded-3xl blur-2xl"></div>
          
          {/* Card */}
          <div className="relative p-12 md:p-16 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/30 rounded-3xl text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/40">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to automate<br />your business?
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your AI system set up in just 48 hours and start capturing more leads automatically
            </p>

            {/* Benefits List */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>24/7 Automation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>No Technical Skills</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Free Demo Available</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all group"
              >
                <MessageSquare className="w-6 h-6" />
                Book Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">Setup completed in 48 hours or less</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
