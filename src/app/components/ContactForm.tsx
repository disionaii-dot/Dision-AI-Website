import { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessDescription: '',
    helpNeeded: '',
    biggestProblem: '',
    demoCall: 'yes'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `
*New Demo Request*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Business Name:* ${formData.businessName}
*What does your business do?* ${formData.businessDescription}
*What do you need help with?* ${formData.helpNeeded}
*Biggest Problem:* ${formData.biggestProblem}
*Demo Call Requested:* ${formData.demoCall}
    `.trim();

    // Send to WhatsApp
    const whatsappUrl = `https://wa.me/917481952818?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        businessDescription: '',
        helpNeeded: '',
        biggestProblem: '',
        demoCall: 'yes'
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact-form" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0B0F19]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-blue-600/30 to-blue-500/30 rounded-3xl blur-2xl"></div>
          
          {/* Card */}
          <div className="relative p-8 md:p-12 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/30 rounded-3xl">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/40">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your Free AI Demo
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-8">
              Fill out the form below and we'll set up your AI automation in 48 hours
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone & Business Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              {/* Business Description */}
              <div>
                <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-300 mb-2">
                  What does your business do? *
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  required
                  value={formData.businessDescription}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Briefly describe your business..."
                />
              </div>

              {/* Help Needed */}
              <div>
                <label htmlFor="helpNeeded" className="block text-sm font-medium text-gray-300 mb-2">
                  What do you need help with? *
                </label>
                <textarea
                  id="helpNeeded"
                  name="helpNeeded"
                  required
                  value={formData.helpNeeded}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Tell us what you need help with..."
                />
              </div>

              {/* Biggest Problem */}
              <div>
                <label htmlFor="biggestProblem" className="block text-sm font-medium text-gray-300 mb-2">
                  What is your biggest problem right now? *
                </label>
                <textarea
                  id="biggestProblem"
                  name="biggestProblem"
                  required
                  value={formData.biggestProblem}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="What's your biggest challenge or pain point?"
                />
              </div>

              {/* Demo Call */}
              <div>
                <label htmlFor="demoCall" className="block text-sm font-medium text-gray-300 mb-2">
                  Do you want a free demo call? *
                </label>
                <select
                  id="demoCall"
                  name="demoCall"
                  required
                  value={formData.demoCall}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="yes">Yes, I want a free demo call</option>
                  <option value="no">No, just send me information</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 text-white shadow-green-500/40'
                      : 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-6 h-6" />
                      Request Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Submit Demo Request
                    </>
                  )}
                </button>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 pt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">Setup in 48 hours or less</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">No commitment required</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
