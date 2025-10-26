import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Utensils, Activity, BookOpen, HeartPulse } from "lucide-react";

const SpecialCare = () => {
  const programs = [
    {
      title: "HIV Care Centre - Bidar",
      icon: HeartPulse,
      children: 50,
      description: "Comprehensive care for HIV-infected and affected children and families",
    },
    {
      title: "Community Centre - Jeevanahalli",
      icon: Users,
      children: 38,
      description: "Education support and moral guidance for children in urban slums",
    },
  ];

  const hivServices = [
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Regular check-ups and antiretroviral therapy adherence",
    },
    {
      icon: Utensils,
      title: "Nutrition Support",
      description: "Meals supporting growth and immune function",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Ensuring continued learning for all children",
    },
    {
      icon: Heart,
      title: "Counseling",
      description: "Psychosocial support for emotional well-being",
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
              backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-primary/85" />
        </div>
        
        {/* Cross symbols floating */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10 text-5xl font-light"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
              }}
              animate={{
                y: -100,
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 3,
                repeat: Infinity,
                delay: i * 3,
              }}
            >
              ✚
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Special Care Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Specialized Support for Vulnerable Communities
          </motion.p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              Our Special Care Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-lg shadow-lg card-hover border-t-4 border-gold"
                >
                  <program.icon className="h-16 w-16 text-gold mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {program.title}
                  </h3>
                  <div className="text-4xl font-bold text-gold mb-4">{program.children}</div>
                  <p className="text-sm text-muted-foreground mb-2">Children Served</p>
                  <p className="text-foreground/80 leading-relaxed">{program.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIV Care Centre Details */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
                HIV Care Centre - Bidar
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                In Bidar, Karnataka, HIV prevalence remains relatively low, with an estimated 0.32%
                among pregnant women in the Gulbarga region. However, the impact on children and
                families is significant, especially in marginalized communities.
              </p>
              <div className="bg-blue/10 border-l-4 border-blue p-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground italic">
                  "In 2023, the Executive Director's visit to local hospitals, in collaboration
                  with social worker Mr. Dhanaraj Bandeppa, highlighted the urgent need for
                  support."
                </p>
              </div>

              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Comprehensive Services
              </h3>
              
              {/* Healthcare Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80"
                  alt="Healthcare services"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {hivServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card p-6 rounded-lg shadow-md"
                  >
                    <service.icon className="h-10 w-10 text-gold mb-3" />
                    <h4 className="text-lg font-heading font-semibold text-primary mb-2">
                      {service.title}
                    </h4>
                    <p className="text-foreground/70 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-gold text-gold-foreground p-6 rounded-lg">
                <h4 className="text-xl font-heading font-bold mb-3">Program Focus</h4>
                <ul className="space-y-2">
                  <li>• Awareness and education about HIV prevention and care</li>
                  <li>• Nutritional support for 50 children and infected parents</li>
                  <li>• Assistance with medical treatment and therapy adherence</li>
                  <li>• Community education to reduce stigma and promote understanding</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jeevanahalli Community Centre */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
                Community Centre - Jeevanahalli
              </h2>
              
              {/* Community Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="Community children learning"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                The New Hope Community Centre in Jeevanahalli was born from the Executive
                Director's deep connection to his roots. Born and raised in Jeevanahalli slum, he
                remembers a time when the area was a garden surrounded by farmland. However, over
                the years, things changed dramatically.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground italic">
                  "Three years ago, during a children's camp, an 8-year-old boy threatened to cut
                  another boy's throat. When asked where he learned this, he replied, 'I learned it
                  from my father.' This became the turning point."
                </p>
              </div>

              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                What the Centre Provides
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary p-6 rounded-lg">
                  <BookOpen className="h-10 w-10 text-gold mb-3" />
                  <h4 className="text-lg font-heading font-semibold text-primary mb-2">
                    Education Support
                  </h4>
                  <p className="text-foreground/70">
                    Assistance with school fees and learning support
                  </p>
                </div>
                <div className="bg-secondary p-6 rounded-lg">
                  <Heart className="h-10 w-10 text-gold mb-3" />
                  <h4 className="text-lg font-heading font-semibold text-primary mb-2">
                    Moral Guidance
                  </h4>
                  <p className="text-foreground/70">
                    Helping children live responsibly and ethically
                  </p>
                </div>
                <div className="bg-secondary p-6 rounded-lg">
                  <Users className="h-10 w-10 text-gold mb-3" />
                  <h4 className="text-lg font-heading font-semibold text-primary mb-2">
                    Mentorship
                  </h4>
                  <p className="text-foreground/70">Role models and goal-setting guidance</p>
                </div>
                <div className="bg-secondary p-6 rounded-lg">
                  <Utensils className="h-10 w-10 text-gold mb-3" />
                  <h4 className="text-lg font-heading font-semibold text-primary mb-2">
                    Nutrition
                  </h4>
                  <p className="text-foreground/70">
                    Evening meals supporting healthy growth
                  </p>
                </div>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Three dedicated teachers provide proper education, moral development, and
                supervision. Today, the Centre benefits 38 children, nurturing them holistically
                and equipping them with education, values, and inspiration to build meaningful
                lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Specialized Care, Transformed Lives
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Supporting vulnerable children with specialized needs, breaking stigma, and building
                brighter futures through comprehensive care and love.
              </p>
              <a
                href="/donate"
                className="inline-block bg-gold hover:bg-gold-dark text-gold-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all"
              >
                Support Special Care
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialCare;
