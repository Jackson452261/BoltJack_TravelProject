import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Clock,Check, Facebook, Twitter, Instagram, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from './SEOHead';
import Navbar from "./Navbar";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("已複製：" + text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    if (!formRef.current) {
      setErrorMsg("表單尚未準備好");
      setLoading(false);
      return;
    }

    // 你可以在這裡加簡單驗證，例如必填欄位檢查
    const form = formRef.current;
  const fromName = form.from_name.value.trim();
  const fromEmail = form.from_email.value.trim();
  const message = form.message.value.trim();

  if (!fromName || !fromEmail || !message) {
      setErrorMsg("請填寫所有必填欄位");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID!, TEMPLATE_ID!, formRef.current, PUBLIC_KEY!)
      .then(
        () => {
          setSuccessMsg("已成功送出！我們會盡快回覆您。");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setErrorMsg("送出失敗，請稍後再試。");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* SEO Head */}
      <SEOHead
        title="聯絡我們 - Jack旅遊"
      
       
        
        type="website"
      />
              <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">聯絡我們</h1>
            <p className="mt-2 text-gray-600 max-w-2xl">
               想分享旅行故事？留下訊息，我們會儘快回覆。
            </p>
          </div>
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition"
            >
              <svg className="h-5 w-5 text-sky-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-gray-700">回到首頁</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Contact Info */}
          <aside className="lg:col-span-1 bg-white rounded-2xl p-8 shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">聯絡資訊</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">地址</div>
                  <div className="text-sm"></div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-50 rounded-lg">
                  <Phone className="h-6 w-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">電話</div>
                      <div className="text-sm"> </div>
                    </div>
                    <button
                      onClick={() => handleCopy( )}
                      aria-label="Copy phone"
                      className="ml-3 inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200"
                    >
                      <Copy className="h-4 w-4" />
                      <span>複製</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-50 rounded-lg">
                  <Mail className="h-6 w-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">電子郵件</div>
                      <div className="text-sm"> </div>
                    </div>
                    <button
                      onClick={() => handleCopy("hello@wanderlustblog.com")}
                      aria-label="Copy email"
                      className="ml-3 inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200"
                    >
                      <Copy className="h-4 w-4" />
                      <span>複製</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-50 rounded-lg">
                  <Clock className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">營業時間</div>
                  <div className="text-sm">Mon — Fri: 9:00 — 18:00</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm font-medium text-gray-900 mb-3">關注我們</div>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="facebook" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" aria-label="twitter" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" aria-label="instagram" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Optional small map */}
            <div className="mt-8">
              <div className="text-sm font-medium text-gray-900 mb-3">我們的位置</div>
              <div className="overflow-hidden rounded-lg border">
                <iframe
                  title="location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462784.89496904804!2d121.1767186192811!3d25.016862969668153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac72bce20a99%3A0x3f6a35cedd0ac2e0!2z6Ie65YyX!5e0!3m2!1szh-TW!2stw!4v1761747783310!5m2!1szh-TW!2stw"
                  className="w-full h-40"
                  loading="lazy"
                />
              </div>
            </div>
          </aside>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">傳送訊息給我們</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  姓名 *
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                />
                 
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  電子郵件 *
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  訊息 *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                />
              </div>

              {errorMsg && <p className="text-red-600">{errorMsg}</p>}
              {successMsg && (
                <p className="text-green-600 flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  {successMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center rounded-md bg-sky-600 px-6 py-3 text-white hover:bg-sky-700 disabled:opacity-50"
              >
                {loading ? "傳送中..." : "送出"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
