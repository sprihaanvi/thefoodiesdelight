import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sparkles, Clock, Heart, Award } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import MenuCard from '../components/ui/MenuCard';
import ReviewCard from '../components/ui/ReviewCard';
import InstagramFeed from '../components/ui/InstagramFeed';
import { menuItems } from '../data/menu';
import { reviews } from '../data/reviews';
import { getWhatsAppLink, BAKERY_INFO } from '../data/constants';

const popularItems = menuItems.filter((item) => item.isPopular).slice(0, 4);
const featuredReviews = reviews.slice(0, 3);

const stats = [
  { icon: Clock, label: 'Years of Baking', value: `${new Date().getFullYear() - BAKERY_INFO.founded}+` },
  { icon: Heart, label: 'Happy Customers', value: '2000+' },
  { icon: Award, label: 'Google Rating', value: '4.9' },
  { icon: Sparkles, label: 'Unique Recipes', value: '50+' },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>The Foodies Delight — Homemade Bakery, Ranchi</title>
        <meta
          name="description"
          content="Handcrafted cakes, cupcakes, pastries, cookies, cheesecakes & granola from Ranchi's beloved home bakery. Order on WhatsApp."
        />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600002415506-dd06090d3480?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            className="inline-block font-script text-gold-light text-xl md:text-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The Foodies
            <br />
            <span className="text-gold">Delight</span>
          </motion.h1>
          <motion.p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Handcrafted bakes made with love, right here in Ranchi.
            From celebration cakes to everyday treats — every bite tells a story.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link
              to="/menu"
              className="bg-brown hover:bg-brown-dark text-white px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center gap-2"
            >
              Explore Our Menu
              <ArrowRight size={18} />
            </Link>
            <a
              href={getWhatsAppLink('Hi! I would like to place an order 🎂')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-colors border border-white/20"
            >
              Order on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon className="mx-auto mb-3 text-brown" size={28} />
                <div className="font-display text-3xl md:text-4xl font-bold text-charcoal">
                  {stat.value}
                </div>
                <div className="text-warm-gray text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular picks */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            script="Customer Favourites"
            title="Our Popular Picks"
            subtitle="The most loved items from our kitchen — tried, tested, and adored by hundreds."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-brown font-semibold hover:text-brown-dark transition-colors"
            >
              View Full Menu
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Visualizer CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brown rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="mx-auto mb-4 text-gold" size={40} />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Visualize Your Dream Cake
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Use our AI-powered cake studio to see what your custom cake could
              look like. Describe it in words, and let AI bring it to life.
            </p>
            <Link
              to="/visualize"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              <Sparkles size={18} />
              Try AI Cake Studio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            script="What People Say"
            title="Loved by Ranchi"
            subtitle="Don't just take our word for it — hear from our happy customers."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-brown font-semibold hover:text-brown-dark transition-colors"
            >
              Read All Reviews
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            script="Fresh from the Kitchen"
            title="Follow Us on Instagram"
            subtitle="See our latest creations, behind-the-scenes moments, and happy customer stories."
          />
          <InstagramFeed limit={8} showHeader={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brown">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us what you'd like — custom cakes, cupcakes for a party,
            or your weekly granola supply. We'd love to bake for you!
          </p>
          <Link
            to="/order"
            className="inline-flex items-center gap-2 bg-white text-brown px-8 py-3.5 rounded-full font-semibold hover:bg-cream transition-colors"
          >
            Customize & Order
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
