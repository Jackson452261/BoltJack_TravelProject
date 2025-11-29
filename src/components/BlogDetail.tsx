import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor, blogPostsQuery } from '../lib/sanity';
import { PortableText } from '@portabletext/react';
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
  Youtube,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from './SEOHead';


// Sanity content types
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
  author: {
    name: string;
    image: any;
    role: string;
  };
  content: any[];
}

// PortableText components for rendering Sanity content
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure style={{ margin: '20px 0', textAlign: 'center' }}>
          {value.caption && (
            <figcaption style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px', color: '#1f2937', textAlign: 'center' }}>
              {value.caption}
            </figcaption>
          )}
          <img
            src={urlFor(value).width(2000).url()}
            alt={value.alt || ''}
            style={{ width: '100%', height: 'auto', minHeight: '400px', maxHeight: '800px', objectFit: 'contain', borderRadius: '8px' }}
          />
        </figure>
      );
    },
    videoEmbed: ({ value }: any) => (
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <video
          src={value.url}
          controls
          style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '8px', objectFit: 'contain' }}
          preload="metadata"
          controlsList="nodownload"
          playsInline
        >
          您的瀏覽器不支援影片播放。
        </video>
        {value.caption && <p>{value.caption}</p>}
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>{children}</h1>,
    h2: ({ children }: any) => <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '14px' }}>{children}</h2>,
    h3: ({ children }: any) => <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>{children}</h3>,
    normal: ({ children }: any) => <p style={{ marginBottom: '16px', lineHeight: '1.8' }}>{children}</p>,
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const [sanityPosts, setSanityPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);

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

  // Carousel state and data
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Mountain Adventure",
      description: "Explore breathtaking mountain landscapes"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ocean Paradise",
      description: "Discover pristine beaches and crystal waters"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "City Lights",
      description: "Experience vibrant urban adventures"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Forest Escape",
      description: "Find peace in nature's embrace"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Desert Journey",
      description: "Adventure through endless horizons"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

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

  // Blog posts data (same as in HomePage) - fallback
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
      author: "Jack ",
      authorImage: "",    
      content: `
                <h2 style="font-size: 28px; font-weight: bold;">Alexmarquez73</h2>
        <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756132852/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_224404_u37xjz.png" alt="東南亞隱藏寶藏" style="width: 150%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

       
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
      author: "Jack",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
      content: `
         
     
        <h2 style="font-size: 28px; font-weight: bold;">抵達成田機場之後往鐵道方向</h2>
         <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762657451/20231008_114744_wrewi3.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

          <h2 style="font-size: 28px; font-weight: bold;">搭乘往羽田空港的電車往東京市區</h2>
         <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762657810/20231008_120006_luhy8l.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

           <h2 style="font-size: 28px; font-weight: bold;">在淺草站下車到淺草寺</h2>
         <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762658054/20231008_154402_b96nn7.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


          <h2 style="font-size: 28px; font-weight: bold;">往東京車站</h2>
         <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762658643/20241005_210426_jlx1hk.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
  

           <h2 style="font-size: 28px; font-weight: bold;">事先在klook購買好新幹線車票找到可以讀取QR CODE的機器</h2>
          <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762658976/20241005_170030_fto4fp.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 800px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
              <h2 style="font-size: 28px; font-weight: bold;">兌換往宇都公車票</h2>
              <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762659084/20241005_174723_db9etr.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
  
                 <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762659296/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-11-09_113954_bcszhk.png" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


              
                            <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762659784/20241006_073040_0_aakimf.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
                                      <h2 style="font-size: 28px; font-weight: bold;">往仙台的新幹線</h2>
                            <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762659730/20241006_073300_cgrbgm.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 1000px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

                                  <h2 style="font-size: 28px; font-weight: bold;">抵達宇都宮站</h2>
                            <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762659931/20241006_083809_wnmlvc.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 1000px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />



                               <h2 style="font-size: 28px; font-weight: bold;">出口後在東口出集合搭乘巴士前往賽道</h2>
                            <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762659931/20241006_083809_wnmlvc.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 1000px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
                                <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762660481/20241006_085420_w1eold.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 1000px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


                               <h2 style="font-size: 28px; font-weight: bold;">車票可事先在網站購買:https://motegi88.com/yoyaku/index_en.php</h2>



                               <h2 style="font-size: 28px; font-weight: bold;">在本田博物館下車</h2>
                                 <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762660620/20241006_100755_bezjqs.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 800px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


                                   <h2 style="font-size: 28px; font-weight: bold;">回程巴士集合位置</h2>
                                 <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762660621/20241006_100734_c31vmm.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height: 1000px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

 

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
      author: "Jack",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
      content: `



            <h2 style="font-size: 28px; font-weight: bold;">抵達關西機場後往2樓鐵道方向</h2>
                            <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756997174/20250228_123531_vvivoy.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height:800px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


                             <h2 style="font-size: 28px; font-weight: bold;">搭乘南海本線急行電車往難波，直接刷IC卡進站不要搭到rapit的特急列車</h2>
                            <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756997665/20250228_134513_pk2fnl.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height:800px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />


                             <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1756997685/20250228_134907_w6guqq.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height:800px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
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

 
   <h2 style="font-size: 28px; font-weight: bold;">在天下茶屋站搭乘南海本線急行電車往關西機場，直接刷IC卡進站不要搭到rapit的特急列車</h2>
                            <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762662717/20250228_144100_w4ojgm.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height:800px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />

                            <h2 style="font-size: 28px; font-weight: bold;">搭乘16:57空港急行往關西空港預計40分左右</h2>
                               <img src="https://res.cloudinary.com/dtbj43yha/image/upload/v1762662717/20250302_165023_xer0o5.jpg" alt="東南亞隱藏寶藏" style="width: 100%; height:800px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />
        </div>
      ` 
    },
      
    
  ];


  // Try to find post from Sanity first, then fallback to hardcoded
  const sanityPost = sanityPosts.find(p => p.slug?.current === id || p._id === id);
  const fallbackPost = blogPosts.find(p => p.id === parseInt(id || '1'));
  
  // Use Sanity post if available
  const isSanityPost = !!sanityPost;
  const post = sanityPost ? {
    id: sanityPost._id,
    title: sanityPost.title,
    excerpt: sanityPost.excerpt || '',
    image: sanityPost.image ? urlFor(sanityPost.image).width(1200).url() : '',
    category: sanityPost.category || '',
    date: sanityPost.date || '',
    readTime: sanityPost.readTime || '',
    rating: sanityPost.rating || 0,
    author: sanityPost.author?.name || 'Jack',
    authorImage: sanityPost.author?.image ? urlFor(sanityPost.author.image).width(100).url() : '',
    content: sanityPost.content,
  } : fallbackPost;

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
          <p className="text-gray-600">載入中...</p>
        </div>
      </div>
    );
  }

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
        title={`${post.title} - Jack旅遊`}
        description={post.excerpt}
        keywords={`${post.category}, 旅遊, ${post.title}, Jack旅遊`}
        image={post.image}
        url={`https://kevintravelsite.netlify.app/blog/${post.id}`}
        type="article"
      />
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-sky-600">Jack旅遊</Link>
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

      {/* Travel Inspiration Carousel */}
      <section className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Travel Inspiration</h2>
            <p className="text-lg text-gray-600">Discover amazing destinations around the world</p>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            {/* Carousel Images */}
            <div className="relative h-full">
              {carouselImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <motion.h3
                        className="text-4xl font-bold mb-4"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: index === currentSlide ? 0 : 30, opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {image.title}
                      </motion.h3>
                      <motion.p
                        className="text-xl text-gray-200"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: index === currentSlide ? 0 : 30, opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        {image.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {carouselImages.map((_, index) => (
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
          <div className="prose prose-lg max-w-none">
            {isSanityPost && Array.isArray(post.content) ? (
              <PortableText value={post.content} components={portableTextComponents} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content as string }} />
            )}
          </div>

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

      {/* Footer 
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
      </footer> */}
    </div>
  );
};

export default BlogDetail;