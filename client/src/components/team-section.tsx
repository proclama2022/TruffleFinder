import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";

const teamMembers = [
  {
    id: 1,
    name: "Nicoletta Conte",
    role: "nicolettaRole",
    description: "nicolettaDesc",
    image: "https://images.unsplash.com/photo-1494790108755-2616c2e62e7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500",
    type: "founder",
    experience: "15+",
    specialty: "Truffle Training & Lagotto Breeding",
    color: "from-amber-600 to-yellow-600",
    icon: "fas fa-crown"
  },
  {
    id: 2,
    name: "Virgilio Frabotta",
    role: "virgilioRole",
    description: "virgilioDesc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500",
    type: "team",
    experience: "10+",
    specialty: "Canine Training & Event Management",
    color: "from-amber-500 to-yellow-500",
    icon: "fas fa-users"
  },
  {
    id: 3,
    name: "Daniele Tabarrini",
    role: "danieleRole",
    description: "danieleDesc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500",
    type: "expert",
    experience: "20+",
    specialty: "Professional Handling & Grooming",
    color: "from-yellow-600 to-amber-600",
    icon: "fas fa-cut"
  },
  {
    id: 4,
    name: "Mystery Expert",
    role: "surpriseGuestRole",
    description: "surpriseGuestDesc",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500",
    type: "mystery",
    experience: "?",
    specialty: "Coming Soon...",
    color: "from-gray-400 to-gray-600",
    icon: "fas fa-question"
  }
];

const getTypeLabel = (type: string, t: any) => {
  switch (type) {
    case "founder": return "Founder & Lead Trainer";
    case "team": return "Core Team";
    case "expert": return "Expert Consultant";
    case "mystery": return "Mystery Guest";
    default: return "";
  }
};

export function TeamSection() {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full mb-6">
            <i className="fas fa-users text-purple-600 dark:text-purple-400"></i>
            <span className="text-purple-700 dark:text-purple-300 text-sm font-semibold tracking-wide uppercase">Meet Our Team</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            The Dream Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate experts dedicated to creating extraordinary experiences for you and your Lagotto
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={`group cursor-pointer ${member.type === 'founder' ? 'lg:col-span-2' : ''}`}
              onMouseEnter={() => setActiveCard(member.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`
                relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl 
                transition-all duration-500 border border-gray-200 dark:border-gray-700
                ${activeCard === member.id ? 'transform -translate-y-2 scale-105' : ''}
                ${member.type === 'founder' ? 'lg:p-8' : ''}
              `}>
                
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Header with Avatar and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} p-0.5 ${member.type === 'founder' ? 'lg:w-20 lg:h-20' : ''}`}>
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full rounded-2xl object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.color} rounded-xl flex items-center justify-center`}>
                        <i className={`${member.icon} text-white text-sm`}></i>
                      </div>
                    </div>
                    {member.type === 'founder' && (
                      <div className="hidden lg:block">
                        <div className="flex space-x-2">
                          <a href="#" className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                            <i className="fab fa-instagram text-gray-600 dark:text-gray-400 text-sm"></i>
                          </a>
                          <a href="#" className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                            <i className="fab fa-linkedin text-gray-600 dark:text-gray-400 text-sm"></i>
                          </a>
                          <a href="mailto:info@lagottotruffleweek.it" className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                            <i className="fas fa-envelope text-gray-600 dark:text-gray-400 text-sm"></i>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Type Badge */}
                  <div className={`px-3 py-1 bg-gradient-to-r ${member.color} rounded-full`}>
                    <span className="text-white text-xs font-bold tracking-wide">
                      {getTypeLabel(member.type, t)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className={`font-bold text-gray-900 dark:text-white ${member.type === 'founder' ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                      {member.name}
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-400 font-medium ${member.type === 'founder' ? 'text-lg' : 'text-sm'}`}>
                      {member.specialty}
                    </p>
                  </div>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {t(member.description as any)}
                  </p>
                  
                  {/* Experience Badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-award text-gray-400 text-xs"></i>
                      <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                        {member.experience} years experience
                      </span>
                    </div>
                    
                    {member.type === 'mystery' && (
                      <div className="animate-pulse">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-100 dark:border-purple-800">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Certified Experts
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                ENCI certified trainers with national recognition
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Authentic Passion
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Genuine love for Lagotto and truffle traditions
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl border border-green-100 dark:border-green-800">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Continuous Support
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We're with you every step of the journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}