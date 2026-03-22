import { Instagram, MessageCircle, Database, Calendar, Mail, LineChart, Activity } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Instagram,
      title: "Instagram Auto Reply System",
      description: "Never miss a DM again"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Automation",
      description: "Reply instantly, 24/7"
    },
    {
      icon: Database,
      title: "Lead Capture System",
      description: "Turn visitors into paying customers"
    },
    {
      icon: Calendar,
      title: "Appointment Booking System",
      description: "Fill your calendar automatically"
    },
    {
      icon: Mail,
      title: "Follow-up Automation",
      description: "Stay top of mind effortlessly"
    },
    {
      icon: LineChart,
      title: "CRM Setup & Lead Tracking",
      description: "Know where every lead comes from"
    },
    {
      icon: Activity,
      title: "Analytics Tracking",
      description: "Measure what matters most"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our AI Automation Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete automation solutions tailored for your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/40 hover:scale-105 transition-all h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-500 group-hover:to-blue-600 transition-all">
                  <service.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
