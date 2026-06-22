import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, Download, RefreshCw, MessageCircle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { getWhatsAppLink } from '../data/constants';

const examplePrompts = [
  'A three-tier pastel pink wedding cake with white roses and gold leaf accents',
  'Chocolate drip cake with fresh strawberries and macarons on top',
  'Unicorn themed birthday cake with rainbow layers and fondant horn',
  'Minimalist white cake with dried flowers and a "Happy Anniversary" topper',
  'Jungle safari cake with fondant animals and green frosting',
];

export default function Visualize() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    setImageUrl(null);

    const cakePrompt = `A professional bakery photograph of: ${prompt}. Beautifully decorated cake on an elegant display, soft natural lighting, shallow depth of field, food photography style, high quality, appetizing`;

    try {
      const encodedPrompt = encodeURIComponent(cakePrompt);
      const imgUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Date.now()}`;

      await new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Failed to generate image. Please try again.'));
        img.src = imgUrl;
      });

      setImageUrl(imgUrl);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!imageUrl) return;
    try {
      const img = document.querySelector<HTMLImageElement>('img[alt="AI generated cake preview"]');
      if (!img) throw new Error();
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext('2d')!.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'my-dream-cake.png';
        a.click();
        URL.revokeObjectURL(url);
      }, 'image/png');
    } catch {
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = 'my-dream-cake.png';
      a.target = '_blank';
      a.click();
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Cake Studio — The Foodies Delight</title>
        <meta name="description" content="Visualize your dream cake using AI. Describe it and see it come to life!" />
      </Helmet>

      <section className="pt-28 pb-20 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            script="Powered by AI"
            title="AI Cake Studio"
            subtitle="Describe your dream cake and our AI will generate a visual preview. Then order it on WhatsApp!"
          />

          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Prompt input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Describe your dream cake
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. A two-tier chocolate cake with gold drip, fresh berries, and a 'Happy Birthday' topper..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-colors resize-none"
              />
            </div>

            {/* Example prompts */}
            <div className="mb-6">
              <p className="text-xs font-medium text-warm-gray mb-2">
                Try an example:
              </p>
              <div className="flex flex-wrap gap-2">
                {examplePrompts.map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setPrompt(ex)}
                    className="text-xs px-3 py-1.5 rounded-full bg-cream text-warm-gray hover:bg-brown/10 hover:text-brown transition-colors text-left"
                  >
                    {ex.length > 50 ? ex.slice(0, 50) + '...' : ex}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate button */}
            <button
              onClick={generateImage}
              disabled={loading || !prompt.trim()}
              className="w-full flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 disabled:bg-charcoal/40 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              {loading ? (
                <>
                  <RefreshCw size={20} className="animate-spin" />
                  Generating your cake...
                </>
              ) : (
                <>
                  <Wand2 size={20} />
                  Generate Cake Preview
                </>
              )}
            </button>
          </motion.div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                className="mt-6 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Result */}
          <AnimatePresence>
            {imageUrl && (
              <motion.div
                ref={resultRef}
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <img
                      src={imageUrl}
                      alt="AI generated cake preview"
                      crossOrigin="anonymous"
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Sparkles size={12} />
                      AI Generated
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="text-warm-gray text-sm">
                      <span className="font-semibold text-charcoal">Your prompt:</span>{' '}
                      {prompt}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleDownload}
                        className="flex-1 flex items-center justify-center gap-2 bg-cream text-charcoal px-4 py-3 rounded-xl font-medium hover:bg-cream-dark transition-colors"
                      >
                        <Download size={18} />
                        Download Image
                      </button>
                      <a
                        href={getWhatsAppLink(
                          `Hi! I used the AI Cake Studio and I'd love to order a cake like this:\n\n*Description:* ${prompt}\n\nI'm also sending the AI preview image. Can you make something similar? 🎂`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-medium hover:bg-[#1fb855] transition-colors"
                      >
                        <MessageCircle size={18} />
                        Order This Cake
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
