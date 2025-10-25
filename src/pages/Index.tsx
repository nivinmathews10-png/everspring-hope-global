import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Users, Home, TrendingUp, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: Home,
      title: "Children's Homes",
      description: "Safe havens providing shelter, education, and love to 150+ children",
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Restoring dignity and hope to widows and elderly in their golden years",
    },
    {
      icon: Users,
      title: "Community Centres",
      description: "Empowering families within villages through holistic support",
    },
    {
      icon: TrendingUp,
      title: "Special Care",
      description: "HIV care and specialized programs for marginalized communities",
    },
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Lives Transformed" },
    { icon: Home, value: "8", label: "Active Centres" },
    { icon: BookOpen, value: "500+", label: "Children Educated" },
    { icon: Award, value: "25", label: "Years of Service" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                25 Years of Faithful Service
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Since 2000, Everspring International (Helping Hands India) has been transforming
                lives across India. What began with one man's compassion has grown into a movement
                of hope, reaching vulnerable children, elders, and communities with love, care, and
                opportunity.
              </p>
              <Button
                onClick={() => (window.location.href = "/genesis")}
                className="bg-gradient-gold text-gold-foreground hover:opacity-90 font-semibold text-lg px-8 py-6 hover-glow"
              >
                Read Our Story
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-gold" />
                  <div className="text-5xl font-heading font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                How We Serve
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Holistic care addressing physical, emotional, educational, and spiritual needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-lg shadow-lg card-hover border-l-4 border-gold"
                >
                  <feature.icon className="h-12 w-12 text-gold mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-gold text-gold-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl md:text-3xl font-heading italic mb-8 leading-relaxed">
                "Today, Helping Hands India stands as a living transforming power, reminding us
                that when faith meets compassion, despair turns into hope, poverty into
                possibility, and broken lives into testimonies of grace."
              </blockquote>
              <p className="text-xl font-semibold">— Dr. Rev. George Fernandes, Founder</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Lives Transformed
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                From children rescued from streets to professionals serving society. From widows
                abandoned to elderly living with dignity. From communities in despair to villages
                filled with hope.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { number: "180+", text: "Children graduated & integrated into families" },
                  { number: "11", text: "Girls joyfully married & well settled" },
                  { number: "100%", text: "Ambur children completed education" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card p-6 rounded-lg shadow-md"
                  >
                    <div className="text-4xl font-heading font-bold text-gold mb-3">
                      {item.number}
                    </div>
                    <p className="text-foreground/80">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Join the Movement of Hope
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Your partnership can transform lives and restore dignity to vulnerable children,
                elders, and communities across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/donate"
                  className="bg-gold hover:bg-gold-dark text-gold-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all inline-block"
                >
                  Make a Donation
                </a>
                <a
                  href="/genesis"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
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

export default Index;
