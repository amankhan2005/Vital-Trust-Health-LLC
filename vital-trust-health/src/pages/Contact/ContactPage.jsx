import Container from "../../components/layout/Container";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";

const ContactPage = () => {
  return (
    <section className="bg-slate-50 min-h-screen relative overflow-hidden">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-[#2F9E8F] via-[#3EB8A7] to-[#155E54] text-white pt-20 pb-32 relative">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full"></div>

        <Container className="relative z-10 text-center">
          <span
            className="inline-block bg-white/10 border border-white/20 text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
            data-aos="fade-down"
          >
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            We're here to listen and support you. Reach out today to start your journey towards better mental health.
          </p>
        </Container>
      </div>

      {/* CONTENT SECTION */}
      <Container>
        <div className="relative z-10 -mt-20 grid lg:grid-cols-5 gap-8">

          {/* CONTACT FORM - Takes 3 columns (60%) */}
          <div className="lg:col-span-3" data-aos="fade-right">
            <ContactForm />
          </div>

          {/* CONTACT INFO - Takes 2 columns (40%) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="lg:sticky top-24" data-aos="fade-left">
              <ContactInfo />

              {/* Optional: Map or Extra Info Card */}


              {/* <div className="bg-slate-100 rounded-3xl overflow-hidden mt-6 shadow-lg border border-slate-100 h-48 relative group">
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                 
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">

                  <iframe
                    src="https://www.google.com/maps?q=1205+Lobo+Court,+Abingdon+MD+21009&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                  />

             
                  <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-xl p-4 rounded-xl shadow-lg">
                    <h4 className="font-bold text-slate-800">Our Location</h4>
                    <p className="text-sm text-slate-600">
                      1205 Lobo Court,<br />
                      Abingdon, MD 21009
                    </p>
                  </div>

                </div>
              </div> */}

              
            </div>
          </div>

        </div>
      </Container>

      {/* PADDING AT BOTTOM */}
      <div className="h-20"></div>

    </section>
  );
};

export default ContactPage;