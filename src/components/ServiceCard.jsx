import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const colors = [
    'from-blue-500 to-blue-400',
    'from-purple-500 to-purple-400',
    'from-green-500 to-green-400',
    'from-red-500 to-red-400',
    'from-yellow-500 to-yellow-400',
    'from-pink-500 to-pink-400',
  ];

  const colorClass = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${colorClass} text-white`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 flex-1">{description}</p>
      <a 
        href="#contact" 
        className="mt-6 inline-flex items-center text-primary-600 font-medium group"
      >
        Learn more
        <svg 
          className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
