 import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";

const AboutPage = () => {
  // Data for clean mapping
  const highlights = [
    { icon: <IconLock />, title: "100% Confidential" },
    { icon: <IconBadge />, title: "Licensed Experts" },
    { icon: <IconGlobe />, title: "Online & In-person" },
    { icon: <IconHeart />, title: "Trusted Care" },
  ];

  const whyChooseUs = [
    { icon: <IconDocument />, title: "Personalized Plans", desc: "Tailored strategies designed specifically for your unique journey." },
    { icon: <IconUsers />, title: "Expert Team", desc: "Highly qualified professionals with years of experience." },
    { icon: <IconShield />, title: "Safe Environment", desc: "A judgment-free zone where you can speak freely." },
  ];

  const stats = [
    { num: "500+", label: "Clients Helped" },
    { num: "10+", label: "Expert Therapists" },
    { num: "95%", label: "Success Rate" },
    { num: "24/7", label: "Support Available" },
  ];

  const values = [
    { title: "Empathy", desc: "We listen to understand, not just to reply.", icon: <IconEmpathy /> },
    { title: "Confidentiality", desc: "Your privacy is our highest priority.", icon: <IconLock /> },
    { title: "Integrity", desc: "Honest and ethical care in every interaction.", icon: <IconIntegrity /> },
  ];

  return (
    <section className="bg-slate-50 relative overflow-hidden">

      {/* HERO SECTION */}
      <div className=" bg-gradient-to-br from-[#2F9E8F] via-[#3EB8A7] to-[#155E54] text-white pt-20 pb-32 relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full"></div>
        
        <Container className="relative z-10 text-center">
          <span 
            className="inline-block bg-white/10 border border-white/20 text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
            data-aos="fade-down"
          >
            Get To Know Us
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight" data-aos="fade-up">
            Compassionate Care for a <br />
            <span className="text-[#F97316]">Healthier Mind</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            At Vital Trust Health LLC, we are dedicated to providing a safe, supportive, and confidential environment for your mental well-being.
          </p>
        </Container>
      </div>

      {/* MAIN ABOUT SECTION */}
      <Container>
        <div className="lg:-mt-20 relative z-10 mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
            
            {/* Image Side */}
            <div className="relative" data-aos="fade-right">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#3EB8A7]/20 to-transparent rounded-3xl blur-xl"></div>
              <img
                src="/images/about.jpg"
                alt="Vital Trust Health Therapist Session"
                className="relative rounded-2xl shadow-lg w-full h-[450px] object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#F97316] text-white p-5 rounded-2xl shadow-xl hidden md:block" data-aos="zoom-in" data-aos-delay="300">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm opacity-90">Years Exp.</p>
              </div>
            </div>

            {/* Content Side */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                Who We Are
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Vital Trust Health LLC is dedicated to providing high-quality mental health services to individuals, couples, and families. We believe that mental well-being is essential for a fulfilling life.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our approach is centered around empathy, confidentiality, and evidence-based practices. We create a safe environment where clients can openly express themselves.
              </p>

              {/* Highlight Boxes */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-teal-200 transition-colors group"
                  >
                    <div className="text-[#3EB8A7] group-hover:text-[#F97316] transition-colors">
                      {item.icon}
                    </div>
                    <p className="font-semibold text-slate-700 text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="py-16 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-aos="fade-up">
              Why Choose Us
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="50">
              We combine professional expertise with genuine compassion to deliver the best care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 text-center group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-2xl text-[#3EB8A7] mb-6 group-hover:bg-[#3EB8A7] group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="py-16">
          <div className=" bg-gradient-to-br from-[#2F9E8F] via-[#3EB8A7] to-[#155E54] rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400/20 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {stats.map((s, i) => (
                <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-[#F97316] mb-2">{s.num}</h3>
                  <p className="text-white/80 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="py-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <span className="text-sm font-bold text-[#3EB8A7] uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-6">
              Evidence-Based & Holistic Care
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We follow a holistic and evidence-based approach that focuses on understanding your unique needs. Our therapies are designed to help you overcome challenges, build resilience, and improve overall well-being.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Whether you are facing stress, anxiety, or deeper emotional challenges, we provide the right guidance and support every step of the way.
            </p>
            
            <ul className="space-y-3">
              {["Cognitive Behavioral Therapy (CBT)", "Trauma-Informed Care", "Mindfulness Based Interventions"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 lg:order-2" data-aos="fade-left">
            <div className="absolute -inset-4 bg-orange-100 rounded-3xl -rotate-3 opacity-40"></div>
            <img
              src="/images/services/anxiety.webp"
              alt="Therapy Approach"
              className="relative rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-t-4 border-[#3EB8A7] shadow-sm hover:shadow-lg transition-shadow" data-aos="fade-up">
              <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center text-[#3EB8A7] mb-5">
                <IconEye />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To create a world where mental health is prioritized, stigma is removed, and everyone has access to support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-t-4 border-[#F97316] shadow-sm hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center text-[#F97316] mb-5">
                <IconTarget />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide compassionate, confidential, and effective mental health care that empowers individuals to heal and grow.
              </p>
            </div>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group" data-aos="flip-left" data-aos-delay={i * 100}>
                <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-[#3EB8A7] group-hover:bg-[#3EB8A7] group-hover:text-white transition-all duration-500 transform group-hover:scale-110 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="py-16">
          <div className="bg-gradient-to-r from-[#F97316] to-orange-600 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Healing Journey?
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                Take the first step towards a healthier mind today. We are here to support you.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-[#F97316] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:bg-slate-50 transition-all duration-300"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

// --- Icon Components (Keep these in a separate file or here for simplicity) ---

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconBadge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconDocument = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconEye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconEmpathy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconIntegrity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

export default AboutPage;