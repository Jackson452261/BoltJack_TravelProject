import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from './SEOHead';
import Navbar from './Navbar';
import { client, urlFor, blogPostsQuery } from '../lib/sanity';

// Sanity post type
interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  image: any;
  category: string;
  date: string;
  readTime: string;
  rating: number;
}

// 部落格文章資料
const blogPosts = [
    {
      id: 1,
      title: "2023馬來西亞MotoGp",
      excerpt: "位於馬來西亞雪蘭莪州雪邦的一座動力運動賽車場，十分臨近同樣位於雪邦的吉隆坡國際機場。",
      image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1747275375/30_bkwntz.png",
      category: "冒險",
      date: "2024年12月15日",
      readTime: "閱讀時間 8 分鐘",
      rating: 4.9
    },
    {
      id: 2,
      title: "2024日本Motogp",
      excerpt: "Mobility Resort Motegi賽道位於茂木町日本栃木縣",
      image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1761663364/20241006_134556_o1dbrl.jpg",
      category: "美食與文化",
      date: "2024年10月06日",
      readTime: "閱讀時間 6 分鐘",
      rating: 4.8
    },
    {
      id: 3,
      title: "2025大阪萬博Expo無人機表演",
      excerpt: "從無人機「生命之樹」造型",
      image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1759930616/20250927_184037_fo58wb.jpg",
      category: "單人旅行",
      date: "2025年09月27日",
      readTime: "閱讀時間 12 分鐘",
      rating: 5.0
    },
      
    
  ];

interface BlogProps {
  showBackToHome?: boolean;
}

const Blog = ({ showBackToHome = false }: BlogProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sanityPosts, setSanityPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await client.fetch(blogPostsQuery);
        setSanityPosts(posts);
      } catch (error) {
        console.error('Error fetching posts from Sanity:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Combine Sanity posts with fallback posts
  const allPosts = [
    ...sanityPosts.map(post => ({
      id: post.slug?.current || post._id,
      title: post.title,
      excerpt: post.excerpt || '',
      image: post.image ? urlFor(post.image).width(800).url() : '',
      category: post.category || '',
      date: post.date || '',
      readTime: post.readTime || '',
      rating: post.rating || 0,
    })),
    ...blogPosts,
  ];

  // Carousel functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allPosts.length) % allPosts.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return ( 
   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* SEO Head */}
      <SEOHead
        title="部落格 - Jack旅遊"
        description="Jack旅遊"
        keywords="旅遊部落格, 部落格文章, 旅行指南, Jack旅遊"
        image="https://kevintravelsite.netlify.app/Logo.png"
        url="https://kevintravelsite.netlify.app/blog"
        type="website"
      />
  <Navbar />
  {showBackToHome && (
    <Link 
      to="/" 
      className="flex items-center space-x-3 group mt-32"
    >
      <ArrowLeft className="h-8 w-8 text-sky-600 group-hover:text-sky-800 transition-colors" />
      <h2 className="text-4xl font-bold text-gray-900 mb-0">
        回到首頁
      </h2>
    </Link>
  )}

      {/* Featured Posts Carousel */}
      <section className="relative bg-gray-50 py-16 my-12 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">精選文章</h2>
            <p className="text-lg text-gray-600">探索我們最受歡迎的旅遊故事</p>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            {/* Carousel Images */}
            <div className="relative h-full">
              {allPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4 max-w-4xl">
                      <motion.div
                        className="mb-4"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: index === currentSlide ? 0 : 30, opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                      >
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </motion.div>
                      <motion.h3
                        className="text-4xl font-bold mb-4"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: index === currentSlide ? 0 : 30, opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {post.title}
                      </motion.h3>
                      <motion.p
                        className="text-xl text-gray-200 mb-6"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: index === currentSlide ? 0 : 30, opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        {post.excerpt}
                      </motion.p>
                      <motion.div
                        className="flex items-center justify-center space-x-6 text-sm mb-6"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: index === currentSlide ? 0 : 30, opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-400 fill-current" />
                          {post.rating}
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: index === currentSlide ? 0 : 30, opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors"
                        >
                          閱讀文章
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {allPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts
          .filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <Link to={`/blog/${post.id}`}>
                  <img
                   onContextMenu={(e) => e.preventDefault()}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </Link>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700 ml-1">{post.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold text-red-600 mb-3 hover:text-sky-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 text-sky-600 hover:text-sky-700 font-semibold flex items-center transition-colors"
                >
                  閱讀更多
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Blog;
