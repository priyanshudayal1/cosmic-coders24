"use client";
import ServiceHero from "@/components/Services/ServiceHero";
import ResumeForm from "@/components/Careers/ResumeForm";
import CTACard from "@/components/ui/CTACard";

export default function Careers() {
  const handleApplyClick = (e) => {
    e.preventDefault();
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#0F061A] text-white selection:bg-purple-500/30">
      <main className="grow">
        <ServiceHero
          title="Join Our"
          highlightedText="Team"
          subtitle="Be part of a creative, innovative team that's shaping the future of digital experiences. We're always looking for talented individuals who are passionate about their craft."
          ctaText="Apply Now"
          ctaHref="#apply"
          onCtaClick={handleApplyClick}
        />
        {/* Application Form Section */}
        <section className="py-20 px-4" id="apply">
          <div className="max-w-3xl mx-auto">
            <ResumeForm showRoleDropdown={true} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <CTACard
            title="Don't See Your Role?"
            description="We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."
            buttonText="Contact Us"
            buttonHref="/about-contact"
          />
        </section>
      </main>
    </div>
  );
}
