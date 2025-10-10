import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Star, 
  User, 
  Share2, 
  Heart,
  Bookmark,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from './SEOHead';


const BlogDetail = () => {
  const { id } = useParams();

  // Blog posts data (same as in HomePage)
  const blogPosts = [
    {
      id: 1,
      title: "東南亞的隱藏寶藏",
      excerpt: "探索那些鮮為人知、卻能徹底改變你旅行觀點的驚艷目的地。",
      image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1747275375/30_bkwntz.png",
      category: "冒險",
      date: "2024年12月15日",
      readTime: "閱讀時間 8 分鐘",
      rating: 4.9,
      author: "Kevin Chen",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
      content: `
        <p>東南亞擁有許多令人驚嘆的隱藏寶藏，等待著勇敢的探險者去發現。從泰國北部的秘密瀑布到越南中部的古老洞穴，這些目的地將徹底改變你對旅行的看法。</p>
        
        <h2>泰國北部的秘密瀑布</h2>
        <p>在清邁附近的山區，隱藏著一些當地人才知道的美麗瀑布。這些瀑布不僅景色壯觀，更重要的是遠離觀光人潮，讓你能夠真正感受大自然的寧靜。</p>
        
        <h2>越南中部的古老洞穴</h2>
        <p>峰牙-己榜國家公園內的洞穴系統是世界上最壯觀的地下奇觀之一。這裡的石灰岩地形經過數百萬年的侵蝕，形成了令人嘆為觀止的地下河流和鐘乳石洞。</p>
        
        <h2>實用旅行建議</h2>
        <ul>
          <li>最佳旅行時間：11月至3月，天氣涼爽乾燥</li>
          <li>必備裝備：防水背包、舒適的徒步鞋、頭燈</li>
          <li>當地導遊：強烈建議聘請當地導遊，確保安全並深入了解文化</li>
        </ul>
        
        <p>這些隱藏的寶藏不僅提供了絕佳的攝影機會，更重要的是讓你體驗到真正的冒險精神。記住，最美的風景往往在人跡罕至的地方等待著你。</p>
      `
    },
    {
      id: 2,
      title: "2025大阪萬博Expo無人機表演",
      excerpt: "從無人機「生命之樹」造型",
      image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "",
      date: "2025年09月27日",
      readTime: "閱讀時間 6 分鐘",
      rating: 4.8,
      author: "Sarah Martinez",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
      content: `
        <p>參與無人機數量： 約 2,500 架

其中 1,749 架無人機 組成了「巨大的樹」造型，象徵「生命、連結與再生」。</p>
        
        <div style="margin: 20px 0; text-align: center;">
          <video 
            src="https://res.cloudinary.com/dtbj43yha/video/upload/v1759931179/20250927_194334_hgztac.mp4" 
            controls 
            style="width: 100%; max-width: 800px; height: 500px; border-radius: 8px;"
            preload="metadata"
          >
            您的瀏覽器不支援影片播放。
          </video>
        </div>
        <div style="margin: 20px 0; text-align: center;">
          <video 
            src="https://res.cloudinary.com/dtbj43yha/video/upload/v1759931228/20250927_194407_x2h4fe.mp4" 
            controls 
            style="width: 100%; max-width: 800px; height: 500px; border-radius: 8px;"
            preload="metadata"
          >
            您的瀏覽器不支援影片播放。
          </video>
        </div>

       

          <div style="margin: 20px 0; text-align: center;">
          <video 
            src="https://res.cloudinary.com/dtbj43yha/video/upload/v1759931285/20250927_194443_grpnss.mp4" 
            controls 
            style="width: 100%; max-width: 800px; height: 500px; border-radius: 8px;"
            preload="metadata"
          >
            您的瀏覽器不支援影片播放。
          </video>

          <p> 第二幕：《人》（Humanity）
→ 無人機組成巨大人形，象徵人類誕生與創造力的覺醒。</p>

 <video 
            src="https://res.cloudinary.com/dtbj43yha/video/upload/v1759929912/20250927_194223_wtq7me.mp4" 
            controls 
            style="width: 100%; max-width: 800px; height: 500px; border-radius: 8px;"
            preload="metadata"
          >
            您的瀏覽器不支援影片播放。
          </video>

        </div>
      ` 
    },
    {
      id: 3,
      title: "日本單人旅行：完整指南",
      excerpt: "自信暢遊日出之國，初次單人旅行者的必備技巧。",
      image: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "單人旅行",
      date: "2024年12月10日",
      readTime: "閱讀時間 12 分鐘",
      rating: 5.0,
      author: "Takeshi Yamamoto",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      content: `
        <p>日本是單人旅行者的天堂。這個國家以其安全性、便利性和對獨自旅行者的友善態度而聞名。無論你是第一次單人旅行還是經驗豐富的獨行俠，日本都能提供難忘的體驗。</p>
        
        <h2>為什麼選擇日本單人旅行？</h2>
        <p>日本擁有世界上最安全的環境之一，完善的交通系統，以及對個人空間的尊重文化。這些因素使得單人旅行變得輕鬆愉快。</p>
        
        <h2>交通指南</h2>
        <p>JR Pass是長途旅行的最佳選擇。在城市內，地鐵和公車系統非常發達。Google Maps在日本非常準確，是導航的好幫手。</p>
        
        <h2>住宿建議</h2>
        <ul>
          <li>膠囊旅館：經濟實惠，體驗獨特</li>
          <li>商務旅館：舒適便利，價格合理</li>
          <li>傳統旅館：體驗日式文化</li>
          <li>青年旅社：結識其他旅行者</li>
        </ul>
        
        <h2>文化禮儀</h2>
        <p>了解基本的日本禮儀將讓你的旅行更加順利。記住要脫鞋進入家庭和某些餐廳，在電車上保持安靜，以及正確使用筷子。</p>
      `
    },
    {
      id: 4,
      title: "瑞士阿爾卑斯山健行路線",
      excerpt: "體驗令人驚嘆的高山美景，適合各種程度健行者的必訪步道。",
      image: "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "冒險",
      date: "2024年11月28日",
      readTime: "閱讀時間 9 分鐘",
      rating: 4.7,
      author: "Hans Mueller",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
      content: `
        <p>瑞士阿爾卑斯山提供了世界上最壯觀的健行體驗。從適合初學者的湖邊步道到挑戰性的高山路線，這裡有適合每個人的健行選擇。</p>
        
        <h2>經典健行路線推薦</h2>
        <p>馬特洪峰周圍的健行路線是必訪之選。從策馬特出發，你可以選擇不同難度的路線，每一條都能欣賞到令人屏息的山景。</p>
        
        <h2>健行準備事項</h2>
        <ul>
          <li>適當的健行裝備：防水外套、健行靴、背包</li>
          <li>天氣預報：山區天氣變化快速</li>
          <li>體能準備：提前進行體能訓練</li>
          <li>路線規劃：選擇適合自己程度的路線</li>
        </ul>
        
        <p>記住，安全永遠是第一優先。享受瑞士阿爾卑斯山的美景，但要時刻注意安全。</p>
      `
    },
    {
      id: 5,
      title: "曼谷街頭美食",
      excerpt: "品嚐曼谷著名街頭美食的繽紛風味。",
      image: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "美食與文化",
      date: "2024年11月20日",
      readTime: "閱讀時間 5 分鐘",
      rating: 4.9,
      author: "Siriporn Thanakit",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      content: `
        <p>曼谷的街頭美食文化是這座城市最吸引人的特色之一。從早晨到深夜，街頭攤販提供著各種美味且價格親民的泰式料理。</p>
        
        <h2>必試街頭美食</h2>
        <p>泰式炒河粉、青木瓜沙拉、芒果糯米飯是絕對不能錯過的經典。每個攤販都有自己的秘密配方，讓同樣的菜色呈現不同的風味。</p>
        
        <h2>街頭美食安全小貼士</h2>
        <ul>
          <li>選擇人潮多的攤販</li>
          <li>觀察食物的新鮮度</li>
          <li>避免生食和冰塊</li>
          <li>隨身攜帶腸胃藥</li>
        </ul>
      `
    },
    {
      id: 6,
      title: "冰島極光奇景",
      excerpt: "捕捉冰島神奇極光的必備秘訣。",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "自然",
      date: "2024年11月15日",
      readTime: "閱讀時間 7 分鐘",
      rating: 5.0,
      author: "Erik Johansson",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      content: `
        <p>冰島是世界上觀賞極光的最佳地點之一。這個北歐島國提供了完美的條件來欣賞這個自然界最壯觀的光影秀。</p>
        
        <h2>最佳觀賞時間</h2>
        <p>9月到3月是觀賞極光的最佳季節，其中10月到2月是高峰期。需要晴朗無雲的夜晚和低光污染的環境。</p>
        
        <h2>攝影技巧</h2>
        <ul>
          <li>使用三腳架穩定相機</li>
          <li>設定長曝光時間</li>
          <li>調高ISO感光度</li>
          <li>使用廣角鏡頭</li>
        </ul>
        
        <p>耐心是觀賞極光最重要的品質。有時需要等待數小時，但當極光出現時，那份感動絕對值得所有的等待。</p>
      `
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


  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/" className="text-sky-600 hover:text-sky-700 font-semibold">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Head */}
      <SEOHead
        title={`${post.title} - Kevin旅遊`}
        description={post.excerpt}
        keywords={`${post.category}, 旅遊, ${post.title}, Kevin旅遊`}
        image={post.image}
        url={`https://kevintravelsite.netlify.app/blog/${post.id}`}
        type="article"
      />
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-sky-600">Wanderlust</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 ">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="mb-4">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
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
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Author Info */}
            <div className="flex items-center mb-8 p-6 bg-gray-50 rounded-lg">
              <img 
                src={post.authorImage} 
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">Travel Writer & Photographer</p>
                <p className="text-sm text-gray-500 mt-1">Published on {post.date}</p>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </button>
                <button className="flex items-center px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <Share2 className="h-4 w-4 mr-2" />
                  Copy Link
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Action Buttons */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                    <Heart className="h-4 w-4 mr-2" />
                    Like Article
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save for Later
                  </button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(p => p.id !== post.id && p.category === post.category)
                    .slice(0, 2)
                    .map(relatedPost => (
                      <Link 
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-sky-400 mb-4">Wanderlust</h3>
              <p className="text-gray-300 mb-6">
                Your guide to extraordinary adventures around the world. Travel with purpose, explore with passion.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Tips</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Adventure Travel</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Food & Culture</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Solo Travel</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Photography</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300 mb-2">hello@wanderlustblog.com</p>
              <p className="text-gray-300 mb-4">+1 (555) 123-4567</p>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Wanderlust Blog. All rights reserved. Made with ❤️ for travelers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;