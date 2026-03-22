import { MessageSquare } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/917481952818?text=Hi%20I%20want%20AI%20automation";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulsing rings */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
      <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></div>
      
      {/* Button */}
      <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 hover:shadow-green-500/70 hover:scale-110 transition-all duration-300">
        <MessageSquare className="w-7 h-7 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
}
