import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart4,
  Search,
  Zap,
  MessageSquare,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Growth Strategy',
    description: 'Data-driven marketing strategies to scale your business and maximize ROI through customer acquisition and retention.',
    icon: BarChart4,
    features: [
      'Market Research & Analysis',
      'Customer Journey Mapping',
      'Competitive Analysis',
      'KPI & Goal Setting'
    ]
  },
  {
    title: 'Search Engine Optimization',
    description: 'Improve your website\'s visibility in search results with our comprehensive SEO services.',
    icon: Search,
    features: [
      'Keyword Research',
      'On-Page & Technical SEO',
      'Link Building',
      'Content Optimization'
    ]
  },
  {
    title: 'Performance Marketing',
    description: 'Maximize your ad spend with our performance-driven digital advertising campaigns.',
    icon: Zap,
    features: [
      'Paid Social Advertising',
      'PPC & Display Ads',
      'Retargeting Campaigns',
      'Conversion Rate Optimization'
    ]
  },
  {
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage your audience with strategic social media campaigns.',
    icon: MessageSquare,
    features: [
      'Content Strategy',
      'Community Management',
      'Influencer Partnerships',
      'Analytics & Reporting'
    ]
  },
  {
    title: 'Content Marketing',
    description: 'Create valuable content that attracts and retains customers through storytelling.',
    icon: Users,
    features: [
      'Content Strategy',
      'Blog & Article Writing',
      'Video Production',
      'Email Marketing'
    ]
  },
  {
    title: 'Marketing Automation',
    description: 'Streamline your marketing efforts with automated workflows and personalized campaigns.',
    icon: TrendingUp,
    features: [
      'Email Automation',
      'Lead Nurturing',
      'CRM Integration',
      'Behavioral Targeting'
    ]
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and challenges to create a tailored strategy.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Our team develops a customized marketing plan to achieve your objectives.'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'We implement the strategy with precision and attention to detail.'
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Continuous monitoring and refinement to ensure optimal performance.'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Everything you need to <span className="text-primary-600">grow faster</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                We offer a comprehensive suite of digital marketing services designed to help your business thrive in today's competitive landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="btn btn-primary px-8 py-4 text-lg font-semibold"
                >
                  Get Started
                </a>
                <Link
                  to="/services"
                  className="btn bg-white text-primary-700 border-2 border-primary-100 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
              <p className="text-gray-600">
                We deliver measurable results through innovative and data-driven marketing solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-primary-600 font-medium group mt-4"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-gray-600">
                A proven methodology to deliver exceptional results for your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary-600 text-white text-2xl font-bold flex items-center justify-center mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your business?</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's discuss how we can help you achieve your marketing goals and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                >
                  Get a Free Consultation
                </a>
                <a
                  href="tel:+15551234567"
                  className="btn border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 text-lg font-semibold"
                >
                  Call Us Now
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
