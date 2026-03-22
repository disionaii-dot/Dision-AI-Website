import { Mail, Instagram, MessageSquare, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';
import { TermsModal } from './TermsModal';
import { AboutModal } from './AboutModal';

const WHATSAPP_LINK = "https://wa.me/917481952818?text=Hi%20I%20want%20AI%20automation";

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <footer className="relative py-12 px-4 overflow-hidden border-t border-gray-800">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] to-[#111827]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Dision AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered automation solutions for modern businesses. Never miss a lead again.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setAboutOpen(true)}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setPrivacyOpen(true)}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setTermsOpen(true)}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-left"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:disionaii@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1F2937] rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="break-all">disionaii@gmail.com</span>
              </a>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1F2937] rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span>WhatsApp</span>
              </a>

              <a 
                href="https://www.instagram.com/disionai?igsh=dnYzc3l1YTUzeWU="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1F2937] rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@disionai</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dision AI. All rights reserved. Built with ❤️ for businesses that want to grow.
          </p>
        </div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
      <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
      <AboutModal open={aboutOpen} onOpenChange={setAboutOpen} />
    </footer>
  );
}