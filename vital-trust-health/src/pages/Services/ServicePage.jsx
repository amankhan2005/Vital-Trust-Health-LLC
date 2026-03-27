 import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";
import Container from "../../components/layout/Container"; // ✅ ADD THIS

const Services = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-96 h-96 bg-teal-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ✅ FIX: Wrap everything inside Container */}
      <Container>

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-[#F97316] text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Our Services
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            Complete Mental Health <span className="text-[#3EB8A7]">Care Solutions</span>
          </h1>

          <p className="text-slate-500 max-w-2xl mx-auto">
            Explore all our specialized services designed to support your mental well-being,
            therapy needs, and medication management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s, i) => (
            <Link
              key={i}
              to={`/services/${s.slug}`}
              className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={`/images/services/${s.slug}.jpg`}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#3EB8A7]">
                  {s.title}
                </h3>

                <p className="text-slate-500 text-sm mb-4">
                  {s.desc}
                </p>

                <span className="text-[#F97316] font-semibold text-sm">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </Container>

    </section>
  );
};

export default Services;