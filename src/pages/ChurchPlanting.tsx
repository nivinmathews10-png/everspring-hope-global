import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Church, Users, Heart, Book, Globe, TrendingUp } from "lucide-react";

const ChurchPlanting = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "Serving communities with love and practical support",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating spaces of fellowship and belonging",
    },
    {
      icon: Book,
      title: "Biblical Teaching",
      description: "Grounded in scripture and sound doctrine",
    },
    {
      icon: TrendingUp,
      title: "Holistic Development",
      description: "Spiritual, social, and economic empowerment",
    },
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      description: "Respecting and embracing local traditions",
    },
    {
      icon: Church,
      title: "Indigenous Leadership",
      description: "Raising up local leaders for sustainability",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-primary text-white pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-primary/85" />
        </div>
        
        {/* Church symbols animation */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0.5,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 4,
                repeat: Infinity,
                delay: i * 3,
              }}
            >
              <Church className="w-16 h-16" />
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Church Planting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Building Communities of Faith, Hope, and Transformation
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Church className="h-20 w-20 text-gold mx-auto mb-6" />
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Our Vision for Church Planting
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Church planting is at the heart of our mission to transform communities across
                India. We believe that vibrant, indigenous churches are essential for sustainable
                spiritual, social, and economic development in marginalized communities.
              </p>
            </motion.div>

            <div className="bg-blue/10 border-l-4 border-blue p-8 rounded-r-lg mb-12">
              <p className="text-lg text-foreground italic leading-relaxed">
                "Through establishing local churches, we create centers of hope where people
                experience God's love, find community, receive practical support, and discover their
                potential to transform their circumstances and communities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg card-hover"
                >
                  <value.icon className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
                How Churches Transform Communities
              </h2>
              
              {/* Church Community Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80"
                  alt="Church community gathering"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-gold text-gold-foreground p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-heading font-bold mb-4">Spiritual Growth</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span>
                        Biblical teaching that brings hope, healing, and transformation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span>
                        Prayer and worship creating spaces for encounter with God's presence
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span>Discipleship training equipping believers for ministry and service</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-heading font-bold text-primary mb-4">
                      Social Impact
                    </h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Community development initiatives</li>
                      <li>• Support for vulnerable populations</li>
                      <li>• Education and literacy programs</li>
                      <li>• Healthcare and wellness services</li>
                      <li>• Breaking caste and social barriers</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-heading font-bold text-primary mb-4">
                      Economic Empowerment
                    </h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Vocational training programs</li>
                      <li>• Micro-enterprise development</li>
                      <li>• Financial literacy education</li>
                      <li>• Savings and credit cooperatives</li>
                      <li>• Job creation and employment support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Church Planting Process */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">
              Our Church Planting Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Prayer & Research", desc: "Understanding community needs" },
                { step: "02", title: "Team Formation", desc: "Raising indigenous leaders" },
                { step: "03", title: "Launch & Growth", desc: "Building loving community" },
                { step: "04", title: "Multiplication", desc: "Sustainable expansion" },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
                >
                  <div className="text-4xl font-heading font-bold text-gold mb-3">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{phase.title}</h3>
                  <p className="text-white/80">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Partner With Us
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                Join us in planting churches that will transform communities for generations to
                come. Your partnership can help establish new centers of hope across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/donate"
                  className="bg-gold hover:bg-gold-dark text-gold-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all"
                >
                  Support Church Planting
                </a>
                <a
                  href="/genesis"
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChurchPlanting;
