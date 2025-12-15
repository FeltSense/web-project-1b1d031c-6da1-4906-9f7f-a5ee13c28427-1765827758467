import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
  {/* Floating emoji decorations */}
  <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">😂</div>
  <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse">🔥</div>
  <div className="absolute bottom-20 left-1/4 text-7xl opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}>💯</div>
  <div className="absolute bottom-40 right-1/3 text-6xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}>🎨</div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg transform -rotate-2">
          MEME MASTERS SPEAK
        </span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
        Our Memers Are Vibing
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
        Real creators, real memes, real results. No cap. 🚀
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-xl transform -rotate-1 group-hover:rotate-0 transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
                width={80} 
                height={80} 
                alt="Sarah Chen profile" 
                className="rounded-2xl border-4 border-purple-400 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-black text-xl text-gray-900">Sarah Chen</h3>
              <p className="text-purple-600 font-bold text-sm">Content Creator</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">⭐</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed font-medium mb-4">
            "Generated <span className="font-black text-purple-600">847 memes in my first month</span> and my Instagram engagement went up 312%! The AI actually gets my humor and creates content that matches my brand perfectly."
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">847 memes</span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-bold">+312% reach</span>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-xl transform rotate-2 group-hover:rotate-0 transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" 
                width={80} 
                height={80} 
                alt="Marcus Rodriguez profile" 
                className="rounded-2xl border-4 border-yellow-400 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-400 rounded-full p-2 shadow-lg">
                <span className="text-2xl">💎</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-black text-xl text-gray-900">Marcus Rodriguez</h3>
              <p className="text-yellow-600 font-bold text-sm">Marketing Director</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">⭐</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed font-medium mb-4">
            "Our marketing team went from spending <span className="font-black text-yellow-600">15 hours a week</span> on meme content to just 2 hours. Cool Dude&apos;s AI nailed our brand voice on the first try. Literally saved us thousands in design costs."
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-bold">13 hrs saved</span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold">$3.2k saved</span>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group relative md:col-span-2 lg:col-span-1">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-xl transform -rotate-2 group-hover:rotate-0 transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                width={80} 
                height={80} 
                alt="Alex Thompson profile" 
                className="rounded-2xl border-4 border-green-400 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-pink-400 rounded-full p-2 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-black text-xl text-gray-900">Alex Thompson</h3>
              <p className="text-green-600 font-bold text-sm">Meme Page Owner</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">⭐</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed font-medium mb-4">
            "Took my page from <span className="font-black text-green-600">12k to 156k followers in 4 months</span> using Cool Dude&apos;s generator. The trending topic suggestions are scary accurate. It&apos;s like having a meme team of 10 people but it&apos;s just me and this AI."
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">+144k followers</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">4 months</span>
          </div>
        </div>
      </div>

      {/* Testimonial 4 - Bonus wide card */}
      <div className="group relative md:col-span-2 lg:col-span-3">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
        <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl transform -rotate-1 group-hover:rotate-0 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="relative flex-shrink-0">
              <Image 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie" 
                width={100} 
                height={100} 
                alt="Jamie Park profile" 
                className="rounded-2xl border-4 border-pink-400 shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 bg-yellow-400 rounded-full p-3 shadow-lg">
                <span className="text-3xl">👑</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div>
                  <h3 className="font-black text-2xl text-gray-900">Jamie Park</h3>
                  <p className="text-pink-600 font-bold">Social Media Manager @ TechFlow</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-black text-sm">2.1M views</span>
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-black text-sm">67% CTR</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium text-lg">
                "We tested Cool Dude&apos;s meme generator against our in-house designers for a month. The AI-generated memes got <span className="font-black text-purple-600">2.1 million views</span> vs 890k from our designers. Not saying we fired anyone... but our designers now use Cool Dude too. 😅 The custom template library alone is worth 10x the subscription price."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 p-1 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <div className="bg-white rounded-xl px-8 py-6">
          <p className="text-2xl font-black text-gray-900 mb-2">
            Join 50,000+ Meme Creators
          </p>
          <p className="text-gray-600 font-medium">
            Creating viral content every single day 🚀
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}