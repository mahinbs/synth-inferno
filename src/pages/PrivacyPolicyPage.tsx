import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0F21] to-[#13162B]">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-[#B0B3C3] mb-8">Effective Date: July 14, 2025</p>

          <div className="space-y-8">
            <p className="mb-6 text-[#E6E6E6]">At Dee&Cee Labs, your privacy is not just a legal obligation—it's a cornerstone of trust in every interaction we have. This Privacy Policy explains how we collect, use, store, and protect your personal and business information when you engage with our website, platforms, services, or communicate with us directly.</p>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">1. Who We Are</h2>
              <p className="mb-4 text-[#B0B3C3]">Dee&Cee Labs is a digital engineering company specializing in AI-driven ecosystem design, enterprise-grade chatbot solutions, and intelligent automation. We serve global clients with high standards for security, performance, and compliance.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">2. Information We Collect</h2>
              <ul className="list-disc ml-6 text-[#B0B3C3] space-y-1">
                <li><strong>Personal Info:</strong> Name, email, phone, job title, company, IP, location</li>
                <li><strong>Business Info:</strong> Project requirements, use-cases, platform/integration preferences</li>
                <li><strong>Technical Info:</strong> Device/browser info, session data</li>
                <li><strong>Cookies:</strong> We use tools like Google Analytics; you can manage via browser settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">3. How We Use Your Information</h2>
              <ul className="list-disc ml-6 text-[#B0B3C3] space-y-1">
                <li>Personalizing our services</li>
                <li>Responding to inquiries</li>
                <li>Improving our products</li>
                <li>Sending updates with your consent</li>
                <li>Ensuring compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">4. How We Share Your Info</h2>
              <p className="mb-4 text-[#B0B3C3]">We do not sell or trade your info. We may share it with trusted partners or legal authorities under strict confidentiality.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">5. Data Security</h2>
              <p className="mb-4 text-[#B0B3C3]">We use encryption, secure cloud infrastructure, and role-based access control. While no system is 100% secure, we proactively protect your data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">6. Your Rights</h2>
              <ul className="list-disc ml-6 text-[#B0B3C3] space-y-1">
                <li>Access, correct, or delete your data</li>
                <li>Withdraw consent anytime</li>
                <li>Object to data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">7. Data Retention</h2>
              <p className="mb-4 text-[#B0B3C3]">We keep data only as long as needed to fulfill services or meet legal obligations.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">8. Third-Party Links</h2>
              <p className="mb-4 text-[#B0B3C3]">We are not responsible for external website practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">9. International Transfers</h2>
              <p className="mb-4 text-[#B0B3C3]">Your data may be processed outside your country. We ensure data protection across all jurisdictions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">10. Updates to This Policy</h2>
              <p className="mb-4 text-[#B0B3C3]">We update this policy as needed. Major changes will be notified via email or on the website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-2">11. Contact Us</h2>
              <p className="mb-1 text-[#B0B3C3]">Dee&Cee Labs</p>
              <p className="mb-1 text-[#B0B3C3]">Email: <a href="mailto:privacy@deenceelabs.com" className="text-blue-400 underline">privacy@deenceelabs.com</a></p>
              <p className="text-[#B0B3C3]">Website: www.deenceelabs.com</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;