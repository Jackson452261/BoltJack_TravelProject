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

  // Prevent right-click on all images
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Blog posts data (same as in HomePage)
  const blogPosts = [
    {
      id: 1,
      title: "2023馬來西亞MotoGp",
      excerpt: "位於馬來西亞雪蘭莪州雪邦的一座動力運動賽車場，十分臨近同樣位於雪邦的吉隆坡國際機場。",
      image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1747275375/30_bkwntz.png",
      category: "冒險",
      date: "2023年11月12日",
      readTime: "閱讀時間 8 分鐘",
      rating: 4.9,
      author: "Kevin ",
      authorImage: "",    
      content: `
                <h2 style="font-size: 28px; font-weight: bold;">Alexmarquez73</h2>
        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756132852/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_224404_u37xjz.png" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

       
        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756132850/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_224408_vtet71.png" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

        <h2 style="font-size: 28px; font-weight: bold;"> Jorgemartin89</h2>
        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756132612/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_224011_lqaeln.png" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756132612/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_224020_xk6h7m.png" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756132611/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_224034_hc6vjc.png" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

        <h2 style="font-size: 28px; font-weight: bold;">Francesco Bagnaia</h2>
 
        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756132234/IMG_5755_rpxbgx.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
        
        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756132234/IMG_5756_a98bdb.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
        
        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756132234/IMG_5754_s6mk8f.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
      
             

        <h2 style="font-size: 28px; font-weight: bold;"> Marc Márquez</h2>
       <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756130851/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_221040_mpwtl2.png" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

       <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756130850/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_221055_nsqbpq.png" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

      <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1749265674/IMG_5775_11zon_snkgmo.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1749265389/IMG_5703_11zon_aqwyuk.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

      <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1749265674/IMG_5776_11zon_qvqtrb.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


       

      <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1749265674/IMG_5777_11zon_tc0x5z.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
      
      
      
       `},
    {
      id: 2,
      title: "2024日本Motogp",
      excerpt: "Mobility Resort Motegi賽道位於茂木町日本栃木縣",
      image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1761663364/20241006_134556_o1dbrl.jpg",
      category: "",
      date: "2024年10月06日",
      readTime: "閱讀時間 6 分鐘",
      rating: 4.8,
      author: "Kevin",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
      content: `
         

         <h2 style="font-size: 28px; font-weight: bold;"> Marc Márquez</h2>
       <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1747273620/37_t8fp1x.png" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

       <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1761747084/IMG_1511_v8rlki.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


       <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1761747073/IMG_1513_dfeved.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


       <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1761747074/IMG_1510_wslzhj.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


       <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1761747073/IMG_1514_jmurmp.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />




       <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756212844/IMG_1998_ew87eo.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756212843/IMG_1997_kg3hdh.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


         <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756212841/IMG_1999_yedqsb.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


         <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756212384/IMG_1968_i6a4ey.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


         <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756212131/IMG_1601_ubemvm.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />



          <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756212130/IMG_1599_yyivgm.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


              <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756212131/IMG_1600_bsbdsf.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />




      `},
    {
      id: 3,
      title: "2025大阪萬博Expo無人機表演",
      excerpt: "從無人機「生命之樹」造型",
      image: "https://res.cloudinary.com/dtbj43yha/image/upload/v1759930616/20250927_184037_fo58wb.jpg",
      category: "",
      date: "2025年09月27日",
      readTime: "閱讀時間 6 分鐘",
      rating: 4.8,
      author: "Kevin",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
      content: `
        <p>參與無人機數量： 約 2,500 架

其中 1,749 架無人機 組成了「巨大的樹」造型，象徵「生命、連結與再生」。</p>
        
        <div style="margin: 20px 0; text-align: center;">
          <video 
            src="https://res.cloudinary.com/dtbj43yha/video/upload/v1759931179/20250927_194334_hgztac.mp4" 
            controls 
            style="width: 100%; max-width: 400px; height:  auto; border-radius: 8px; object-fit: contain;"
            preload="metadata"
            controlsList="nodownload"
            playsInline
          >
            您的瀏覽器不支援影片播放。
          </video>
        </div>
        <div style="margin: 20px 0; text-align: center;">
          <video 
            src="https://res.cloudinary.com/dtbj43yha/video/upload/v1759931228/20250927_194407_x2h4fe.mp4" 
            controls 
            style="width: 100%; max-width: 400px; height: auto; border-radius: 8px; object-fit: contain;"
            preload="metadata"
            controlsList="nodownload"
            playsInline
          >
            您的瀏覽器不支援影片播放。
          </video>
        </div>

       

          <div style="margin: 20px 0; text-align: center;">
          <video 
            src="https://res.cloudinary.com/dtbj43yha/video/upload/v1759931285/20250927_194443_grpnss.mp4" 
            controls 
            style="width: 100%; max-width: 400px; height: auto; border-radius: 8px; object-fit: contain;"
            preload="metadata"
            controlsList="nodownload"
            playsInline
          >
            您的瀏覽器不支援影片播放。
          </video>

          <p> 第二幕：《人》（Humanity）
→ 無人機組成巨大人形，象徵人類誕生與創造力的覺醒。</p>

 <video 
            src="https://res.cloudinary.com/dtbj43yha/video/upload/v1759929912/20250927_194223_wtq7me.mp4" 
            controls 
            style="width: 100%; max-width: 400px; height: auto; border-radius: 8px; object-fit: contain;"
            preload="metadata"
            controlsList="nodownload"
            playsInline
          >
            您的瀏覽器不支援影片播放。
          </video>

        </div>
      ` 
    },
    
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
      {/* Custom CSS for video fullscreen handling */}
      <style>{`
        video:fullscreen {
          width: 100vw !important;
          height:  auto !important;
          object-fit: cover !important;
          background: black;
          transform: rotate(90deg) !important;
          transform-origin: center !important;
        }
        video:-webkit-full-screen {
          width: 100vw !important;
          height: auto !important;
          object-fit: cover !important;
          background: black;
          transform: rotate(90deg) !important;
          transform-origin: center !important;
        }
        video:-moz-full-screen {
          width: 100vw !important;
          height: auto !important;
          object-fit: cover !important;
          background: black;
          transform: rotate(90deg) !important;
          transform-origin: center !important;
        }
        video:-ms-fullscreen {
          width: 100vw !important;
          height: auto !important;
          object-fit: cover !important;
          background: black;
          transform: rotate(90deg) !important;
          transform-origin: center !important;
        }
        
        /* Alternative approach for better mobile compatibility */
        @media screen and (orientation: landscape) {
          video:fullscreen {
            transform: none !important;
          }
          video:-webkit-full-screen {
            transform: none !important;
          }
          video:-moz-full-screen {
            transform: none !important;
          }
          video:-ms-fullscreen {
            transform: none !important;
          }
        }
      `}</style>
      
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
              <Link to="/" className="text-2xl font-bold text-sky-600">Kevin攝影</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                回到首頁
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
        {/* Main Content - Centered */}
        <div className="max-w-3xl mx-auto">
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
            <div className="flex justify-center space-x-4">
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