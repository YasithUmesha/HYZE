import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUp,
  ArrowUpRight,
  Camera,
  Check,
  Menu,
  Users,
  X,
  MessageCircle,
} from 'lucide-react';

const products = [
  { name: 'Chunky Shoes', category: 'Footwear', edition: '01', price: 'Rs. 4,500', image: '/Images/Chunky.jpg' },
  { name: 'Govin Cricket Shoes', category: 'Sport', edition: '02', price: 'Rs. 6,500', image: '/Images/GovinCric.jpg' },
  { name: 'Govin Indoor Shoes', category: 'Sport', edition: '03', price: 'Rs. 8,000', image: '/Images/GovinInd.jpg' },
  { name: 'NIKE T-Shirt', category: 'Apparel', edition: '04', price: 'Rs. 1,290', image: '/Images/NIKE T-SHIRT.jpg' },
  { name: 'Knee Support', category: 'Wellness', edition: '05', price: 'Rs. 700', image: '/Images/KneeGuard.jpg' },
  { name: 'Flat Top Sunglasses', category: 'Eyewear', edition: '06', price: 'Rs. 1,100', image: '/Images/SunGlass.jpg' },
  { name: 'WS 99ULTRA', category: 'Technology', edition: '07', price: 'Rs. 2,500', image: '/Images/SmartWatch.jpg' },
  { name: 'Canvas Messenger', category: 'Accessories', edition: '08', price: 'Rs. 1,200', image: '/Images/Bag.jpg' },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  const submitNewsletter = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.email;
    if (!email.checkValidity()) {
      setFormStatus('Please enter a valid email address.');
      email.focus();
      return;
    }
    setFormStatus('Thank you. You are on the HYZE list.');
    event.currentTarget.reset();
  };

  return (
    <>
      <header className="site-header" id="top">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="HYZE home" onClick={closeMenu}>HYZE<span>.</span></a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
            <a className="active" href="#top" onClick={closeMenu}>Home</a>
            <a href="#collection" onClick={closeMenu}>Collection</a>
            <a href="#story" onClick={closeMenu}>Our story</a>
          </div>
          <a className="nav-contact" href="#contact">Get in touch</a>
        </nav>
      </header>

      <main>
        <section className="hero shell" id="heroScene" aria-labelledby="heroTitle">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.p className="eyebrow" variants={reveal}>Edition 2026 / Sri Lanka</motion.p>
            <motion.h1 id="heroTitle" variants={reveal}>Objects for a<br /><em>considered life.</em></motion.h1>
            <motion.p className="hero-lede" variants={reveal}>A curated edit of expressive essentials, designed for days with intention and style without noise.</motion.p>
            <motion.div className="hero-actions" variants={reveal}>
              <motion.a className="button button-primary" href="#collection" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Explore collection</motion.a>
              <a className="text-link" href="#story">Discover HYZE <ArrowUpRight size={14} aria-hidden="true" /></a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-art"
            aria-label="HYZE spring collection"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-image-wrap">
              <img src="/Images/cover.png" alt="HYZE fashion collection" />
              <motion.div
                className="edition-card glass-panel"
                aria-label="Current collection"
                whileHover={reduceMotion ? undefined : { y: -8, rotate: -1.5 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <span>Current</span>
                <strong>New<br />Forms</strong>
                <small>26 / 01</small>
              </motion.div>
              <div className="hero-index" aria-hidden="true">01</div>
            </div>
          </motion.div>
        </section>

        <section className="collection section shell" id="collection" aria-labelledby="collectionTitle">
          <motion.div
            className="section-heading"
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={reveal}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">The edit</p>
              <h2 id="collectionTitle">Selected pieces</h2>
            </div>
            <p>Eight considered objects for movement, sport, and everyday life.</p>
          </motion.div>

          <motion.div
            className="product-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } } }}
          >
            {products.map(product => (
              <motion.article
                className="product-card"
                key={product.name}
                variants={reveal}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.a
                  className="product-image"
                  href="#collection"
                  aria-label={`View ${product.name}`}
                  whileHover={reduceMotion ? undefined : 'hover'}
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    variants={{ hover: { scale: 1.035 } }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <span className="product-number">{product.edition}</span>
                </motion.a>
                <div className="product-meta">
                  <div><h3>{product.name}</h3><p>{product.category} / Edition {product.edition}</p></div>
                  <strong>{product.price}</strong>
                </div>
                <motion.button
                  className={`add-to-cart ${selected === product.name ? 'selected' : ''}`}
                  type="button"
                  onClick={() => {
                    setSelected(product.name);
                    window.setTimeout(() => setSelected(current => current === product.name ? '' : current), 1800);
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selected === product.name ? 'Selected' : 'View piece'}
                  {selected === product.name
                    ? <Check size={14} aria-hidden="true" />
                    : <ArrowUpRight size={14} aria-hidden="true" />}
                </motion.button>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="story section" id="story">
          <motion.div
            className="story-inner shell"
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="eyebrow" variants={reveal}>Our point of view</motion.p>
            <motion.h2 variants={reveal}>Less excess.<br /><em>More intention.</em></motion.h2>
            <motion.div className="story-copy" variants={reveal}>
              <p>HYZE brings together well-made, contemporary pieces that feel relevant beyond a season. We choose character over clutter and quality over quantity.</p>
              <a className="text-link" href="#contact">Read our story <ArrowUpRight size={14} aria-hidden="true" /></a>
            </motion.div>
          </motion.div>
        </section>

        <section className="newsletter shell" id="contact" aria-labelledby="newsletterTitle">
          <motion.div
            className="newsletter-panel"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Private list</p>
              <h2 id="newsletterTitle">Notes from HYZE.</h2>
            </div>
            <form className="newsletter-form" onSubmit={submitNewsletter} noValidate>
              <label htmlFor="email">Email address</label>
              <div className="form-row">
                <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                <motion.button type="submit" aria-label="Subscribe" whileTap={{ scale: 0.96 }}>
                  Subscribe <ArrowUpRight size={14} aria-hidden="true" />
                </motion.button>
              </div>
              <p className="form-status" role="status">{formStatus}</p>
            </form>
          </motion.div>
        </section>
      </main>

      <footer>
        <div className="footer-inner shell">
          <a className="brand footer-brand" href="#top">HYZE<span>.</span></a>
          <div className="footer-address">
            <p>1166/3A, Dhammodaya Mawatha<br />Battaramulla, Sri Lanka</p>
          </div>
          <div className="footer-links">
            <a href="https://www.instagram.com/hyze_lk_?igsh=MjFzaTduczYyNzBv" target="_blank" rel="noopener"><Camera size={15} /> Instagram</a>
            <a href="https://www.facebook.com/share/16SUqEZd4y/?mibextid=qi2Omg" target="_blank" rel="noopener"><Users size={15} /> Facebook</a>
            <a href="https://wa.me/message/LOAJWBIJFA7HD1" target="_blank" rel="noopener"><MessageCircle size={15} /> WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© 2026 HYZE</span>
          <a href="#top">Back to top <ArrowUp size={13} /></a>
        </div>
      </footer>
    </>
  );
}
