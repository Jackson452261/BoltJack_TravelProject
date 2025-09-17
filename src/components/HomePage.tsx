import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  X, 
  MapPin, 
  Calendar, 
  User, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight,
  Star,
  Clock
} from 'lucide-react';
import SEOHead from './SEOHead';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Blog posts data
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


  const destinations = [
    {
      name: "Santorini, Greece",
      image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800",
      posts: 12
    },
    {
      name: "Bali, Indonesia",
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
      posts: 18
    },
    {
      name: "Tokyo, Japan",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800",
      posts: 15
    },
    {
      name: "Paris, France",
      image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800",
      posts: 21
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Head */}
      <SEOHead
        title="Kevin旅遊 - 探索世界各地旅行指南與攝影作品"
        description="Kevin的旅遊部落格，分享東南亞、歐洲、日本等地的旅行經驗、美食文化、攝影作品和實用旅遊指南。"
        keywords="旅遊部落格, 旅行指南, 東南亞旅遊, 歐洲旅遊, 日本旅遊, 美食文化, 攝影作品"
        image="https://kevintravelsite.netlify.app/Logo.png"
        url="https://kevintravelsite.netlify.app/"
        type="website"
      />
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold text-sky-600">Kevin</Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-900 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors">首頁</Link>
                <Link to="/blog" className="text-gray-500 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors"> 文章</Link>
 
                <Link to="/contact" className="text-gray-500 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors">聯絡</Link>
              
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
              <input
  type="text"
  placeholder="Search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="bg-gray-50 border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
/>
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="text-gray-900 block px-3 py-2 text-base font-medium">Home</Link>
              <a href="#" className="text-gray-500 block px-3 py-2 text-base font-medium">Destinations</a>
              <a href="#" className="text-gray-500 block px-3 py-2 text-base font-medium">Travel Tips</a>
              <a href="#" className="text-gray-500 block px-3 py-2 text-base font-medium">About</a>
              <a href="#" className="text-gray-500 block px-3 py-2 text-base font-medium">Contact</a>
              <div className="px-3 py-2">
              <input
  type="text"
  placeholder="Search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
/>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section  
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Explore the <span className="text-orange-400">World</span> with Us
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover hidden gems, share incredible stories, and create unforgettable memories across the globe.
          </p>
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    */}
      {/* Featured Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">最新文章</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          
            </p>
          </div>
   
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{blogPosts
  .filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
       )
        .map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <img 
                    onContextMenu={(e) => e.preventDefault()}
                    src={post.image} 
                    alt={`${post.title} - ${post.category} travel guide by Kevin`}
                    title={`${post.title} - ${post.excerpt.substring(0, 100)}...`}
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700 ml-1">{post.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <Link 
  to={`/blog/${post.id}`}>
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
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations 
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our most loved destinations with comprehensive guides and local insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl">
                <div className="aspect-w-4 aspect-h-5">
                  <img 
                    src={destination.image} 
                    alt={`${destination.name} travel destination - Beautiful scenery and attractions`}
                    title={`Explore ${destination.name} - ${destination.posts} travel posts available`}
                    loading="lazy"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                  <p className="text-gray-200 text-sm flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.posts} travel posts
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Newsletter  
      <section className="py-20 bg-sky-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Never Miss an Adventure</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Get the latest travel tips, destination guides, and exclusive stories delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg border-0 text-gray-900 focus:outline-none focus:ring-4 focus:ring-sky-300"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Subscribe
            </button>
          </form>
        </div>
      </section> */}

      {/* About Section 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Wanderlust</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're passionate travelers on a mission to inspire your next adventure. Our team of experienced globetrotters 
                shares authentic stories, practical tips, and hidden gems from around the world.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're planning your first international trip or you're a seasoned explorer looking for your next 
                destination, we're here to guide you every step of the way.
              </p>
              <div className="flex items-center space-x-4">
                <User className="h-12 w-12 text-sky-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Sarah & Mike</h3>
                  <p className="text-gray-600">Travel Bloggers & Photographers</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Travel bloggers"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">127+</div>
                  <div className="text-sm text-gray-600">Countries Visited</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-sky-400 mb-4">Kevin旅遊</h3>
              <p className="text-gray-300 mb-6">
               
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">連結</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">首頁</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">文章</a></li>
               
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">關於我</a></li>
              </ul>
            </div>
                  {/* Footer 
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Adventure Travel</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Food & Culture</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Solo Travel</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Photography</a></li>
              </ul>
            </div> */}
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300 mb-2">hello@wanderlustblog.com</p>
              <p className="text-gray-300 mb-4">+1 (555) 123-4567</p>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025  Jack旅遊 Blog. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;