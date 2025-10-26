import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Briefcase, Heart, Trophy } from "lucide-react";

const Ambur = () => {
  const successStories = [
    {
      icon: GraduationCap,
      title: "Healthcare Professionals",
      description: "B.Sc. Nurses serving in hospitals across the region",
    },
    {
      icon: Briefcase,
      title: "Agricultural Workers",
      description: "Farmers strengthening their communities and feeding families",
    },
    {
      icon: Briefcase,
      title: "Drivers & Workers",
      description: "Earning for their families and standing on their own feet",
    },
    {
      icon: Trophy,
      title: "Industrial Employees",
      description: "Working in factories and industries with dignity and independence",
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
              backgroundImage: "url('https://images.unsplash.com/photo-1497375473389-64a0fac8046c?w=1200&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-primary/85" />
        </div>
        
        {/* Success rays animation */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-gradient-to-b from-gold/30 to-transparent"
              style={{
                height: '100%',
                left: `${15 + i * 15}%`,
                transformOrigin: 'top center',
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleY: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
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
            Ambur, Tamil Nadu - A Story of Success
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
                The Challenge We Faced
              </h2>
              
              {/* Ambur Context Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497375473389-64a0fac8046c?w=800&q=80"
                  alt="Children receiving education"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                The New Hope Children Community Centre in Ambur, Tamil Nadu, is located along the
                Chennai-Bengaluru National Highway. This region struggles with undrinkable and
                polluted groundwater, leading to widespread health issues such as bronchitis and
                tuberculosis.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Families often face poverty, ill health, and lack of opportunities, leaving
                children vulnerable and neglected.
              </p>

              <div className="bg-blue/10 border-l-4 border-blue p-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground italic">
                  "In spite of limited resources, Helping Hands India took a bold step of
                  compassion by establishing a Community Transformation Centre in Ambur in 2011."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              What We Provided
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Nutritious Food",
                  description: "Overcoming malnutrition with daily meals",
                },
                {
                  icon: Heart,
                  title: "Medical Care",
                  description: "Protection from preventable illnesses",
                },
                {
                  icon: GraduationCap,
                  title: "Education Support",
                  description: "Breaking the cycle of illiteracy",
                },
                {
                  icon: Trophy,
                  title: "Moral Guidance",
                  description: "Shaping values and future",
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
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-gradient-gold text-gold-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Trophy className="h-20 w-20 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                A Celebration of Success
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                After years of care and support, the Ambur Centre was successfully closed—not
                because of failure, but because it had fulfilled its mission.
              </p>
              <p className="text-2xl font-heading font-bold">
                Every child who entered the Centre has now completed their education and stepped
                into society with dignity and independence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              Where They Are Now
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-lg shadow-lg card-hover border-l-4 border-gold"
                >
                  <story.icon className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {story.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{story.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-primary/10 p-8 rounded-lg text-center"
            >
              <p className="text-xl text-foreground leading-relaxed italic">
                "The closure of the Ambur Centre is not an ending—it is a celebration of success,
                proving that with care, education, and opportunity, vulnerable children can grow
                into responsible and empowered citizens."
              </p>
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
                Mission Accomplished
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                From vulnerability to victory—children passed out with degrees, working as nurses,
                farmers, drivers, and factory workers, standing on their own feet with dignity and
                independence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ambur;
