import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/constants';

export default function WhatsAppFab() {
  return (
    <motion.a
      href={getWhatsAppLink('Hi! I would like to place an order from The Foodies Delight 🎂')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={22} />
      <span className="text-sm font-semibold hidden sm:inline">
        Order on WhatsApp
      </span>
    </motion.a>
  );
}
