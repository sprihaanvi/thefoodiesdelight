import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { INSTAGRAM_URL, BAKERY_EMAIL, WHATSAPP_NUMBER, BAKERY_INFO, PHONE_DISPLAY } from '../../data/constants';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-white mb-2">
              {BAKERY_INFO.name}
            </h3>
            <p className="font-script text-gold text-lg mb-4">
              {BAKERY_INFO.tagline}
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              {BAKERY_INFO.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Explore</h4>
            <div className="space-y-2">
              {[
                { to: '/menu', label: 'Our Menu' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/visualize', label: 'AI Cake Studio' },
                { to: '/reviews', label: 'Reviews' },
                { to: '/about', label: 'Our Story' },
                { to: '/order', label: 'Order Now' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-3 text-sm hover:text-gold transition-colors"
              >
                <Phone size={16} />
                <span>{PHONE_DISPLAY}</span>
              </a>
              {/* <a
                href={`mailto:${BAKERY_EMAIL}`}
                className="flex items-center gap-3 text-sm hover:text-gold transition-colors"
              >
                <Mail size={16} />
                <span>{BAKERY_EMAIL}</span>
              </a> */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-gold transition-colors"
              >
                <FaInstagram size={16} />
                <span>@thefoodies_delight</span>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} />
                <span>{BAKERY_INFO.city}, {BAKERY_INFO.state}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {BAKERY_INFO.name}. Handcrafted
            with love since {BAKERY_INFO.founded}.
          </p>
        </div>
      </div>
    </footer>
  );
}
