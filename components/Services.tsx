import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 overflow-hidden">
  {/* Floating emoji decorations */}
  <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">😂</div>
  <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse">🔥</div>
  <div className="absolute bottom-20 left-1/4 text-7xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>💯</div>
  <div className="absolute bottom-40 right-10 text-6xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>🎨</div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-24">
      <div className="inline-block mb-4">
        <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
          Meme Magic Awaits
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent leading-tight">
        Everything You Need to<br />Go Viral 🚀
      </h2>
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
        From trending templates to AI magic, we&apos;ve got the tools to make your memes legendary
      </p>
    </div>

    {/* Services Grid - Creative Asymmetric Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
      
      {/* Service 1 - Large Featured */}
      <div className="lg:col-span-7 group">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-purple-500/50">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                <span className="text-3xl md:text-4xl">📱</span>
              </div>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase">Most Popular</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
              1000+ Trending Templates
            </h3>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Fresh meme templates updated daily from across the internet. Never run out of viral-worthy content. From classic formats to the latest trends, we&apos;ve got them all.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold">Daily Updates</span>
              <span className="px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-semibold">All Formats</span>
              <span className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold">HD Quality</span>
            </div>

            <div className="relative h-48 md:h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop" 
                width={800} 
                height={600} 
                alt="Collection of trending meme templates displayed on mobile device"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Stacked Right */}
      <div className="lg:col-span-5 group">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-pink-500/50">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          
          <div className="p-8 md:p-10">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-2xl flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-500 mb-6 shadow-lg">
              <span className="text-4xl">🤖</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
              AI-Powered Caption Suggestions
            </h3>
            
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Stuck for words? Our AI generates hilarious, context-aware captions that make your memes hit different. Comedy gold, delivered instantly.
            </p>

            <div className="relative h-40 md:h-48 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-2xl overflow-hidden mb-6">
              <Image 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop" 
                width={800} 
                height={600} 
                alt="AI technology generating creative meme captions"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-pink-600 to-yellow-600 rounded-full animate-pulse"></div>
              </div>
              <span className="text-sm font-bold text-pink-600">AI Magic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 - Bottom Left */}
      <div className="lg:col-span-5 group">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-blue-500/50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          
          <div className="p-8 md:p-10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 mb-6 shadow-lg">
              <span className="text-4xl">⚡</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              One-Click Social Sharing
            </h3>
            
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Share your masterpiece across Twitter, Instagram, Facebook, Reddit, and more with a single click. Maximum reach, minimum effort.
            </p>

            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📘</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: '0.1s' }}>
                <span className="text-2xl">📷</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: '0.2s' }}>
                <span className="text-2xl">🐦</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: '0.3s' }}>
                <span className="text-2xl">👾</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
              <span>Connect All Platforms</span>
              <span className="text-2xl animate-bounce">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Bottom Right Large */}
      <div className="lg:col-span-7 group">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-yellow-500/50">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                <span className="text-3xl md:text-4xl">✨</span>
              </div>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase">Pro Feature</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
              Custom Text Styling & Positioning
            </h3>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Full creative control with unlimited fonts, colors, effects, and precise positioning. Make your memes exactly how you envision them with our pro-grade editor.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-sm font-bold text-gray-800">Custom Colors</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '0.1s' }}>
                <div className="text-3xl mb-2">📝</div>
                <div className="text-sm font-bold text-gray-800">100+ Fonts</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '0.2s' }}>
                <div className="text-3xl mb-2">💫</div>
                <div className="text-sm font-bold text-gray-800">Text Effects</div>
              </div>
            </div>

            <div className="relative h-48 md:h-56 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop" 
                width={800} 
                height={600} 
                alt="Professional text editing interface with custom styling options"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 md:mt-24 text-center">
      <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white rounded-3xl shadow-2xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300">
        <div className="text-left">
          <p className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Ready to create?</p>
          <p className="text-base md:text-lg text-gray-600">All features included, no credit card required</p>
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
          Start Creating Free 🚀
        </button>
      </div>
    </div>
  </div>
</section>
  );
}