import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Heart, TrendingUp, BookOpen } from "lucide-react";

const Raibag = () => {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=1200&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-primary/85" />
        </div>
        
        {/* Community circles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-white/10 rounded-full"
              style={{
                width: `${80 + i * 30}px`,
                height: `${80 + i * 30}px`,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
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
            Community Centre
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Raybagh & Khanadal Village, Karnataka
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
                Understanding the Need
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    Raybagh Town
                  </h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Population: ~18,700 people</li>
                    <li>• Children (0-6): ~1,500+ (15% of population)</li>
                    <li>• Literacy Rate: 58% overall</li>
                    <li>• Male Literacy: ~64%</li>
                    <li>• Female Literacy: ~52%</li>
                    <li>• Main Economy: Agriculture (bananas, sugarcane)</li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    Khanadal Village
                  </h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Population: ~5,200 people</li>
                    <li>• Children (0-6): 924 (18% of population)</li>
                    <li>• Literacy Rate: 65% overall</li>
                    <li>• Male Literacy: ~77%</li>
                    <li>• Female Literacy: ~52%</li>
                    <li>• Scheduled Castes: 36% of population</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue/10 border-l-4 border-blue p-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground italic">
                  "Poverty and malnutrition remain concerns, as many families depend on seasonal
                  agricultural labour, leaving children vulnerable to poverty, malnutrition, and
                  school dropouts."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
                Our Community Centre Vision
              </h2>
              
              {/* Community Centre Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&q=80"
                  alt="Community children learning together"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                In 2010, Helping Hands India launched Community Centres with a vision to transform
                the lives of children and their families within their own villages. Unlike
                residential homes, these Centres allow children to stay with their families while
                still receiving the care, support, and opportunities they need to flourish.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {[
                  {
                    icon: Heart,
                    title: "Dignity & Self-Worth",
                    description: "Building confidence and value in every child",
                  },
                  {
                    icon: BookOpen,
                    title: "Education Support",
                    description: "Learning assistance and academic guidance",
                  },
                  {
                    icon: Users,
                    title: "Nutritious Food",
                    description: "Daily meals supporting healthy growth",
                  },
                  {
                    icon: TrendingUp,
                    title: "Moral Values",
                    description: "Character development for responsible citizenship",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card p-6 rounded-lg shadow-md text-center"
                  >
                    <item.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
                Achievements of the Community Centres
              </h2>
              <div className="bg-gradient-gold text-gold-foreground p-8 rounded-lg shadow-lg mb-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>
                      Children are growing in a holistic manner—physically, emotionally,
                      spiritually, and socially
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Three children have been joyfully married and are now well settled</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>
                      Most children are pursuing high school education, breaking the cycle of
                      illiteracy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>
                      Girl children are receiving equal opportunities to study and dream for a
                      brighter future
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg text-center">
                <p className="text-xl text-foreground leading-relaxed italic">
                  "Through these Centres, entire communities are being uplifted and empowered,
                  ensuring that children not only survive, but thrive where they belong—with their
                  families."
                </p>
              </div>
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
                Community Transformation
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Empowering families, educating children, and building stronger communities—one
                village at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Raibag;
