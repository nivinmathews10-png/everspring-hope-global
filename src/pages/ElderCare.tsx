import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Home, Utensils, Shield } from "lucide-react";

const ElderCare = () => {
  const services = [
    {
      icon: Home,
      title: "Safe Shelter",
      description: "Permanent and visiting residence for elderly widows",
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Three wholesome meals every day",
    },
    {
      icon: Shield,
      title: "Medical Care",
      description: "Basic healthcare and hygiene support",
    },
    {
      icon: Heart,
      title: "Spiritual Care",
      description: "Counseling and fellowship",
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
            Elder and Widows Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Jeevanahalli - Restoring Dignity in the Golden Years
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
                The Need We Address
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                The slums of Bengaluru are home to many elderly people—over 6% of some slum
                populations are aged 60 or above. Many women become widows at a young age and often
                face illiteracy, lack of basic care, and social neglect.
              </p>
              <div className="bg-blue/10 border-l-4 border-blue p-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground italic">
                  "In one study of women living in 40 slums, 19 out of 30 interviewed were widowed
                  at a young age, highlighting the urgent need for intervention."
                </p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Recognizing this critical need, Helping Hands India established the Widows Home in
                2014 in Jeevanahalli. Currently, five elderly widows live permanently in the Home,
                while another 26 visit daily for meals, fellowship, and support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              What We Provide
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg text-center card-hover"
                >
                  <service.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
                Nanjamma's Story
              </h2>
              <div className="bg-gradient-gold text-gold-foreground p-8 rounded-lg shadow-lg mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  One of the women who found refuge at the New Hope Elder and Widows Home had
                  endured years of neglect and abandonment. Left without family support, she
                  struggled daily with hunger, illness, and loneliness, and often faced ridicule
                  from neighbours.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Through the care of Helping Hands India, she received nutritious meals, medical
                  attention, clothing and shelter, and guidance to access government benefits. Most
                  importantly, she found a community of love and spiritual care.
                </p>
                <p className="text-xl font-heading font-bold text-center">
                  She died with smiles and joy on her face.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Restored Dignity",
                  description: "Helping elderly women regain self-respect and belonging",
                },
                {
                  title: "Independence",
                  description: "No longer dependent on others for daily care or survival",
                },
                {
                  title: "Improved Health",
                  description: "Regular meals and medical care strengthening physical well-being",
                },
                {
                  title: "Fulfillment of Life",
                  description: "Living with care, love, and purpose until peaceful departures",
                },
                {
                  title: "Financial Support",
                  description: "Monthly stipends enabling medicine and family support",
                },
                {
                  title: "Community Building",
                  description: "Fellowship and bonds with other widows and caregivers",
                },
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                >
                  <h3 className="text-xl font-heading font-bold mb-3">{achievement.title}</h3>
                  <p className="text-white/90">{achievement.description}</p>
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                A Testament to Compassion
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                This program stands as a living testimony that with compassion, care, and
                opportunity, even the most vulnerable can live a full, dignified, and empowered
                life.
              </p>
              <a
                href="/donate"
                className="inline-block bg-gold hover:bg-gold-dark text-gold-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all"
              >
                Support Elder Care
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElderCare;
