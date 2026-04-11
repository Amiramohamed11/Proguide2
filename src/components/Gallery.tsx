import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { api, GalleryItem } from '../lib/api';

// Fallback images
import img1 from '../assets/gallery1.png';
import img2 from '../assets/gallery2.png';
import img3 from '../assets/gallery3.png';
import img4 from '../assets/gallery4.png';
import img5 from '../assets/gallery5.png';

const fallbackImages = [img1, img3, img4, img2, img5];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await api.getGallery();
        setGalleryItems(response);
      } catch (error) {
        console.error("Failed to fetch gallery", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  return (
    <section className="py-24 bg-slate-50 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
          Bildergalerie
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`animate-pulse bg-slate-200 rounded-xl ${
                  i === 2 ? 'md:row-span-2' : ''
                }`}
              ></div>
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`overflow-hidden rounded-xl shadow-md ${
                  index === 1 ? 'md:row-span-2' : 'md:col-span-1'
                }`}
              >
                <img
                  src={
                    item.image || fallbackImages[index % fallbackImages.length]
                  }
                  alt={item.caption || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;