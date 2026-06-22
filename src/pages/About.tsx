import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Award, Leaf, Users } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { BAKERY_INFO } from '../data/constants';

const values = [
  {
    icon: Leaf,
    title: 'Fresh, Homemade Baked Goods',
    description: "All of the baked goods at The Foodies Delight are made on order using only the finest ingredients.",
  },
  {
    icon: Heart,
    title: 'Eggless & Free of Chemicals',
    description: "Our baked goods are free of chemicals and artificial preservatives. Eggless options always available.",
  },
  {
    icon: Award,
    title: 'Handcrafted to Perfection',
    description: "Every item is handcrafted with great pride and care — no factory lines, just honest homemade goodness.",
  },
  {
    icon: Users,
    title: 'Customisable to Your Needs',
    description: "Be it eggless, vegan, or keto cakes — we can customise the cakes just the way you like it.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — The Foodies Delight</title>
        <meta
          name="description"
          content="Meet Shalini (Rini), the passionate home baker behind The Foodies Delight — Ranchi's beloved home bakery since 2020."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-script text-brown text-lg md:text-xl">Our Story</span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
                Baked with Love,<br className="hidden sm:block" /> Served with Joy
              </h1>
              <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed">
                A home bakery born from a lifelong passion for baking — every creation
                is handcrafted with the finest ingredients and a whole lot of love.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -inset-3 bg-brown/10 rounded-3xl -rotate-3" />
                  <img
                    src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGncCiUuhvpReaTAERlrbyBbhxyuFY-iynb6OMTB1nv002_T2vNvKd13xOJkSmHPgetL6NdMxKzy6QHpe5WEWG2kfdXHpwQ4c7J54xKVdirEXxanWDoVTaVKB-y381IqWW2Q5oRJlD27cXc=s1360-w1360-h1020-rw"
                    alt="Shalini — The Baker"
                    className="relative rounded-2xl shadow-lg w-full aspect-[3/4] object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-3 space-y-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal">
                  Meet Shalini <span className="text-brown">(Rini)</span>
                </h2>
                <p className="text-warm-gray leading-relaxed">
                  Shalini's fascination with bakery items started when she was a
                  teenager. What began as baking for family and friends grew into
                  something much bigger.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  In 2020, during the lockdown, she decided to turn her passion
                  into{' '}
                  <span className="font-semibold text-charcoal">{BAKERY_INFO.name}</span>
                  {' '}— a home bakery in Ranchi dedicated to providing delicious,
                  homemade baked goods that are free of chemicals and made with
                  the freshest ingredients.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  Every item is handcrafted to perfection using only the finest
                  ingredients and traditional baking methods — cakes, cookies,
                  pastries, and treats that are sure to tantalize your taste buds.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['100% Eggless Options', 'No Preservatives', 'Made Fresh to Order', 'Fully Customisable'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-brown/10 text-brown text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bakes collage section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 space-y-5"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal">
                Why Choose Us?
              </h3>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  <span className="font-semibold text-charcoal">Fresh &amp; homemade —</span>{' '}
                  everything is baked on order using only the finest ingredients.
                </p>
                <p>
                  <span className="font-semibold text-charcoal">No chemicals —</span>{' '}
                  free of artificial preservatives and additives, always.
                </p>
                <p>
                  <span className="font-semibold text-charcoal">Handcrafted —</span>{' '}
                  no factory lines, just honest homemade goodness made with love.
                </p>
                <p>
                  <span className="font-semibold text-charcoal">Fully customisable —</span>{' '}
                  eggless, vegan, keto — we make it just the way you like.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2 grid grid-cols-2 gap-3"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHsbHAIUhZBC88unesquNwuxCYTgHN4piaBTDMTueGlHW8wrV6X0dqCq6xFXoO6aAJf1gycYmOtS9ID9NChhFiGfCZCnFSKRB7kTTj4TZOwe73n0UTrgb5syooQuWabRsfC5vqNI3dD4KRv=s1360-w1360-h1020-rw"
                alt="Engagement cake"
                className="rounded-xl shadow-md w-full aspect-square object-cover"
                loading="lazy"
              />
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAE28TnfwSbu0XUaCU-92xT9yR35RaBrZkHlEXuYsgRIZt8AJ1rCqebfVKW1o26BvQH4HDfpyNXH4uN5lxBWQa-1GG9ExQ6QZNS6NaAnFxNd7Iti4fKBkpSY9SFa5Rwyzm_94p6mhg=s1360-w1360-h1020-rw"
                alt="Brownies"
                className="rounded-xl shadow-md w-full aspect-square object-cover"
                loading="lazy"
              />
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFAqXgBQfnWgJGfiDPkT7YsJof8OG25fFfBn8SxNmqX-7DgVs_YmyHYhD1f9oeZHYDXbj5NPvmalXlMtsUe4luJwEUtGaVKDc6PyAH-8g5bGbRcA76DA47S0S6OqecXWHRELl0eLwjt_seP=s1360-w1360-h1020-rw"
                alt="Biscoff cheesecake"
                className="rounded-xl shadow-md w-full aspect-square object-cover"
                loading="lazy"
              />
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHbNlnjW5aBBfTYBm-TrXOfde1uHM-1mYbqop4wV0qOAAXqHXsVqkfri-XtloK7r6qghaGpPODAjuuWw0Ks47jSvI-tIgBMPkbpbam2IDTL_QU05WZ_lpnM3nCOrNxK3wAKAdFKjVb5St9_=s1360-w1360-h1020-rw"
                alt="Jungle themed cake"
                className="rounded-xl shadow-md w-full aspect-square object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader script="What Drives Us" title="Our Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-brown" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  {v.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
