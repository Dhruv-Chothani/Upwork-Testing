import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Award, Users, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Manohara MC",
    role: "Founder & Senior Consultant",
    description: "With over 28 years of experience in classical homeopathy, Dr. Manohara has dedicated his life to healing through natural medicine. A pioneer in applying Dr. Prafful Vijaykar's predictive homeopathy techniques, he has successfully treated thousands of patients with conditions ranging from common ailments to complex chronic diseases.",
    specialties: ["Constitutional Treatment", "Chronic Diseases", "Research", "Cancer Support"],
    education: "BHMS, MD (Homeopathy)",
    experience: "28+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
  },
  {
    name: "Dr. Deepa Joshi",
    role: "Consultant Homeopath",
    description: "Specializing in women's health and pediatric care, Dr. Deepa brings compassionate expertise to every consultation. Her gentle approach and deep understanding of child psychology make her especially effective in treating young patients and addressing women's unique health concerns.",
    specialties: ["Women's Health", "Pediatrics", "Skin Disorders", "Hormonal Imbalances"],
    education: "BHMS",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
  },
  {
    name: "Dr. Umme Hafeefa",
    role: "Consultant Homeopath",
    description: "Expert in treating lifestyle disorders and mental health conditions with a gentle, understanding approach. Dr. Umme's background in psychology complements her homeopathic practice, enabling her to address the mental-emotional aspects of disease with particular insight.",
    specialties: ["Mental Health", "Lifestyle Disorders", "Allergies", "Anxiety & Depression"],
    education: "BHMS, Psychology Certification",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
  },
];

const Doctors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Team</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                Meet Our <span className="text-primary">Expert Doctors</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of dedicated homeopathic physicians combines decades of experience 
                with a deep commitment to classical homeopathic principles and compassionate patient care.
              </p>
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="rounded-2xl shadow-elevated w-full max-w-md mx-auto"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-3">
                        <p className="font-bold">{doctor.experience}</p>
                        <p className="text-xs">Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {doctor.name}
                    </h2>
                    <p className="text-primary font-semibold text-lg mb-4">{doctor.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {doctor.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span>{doctor.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Certified Homeopath</span>
                      </div>
                    </div>

                    <Link to="/book">
                      <Button variant="hero" size="lg">
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with one of our experienced doctors and take the 
              first step towards natural, holistic wellness.
            </p>
            <Link to="/book">
              <Button variant="hero" size="xl">
                Book Your Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
