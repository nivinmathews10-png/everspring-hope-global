import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, GraduationCap, Heart, Trophy, Users } from "lucide-react";

const Bangalore = () => {
  const achievements = [
    "180 children transformed and reintegrated into families",
    "11 girls joyfully married and settled",
    "School teachers shaping future generations",
    "IT professionals as managers and supervisors",
    "Nurses and medical personnel in hospitals",
    "Real estate managers",
    "Beauticians with successful businesses",
    "Several children abroad, including USA",
    "Students pursuing MBA, M.Phil., and IPS preparation",
    "Banking sector tellers and officers",
  ];

  const credentials = [
    "Invited to garland RCB Cricket Team during IPL",
    "Spoke on FM Radio 92.7 about child labour",
    "Regular yoga classes organized by Times of India",
    "Educational trips twice a year across Karnataka",
    "Sports meets every six months",
    "Frequent visits from IT companies and elite schools",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-primary text-white pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80')"
            }}
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-primary/80" />
        </div>
        
        {/* Stars animation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            New Hope Children Home
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Bengaluru - A Safe Haven of Love and Transformation
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
                Who We Are
              </h2>
              
              {/* Children Home Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
                  alt="Children at home playing"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                New Hope Children Home in Bengaluru is a safe haven for some of the most vulnerable
                children in society. Currently, it is home to 40 children who come from backgrounds
                of orphanhood, semi-orphanhood, abandonment, and children rescued from streets and
                slums.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Referrals come through recognised institutions, government officials, police
                departments, village elders, and community leaders, ensuring that children most in
                need are given a new beginning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey & Vision */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-lg shadow-lg"
              >
                <Home className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Journey</h3>
                <p className="text-foreground/80">
                  The Home began on 23rd December 2001 with just 10 children. By God's grace and
                  through committed service, what began as a small initiative has now become a
                  family of hope, care, and transformation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-lg shadow-lg"
              >
                <Heart className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-foreground/80">
                  To see every vulnerable child in our care restored with dignity, nurtured in
                  love, strengthened in faith, and equipped with education and life skills to
                  become responsible citizens and shining lights in society.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              What Makes Us Unique
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Family Atmosphere",
                  description: "Children grow in a home filled with love, acceptance, and belonging",
                },
                {
                  icon: GraduationCap,
                  title: "Quality Education",
                  description: "All children attend reputed English medium schools in Bengaluru",
                },
                {
                  icon: Heart,
                  title: "Healthcare & Wellbeing",
                  description:
                    "Special care for HIV-affected and physically weak children, ensuring health",
                },
                {
                  icon: Trophy,
                  title: "Faith & Values",
                  description: "Children nurtured with strong moral and spiritual values",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow"
                >
                  <item.icon className="h-10 w-10 text-gold mb-4" />
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">
              25 Years of Transformation
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-gold rounded-full p-1 mt-1 flex-shrink-0">
                    <div className="h-2 w-2"></div>
                  </div>
                  <p className="text-white/90">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
              Credentials & Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary p-6 rounded-lg"
                >
                  <Trophy className="h-8 w-8 text-gold mb-3" />
                  <p className="text-foreground/80">{credential}</p>
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
                Academic Excellence
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Most children achieve distinctions in their studies</li>
                <li>
                  • 70% consistently score between A and B grades in reputed English-medium schools
                </li>
                <li>
                  • Children earn certificates in Marathon running, Kabaddi, Athletics, Carom, and
                  Drawing
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bangalore;
