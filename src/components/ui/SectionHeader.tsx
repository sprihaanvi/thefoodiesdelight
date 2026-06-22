import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
  script?: string;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, script, light }: Props) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {script && (
        <span className={`font-script text-xl ${light ? 'text-gold-light' : 'text-brown'}`}>
          {script}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-1 ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl mx-auto text-base md:text-lg ${
            light ? 'text-white/70' : 'text-warm-gray'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
