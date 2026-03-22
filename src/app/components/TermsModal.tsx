import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsModal({ open, onOpenChange }: TermsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#111827] text-gray-100 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Terms of Use</DialogTitle>
          <DialogDescription className="text-gray-400">
            Please read these terms and conditions carefully before using our services.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-sm text-gray-300">
          <p className="text-gray-400">Last updated March 22, 2026</p>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">AGREEMENT TO OUR LEGAL TERMS</h3>
            <p className="mb-3">
              We are Dision AI ("Company," "we," "us," "our").
            </p>
            <p className="mb-3">
              We operate, as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
            </p>
            <p className="mb-3">
              You can contact us by email at disionaii@gmail.com.
            </p>
            <p className="mb-3">
              These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Dision AI, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong className="text-white">IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">TABLE OF CONTENTS</h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>OUR SERVICES</li>
              <li>INTELLECTUAL PROPERTY RIGHTS</li>
              <li>USER REPRESENTATIONS</li>
              <li>PROHIBITED ACTIVITIES</li>
              <li>USER GENERATED CONTRIBUTIONS</li>
              <li>CONTRIBUTION LICENSE</li>
              <li>SERVICES MANAGEMENT</li>
              <li>TERM AND TERMINATION</li>
              <li>MODIFICATIONS AND INTERRUPTIONS</li>
              <li>GOVERNING LAW</li>
              <li>DISPUTE RESOLUTION</li>
              <li>CORRECTIONS</li>
              <li>DISCLAIMER</li>
              <li>LIMITATIONS OF LIABILITY</li>
              <li>INDEMNIFICATION</li>
              <li>USER DATA</li>
              <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
              <li>MISCELLANEOUS</li>
              <li>CONTACT US</li>
            </ol>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">1. OUR SERVICES</h3>
            <p>
              The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">2. INTELLECTUAL PROPERTY RIGHTS</h3>
            <h4 className="font-semibold text-white mb-2">Our intellectual property</h4>
            <p className="mb-3">
              We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
            </p>
            <p className="mb-3">
              Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.
            </p>
            
            <h4 className="font-semibold text-white mb-2 mt-4">Your use of our Services</h4>
            <p className="mb-3">
              Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">3. USER REPRESENTATIONS</h3>
            <p className="mb-3">By using the Services, you represent and warrant that:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>You have the legal capacity and you agree to comply with these Legal Terms</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the Services through automated or non-human means</li>
              <li>You will not use the Services for any illegal or unauthorized purpose</li>
              <li>Your use of the Services will not violate any applicable law or regulation</li>
            </ol>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">4. PROHIBITED ACTIVITIES</h3>
            <p className="mb-3">
              You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Systematically retrieve data or other content from the Services to create or compile a collection, compilation, database, or directory without written permission from us</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Services</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services</li>
              <li>Use any information obtained from the Services in order to harass, abuse, or harm another person</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
              <li>Use the Services in a manner inconsistent with any applicable laws or regulations</li>
              <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">5. USER GENERATED CONTRIBUTIONS</h3>
            <p>
              The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">6. CONTRIBUTION LICENSE</h3>
            <p className="mb-3">
              You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
            </p>
            <p>
              By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">7. SERVICES MANAGEMENT</h3>
            <p>We reserve the right, but not the obligation, to:</p>
            <ol className="list-decimal pl-6 space-y-1 mt-2">
              <li>Monitor the Services for violations of these Legal Terms</li>
              <li>Take appropriate legal action against anyone who violates the law or these Legal Terms</li>
              <li>Refuse, restrict access to, limit the availability of, or disable any of your Contributions</li>
              <li>Remove from the Services or otherwise disable all files and content that are excessive in size or burdensome to our systems</li>
              <li>Otherwise manage the Services in a manner designed to protect our rights and property</li>
            </ol>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">8. TERM AND TERMINATION</h3>
            <p className="mb-3">
              These Legal Terms shall remain in full force and effect while you use the Services. <strong className="text-white">WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES TO ANY PERSON FOR ANY REASON OR FOR NO REASON.</strong>
            </p>
            <p>
              We may terminate your use or participation in the Services or delete any content or information that you posted at any time, without warning, in our sole discretion.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">9. MODIFICATIONS AND INTERRUPTIONS</h3>
            <p className="mb-3">
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice.
            </p>
            <p>
              We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">10. GOVERNING LAW</h3>
            <p>
              These Legal Terms shall be governed by and defined following the laws of India. Dision AI and yourself irrevocably consent that the courts shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">11. DISPUTE RESOLUTION</h3>
            <h4 className="font-semibold text-white mb-2">Informal Negotiations</h4>
            <p className="mb-3">
              To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms, the Parties agree to first attempt to negotiate any Dispute informally for at least 40 days before initiating arbitration.
            </p>
            
            <h4 className="font-semibold text-white mb-2">Binding Arbitration</h4>
            <p className="mb-3">
              Any dispute arising out of or in connection with these Legal Terms shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber according to their Rules.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">12. CORRECTIONS</h3>
            <p>
              There may be information on the Services that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">13. DISCLAIMER</h3>
            <p className="mb-3">
              <strong className="text-white">THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.</strong> YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">14. LIMITATIONS OF LIABILITY</h3>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">15. INDEMNIFICATION</h3>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand made by any third party due to or arising out of your use of the Services, breach of these Legal Terms, or violation of the rights of a third party.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">16. USER DATA</h3>
            <p>
              We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h3>
            <p>
              Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">18. MISCELLANEOUS</h3>
            <p className="mb-3">
              These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-3">19. CONTACT US</h3>
            <p>
              In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at: disionaii@gmail.com
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}