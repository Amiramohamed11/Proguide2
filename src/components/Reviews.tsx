import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { api } from '../lib/api';

interface Review {
  id: number;
  title: string;
  content: string;
  author: string;
  rating: number;
  order: number;
}

interface ReviewResponse {
  data: Review[];
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await api.getReviews() as unknown as ReviewResponse;
  //       setReviews(Array.isArray(response.data) ? response.data : []);
  //     } catch (error) {
  //       console.error("Failed to fetch reviews", error);
  //       setReviews([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchReviews();
  // }, []);

  // return (
  //   <section className="py-24 px-6 bg-slate-50 font-sans">
  //     <div className="max-w-6xl mx-auto">
  //       <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
  //         Das sagen unsere Kunden
  //       </h2>
  //       <p className="text-center text-slate-600 mb-16">Erfahren Sie, was Patienten über unsere Dienstleistungen denken</p>

  //       {loading ? (
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {[1, 2, 3].map((i) => (
  //             <div key={i} className="animate-pulse bg-white rounded-lg p-6 h-64"></div>
  //           ))}
  //         </div>
  //       ) : reviews.length === 0 ? (
  //         <p className="text-center text-slate-600 py-12">Es gibt noch keine Bewertungen</p>
  //       ) : (
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {reviews.map((review) => (
  //             <motion.div
  //               key={review.id}
  //               initial={{ opacity: 0, y: 20 }}
  //               whileInView={{ opacity: 1, y: 0 }}
  //               viewport={{ once: true }}
  //               transition={{ duration: 0.5 }}
  //               className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200"
  //             >
  //               <div className="flex items-center gap-1 mb-4">
  //                 {Array.from({ length: 5 }).map((_, i) => (
  //                   <Star
  //                     key={i}
  //                     className={`w-4 h-4 ${
  //                       i < review.rating
  //                         ? 'fill-yellow-400 text-yellow-400'
  //                         : 'text-slate-300'
  //                     }`}
  //                   />
  //                 ))}
  //               </div>
  //               <h3 className="text-lg font-semibold text-slate-800 mb-2">{review.title}</h3>
  //               <p className="text-slate-600 mb-4 line-clamp-3">{review.content}</p>
  //               <p className="text-sm text-slate-500">— {review.author}</p>
  //             </motion.div>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   </section>
  // );
};

export default Reviews;
