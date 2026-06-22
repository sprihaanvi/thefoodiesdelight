import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Review } from '../../data/reviews';

interface Props {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: Props) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < review.rating ? 'fill-gold text-gold' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-warm-gray text-sm leading-relaxed mb-4">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-charcoal text-sm">{review.author}</p>
          <p className="text-xs text-warm-gray/70">{review.date}</p>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            review.source === 'google'
              ? 'bg-blue-50 text-blue-600'
              : 'bg-pink-50 text-pink-600'
          }`}
        >
          {review.source === 'google' ? 'Google' : 'Instagram'}
        </span>
      </div>
    </motion.div>
  );
}
