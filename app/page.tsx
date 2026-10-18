'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { portfolioData } from '@/lib/data';

export default function Home() {
  const { profile, skills, projects, experiences, certifications } = portfolioData;

  // 1. État pour le filtre des compétences
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // 2. Extrait des catégories uniques de compétences
  const categories = ['Tous', ...Array.from(new Set(skills.map((s) => s.category)))];

  // Filtrage des compétences
  const filteredSkills =
    selectedCategory === 'Tous'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  // 3. Animation Typewriter pour les rôles
  const roles = [
    'SOFTWARE ENGINEER',
    'JAVA / SPRING BOOT / ANGULAR DEVELOPER',
    'FULL STACK ENGINEER',
    'NEXT.JS FULL-STACK DEVELOPER',
    'ORACLE CERTIFIED PROFESSIONAL: JAVA SE 17 DEVELOPER',
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 font-sans selection:bg-[#f43f5e] selection:text-white relative overflow-hidden">
      {/* NAVBAR */}
      <Navbar cvUrl={profile.cvUrl || undefined} />

      {/* HALO LUMINEUX DE FOND */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f43f5e]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* SECTION HERO (#home) */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative"
      >
        <div className="max-w-5xl mx-auto text-center z-10 space-y-6">
          
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-[#f43f5e]/30 text-xs font-mono text-[#f43f5e] shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-ping" />
            <span>Disponible Stage PFE 2027</span>
          </div>

          {/* Titre dynamique Typewriter */}
          <div className="h-8">
            <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-[#f43f5e] font-bold transition-all duration-500">
              {roles[currentRoleIndex]}
            </p>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white uppercase leading-none">
            Salut c'est, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#f43f5e] drop-shadow-[0_0_35px_rgba(244,63,94,0.3)]">
              {profile.fullName}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg leading-relaxed font-light pt-2">
            {profile.shortDescription}
          </p>

          {/* Coordonnées */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-4 text-sm font-mono text-zinc-300">
            <span className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#f43f5e]/50 transition-colors">
              📍 {profile.location}
            </span>
            <span className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#f43f5e]/50 transition-colors">
              ✉ {profile.email}
            </span>
          </div>

          {/* Bouton Scroll Down avec animation bouncing */}
          <div className="pt-8">
            <a
              href="#about"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#f43f5e] text-white font-bold text-xl hover:scale-110 transition-transform shadow-[0_0_30px_rgba(244,63,94,0.5)] animate-bounce"
            >
              ↓
            </a>
          </div>
        </div>
      </section>

      {/* SECTION À PROPOS (#about) */}
      {profile.about && (
        <section id="about" className="py-24 px-6 border-t border-zinc-900/80 bg-black/60 backdrop-blur-md">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase text-[#f43f5e]">01. About Me</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              À propos de mon parcours
            </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed whitespace-pre-line font-light">
              {profile.about}
            </p>
          </div>
        </section>
      )}

      {/* SECTION COMPÉTENCES AVEC FILTRES INTERACTIFS (#skills) */}
      {skills && skills.length > 0 && (
        <section id="skills" className="py-24 px-6 border-t border-zinc-900">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase text-[#f43f5e]">02. Skills</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Compétences Techniques
              </h2>

              {/* BARRE DE FILTRES DYNAMIQUES */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-mono rounded-xl transition-all duration-300 ${
                      selectedCategory === cat
                        ? 'bg-[#f43f5e] text-white font-bold shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* GRILLE DE COMPÉTENCES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl hover:border-[#f43f5e]/60 hover:bg-zinc-900 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(244,63,94,0.15)] transition-all duration-300 group"
                >
                  <span className="text-xs font-mono text-[#f43f5e] block mb-2">{skill.category}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#f43f5e] transition-colors">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    {/* SECTION EXPÉRIENCES (#experiences) */}
{experiences && experiences.length > 0 && (
  <section id="experiences" className="py-24 px-6 border-t border-zinc-900 bg-black/60">
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono uppercase text-[#f43f5e]">03. Experiences</span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
        Expériences Professionnelles
      </h2>

      <div className="space-y-6">
        {experiences.map((exp: any) => (
          <div
            key={exp.id}
            className="p-8 bg-zinc-900/30 border border-zinc-800/80 rounded-3xl hover:border-[#f43f5e]/50 hover:bg-zinc-900/50 transition-all duration-300"
          >
            {/* Intitulé & Lieu */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">
                {exp.position} <span className="text-[#f43f5e]">@ {exp.company}</span>
              </h3>
              <span className="text-xs font-mono px-3 py-1 bg-zinc-800/80 text-zinc-300 rounded-full border border-zinc-700/50 w-fit">
                {exp.location}
              </span>
            </div>

            {/* STACK TECHNIQUE EN ROSE NÉON ATTIRANT */}
            {exp.technologies && (
              <p className="text-xs font-mono text-[#f43f5e] font-bold uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <span>⚡ Tech Stack :</span>
                <span>{exp.technologies}</span>
              </p>
            )}

            {/* Paragraphe court sur le rôle / projet */}
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)}
      {/* SECTION PROJETS (#projects) */}
      {projects && projects.length > 0 && (
        <section id="projects" className="py-24 px-6 border-t border-zinc-900">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase text-[#f43f5e]">04. Projects</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Projets Réalisés
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl flex flex-col justify-between hover:border-[#f43f5e]/50 hover:shadow-[0_10px_30px_rgba(244,63,94,0.1)] hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div>
                    <span className="text-xs font-mono text-[#f43f5e] uppercase tracking-wider block mb-2">
                      {project.shortDescription}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#f43f5e] transition-colors mb-4">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION CERTIFICATIONS (#certifications) */}
      {certifications && certifications.length > 0 && (
        <section id="certifications" className="py-24 px-6 border-t border-zinc-900 bg-black/60">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase text-[#f43f5e]">05. Certifications</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Certifications & Diplômes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl flex flex-col justify-between hover:border-[#f43f5e]/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <h3 className="font-bold text-white text-base mb-2">{cert.name}</h3>
                    <p className="text-xs text-[#f43f5e] font-semibold">{cert.organization}</p>
                    {cert.issueDate && (
                      <p className="text-xs text-zinc-500 mt-1 font-mono">Délivré en : {cert.issueDate}</p>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    {cert.fileUrl && (
                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-4 py-2.5 bg-[#f43f5e] text-white text-xs font-bold rounded-xl hover:bg-[#e11d48] transition-all shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                      >
                        📄 Voir le certificat (PDF)
                      </a>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-4 py-2.5 bg-zinc-800 text-zinc-300 text-xs font-semibold rounded-xl hover:bg-zinc-700 transition-all"
                      >
                        🔗 Vérifier le credential
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="py-12 border-t border-zinc-900 text-center text-xs text-zinc-500 font-mono">
        © 2026 Hafsa Bouzidi. Conçu pour le Stage PFE.
      </footer>
    </div>
  );
}