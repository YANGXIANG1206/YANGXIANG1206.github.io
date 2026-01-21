import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
  };

  const handleQuickView = () => {
    toast.info(`Quick view: ${product.name}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden h-60">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-800 dark:text-gray-200"
            aria-label="Add to wishlist"
          >
            <i className="fa-regular fa-heart"></i>
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex space-x-2">
            <button
              onClick={handleQuickView}
              className="flex-1 bg-white/90 hover:bg-white text-gray-900 rounded-md py-2 text-sm font-medium transition-colors"
            >
              Quick View
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-md py-2 text-sm font-medium transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{product.category}</div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 flex-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</div>
          <div className="flex items-center text-amber-500">
            <i className="fa-solid fa-star mr-1"></i>
            <span className="text-sm text-gray-700 dark:text-gray-300">{product.rating} ({product.reviews})</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}