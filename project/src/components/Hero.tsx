import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-[#75d031]/20 via-black to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#75d031] to-[#4a8c13]">
            Transform Your Videos<br />with AI Avatars
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Create engaging video content with ultra-realistic AI avatars. Perfect for businesses, startups, and marketers looking to scale their video production.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-4 bg-[#75d031] text-white rounded-full text-lg font-semibold hover:bg-[#4a8c13] transition-colors duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80&w=2070"
            alt="AI Video Production"
            className="rounded-xl shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}