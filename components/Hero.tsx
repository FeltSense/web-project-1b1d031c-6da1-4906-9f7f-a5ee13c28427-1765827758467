import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
    <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left content */}
      <div className="text-center lg:text-left space-y-8 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-5 py-2 text-white font-semibold text-sm shadow-lg">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
          1000+ Trending Templates Daily
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
          Turn Your Ideas Into
          <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mt-2">
            Viral Memes
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/90 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
          AI-powered meme generation that makes you the Cool Dude of the internet. Create, customize, and share in seconds.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <div className="bg-white/25 backdrop-blur-md rounded-full px-4 py-2 text-white font-semibold text-sm border border-white/30">
            ⚡ AI Caption Magic
          </div>
          <div className="bg-white/25 backdrop-blur-md rounded-full px-4 py-2 text-white font-semibold text-sm border border-white/30">
            🚀 Instant Sharing
          </div>
          <div className="bg-white/25 backdrop-blur-md rounded-full px-4 py-2 text-white font-semibold text-sm border border-white/30">
            🎨 Unlimited Creativity
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button 
            onClick={() => console.log('Start Creating')}
            className="group relative bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 hover:-translate-y-1"
          >
            <span className="relative z-10">Start Creating Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-bold">
              Let&apos;s Go! 🎉
            </span>
          </button>
          
          <button 
            onClick={() => console.log('View Examples')}
            className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            See Epic Examples
          </button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-400 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-400 border-2 border-white"></div>
          </div>
          <p className="text-white/90 font-semibold">
            Join <span className="text-yellow-300 font-bold">50,000+</span> meme creators
          </p>
        </div>
      </div>

      {/* Right content - Meme showcase */}
      <div className="relative lg:h-[600px] flex items-center justify-center">
        {/* Main meme card */}
        <div className="relative z-20 bg-white rounded-3xl shadow-2xl p-6 transform hover:rotate-1 transition-transform duration-300 max-w-md w-full">
          <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden mb-4">
            <Image 
              src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&h=800&fit=crop" 
              width={800} 
              height={800} 
              alt="Meme example featuring a laughing person"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-black text-2xl uppercase text-center leading-tight">
                When your meme goes viral
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
            </div>
            <span className="text-gray-600 font-semibold">2.4K shares</span>
          </div>
        </div>

        {/* Floating meme cards */}
        <div className="absolute top-0 -left-8 bg-white rounded-2xl shadow-xl p-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300 w-32 sm:w-40 hidden sm:block">
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=400&fit=crop" 
              width={400} 
              height={400} 
              alt="Meme example with cat"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="absolute bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-3 transform rotate-6 hover:rotate-0 transition-transform duration-300 w-32 sm:w-40 hidden sm:block">
          <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop" 
              width={400} 
              height={400} 
              alt="Meme example with surprised cat"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Sparkle decorations */}
        <div className="absolute -top-4 right-12 text-yellow-300 text-4xl animate-pulse">✨</div>
        <div className="absolute bottom-4 left-8 text-pink-300 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
      </div>
    </div>
  </div>

  {/* Bottom wave decoration */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
    </svg>
  </div>
</div>
  );
}