import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  avatar: string;
  comment: string;
  rating: number;
  date: string;
}

export default function Testimonial({ name, avatar, comment, rating, date }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
    >
      {/* Rating Stars */}
      <div className="flex items-center text-amber-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fa-solid fa-star ${i < rating ? '' : 'text-gray-300 dark:text-gray-600'}`}
          ></i>
        ))}
        <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">{date}</span>
      </div>

      {/* Comment */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{comment}"</p>

      {/* User Info */}
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Verified Customer</p>
        </div>
      </div>
    </motion.div>
  );
}