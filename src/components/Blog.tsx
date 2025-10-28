import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Clock, ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import SEOHead from './SEOHead';
import Navbar from './Navbar';

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

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return ( 
   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* SEO Head */}
      <SEOHead
        title="部落格 - Jack旅遊"
        description="Jack旅遊"
        keywords="旅遊部落格, 部落格文章, 旅行指南, Kevin旅遊"
        image="https://kevintravelsite.netlify.app/Logo.png"
        url="https://kevintravelsite.netlify.app/blog"
        type="website"
      />
  <Navbar />
<Link 
  to="/" 
  className="flex items-center space-x-3 group mt-32"
>
  <ArrowLeft className="h-8 w-8 text-sky-600 group-hover:text-sky-800 transition-colors" />
  <h2 className="text-4xl font-bold text-gray-900 mb-0">
    回到首頁
  </h2>
</Link>
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts
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
