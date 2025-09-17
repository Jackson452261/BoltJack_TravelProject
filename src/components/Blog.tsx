import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Clock, ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import SEOHead from './SEOHead';

// 部落格文章資料
const blogPosts = [
    {
      id: 1,
      title: "東南亞的隱藏寶藏",
      excerpt: "探索那些鮮為人知、卻能徹底改變你旅行觀點的驚艷目的地。",
      image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1747275375/30_bkwntz.png",
      category: "冒險",
      date: "2024年12月15日",
      readTime: "閱讀時間 8 分鐘",
      rating: 4.9
    },
    {
      id: 2,
      title: "歐洲美食市集：一場味蕾之旅",
      excerpt: "從巴塞隆納的博克利亞市場到伊斯坦堡的大巴扎，探索最具活力的美食文化。",
      image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "美食與文化",
      date: "2024年12月12日",
      readTime: "閱讀時間 6 分鐘",
      rating: 4.8
    },
    {
      id: 3,
      title: "日本單人旅行：完整指南",
      excerpt: "自信暢遊日出之國，初次單人旅行者的必備技巧。",
      image: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "單人旅行",
      date: "2024年12月10日",
      readTime: "閱讀時間 12 分鐘",
      rating: 5.0
    },
    {
      id: 4,
      title: "瑞士阿爾卑斯山健行路線",
      excerpt: "體驗令人驚嘆的高山美景，適合各種程度健行者的必訪步道。",
      image: "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "冒險",
      date: "2024年11月28日",
      readTime: "閱讀時間 9 分鐘",
      rating: 4.7
    },
    {
      id: 5,
      title: "曼谷街頭美食",
      excerpt: "品嚐曼谷著名街頭美食的繽紛風味。",
      image: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "美食與文化",
      date: "2024年11月20日",
      readTime: "閱讀時間 5 分鐘",
      rating: 4.9
    },
    {
      id: 6,
      title: "冰島極光奇景",
      excerpt: "捕捉冰島神奇極光的必備秘訣。",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "自然",
      date: "2024年11月15日",
      readTime: "閱讀時間 7 分鐘",
      rating: 5.0
    },
    {
      id: 7,
      title: "托斯卡尼葡萄酒之旅",
      excerpt: "沉醉於義大利托斯卡尼的美酒與綿延山丘。",
      image: "https://images.pexels.com/photos/302898/pexels-photo-302898.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "美食與文化",
      date: "2024年11月10日",
      readTime: "閱讀時間 6 分鐘",
      rating: 4.8
    },
    {
      id: 8,
      title: "探索大堡礁",
      excerpt: "潛水者必備的世界最大珊瑚礁系統指南。",
      image: "https://images.pexels.com/photos/189545/pexels-photo-189545.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "冒險",
      date: "2024年11月2日",
      readTime: "閱讀時間 10 分鐘",
      rating: 4.9
    },
    {
      id: 9,
      title: "48小時玩轉紐約",
      excerpt: "如何在短短兩天充分體驗大蘋果的精彩。",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "城市指南",
      date: "2024年10月28日",
      readTime: "閱讀時間 6 分鐘",
      rating: 4.6
    },
    {
      id: 10,
      title: "肯亞野生動物探險",
      excerpt: "體驗肯亞國家公園內非洲野生動物的震撼。",
      image: "https://images.pexels.com/photos/1601761/pexels-photo-1601761.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "野生動物",
      date: "2024年10月20日",
      readTime: "閱讀時間 8 分鐘",
      rating: 5.0
    },
    {
      id: 11,
      title: "秘魯的文化奇蹟",
      excerpt: "從馬丘比丘到在地傳統，深入探索秘魯的豐富文化。",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "文化",
      date: "2024年10月12日",
      readTime: "閱讀時間 9 分鐘",
      rating: 4.9
    },
    {
      id: 12,
      title: "加拿大滑雪勝地",
      excerpt: "冬季愛好者必訪的加拿大最佳滑雪場。",
      image: "https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "冒險",
      date: "2024年10月5日",
      readTime: "閱讀時間 7 分鐘",
      rating: 4.8
    },
    {
      id: 13,
      title: "地中海郵輪指南",
      excerpt: "享受陽光、大海與文化完美交融的地中海航程。",
      image: "https://images.pexels.com/photos/185367/pexels-photo-185367.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "豪華旅行",
      date: "2024年9月28日",
      readTime: "閱讀時間 10 分鐘",
      rating: 4.7
    }
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

<Link 
  to="/" 
  className="flex items-center space-x-3 group mb-8"
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
                <img
               onContextMenu={(e) => e.preventDefault()}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
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
