import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Target,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';

const features = [
  {
    name: 'Data-Driven',
    description: 'We base our strategies on real data and analytics to ensure measurable results.',
    icon: BarChart3,
  },
  {
    name: 'Focused on Growth',
    description: 'Our sole focus is on growing your business and increasing your revenue.',
    icon: Target,
  },
  {
    name: 'Rapid Execution',
    description: 'We move quickly to implement strategies and deliver results faster.',
    icon: Zap,
  },
  {
    name: 'Customer-Centric',
    description: 'Your success is our success. We prioritize your business goals above all else.',
    icon: Users,
  },
];

const services = [
  {
    name: 'Growth Strategy',
    description: 'Comprehensive plans to scale your business efficiently.',
    icon: BarChart3,
  },
  {
    name: 'Digital Marketing',
    description: 'Targeted campaigns to reach your ideal customers.',
    icon: Target,
  },
  {
    name: 'Content Creation',
    description: 'Engaging content that converts visitors into customers.',
    icon: Zap,
  },
  {
    name: 'Analytics',
    description: 'Data-driven insights to optimize your marketing efforts.',
    icon: Users,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Client Logos */}
        <ClientLogos />
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Zing Digital</h2>
              <p className="text-gray-600">
                We combine cutting-edge technology with proven marketing strategies to deliver exceptional results for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600">
                Comprehensive digital marketing solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-6">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <a href="#" className="text-primary-600 font-medium inline-flex items-center group">
                      Learn more
                      <ChevronRight className="ml-1 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-primary-100 hover:bg-primary-200 transition-colors duration-200"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your business?</h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Let's discuss how we can help you achieve your marketing goals and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                >
                  Get a Free Audit
                </a>
                <a
                  href="#contact"
                  className="btn border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 text-lg font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
