import { motion } from 'framer-motion';

const logos = [
  { name: 'TechCorp', logo: 'TechCorp' },
  { name: 'InnoVate', logo: 'InnoVate' },
  { name: 'Nexus', logo: 'Nexus' },
  { name: 'Quantum', logo: 'Quantum' },
  { name: 'Zenith', logo: 'Zenith' },
  { name: 'Apex', logo: 'Apex' },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary-600 mb-2">TRUSTED BY INNOVATIVE COMPANIES</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Join 200+ growing businesses</h2>
        </motion.div>

        <div className="relative
          before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-gray-50 before:to-transparent before:z-10
          after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-gray-50 after:to-transparent after:z-10
        ">
          <div className="overflow-hidden">
            <div className="flex items-center justify-center space-x-12 md:space-x-16 lg:space-x-24 animate-marquee whitespace-nowrap">
              {[...logos, ...logos].map((company, index) => (
                <div 
                  key={`${company.name}-${index}`}
                  className="inline-flex items-center justify-center px-4 py-3 text-gray-700 text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  {company.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: inline-block;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
