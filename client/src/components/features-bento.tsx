import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/hooks/use-language";

export function FeaturesBento() {
  const { t } = useLanguage();
  const { elementRef: gridRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const features = [
    {
      id: 1,
      title: "Expert Training",
      description: "Professional Lagotto trainers with 20+ years experience",
      icon: "fas fa-user-graduate",
      className: "bento-large",
      gradient: "from-amber-500/20 to-orange-500/20",
      delay: 0
    },
    {
      id: 2,
      title: "Truffle Hunting",
      description: "Real truffle hunting experiences in authentic locations",
      icon: "fas fa-search",
      className: "bento-tall",
      gradient: "from-emerald-500/20 to-teal-500/20",
      delay: 100
    },
    {
      id: 3,
      title: "5 Day Program",
      description: "Comprehensive curriculum spread across 5 intensive days",
      icon: "far fa-calendar",
      className: "",
      gradient: "from-blue-500/20 to-indigo-500/20",
      delay: 200
    },
    {
      id: 4,
      title: "Small Groups",
      description: "Maximum 12 participants for personalized attention",
      icon: "fas fa-users",
      className: "",
      gradient: "from-purple-500/20 to-pink-500/20",
      delay: 300
    },
    {
      id: 5,
      title: "Certificate",
      description: "Official completion certificate recognized nationwide",
      icon: "fas fa-certificate",
      className: "bento-wide",
      gradient: "from-rose-500/20 to-red-500/20",
      delay: 400
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 mb-6">
            <i className="fas fa-star text-amber-400"></i>
            <span className="text-white/80 font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 text-display">
            Premium <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover what makes our Lagotto & Truffle Week the most comprehensive and authentic experience in Italy.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div 
          className={`bento-grid max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bento-item ${feature.className} group interactive-card gpu-accelerated scroll-reveal ${
                isVisible ? 'revealed' : ''
              }`}
              style={{ 
                animationDelay: `${feature.delay}ms`
              }}
            >
              {/* Animated background blob */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 organic-blob bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <i className={`${feature.icon} text-2xl text-white group-hover:text-amber-300 transition-colors duration-300`}></i>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover indicator */}
                <div className="mt-auto pt-6">
                  <div className="flex items-center text-amber-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <i className="fas fa-arrow-right text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern stats section */}
        <div className="mt-24 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "200+", label: "Happy Clients", icon: "fas fa-heart" },
              { number: "15", label: "Years Experience", icon: "fas fa-award" },
              { number: "95%", label: "Success Rate", icon: "fas fa-chart-line" },
              { number: "24/7", label: "Support", icon: "fas fa-headset" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="mb-3">
                    <i className={`${stat.icon} text-2xl text-amber-400 group-hover:scale-110 transition-transform duration-300`}></i>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}