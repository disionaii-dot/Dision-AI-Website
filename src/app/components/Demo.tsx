import { MessageCircle, CheckCircle2, Star, Quote } from 'lucide-react';

export function Demo() {
  const chatMessages = [
    { sender: "customer", text: "Hi, I'm interested in booking a consultation" },
    { sender: "ai", text: "Hello! I'd be happy to help you book a consultation. May I know what service you're interested in?" },
    { sender: "customer", text: "Personal training session" },
    { sender: "ai", text: "Great choice! I have availability on Wednesday at 10 AM or Friday at 3 PM. Which works better for you?" },
    { sender: "customer", text: "Friday at 3 PM works" },
    { sender: "ai", text: "Perfect! Your appointment is confirmed for Friday, March 20 at 3:00 PM. You'll receive a confirmation message shortly. Looking forward to seeing you!" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Gym Owner, Mumbai",
      text: "We increased our leads by 3x in just 2 months. The AI handles all Instagram inquiries and books appointments automatically!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      business: "Beauty Salon, Delhi",
      text: "No more missed messages! Every customer gets instant replies even at midnight. My bookings have doubled.",
      rating: 5
    },
    {
      name: "Amit Patel",
      business: "Real Estate Agent, Bangalore",
      text: "The follow-up automation is a game changer. My conversion rate went from 20% to 45% in 3 months.",
      rating: 5
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
            See It In Action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how our AI handles customer conversations seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Chat Demo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 rounded-3xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.sender === 'customer' 
                        ? 'bg-blue-500 text-white rounded-br-sm' 
                        : 'bg-[#111827] text-gray-200 border border-gray-700 rounded-bl-sm'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Success Badge */}
              <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">Appointment booked automatically in 30 seconds</span>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6 bg-[#1F2937]/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/40 transition-all">
                  <Quote className="w-8 h-8 text-blue-400/30 mb-3" />
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>

                  {/* Author */}
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
