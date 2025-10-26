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
{/* Did You Know Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#000"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Title with icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/5 mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
                Did You Know?
              </h2>
              <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
            </motion.div>

            {/* Main content card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              {/* India illustration */}
              <div className="flex items-start gap-6 mb-8">
                <div className="hidden md:block flex-shrink-0">
                  <svg className="w-24 h-24 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L90 90 L10 90 Z"/>
                  </svg>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  India, the world's second most populous nation, is home to over 1.2 billion people across 29 states and 7 union territories. Despite decades of high economic growth, millions remain trapped in poverty. Alarming realities paint the picture:
                </p>
              </div>

              {/* Statistics grid with icons */}
              <div className="grid md:grid-cols-2 gap-6 my-10">
                {[
                  { stat: "22,000", text: "children die every day due to poverty-related causes (UNICEF)", icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { stat: "3M+", text: "children live on the streets", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                  { stat: "150M", text: "children are trapped in bonded labour", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { stat: "50%", text: "of children have access to education", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                  { stat: "2M", text: "girls aged 5-15 exploited in commercial sex work", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                        {item.stat}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mission statement with decorative elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary rounded-lg p-8 my-10"
              >
                <div className="absolute top-4 right-4 opacity-10">
                  <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-semibold relative z-10">
                  Amidst this vast socio-economic, religious, traditional, and caste-driven complexity, Helping Hands India was born in 2001 with a mission to empower and transform vulnerable children and communities—regardless of caste, creed, religion, or background.
                </p>
              </motion.div>

              {/* Founder story with profile illustration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden md:block flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The movement began when compassion and a divine call touched the heart of Dr. Rev. George Fernandes, a counsellor and theologian. Known lovingly by children as <span className="font-semibold text-primary">"Appa" (Father)</span>, George drew strength from his own painful childhood. Growing up as a semi-orphan and struggling under poverty, he once stood on the brink of despair. But in that moment of brokenness, God transformed his life igniting in him a passion to transform the lives of countless others.
                  </p>
                </div>

                <div className="flex items-start gap-6">
                  <div className="hidden md:block flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    For the past 25 years, Helping Hands India has rendered restless service across the nation. What began with one man's compassion has grown into a movement of hope. Through these years of unwavering dedication, countless children have been rescued, educated, and empowered. Families have been restored, communities uplifted, and lives transformed.
                  </p>
                </div>

                {/* Final quote with decorative element */}
                <div className="relative mt-10 pt-8 border-t-2 border-gray-200">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-xl leading-relaxed text-gray-800 font-semibold italic text-center">
                    Today, Helping Hands India stands as a living transforming power, reminding us that when faith meets compassion, despair turns into hope, poverty into possibility, and broken lives into testimonies of grace.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-secondary relative overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80')",
              filter: "blur(2px)"
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/90 to-secondary" />
        <div className="container mx-auto px-4 relative z-10">
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
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border-2 border-primary rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -200],
                x: [null, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
