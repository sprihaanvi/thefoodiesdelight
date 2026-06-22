import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHsbHAIUhZBC88unesquNwuxCYTgHN4piaBTDMTueGlHW8wrV6X0dqCq6xFXoO6aAJf1gycYmOtS9ID9NChhFiGfCZCnFSKRB7kTTj4TZOwe73n0UTrgb5syooQuWabRsfC5vqNI3dD4KRv=s1360-w1360-h1020-rw', alt: 'Engagement Cake', category: 'Cakes' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHYX7eVO4VDQDp857335e1s0rMbvP6JXsIRSDDFRGN2P3s1ohSZs9zcvQ7RcQ10WcSZC7cc2COkV0XLbcH7u0Ovz1z2hHTABENZILz8M9g1latltCDdxIB6B1hNiHwOLda4v--Orh33EV4=s1360-w1360-h1020-rw', alt: 'Bride To Be Cake', category: 'Cakes' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFAqXgBQfnWgJGfiDPkT7YsJof8OG25fFfBn8SxNmqX-7DgVs_YmyHYhD1f9oeZHYDXbj5NPvmalXlMtsUe4luJwEUtGaVKDc6PyAH-8g5bGbRcA76DA47S0S6OqecXWHRELl0eLwjt_seP=s1360-w1360-h1020-rw', alt: 'Biscoff Cheesecake', category: 'Desserts' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGFDku5JxTNCLfs7M_dWRPC6-pVFwHP8RGOXL6vHpZqv9eV8_y7UZBKplckKqOUY-zzmUve2J9u9_22Xb2k1x6zmJ-im87bChsX52ieNZzQzJSYY2VYA6GZnBf_fJxeZJfIeKWC3p4fl0xg=s1360-w1360-h1020-rw', alt: '25th Anniversary Cake', category: 'Cakes' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHbNlnjW5aBBfTYBm-TrXOfde1uHM-1mYbqop4wV0qOAAXqHXsVqkfri-XtloK7r6qghaGpPODAjuuWw0Ks47jSvI-tIgBMPkbpbam2IDTL_QU05WZ_lpnM3nCOrNxK3wAKAdFKjVb5St9_=s1360-w1360-h1020-rw', alt: 'Jungle Themed Cake', category: 'Designer' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjY1B_4YT2dn0ExisprIRiGFgdAob5qCClyULJYo5u4OYNWe-sWrF1DbAvih6lnHV19XUUZe3ISzCL1GtfxQ6BTjKbLyF1VU5VPaxGDz9uhwD8GwZCDgewZUpCXjeyAk31hGD2kcel2vrl=s1360-w1360-h1020-rw', alt: 'Jungle Safari Cake', category: 'Designer' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH4YMgZP6GYFaWKwmBmJdmPbFl5rYc0HPq5KIb6r1auawxZZbYFWScyy71TwS9eBx9NTDnEHvLXzLHDPO7S43aYrmbzMSNMVK7-WbroTGmN4yckKkjSajAhi3-R9kYqRXyzkSjtA0nGiU7C=s1360-w1360-h1020-rw', alt: 'Bento Cakes', category: 'Desserts' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGcVW5Kn5pwsBZpgNTto1evg15gXFZvkNJn7C-aImea0A-Cxv3ZtYWgHEJxH6kIsk3tlH295pvKtWkx4_zqcI33KHlwQaae_E2-QbK-QbveS_rNFMIaVdRcsHJfso4MHG-xY4Chgg=s1360-w1360-h1020-rw', alt: 'Foodie Themed Cake', category: 'Designer' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGncCiUuhvpReaTAERlrbyBbhxyuFY-iynb6OMTB1nv002_T2vNvKd13xOJkSmHPgetL6NdMxKzy6QHpe5WEWG2kfdXHpwQ4c7J54xKVdirEXxanWDoVTaVKB-y381IqWW2Q5oRJlD27cXc=s1360-w1360-h1020-rw', alt: 'Baker with Cake', category: 'Behind the Scenes' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE28TnfwSbu0XUaCU-92xT9yR35RaBrZkHlEXuYsgRIZt8AJ1rCqebfVKW1o26BvQH4HDfpyNXH4uN5lxBWQa-1GG9ExQ6QZNS6NaAnFxNd7Iti4fKBkpSY9SFa5Rwyzm_94p6mhg=s1360-w1360-h1020-rw', alt: 'Brownies Box', category: 'Desserts' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHNbAiwZWaqH3_9MqqtvpfwjDgLI5MQ1WLzfP9NI79KRzXNNV8gHk1KsCKk7-7QsjywrgCv3X9JkWzBTvB3CfeVpgqn_gxuPnjAZQkoCxzwvcqXTi2KoTfWou9QNkb-pTPpYFlqVGU-CA=s1360-w1360-h1020-rw', alt: 'Bento Cake Collection', category: 'Desserts' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAF-X429zSZyftslwJiaR-ZkXUSp9a9iyn6893dKi-DPbM3zNCAe7gmvIoFaX5Jxce29Br9tCFg6SFFSdgI3fbm6vUpmq486p0DLOorZDecpJRKlDIEsXmOoPjTLFxVDiIGD7AMb=s1360-w1360-h1020-rw', alt: 'Birthday Cake', category: 'Cakes' },
  { src: 'https://lh3.googleusercontent.com/p/AF1QipNflZF3Rv_p8lfvmxFhYmtoXdeCrWMIelo4LTFA=s680-w680-h510', alt: 'Truffle Cake', category: 'Cakes' },
  { src: 'https://lh3.googleusercontent.com/p/AF1QipPklC3utzCh7jEuNRvnC6HRI6updfwV0ejwngZ0=s680-w680-h510', alt: 'Strawberry Cake', category: 'Cakes' },
];

const categories = ['All', 'Cakes', 'Designer', 'Desserts', 'Behind the Scenes'];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(
    () => activeCategory === 'All' ? galleryImages : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory],
  );

  const navigateLightbox = (dir: -1 | 1) => {
    if (selected === null) return;
    const nextIdx = (selected + dir + filtered.length) % filtered.length;
    setSelected(nextIdx);
  };

  return (
    <>
      <Helmet>
        <title>Gallery — The Foodies Delight</title>
        <meta name="description" content="Browse our gallery of handcrafted bakes — real cakes, cupcakes, pastries, and more from our kitchen." />
      </Helmet>

      <section className="pt-28 pb-20 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            script="A Feast for the Eyes"
            title="Our Gallery"
            subtitle="Every creation is a labour of love. Here's a glimpse of what comes out of our kitchen."
          />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white shadow-md'
                    : 'bg-white text-warm-gray hover:bg-brown/10 hover:text-brown'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <motion.div
            className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src + img.alt}
                  className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer group"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onClick={() => setSelected(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-white font-semibold text-sm">
                      {img.alt}
                    </span>
                    <span className="text-white/70 text-xs mt-0.5">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox with navigation */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white z-10 p-2"
              onClick={() => setSelected(null)}
            >
              <X size={28} />
            </button>

            {/* Navigation arrows */}
            <button
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            >
              <ChevronLeft size={36} />
            </button>
            <button
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            >
              <ChevronRight size={36} />
            </button>

            <div className="flex flex-col items-center gap-4 px-12 max-w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={filtered[selected].src}
                src={filtered[selected].src}
                alt={filtered[selected].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <div className="text-center">
                <p className="text-white font-medium">{filtered[selected].alt}</p>
                <p className="text-white/50 text-sm">{selected + 1} / {filtered.length}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
