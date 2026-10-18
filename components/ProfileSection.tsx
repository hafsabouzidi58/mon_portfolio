import Image from 'next/image';
import { FileText, Mail, MapPin } from 'lucide-react';

interface ProfileProps {
  profile: {
    fullName: string;
    title: string | null;
    shortDescription: string | null;
    about: string | null;
    email: string | null;
    location: string | null;
    profileImageUrl: string | null;
    cvUrl: string | null;
    githubUrl: string | null;
    linkedinUrl: string | null;
  };
}

export default function ProfileSection({ profile }: ProfileProps) {
  return (
    <div className="space-y-24">
      {/* SECTION HERO */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-16 md:pt-24">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Disponible pour opportunités
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Salut, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">{profile.fullName}</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-zinc-300">
            {profile.title}
          </p>

          <p className="text-zinc-400 max-w-xl text-base leading-relaxed">
            {profile.shortDescription}
          </p>

          {/* Localisation & Contact rapide */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-zinc-400 pt-2">
            {profile.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{profile.location}</span>
              </div>
            )}
            {profile.email && (
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{profile.email}</span>
              </div>
            )}
          </div>

          {/* Boutons d'action (CV & Réseaux) */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10"
              >
                <FileText className="w-4 h-4" />
                Télécharger / Voir le CV
              </a>
            )}

            <div className="flex items-center gap-3">
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
                  aria-label="GitHub"
                >
                  {/* SVG GitHub */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
                  aria-label="LinkedIn"
                >
                  {/* SVG LinkedIn */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Photo de profil (si présente) */}
        {profile.profileImageUrl && (
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-900">
            <Image
              src={profile.profileImageUrl}
              alt={profile.fullName}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </section>

      {/* SECTION ABOUT ME */}
      {profile.about && (
        <section className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
            À propos de moi
          </h2>
          <div className="text-zinc-300 leading-relaxed text-base md:text-lg whitespace-pre-line space-y-4">
            {profile.about}
          </div>
        </section>
      )}
    </div>
  );
}