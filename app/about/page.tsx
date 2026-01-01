import {
  Users,
  Target,
  Heart,
  Zap,
  Globe,
  Smile,
  ArrowRight,
  Award,
} from "lucide-react";

export default function AboutUsDark() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white overflow-x-hidden selection:bg-purple-500/30">
      {/* Inject Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-hand { font-family: 'Kalam', cursive; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <main className="relative z-10">
        <div className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="py-1.5 px-4 rounded-full bg-white/5 text-blue-300 font-bold text-xs border border-white/10 tracking-widest uppercase hover:bg-white/10 transition-colors cursor-default backdrop-blur-md">
              Our Story
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            We are building the <br />
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 animate-gradient-x">
                future of work.
              </span>
              {/* Neon Underline SVG */}
              <svg
                className="absolute bottom-2 left-0 w-full h-6 text-purple-500/50 -z-10 transform -rotate-1 blur-sm"
                viewBox="0 0 300 40"
                preserveAspectRatio="none"
                fill="currentColor">
                <path
                  d="M5,30 Q150,10 295,30"
                  stroke="currentColor"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="absolute bottom-2 left-0 w-full h-6 text-purple-400 -z-10 transform -rotate-1"
                viewBox="0 0 300 40"
                preserveAspectRatio="none"
                fill="currentColor">
                <path
                  d="M5,30 Q150,10 295,30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed font-hand transform -rotate-1">
            "Making business simple, efficient, and loved by millions."
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "Users",
                value: "12M+",
                icon: Users,
                color: "text-blue-400",
                bg: "bg-blue-500/10",
              },
              {
                label: "Countries",
                value: "120+",
                icon: Globe,
                color: "text-orange-400",
                bg: "bg-orange-500/10",
              },
              {
                label: "Happiness",
                value: "100%",
                icon: Smile,
                color: "text-green-400",
                bg: "bg-green-500/10",
              },
              {
                label: "Growth",
                value: "3x",
                icon: Zap,
                color: "text-purple-400",
                bg: "bg-purple-500/10",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 flex backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300 group shadow-2xl shadow-black/50">
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Software shouldn't be{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500 font-hand text-5xl relative top-2">
                  painful.
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  We started with a simple idea:{" "}
                  <strong className="text-white">
                    Business software is too complex.
                  </strong>{" "}
                  It's fragmented, expensive, and ugly. We wanted to change
                  that.
                </p>
                <p>
                  Our mission is to provide a range of easy-to-use business
                  applications that form a complete suite of tools to accompany
                  any business need. We give millions of companies easy access
                  to the software they need to run and expand their business.
                </p>
                <div className="pt-4">
                  <button className="text-white font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all group">
                    <span className="border-b border-blue-500 pb-0.5">
                      Read our manifesto
                    </span>
                    <ArrowRight className="text-blue-500 w-5 h-5 group-hover:text-blue-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Visual abstract graphic mimicking app interconnectivity */}
            <div className="relative h-112.5 bg-[#0A0A0A] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

              {/* Decorative blobs inside container */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>

              {/* Floating Cards in the graphic */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-10">
                <div className="relative w-full h-full">
                  {/* Center Card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#151515] p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-white/10 w-72">
                    <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                      <Target />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">
                        One Platform
                      </div>
                      <div className="text-xs text-gray-400">
                        Seamless integration
                      </div>
                    </div>
                  </div>

                  {/* Satellite Card 1 */}
                  <div
                    className="absolute top-12 left-8 bg-[#1a1a1a] p-4 rounded-2xl shadow-xl z-10 border border-white/5 animate-bounce"
                    style={{ animationDuration: "3s" }}>
                    <div className="w-10 h-10 bg-orange-500/20 text-orange-400 rounded-lg flex items-center justify-center">
                      <Zap size={20} />
                    </div>
                  </div>

                  {/* Satellite Card 2 */}
                  <div
                    className="absolute bottom-20 right-8 bg-[#1a1a1a] p-4 rounded-2xl shadow-xl z-10 border border-white/5 animate-bounce"
                    style={{ animationDuration: "4s" }}>
                    <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center">
                      <Heart size={20} />
                    </div>
                  </div>

                  {/* Connecting Lines (Simulated) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 text-white z-0">
                    <line
                      x1="30%"
                      y1="20%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="70%"
                      y1="80%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-hand text-2xl text-blue-400 font-bold mb-2 -rotate-2">
                What drives us
              </h2>
              <h3 className="text-4xl font-bold text-white">Our Core Values</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white/5 p-8 rounded-4xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-all"></div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Zap size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 relative z-10">
                  Move Fast
                </h4>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  We believe in rapid iteration. Perfection is the enemy of
                  progress. We ship, we learn, and we improve.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white/5 p-8 rounded-4xl border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.07] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-orange-500/20 transition-all"></div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:scale-110 transition-transform">
                  <Heart size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 relative z-10">
                  Be Human
                </h4>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  B2B doesn't mean boring. We build software for people, not
                  robots. We treat our customers like partners.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white/5 p-8 rounded-4xl border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-purple-500/20 transition-all"></div>
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <Award size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 relative z-10">
                  Deliver Quality
                </h4>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  Simplicity is hard work. We sweat the details so our users
                  don't have to. Quality is non-negotiable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
