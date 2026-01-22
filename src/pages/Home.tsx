import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { AuthContext } from '@/contexts/authContext';
import { useContext } from 'react';

// 模拟产品数据
const PRODUCTS = [
  {
    id: 1,
    name: "舒适运动鞋",
    price: 399,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Comfortable%20sports%20shoes%20minimalist%20design%20white%20background&sign=04ff4803085f1d7cdb7aa49c07a007c8",
    description: "轻便透气，适合日常运动和休闲穿着"
  },
  {
    id: 2,
    name: "时尚T恤",
    price: 159,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Stylish%20minimalist%20tshirt%20white%20background&sign=096f60f20438bfe65bc4022f45435d19",
    description: "纯棉材质，舒适亲肤，百搭时尚款式"
  },
  {
    id: 3,
    name: "休闲牛仔裤",
    price: 299,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Casual%20jeans%20minimalist%20design%20blue%20color&sign=bac615200d8b350fcee2971e8f7641a4",
    description: "经典版型，修身显瘦，耐穿不变形"
  },
  {
    id: 4,
    name: "精致手表",
    price: 599,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Elegant%20minimalist%20watch%20white%20background&sign=fa90e9fd491fceac3e865fb8fecc2ecf",
    description: "简约设计，精密机芯，彰显品味"
  }
];

const Navbar = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <nav className={`sticky top-0 z-50 px-4 py-4 shadow-md transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-2xl font-bold">SimpleShop</a>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-500 transition-colors">首页</a>
            <a href="#" className="hover:text-blue-500 transition-colors">商品</a>
            <a href="#" className="hover:text-blue-500 transition-colors">关于我们</a>
            <a href="#" className="hover:text-blue-500 transition-colors">联系我们</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="搜索商品..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`pl-10 pr-4 py-2 rounded-full border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'}`}
            />
            <i className="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2"></i>
          </div>
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
          >
            <i className={`fa ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          
          <button className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
            <i className="fa fa-shopping-cart"></i>
          </button>
          
          <button 
            onClick={handleLogin}
            className={`px-4 py-2 rounded-full ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
          >
            {isAuthenticated ? '已登录' : '登录'}
          </button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`relative py-16 md:py-24 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              简单购物，<br />
              <span className="text-blue-500">品质生活</span>
            </h1>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              我们提供精选优质商品，让您的购物体验更加简单、便捷、愉悦。
            </p>
            <div className="flex space-x-4">
              <button className={`px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all transform hover:scale-105`}>
                立即选购
              </button>
              <button className={`px-6 py-3 rounded-full border ${isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'} transition-colors`}>
                了解更多
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Minimalist%20shopping%20concept%20clean%20design&sign=0f03d994ff6c6279429fe78a501a19d8" 
              alt="购物理念" 
              className="w-full h-auto rounded-2xl shadow-xl transform transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-16 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">热门商品</h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            我们精心挑选的热门商品，满足您的各种需求
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 ${isDark ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transition-transform hover:scale-110"
                />
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-red-500 transition-colors">
                  <i className="fa fa-heart"></i>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className={`text-sm mb-3 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-500">¥{product.price}</span>
                  <button className={`px-3 py-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm transition-colors`}>
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className={`px-6 py-3 rounded-full border ${isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'} transition-colors`}>
            查看全部商品
          </button>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const { isDark } = useTheme();
  
  const features = [
    {
      icon: "fa-truck",
      title: "快速配送",
      description: "全国范围内快速配送，让您早日收到心仪商品"
    },
    {
      icon: "fa-shield-alt",
      title: "品质保证",
      description: "所有商品经过严格筛选，确保品质上乘"
    },
    {
      icon: "fa-undo",
      title: "无忧退货",
      description: "7天无理由退换货，购物更加放心"
    },
    {
      icon: "fa-headset",
      title: "贴心客服",
      description: "专业客服团队随时为您解答问题"
    }
  ];
  
  return (
    <section className={`py-16 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-xl transition-all hover:shadow-lg ${isDark ? 'bg-gray-900 hover:bg-gray-850' : 'bg-white hover:bg-gray-50'}`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-500`}>
                <i className={`fa ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  
  return (
    <section className={`py-16 ${isDark ? 'bg-blue-900' : 'bg-blue-500'} text-white`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">订阅我们的通讯</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          获取最新产品信息、促销活动和独家优惠
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="请输入您的邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="px-6 py-3 rounded-full bg-white text-blue-500 font-medium hover:bg-gray-100 transition-colors">
            立即订阅
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className={`py-12 ${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">SimpleShop</h3>
            <p className="mb-4">简单购物，品质生活</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <i className="fa fa-weixin"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">购物指南</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">新用户注册</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">购物流程</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">支付方式</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">常见问题</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">关于我们</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">公司简介</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">退换货政策</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">联系方式</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fa fa-map-marker w-5 mr-2"></i>
                <span>北京市朝阳区科技园A座</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-phone w-5 mr-2"></i>
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-envelope w-5 mr-2"></i>
                <span>info@simpleshop.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center`}>
          <p>&copy; {new Date().getFullYear()} SimpleShop. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <FeaturesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}