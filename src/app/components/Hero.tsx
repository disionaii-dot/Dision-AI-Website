import { MessageSquare, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/917481952818?text=Hi%20I%20want%20AI%20automation";

const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const formSection = document.getElementById('contact-form');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19]"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">AI-Powered Business Automation</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
          Get 2x - 3x More Leads<br />& Bookings Using AI
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          Never miss a customer again — automate Instagram & WhatsApp replies, capture leads, and grow your business on autopilot.
        </p>

        {/* CTA Button */}
        <a 
          href="#contact-form"
          onClick={scrollToForm}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 group"
        >
          <MessageSquare className="w-5 h-5" />
          Book Free Demo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Trust Line */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <span>Setup in 48 hours</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <span>No technical skills needed</span>
          </div>
        </div>

        {/* Visual: AI Automation Flow */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Step 1 */}
            <div className="relative group flex-1 w-full md:w-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-6 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/40 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Chat</h3>
                <p className="text-gray-400 text-sm">AI responds instantly to customer messages</p>
              </div>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-8 h-8 text-blue-400 flex-shrink-0 rotate-90 md:rotate-0" />

            {/* Step 2 */}
            <div className="relative group flex-1 w-full md:w-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-6 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/40 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Booking</h3>
                <p className="text-gray-400 text-sm">Automatic appointment scheduling</p>
              </div>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-8 h-8 text-blue-400 flex-shrink-0 rotate-90 md:rotate-0" />

            {/* Step 3 */}
            <div className="relative group flex-1 w-full md:w-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-6 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/40 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Lead Tracking</h3>
                <p className="text-gray-400 text-sm">Track & follow up automatically</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}