import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, TrendingUp, Award, Users } from "lucide-react";

const Bhadrachalam = () => {
  const achievements = [
    {
      icon: Heart,
      title: "Healthy Growth",
      description: "Children who once suffered from hunger are now growing up strong and healthy",
    },
    {
      icon: TrendingUp,
      title: "Restored Dignity",
      description: "Overcome fear of low self-worth, now walking with dignity and confidence",
    },
    {
      icon: Award,
      title: "Education Excellence",
      description: "Learning in English medium schools has boosted confidence and skills",
    },
    {
      icon: Users,
      title: "Government Recognition",
      description: "Recognized by government departments for progress and resilience",
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
              backgroundImage: "url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-primary/85" />
        </div>
        
        {/* Leaves falling animation */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-300/20 text-4xl"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -50,
                rotate: 0,
              }}
              animate={{
                y: window.innerHeight + 50,
                rotate: 360,
                x: [null, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
            >
              🍃
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            New Hope Tribal Children's Home
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Bhadrachalam - From Despair to Dignity
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
                A Journey of Compassion
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  When Executive Director George Fernandes first visited the remote tribal villages
                  of Bhadrachalam in 2010, his heart was broken by the sight before him. Small
                  children were sitting on the ground, eating mud to fill their empty stomachs,
                  leading to swollen bellies, disease, and hopelessness.
                </p>
                <div className="bg-blue/10 border-l-4 border-blue p-6 my-8 rounded-r-lg">
                  <p className="text-lg text-foreground italic">
                    "Compelled by compassion, George made a bold decision—he purchased a piece of
                    land and established a Children's Home for 40 tribal children."
                  </p>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Today, these children, once deprived of food, clothing, and shelter, are grateful
                  testimonies of love and provision. Through Helping Hands India, they now receive:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-8">
                  <li>Three nutritious meals a day</li>
                  <li>Safe shelter and care</li>
                  <li>Access to education</li>
                  <li>Moral nurturing</li>
                </ul>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  What once was a place of despair has now become a home of hope where children are
                  not only surviving but thriving with dignity and a brighter future. The Children's
                  Home is restoring dignity and opening the doors of education—elevating these
                  children to stand with confidence and compete in today's society, even among the
                  elite.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              15 Years of Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-lg shadow-lg card-hover"
                >
                  <achievement.icon className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gold/10 border-l-4 border-gold p-8 rounded-r-lg"
            >
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Additional Milestones
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-gold mr-3">✓</span>
                  <span>
                    A few children received government sponsorships for teacher training courses
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">✓</span>
                  <span>
                    Some children represented at state level in Kho-Kho and Kabaddi tournaments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">✓</span>
                  <span>
                    From children who once had no food, clothing, or hope—today they stand as
                    living testimonies of transformation
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Transforming Lives, Restoring Hope
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                From eating mud to earning degrees, from hopelessness to becoming champions—these
                children are now ready to contribute positively to society and stand tall among
                their peers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bhadrachalam;
