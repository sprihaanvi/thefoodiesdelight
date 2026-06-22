import { motion } from 'framer-motion';
import { ExternalLink, Heart, Play } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { useInstagramFeed } from '../../hooks/useInstagramFeed';
import { INSTAGRAM_URL } from '../../data/constants';

interface Props {
  limit?: number;
  showHeader?: boolean;
}

export default function InstagramFeed({ limit = 8, showHeader = true }: Props) {
  const { posts, loading, error } = useInstagramFeed(limit);

  if (error && !posts.length) {
    return (
      <FallbackFeed showHeader={showHeader} />
    );
  }

  return (
    <div>
      {showHeader && (
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FaInstagram className="text-brown" size={28} />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xl md:text-2xl text-charcoal hover:text-brown transition-colors"
          >
            @thefoodies_delight
          </a>
        </motion.div>
      )}

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: limit }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-cream-dark rounded-xl animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <img
                src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                alt={post.caption?.slice(0, 100) || 'Instagram post'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4 text-white">
                  <Heart size={22} />
                  <ExternalLink size={20} />
                </div>
              </div>
              {post.media_type === 'VIDEO' && (
                <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1.5">
                  <Play size={14} className="text-white fill-white" />
                </div>
              )}
              {post.media_type === 'CAROUSEL_ALBUM' && (
                <div className="absolute top-2 right-2 bg-black/50 rounded-full px-2 py-1">
                  <span className="text-white text-xs font-medium">1/+</span>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          <FaInstagram size={18} />
          Follow us on Instagram
        </a>
      </div>
    </div>
  );
}

function FallbackFeed({ showHeader }: { showHeader: boolean }) {
  const fallbackImages = [
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHsbHAIUhZBC88unesquNwuxCYTgHN4piaBTDMTueGlHW8wrV6X0dqCq6xFXoO6aAJf1gycYmOtS9ID9NChhFiGfCZCnFSKRB7kTTj4TZOwe73n0UTrgb5syooQuWabRsfC5vqNI3dD4KRv=s1360-w1360-h1020-rw',
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHYX7eVO4VDQDp857335e1s0rMbvP6JXsIRSDDFRGN2P3s1ohSZs9zcvQ7RcQ10WcSZC7cc2COkV0XLbcH7u0Ovz1z2hHTABENZILz8M9g1latltCDdxIB6B1hNiHwOLda4v--Orh33EV4=s1360-w1360-h1020-rw',
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFAqXgBQfnWgJGfiDPkT7YsJof8OG25fFfBn8SxNmqX-7DgVs_YmyHYhD1f9oeZHYDXbj5NPvmalXlMtsUe4luJwEUtGaVKDc6PyAH-8g5bGbRcA76DA47S0S6OqecXWHRELl0eLwjt_seP=s1360-w1360-h1020-rw',
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHbNlnjW5aBBfTYBm-TrXOfde1uHM-1mYbqop4wV0qOAAXqHXsVqkfri-XtloK7r6qghaGpPODAjuuWw0Ks47jSvI-tIgBMPkbpbam2IDTL_QU05WZ_lpnM3nCOrNxK3wAKAdFKjVb5St9_=s1360-w1360-h1020-rw',
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE28TnfwSbu0XUaCU-92xT9yR35RaBrZkHlEXuYsgRIZt8AJ1rCqebfVKW1o26BvQH4HDfpyNXH4uN5lxBWQa-1GG9ExQ6QZNS6NaAnFxNd7Iti4fKBkpSY9SFa5Rwyzm_94p6mhg=s1360-w1360-h1020-rw',
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHNbAiwZWaqH3_9MqqtvpfwjDgLI5MQ1WLzfP9NI79KRzXNNV8gHk1KsCKk7-7QsjywrgCv3X9JkWzBTvB3CfeVpgqn_gxuPnjAZQkoCxzwvcqXTi2KoTfWou9QNkb-pTPpYFlqVGU-CA=s1360-w1360-h1020-rw',
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGFDku5JxTNCLfs7M_dWRPC6-pVFwHP8RGOXL6vHpZqv9eV8_y7UZBKplckKqOUY-zzmUve2J9u9_22Xb2k1x6zmJ-im87bChsX52ieNZzQzJSYY2VYA6GZnBf_fJxeZJfIeKWC3p4fl0xg=s1360-w1360-h1020-rw',
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGcVW5Kn5pwsBZpgNTto1evg15gXFZvkNJn7C-aImea0A-Cxv3ZtYWgHEJxH6kIsk3tlH295pvKtWkx4_zqcI33KHlwQaae_E2-QbK-QbveS_rNFMIaVdRcsHJfso4MHG-xY4Chgg=s1360-w1360-h1020-rw',
  ];

  return (
    <div>
      {showHeader && (
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FaInstagram className="text-brown" size={28} />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xl md:text-2xl text-charcoal hover:text-brown transition-colors"
          >
            @thefoodies_delight
          </a>
        </motion.div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {fallbackImages.map((src, i) => (
          <motion.a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <img
              src={src}
              alt="From our Instagram"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <FaInstagram
                size={28}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          <FaInstagram size={18} />
          Follow us on Instagram
        </a>
      </div>
    </div>
  );
}
