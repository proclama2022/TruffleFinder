import React from 'react';
import { useLanguage } from '../hooks/use-language';
import { FaInstagram, FaEnvelope, FaPaw, FaStar, FaHeart, FaAward } from 'react-icons/fa';
import nicolettaLogoImage from '/images/gallery/nicoletta-logo.jpg';

const TeamSection: React.FC = () => {
  const { currentTranslations } = useLanguage();

  return (
    <section id="team" className="py-24 bg-[var(--muted)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card border border-[var(--border)] px-6 py-3 rounded-full mb-8">
            <FaStar className="w-5 h-5 text-[var(--secondary)]" />
            <span className="text-[var(--secondary)] text-sm font-semibold tracking-wide uppercase font-subtitle">
              {currentTranslations.teamSection.title}
            </span>
          </div>
          <h2 className="text-h2 font-headline text-primary mb-6">
            {currentTranslations.meetTheExpert}
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            {currentTranslations.heartAndSoul}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[var(--accent)] rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[var(--secondary)] rounded-full opacity-10 blur-3xl"></div>
            </div>

            {/* Card Container */}
            <div className="relative bg-card rounded-2xl shadow-xl border border-[var(--border)] overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Enhanced Image Section */}
                <div className="relative p-8 lg:p-12 bg-[var(--tortora)]/20">
                  <div className="relative group">
                    {/* Main Image */}
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src="/images/gallery/nicoletta.jpg"
                        alt="Nicoletta Conte"
                        className="w-full h-96 lg:h-[540px] xl:h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: '70% 20%' }}
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/40 via-transparent to-transparent opacity-60"></div>

                      {/* Experience Badge */}
                      <div className="absolute top-6 left-6 bg-[var(--primary)] text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
                        <FaAward className="w-4 h-4" />
                        <span className="text-sm font-bold">{currentTranslations.yearsExperience}</span>
                      </div>

                      {/* Logo Badge */}
                      <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl border-2 border-[var(--border)]">
                        <img
                          src={nicolettaLogoImage}
                          alt="Nicoletta Logo"
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[var(--accent)] rounded-full opacity-80"></div>
                    <div className="absolute -top-4 -right-4 w-6 h-6 bg-[var(--secondary)] rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Right: Enhanced Bio Section */}
                <div className="p-8 lg:p-12">
                  <div className="h-full flex flex-col justify-between">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-[var(--primary)] rounded-2xl flex items-center justify-center shadow-lg">
                          <FaPaw className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-h3 font-headline text-primary font-bold">
                          Nicoletta Conte
                        </h3>
                      </div>

                      <div className="inline-flex items-center space-x-2 bg-[var(--muted)] px-4 py-2 rounded-full mb-6">
                        <FaStar className="w-4 h-4 text-[var(--secondary)]" />
                        <span className="text-[var(--secondary)] text-lg font-semibold">
                          {currentTranslations.teamSection.nicolettaRole}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <p className="text-body-large text-muted-foreground leading-relaxed font-body mb-6">
                        {currentTranslations.teamSection.nicolettaDescription}
                      </p>
                    </div>

                    {/* Specializations */}
                    <div className="bg-[var(--muted)] p-6 rounded-2xl border border-[var(--border)] mb-8">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-[var(--secondary)] rounded-full mr-3"></div>
                        <h4 className="text-h4 font-headline text-primary">{currentTranslations.expertise}</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center space-x-3">
                          <FaHeart className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                          <span className="text-foreground">{currentTranslations.professionalTraining}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <FaPaw className="w-4 h-4 text-[var(--secondary)] flex-shrink-0" />
                          <span className="text-foreground">{currentTranslations.advancedTechniques}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <FaStar className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                          <span className="text-foreground">{currentTranslations.behavioralConsulting}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="mailto:nico.conte76543@gmail.com"
                        className="flex items-center justify-center space-x-2 px-8 py-4 bg-[var(--primary)] hover:bg-[var(--accent)] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <FaEnvelope className="w-5 h-5" />
                        <span>{currentTranslations.contactNicoletta}</span>
                      </a>
                      <a
                        href="https://www.instagram.com/nicoletta_truffle/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 px-8 py-4 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <FaInstagram className="w-5 h-5" />
                        <span>{currentTranslations.followInstagram}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-[var(--moss)]">
            <FaHeart className="w-4 h-4" />
            <span className="text-sm font-medium">{currentTranslations.passionateAbout}</span>
            <FaHeart className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
