import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, GraduationCap, Home, HandHeart, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Donate = () => {
  const impactAreas = [
    {
      icon: Home,
      title: "Children's Homes",
      description: "Provide shelter, food, and care for vulnerable children",
      amount: "₹5,000/month",
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Sponsor a child's education in reputed schools",
      amount: "₹3,000/month",
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Support widows and elderly with dignity",
      amount: "₹2,500/month",
    },
    {
      icon: Users,
      title: "Community Centres",
      description: "Empower families within their villages",
      amount: "₹4,000/month",
    },
    {
      icon: HandHeart,
      title: "Special Care",
      description: "HIV care and specialized support programs",
      amount: "₹6,000/month",
    },
    {
      icon: Building,
      title: "Church Planting",
      description: "Establish new centers of hope and transformation",
      amount: "₹10,000/project",
    },
  ];

  const stats = [
    { value: "1000+", label: "Lives Transformed" },
    { value: "180+", label: "Children Graduated" },
    { value: "25", label: "Years of Service" },
    { value: "8", label: "Active Centres" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero text-white pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 animate-float">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="h-20 w-20 mx-auto mb-6 text-gold animate-glow" />
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Transform Lives Today
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
              Your generosity brings hope, dignity, and a brighter future to vulnerable children,
              elders, and communities across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#donate-options"
                className="bg-gold hover:bg-gold-dark text-gold-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all inline-block"
              >
                Donate Now
              </a>
              <a
                href="#impact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
              >
                See Our Impact
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-heading font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section id="donate-options" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Where Your Donation Goes
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Choose the area where you'd like to make the most impact
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-lg shadow-lg card-hover border-t-4 border-gold"
                >
                  <area.icon className="h-16 w-16 text-gold mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">{area.description}</p>
                  <div className="text-3xl font-bold text-gold mb-4">{area.amount}</div>
                  <Button className="w-full bg-gradient-gold text-gold-foreground hover:opacity-90 font-semibold">
                    Donate Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* One-Time vs Monthly */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">
              Ways to Give
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-2xl font-heading font-bold mb-4">One-Time Donation</h3>
                <p className="text-white/90 mb-6">
                  Make an immediate impact with a one-time contribution to support our ongoing
                  programs and emergency needs.
                </p>
                <Button className="bg-gold hover:bg-gold-dark text-gold-foreground font-semibold w-full">
                  Give Once
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-gold"
              >
                <div className="inline-block bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Recommended
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Monthly Partnership</h3>
                <p className="text-white/90 mb-6">
                  Join our family of monthly partners and provide sustainable support that
                  transforms lives over time. Cancel anytime.
                </p>
                <Button className="bg-gold hover:bg-gold-dark text-gold-foreground font-semibold w-full animate-glow">
                  Become a Partner
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Your Trust Matters
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                We are committed to transparency and accountability. Every donation is used
                efficiently and effectively to maximize impact in the communities we serve.
              </p>
              <div className="bg-secondary p-8 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-gold mb-2">95%</div>
                    <p className="text-foreground/70">Directly to Programs</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gold mb-2">5%</div>
                    <p className="text-foreground/70">Administrative Costs</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gold mb-2">100%</div>
                    <p className="text-foreground/70">Transparency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-gold text-gold-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Be Part of the Transformation
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                For 25 years, we've witnessed miracles in the lives of vulnerable children, elders,
                and communities. Your gift today continues this legacy of hope and transformation.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-12 py-6 hover-glow"
              >
                Make Your Donation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
