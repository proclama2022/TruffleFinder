import { useLanguage } from "@/hooks/use-language";

const teamMembers = [
  {
    id: 1,
    name: "Nicoletta Conte",
    role: "nicolettaRole",
    description: "nicolettaDesc",
    image: "https://images.unsplash.com/photo-1494790108755-2616c2e62e7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500",
    type: "main",
    experience: "15+",
    specialty: "Truffle Training & Lagotto Breeding"
  },
  {
    id: 2,
    name: "Virgilio Frabotta",
    role: "virgilioRole",
    description: "virgilioDesc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500",
    type: "team",
    experience: "10+",
    specialty: "Canine Training & Event Management"
  },
  {
    id: 3,
    name: "Daniele Tabarrini",
    role: "danieleRole",
    description: "danieleDesc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500",
    type: "guest",
    experience: "20+",
    specialty: "Professional Handling & Grooming"
  },
  {
    id: 4,
    name: "Ospite Speciale",
    role: "surpriseGuestRole",
    description: "surpriseGuestDesc",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500",
    type: "guest",
    experience: "?",
    specialty: "To be revealed"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "main": return "bg-gradient-to-r from-yellow-500 to-yellow-700";
    case "team": return "bg-gradient-to-r from-amber-500 to-amber-700";
    case "guest": return "bg-gradient-to-r from-orange-500 to-orange-700";
    default: return "bg-gradient-to-r from-gray-500 to-gray-700";
  }
};

const getTypeLabel = (type: string, t: any) => {
  switch (type) {
    case "main": return t("mainTrainer");
    case "team": return t("teamMember");
    case "guest": return t("specialGuest");
    default: return "";
  }
};

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-20 bg-truffle-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 dark:text-white mb-8">
            {t("teamTitle")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("teamDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={member.id} className={`group ${member.type === 'main' ? 'lg:col-span-2 lg:row-span-1' : ''}`}>
              <div className="glassmorphism rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 h-full">
                {/* Profile Image */}
                <div className={`relative ${member.type === 'main' ? 'h-80' : 'h-64'} bg-cover bg-center`} 
                     style={{ backgroundImage: `url(${member.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${getTypeColor(member.type)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {getTypeLabel(member.type, t)}
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {member.experience} {t("yearsExperience")}
                    </div>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className={`${member.type === 'main' ? 'text-3xl' : 'text-2xl'} font-bold text-white mb-2`}>
                      {member.name}
                    </h3>
                    <p className="text-yellow-200 font-semibold">
                      {member.specialty}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-amber-900 dark:text-white mb-3">
                    {t(member.role as any)}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {t(member.description as any)}
                  </p>
                  
                  {/* Social Links for main trainer */}
                  {member.type === 'main' && (
                    <div className="mt-6 flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors">
                        <i className="fab fa-instagram text-white"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors">
                        <i className="fab fa-facebook-f text-white"></i>
                      </a>
                      <a href="mailto:info@lagottotruffleweek.it" className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors">
                        <i className="fas fa-envelope text-white"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-2xl text-white"></i>
                </div>
                <h4 className="text-xl font-semibold text-amber-900 dark:text-white mb-2">
                  Esperti Certificati
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Tutti i nostri trainer sono certificati ENCI e riconosciuti a livello nazionale
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-2xl text-white"></i>
                </div>
                <h4 className="text-xl font-semibold text-amber-900 dark:text-white mb-2">
                  Passione Autentica
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Ogni membro del team condivide la passione per i Lagotto e la tradizione del tartufo
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-white"></i>
                </div>
                <h4 className="text-xl font-semibold text-amber-900 dark:text-white mb-2">
                  Supporto Continuo
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Il nostro team ti accompagnerà in ogni momento dell'esperienza
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}