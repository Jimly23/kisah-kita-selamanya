import React from 'react';
import { Shield, Users, Lightbulb, Sparkles } from 'lucide-react';

export const RelationshipPrinciples: React.FC = () => {
  const principles = [
    {
      id: 1,
      icon: Shield,
      title: "Kepercayaan",
      description: "Saling percaya adalah fondasi kuat hubungan kita. Kita selalu jujur dan terbuka satu sama lain.",
      color: "text-blush"
    },
    {
      id: 2,
      icon: Users,
      title: "Komunikasi",
      description: "Kita selalu mendengarkan dengan hati dan berbicara dengan kasih. Setiap masalah kita selesaikan bersama.",
      color: "text-lavender"
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Dukungan",
      description: "Kita saling mendukung mimpi dan cita-cita. Bersama kita lebih kuat dari sendirian.",
      color: "text-mint"
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Kebahagiaan",
      description: "Kita berkomitmen untuk selalu membuat satu sama lain bahagia dan menciptakan kenangan indah.",
      color: "text-peach"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Prinsip Hubungan Kita</h2>
          <p className="text-muted-foreground text-lg">Nilai-nilai yang menjadi pegangan dalam perjalanan cinta kita</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className="bg-card p-6 rounded-3xl shadow-soft hover:shadow-cute transition-all duration-300 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-romantic/20 mb-4 group-hover:animate-bounce-cute ${principle.color}`}>
                  <principle.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};