import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { getWhatsAppLink } from '../data/constants';
import { categories } from '../data/menu';

interface OrderForm {
  category: string;
  flavour: string;
  size: string;
  layers: string;
  occasion: string;
  dietary: string[];
  date: string;
  message: string;
}

const sizes = ['Half kg', '1 kg', '1.5 kg', '2 kg', '3 kg', 'Custom'];
const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Baby Shower', 'Festival', 'Corporate', 'Just Because!', 'Other'];
const dietaryOptions = ['Eggless', 'Sugar-free', 'Gluten-free', 'Vegan', 'Nut-free'];

export default function Order() {
  const [form, setForm] = useState<OrderForm>({
    category: '',
    flavour: '',
    size: '',
    layers: '',
    occasion: '',
    dietary: [],
    date: '',
    message: '',
  });

  const toggleDietary = (opt: string) => {
    setForm((prev) => ({
      ...prev,
      dietary: prev.dietary.includes(opt)
        ? prev.dietary.filter((d) => d !== opt)
        : [...prev.dietary, opt],
    }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hi! I'd like to place an order from The Foodies Delight`,
      ``,
      form.category && `*Category:* ${form.category}`,
      form.flavour && `*Flavour:* ${form.flavour}`,
      form.size && `*Size:* ${form.size}`,
      form.layers && `*Layers:* ${form.layers}`,
      form.occasion && `*Occasion:* ${form.occasion}`,
      form.dietary.length > 0 && `*Dietary:* ${form.dietary.join(', ')}`,
      form.date && `*Needed by:* ${form.date}`,
      form.message && `*Additional notes:* ${form.message}`,
      ``,
      `Looking forward to your response! 😊`,
    ];
    return lines.filter(Boolean).join('\n');
  };

  return (
    <>
      <Helmet>
        <title>Order — The Foodies Delight</title>
        <meta name="description" content="Customize and order your cake, cupcakes, or treats from The Foodies Delight via WhatsApp." />
      </Helmet>

      <section className="pt-28 pb-20 bg-cream min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            script="Let's Bake for You"
            title="Place Your Order"
            subtitle="Customize your order below. Once ready, we'll redirect you to WhatsApp to finalize the details."
          />

          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                What would you like?
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setForm({ ...form, category: cat.label })}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      form.category === cat.label
                        ? 'bg-brown text-white'
                        : 'bg-cream text-warm-gray hover:bg-brown/10'
                    }`}
                  >
                    {cat.emoji} {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavour */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Preferred Flavour
              </label>
              <input
                type="text"
                placeholder="e.g. Chocolate, Butterscotch, Red Velvet, Vanilla..."
                value={form.flavour}
                onChange={(e) => setForm({ ...form, flavour: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-colors"
              />
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Size
              </label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setForm({ ...form, size: s })}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      form.size === s
                        ? 'bg-brown text-white'
                        : 'bg-cream text-warm-gray hover:bg-brown/10'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Layers */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Number of Layers / Tiers
              </label>
              <div className="flex gap-2">
                {['1', '2', '3', 'Custom'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setForm({ ...form, layers: l })}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      form.layers === l
                        ? 'bg-brown text-white'
                        : 'bg-cream text-warm-gray hover:bg-brown/10'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Occasion
              </label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <button
                    key={o}
                    onClick={() => setForm({ ...form, occasion: o })}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      form.occasion === o
                        ? 'bg-brown text-white'
                        : 'bg-cream text-warm-gray hover:bg-brown/10'
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Dietary Requirements (optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {dietaryOptions.map((d) => (
                  <button
                    key={d}
                    onClick={() => toggleDietary(d)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      form.dietary.includes(d)
                        ? 'bg-sage text-white'
                        : 'bg-cream text-warm-gray hover:bg-sage/20'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                When do you need it?
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-charcoal focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Anything else you'd like to tell us?
              </label>
              <textarea
                placeholder="Custom text on cake, colour preferences, reference image description..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <a
              href={getWhatsAppLink(buildWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              <MessageCircle size={22} />
              Send Order via WhatsApp
              <Send size={18} />
            </a>

            <p className="text-center text-warm-gray text-xs">
              You'll be redirected to WhatsApp with your order details pre-filled.
              Final pricing and confirmation happens in the chat.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
