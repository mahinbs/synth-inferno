import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0F21] to-[#13162B]">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-400 text-sm font-medium">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-[#B0B3C3] max-w-2xl mx-auto leading-relaxed">
              Effective Date: July 14, 2025
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-[#1C1E2F]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 mb-12 hover:border-white/20 transition-all duration-300">
            <p className="text-lg text-[#E6E6E6] leading-relaxed">
              At Dee&Cee Labs, your privacy is not just a legal obligation—it's a cornerstone of trust in every interaction we have. This Privacy Policy explains how we collect, use, store, and protect your personal and business information when you engage with our website, platforms, services, or communicate with us directly.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-8">
            {/* Section 1 */}
            <div className="bg-[#1C1E2F]/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 md:p-8 hover:bg-[#1C1E2F]/50 hover:border-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">1</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-white mb-4">Who We Are</h2>
                  <p className="text-[#B0B3C3] leading-relaxed">
                    Dee&Cee Labs is a digital engineering company specializing in AI-driven ecosystem design, enterprise-grade chatbot solutions, and intelligent automation. We serve global clients with high standards for security, performance, and compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-[#1C1E2F]/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 md:p-8 hover:bg-[#1C1E2F]/50 hover:border-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#0D0F21]/50 rounded-lg p-4 border border-white/5">
                      <h3 className="text-blue-400 font-medium mb-2">Personal Info</h3>
                      <p className="text-[#B0B3C3] text-sm">Name, email, phone, job title, company, IP, location</p>
                    </div>
                    <div className="bg-[#0D0F21]/50 rounded-lg p-4 border border-white/5">
                      <h3 className="text-blue-400 font-medium mb-2">Business Info</h3>
                      <p className="text-[#B0B3C3] text-sm">Project requirements, use-cases, platform/integration preferences</p>
                    </div>
                    <div className="bg-[#0D0F21]/50 rounded-lg p-4 border border-white/5">
                      <h3 className="text-blue-400 font-medium mb-2">Technical Info</h3>
                      <p className="text-[#B0B3C3] text-sm">Device/browser info, session data</p>
                    </div>
                    <div className="bg-[#0D0F21]/50 rounded-lg p-4 border border-white/5">
                      <h3 className="text-blue-400 font-medium mb-2">Cookies</h3>
                      <p className="text-[#B0B3C3] text-sm">We use tools like Google Analytics; you can manage via browser settings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-[#1C1E2F]/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 md:p-8 hover:bg-[#1C1E2F]/50 hover:border-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">3</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                  <div className="space-y-3">
                    {[
                      "Personalizing our services",
                      "Responding to inquiries", 
                      "Improving our products",
                      "Sending updates with your consent",
                      "Ensuring compliance"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-[#B0B3C3]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sections 4-6 in a row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1C1E2F]/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:bg-[#1C1E2F]/50 hover:border-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4">4</div>
                <h3 className="text-lg font-semibold text-white mb-3">How We Share Your Info</h3>
                <p className="text-[#B0B3C3] text-sm leading-relaxed">We do not sell or trade your info. We may share it with trusted partners or legal authorities under strict confidentiality.</p>
              </div>
              
              <div className="bg-[#1C1E2F]/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:bg-[#1C1E2F]/50 hover:border-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4">5</div>
                <h3 className="text-lg font-semibold text-white mb-3">Data Security</h3>
                <p className="text-[#B0B3C3] text-sm leading-relaxed">We use encryption, secure cloud infrastructure, and role-based access control. While no system is 100% secure, we proactively protect your data.</p>
              </div>
              
              <div className="bg-[#1C1E2F]/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:bg-[#1C1E2F]/50 hover:border-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4">6</div>
                <h3 className="text-lg font-semibold text-white mb-3">Your Rights</h3>
                <div className="space-y-2 text-sm">
                  {["Access, correct, or delete your data", "Withdraw consent anytime", "Object to data processing"].map((right, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-[#B0B3C3]">{right}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sections 7-10 in smaller cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: 7, title: "Data Retention", content: "We keep data only as long as needed to fulfill services or meet legal obligations." },
                { num: 8, title: "Third-Party Links", content: "We are not responsible for external website practices." },
                { num: 9, title: "International Transfers", content: "Your data may be processed outside your country. We ensure data protection across all jurisdictions." },
                { num: 10, title: "Updates to This Policy", content: "We update this policy as needed. Major changes will be notified via email or on the website." }
              ].map((section) => (
                <div key={section.num} className="bg-[#1C1E2F]/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:bg-[#1C1E2F]/50 hover:border-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{section.num}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
                      <p className="text-[#B0B3C3] text-sm leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">11</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-white mb-6">Contact Us</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-blue-400 font-semibold mb-2">Company</div>
                      <div className="text-[#B0B3C3]">Dee&Cee Labs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-semibold mb-2">Email</div>
                      <a href="mailto:privacy@deenceelabs.com" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                        privacy@deenceelabs.com
                      </a>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-semibold mb-2">Website</div>
                      <div className="text-[#B0B3C3]">www.deenceelabs.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;