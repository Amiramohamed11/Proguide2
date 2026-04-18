import React, { useEffect, useState, useId } from 'react';
import { api, TeamMember } from '../lib/api';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';

/* =========================
   Team Card Component
========================= */
const TeamCard: React.FC<{
  member: TeamMember;
  reverse: boolean;
}> = ({ member, reverse }) => {
  const clipId = useId();

  return (
    <div
      className={`flex flex-col items-center gap-8 sm:gap-10 md:gap-16 md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="flex w-full justify-center md:w-1/2">
        <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[400px] aspect-[4/5]">
          <svg viewBox="0 0 400 480" className="absolute inset-0 w-full h-full">
            <defs>
              <clipPath id={clipId}>
                <path d="M0,40 Q200,-10 400,40 L400,440 Q200,360 0,440 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Background */}
          <div
            className="absolute inset-0 bg-[#53D1FB]"
            style={{ clipPath: `url(#${clipId})` }}
          />

          {/* Image */}
          <div
            className="relative w-full h-full overflow-hidden"
            style={{ clipPath: `url(#${clipId})` }}
          >
            <div className="pt-6 h-full">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-6xl bg-gray-100">
                  👤
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-full space-y-6 md:w-1/2 text-center md:text-left px-2">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#04264D]"
          style={{ fontFamily: "'Asul', serif" }}
        >
          {member.name}
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed text-gray-600 max-w-xl mx-auto md:mx-0"
          style={{ fontFamily: "'Amiko', sans-serif" }}
        >
          {member.description}
        </p>
      </div>
    </div>
  );
};

/* =========================
   Main Page
========================= */
const Team: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await api.getTeam();
        setTeamMembers(data);
      } catch (err) {
        console.error('Failed to fetch team:', err);
        setError('Failed to load team data');
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  /* ===== Loading ===== */
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#04264D] border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Loading team...</p>
      </div>
    );
  }

  /* ===== Error ===== */
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  /* ===== UI ===== */
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero */}
      <PageHero
        title="Unser Team"
        subtitle="Unser Team vereint junge Talente und erfahrene Spezialisten für beste Behandlung."
        className="min-h-fit py-20 md:min-h-[400px] flex items-center justify-center"
      />

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-28">
        <div className="space-y-24 md:space-y-32">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="relative bg-[#04264D] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Team;