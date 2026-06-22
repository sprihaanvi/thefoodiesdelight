import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ReviewCard from '../components/ui/ReviewCard';
import { reviews } from '../data/reviews';

export default function Reviews() {
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <>
      <Helmet>
        <title>Reviews — The Foodies Delight</title>
        <meta name="description" content="Read what our customers say about The Foodies Delight bakery in Ranchi." />
      </Helmet>

      <section className="pt-28 pb-20 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            script="Trusted & Loved"
            title="Customer Reviews"
            subtitle="Real reviews from real customers who've tasted our bakes."
          />

          {/* Stats summary */}
          <div className="bg-white rounded-2xl p-8 mb-12 text-center max-w-md mx-auto shadow-sm">
            <div className="font-display text-5xl font-bold text-charcoal mb-2">
              {avgRating}
            </div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(Number(avgRating)) ? 'fill-gold text-gold' : 'text-gray-300'}
                />
              ))}
            </div>
            <p className="text-warm-gray text-sm">
              Based on {reviews.length} reviews from Google & Instagram
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
