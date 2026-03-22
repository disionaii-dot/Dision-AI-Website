import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyPolicyModal({ open, onOpenChange }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#111827] text-gray-100 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Privacy Policy</DialogTitle>
          <DialogDescription className="text-gray-400">
            Learn how Dision AI collects, uses, and protects your personal information.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-sm text-gray-300">
          <p className="text-gray-400">Last updated March 22, 2026</p>

          <section>
            <p>
              This Privacy Notice for Dision AI ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Visit our website at http://www.disionai.in or any website of ours that links to this Privacy Notice</li>
              <li>Engage with us in other related ways, including any marketing or events</li>
            </ul>
            <p className="mt-4">
              Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at disionaii@gmail.com.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">SUMMARY OF KEY POINTS</h3>
            <p className="mb-3">
              This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
            </p>
            <div className="space-y-3">
              <p><strong className="text-white">What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
              
              <p><strong className="text-white">Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
              
              <p><strong className="text-white">Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
              
              <p><strong className="text-white">How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">TABLE OF CONTENTS</h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>WHAT INFORMATION DO WE COLLECT?</li>
              <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
              <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
              <li>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
              <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
              <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
              <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
              <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
            </ol>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">1. WHAT INFORMATION DO WE COLLECT?</h3>
            <h4 className="font-semibold text-white mb-2">Personal information you disclose to us</h4>
            <p className="mb-2"><em>In Short: We collect personal information that you provide to us.</em></p>
            <p className="mb-3">
              We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </p>
            <p className="mb-2"><strong className="text-white">Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>names</li>
              <li>phone numbers</li>
              <li>email addresses</li>
              <li>business name</li>
              <li>account access (if required for service)</li>
              <li>contact preferences</li>
            </ul>
            <p className="mt-3"><strong className="text-white">Sensitive Information.</strong> We do not process sensitive information.</p>
            
            <h4 className="font-semibold text-white mb-2 mt-4">Information automatically collected</h4>
            <p className="mb-2"><em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></p>
            <p className="mb-3">
              We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
            <p className="mb-2"><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></p>
            <p className="mb-3">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To facilitate account creation and authentication and otherwise manage user accounts</li>
              <li>To deliver and facilitate delivery of services to the user</li>
              <li>To respond to user inquiries/offer support to users</li>
              <li>To send administrative information to you</li>
              <li>To fulfill and manage your orders</li>
              <li>To send you marketing and promotional communications</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
            <p className="mb-2"><em>In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.</em></p>
            <p className="mb-3">
              <strong className="text-white">Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
            <p className="mb-2"><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
            <p className="mb-3">
              We may use cookies and similar tracking technologies to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services.
            </p>
            <p className="mb-2"><strong className="text-white">Google Analytics</strong></p>
            <p>We may share your information with Google Analytics to track and analyze the use of the Services.</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h3>
            <p className="mb-2"><em>In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em></p>
            <p className="mb-3">
              As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions.
            </p>
            <p className="mb-2"><strong className="text-white">Our AI Products are designed for the following functions:</strong></p>
            <ul className="list-disc pl-6 mb-3">
              <li>AI automation</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
            <p className="mb-2"><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></p>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law. No purpose in this notice will require us keeping your personal information for longer than six (6) months past the termination of the user's account.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
            <p className="mb-2"><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
            <p>
              We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">8. DO WE COLLECT INFORMATION FROM MINORS?</h3>
            <p className="mb-2"><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
            <p>
              We do not knowingly collect, solicit data from, or market to children under 18 years of age. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">9. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
            <p className="mb-2"><em>In Short: You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></p>
            <p className="mb-3">
              <strong className="text-white">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time.
            </p>
            <p className="mb-3">
              <strong className="text-white">Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
            <p>
              Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">11. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
            <p className="mb-2"><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
            <p>
              We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
            <p className="mb-2">If you have questions or comments about this notice, you may email us at disionaii@gmail.com or contact us by post at:</p>
            <address className="not-italic pl-4">
              <p>Dision AI</p>
              <p>S/O Vivekanand Poddar, Mahagama</p>
              <p>Post -Mahagama, Thana -Mahagama, Dist: Godda</p>
              <p>Mahagama, Godda, Jharkhand 814154</p>
              <p>India</p>
            </address>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
            <p>
              Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}