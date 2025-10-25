import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Home, Utensils, Shield, Smile, TrendingUp } from "lucide-react";

const JordanCommunity = () => {
  const achievements = [
    {
      icon: Heart,
      title: "Restored Dignity",
      description: "Individuals regained self-respect, no longer needing to beg on streets",
    },
    {
      icon: Shield,
      title: "Health Protection",
      description: "No fatalities during COVID-19 pandemic through effective healthcare",
    },
    {
      icon: Home,
      title: "Medical Care",
      description: "Daily wound care by dedicated nurse with necessary medications",
    },
    {
      icon: Utensils,
      title: "Basic Needs",
      description: "Regular food, shelter, and stipend for daily necessities",
    },
    {
      icon: Smile,
      title: "Peaceful Departures",
      description: "Those who passed did so peacefully with smiles and comfort",
    },
    {
      icon: TrendingUp,
      title: "Social Inclusion",
      description: "Breaking isolation and building community support",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-primary text-white pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Jordan Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Jagurupadu, Andhra Pradesh - Dignity for the Marginalized
          </motion.p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
                Serving the Most Vulnerable
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                In 2015, a community support initiative was established in Jagurupadu, a village
                approximately 20 km from Peddapuram, Andhra Pradesh. This area is home to a
                significant population affected by leprosy—a chronic infectious disease that
                historically leads to social stigma, discrimination, and isolation.
              </p>
              <div className="bg-blue/10 border-l-4 border-blue p-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground italic">
                  "People affected by leprosy often face poverty, lack of access to healthcare, and
                  exclusion from society, making them one of the most vulnerable groups in rural
                  India."
                </p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Leprosy-affected individuals often experience social isolation, unemployment,
                malnutrition, and lack of education. Our initiative is critical for improving
                health, social inclusion, and overall quality of life for this marginalized
                community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              Key Achievements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg card-hover"
                >
                  <achievement.icon className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-foreground/80">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
                Our Comprehensive Support
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-gold text-gold-foreground p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-heading font-bold mb-4">Healthcare Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span>Dedicated nurse providing daily wound care and monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span>Access to necessary medications and medical supplies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span>Regular health check-ups and disease management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span>Protective measures during health crises like COVID-19</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-heading font-bold text-primary mb-3">
                      Daily Living Support
                    </h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Regular nutritious meals</li>
                      <li>• Safe shelter and accommodation</li>
                      <li>• Monthly stipend for necessities</li>
                      <li>• Clothing and hygiene supplies</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-heading font-bold text-primary mb-3">
                      Social Integration
                    </h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Community building activities</li>
                      <li>• Stigma reduction education</li>
                      <li>• Fellowship and support groups</li>
                      <li>• Spiritual care and counseling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Heart className="h-20 w-20 mx-auto mb-6 text-gold" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Transforming Isolation into Community
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                This program demonstrates the power of targeted community support in improving
                health, dignity, and social inclusion for one of the most marginalized groups in
                rural Andhra Pradesh.
              </p>
              <p className="text-2xl font-heading italic">
                "From being outcasts to living with dignity—from suffering alone to dying with
                peaceful smiles."
              </p>
            </motion.div>
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
                Join Us in Making a Difference
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                Your support can help us continue providing essential care, dignity, and hope to
                those who have been forgotten by society.
              </p>
              <a
                href="/donate"
                className="inline-block bg-gold hover:bg-gold-dark text-gold-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all"
              >
                Support Jordan Community
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JordanCommunity;
