import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Sparkles, Zap, Target, Users } from "lucide-react";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AboutModal({ open, onOpenChange }: AboutModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#111827] text-gray-100 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">About Dision AI</DialogTitle>
          <DialogDescription className="text-gray-400">
            Discover how Dision AI is transforming businesses through intelligent automation.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-gray-300">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Who We Are</h3>
            </div>
            <p className="mb-4">
              Dision AI is a cutting-edge technology company specializing in AI-powered business automation solutions. We help businesses transform their operations through intelligent automation, ensuring they never miss a lead and maximize their growth potential.
            </p>
            <p>
              Founded with a vision to make advanced AI technology accessible to businesses of all sizes, we've developed innovative solutions that seamlessly integrate with existing workflows and deliver measurable results.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            </div>
            <p>
              Our mission is to empower businesses with intelligent automation that drives efficiency, enhances customer engagement, and accelerates growth. We believe that every business deserves access to enterprise-level AI solutions without the complexity or high costs typically associated with advanced technology.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI Business Automation</h3>
            </div>
            <p className="mb-4">
              At Dision AI, we specialize in comprehensive AI business automation solutions that revolutionize how companies operate:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1F2937] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Intelligent Lead Management</h4>
                <p className="text-sm">Automated lead capture, qualification, and nurturing powered by AI to ensure no opportunity is missed.</p>
              </div>
              <div className="bg-[#1F2937] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">24/7 Customer Engagement</h4>
                <p className="text-sm">AI-driven chatbots and automated responses that keep your customers engaged around the clock.</p>
              </div>
              <div className="bg-[#1F2937] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Workflow Automation</h4>
                <p className="text-sm">Streamline repetitive tasks and complex workflows with intelligent automation tailored to your business.</p>
              </div>
              <div className="bg-[#1F2937] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Data-Driven Insights</h4>
                <p className="text-sm">Leverage AI analytics to gain actionable insights and make informed business decisions.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Why Choose Dision AI</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-white">Proven Expertise:</strong> Our team combines deep AI knowledge with practical business experience to deliver solutions that actually work.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-white">Customized Solutions:</strong> We understand that every business is unique, and we tailor our automation solutions to fit your specific needs.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-white">Seamless Integration:</strong> Our solutions integrate smoothly with your existing tools and platforms, minimizing disruption.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-white">Ongoing Support:</strong> We're committed to your success with dedicated support and continuous optimization of your automation systems.
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/20">
            <h3 className="text-lg font-semibold text-white mb-3">Ready to Transform Your Business?</h3>
            <p className="mb-4">
              Join hundreds of businesses that have already automated their operations with Dision AI. Let us help you unlock the full potential of AI automation.
            </p>
            <p className="text-sm text-gray-400">
              Contact us at <a href="mailto:disionaii@gmail.com" className="text-blue-400 hover:text-blue-300">disionaii@gmail.com</a> to get started.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}