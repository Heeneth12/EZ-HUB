export default function OdooHero() {
  const themeBlue = "#1a73e8"; // A standard blue
  const themeOrange = "#ea8600"; // A vibrant orange

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-purple-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-hand { font-family: 'Kalam', cursive; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <main className="relative py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* Headline Section */}
          <h1 className="text-6xl md:text-[5.5rem] font-hand font-bold text-gray-900 leading-[1.1] mb-8">
            <span className="block mb-2">All your business on</span>
            <span className="relative inline-block px-4">
              <span className="relative z-10">one platform.</span>
              <svg
                className="absolute inset-0 w-full h-full -z-10 text-orange-300 transform scale-105 -rotate-3"
                viewBox="0 0 300 60"
                preserveAspectRatio="none"
                fill="currentColor">
                <path
                  d="M5,35 C50,25 150,20 295,30 C285,45 180,55 10,50 Z"
                  opacity="0.9"
                />
              </svg>
            </span>
            <div className="block mt-6 text-5xl md:text-[4rem] text-gray-800 font-hand font-bold">
              Simple, efficient{" "}
            </div>
            <div className="block mt-6 text-6xl md:text-[6rem] text-gray-800 font-hand font-bold">
              EZ
            </div>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 mb-20">
            <button
              className={`px-10 py-4 bg-[${themeBlue}] text-white text-lg font-bold rounded-4xl shadow-xl shadow-blue-900/20 hover:bg-blue-700 hover:scale-105 transition-all duration-300`}
              style={{ backgroundColor: themeBlue }}
            >
              Start now - It's free
            </button>
            <button className="px-8 py-4 bg-gray-100 text-gray-700 text-lg font-semibold rounded-4xl hover:bg-gray-200 transition-colors flex items-center gap-2">
              Meet an advisor
              <span className="text-xs opacity-60">▼</span>
            </button>
          </div>
        </div>

        {/* --- Half-Circle Gradient Background --- */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1500px] h-[500px] sm:h-[600px] rounded-t-full -z-10 opacity-30"
          style={{
            background: `radial-gradient(circle at center top, ${themeBlue} 0%, ${themeOrange} 100%)`,
          }}></div>
      </main>
    </div>
  );
}
