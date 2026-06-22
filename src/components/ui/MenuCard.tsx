import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import type { MenuItem } from '../../data/menu';
import { getWhatsAppLink } from '../../data/constants';

interface Props {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: Props) {
  const orderMessage = `Hi! I'm interested in ordering *${item.name}*. Could you share more details?`;

  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {item.isPopular && (
          <span className="absolute top-3 left-3 bg-brown text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
        {item.startingPrice && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
            From {item.startingPrice}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-charcoal mb-1">
          {item.name}
        </h3>
        <p className="text-warm-gray text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        <a
          href={getWhatsAppLink(orderMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brown/10 text-brown px-4 py-2 rounded-lg text-sm font-medium hover:bg-brown hover:text-white transition-all duration-200"
        >
          <MessageCircle size={16} />
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
