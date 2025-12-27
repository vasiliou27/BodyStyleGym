"use client";

import { Users, Award, Target, Heart } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const t = useTranslation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark via-dark-light to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">{t.about.title} </span>
            <span className="text-primary">{t.about.bodyStyle}</span>
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-white">{t.about.ourMission} </span>
                <span className="text-primary">{t.about.mission}</span>
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                {t.about.missionText1}
              </p>
              <p className="text-lg text-gray-300 mb-4">
                {t.about.missionText2}
              </p>
              <p className="text-lg text-gray-300">
                {t.about.missionText3}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Target, number: "1000+", label: t.about.activeMembers },
                { icon: Award, number: "15+", label: t.about.expertTrainers },
                { icon: Users, number: "50+", label: t.about.classesWeekly },
                { icon: Heart, number: "24/7", label: t.about.support },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105 text-center group"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-black text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            <span className="text-white">{t.about.ourValues} </span>
            <span className="text-primary">{t.about.values}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.about.dedication,
                description: t.about.dedicationDesc,
              },
              {
                title: t.about.excellence,
                description: t.about.excellenceDesc,
              },
              {
                title: t.about.community,
                description: t.about.communityDesc,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-dark-light rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              >
                <h3 className="text-2xl font-black text-primary mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            <span className="text-white">{t.about.worldClass} </span>
            <span className="text-primary">{t.about.facilities}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              t.about.premiumEquipment,
              t.about.cardioStrength,
              t.about.groupStudios,
              t.about.personalTraining,
              t.about.lockerRooms,
              t.about.saunaRecovery,
            ].map((facility, index) => (
              <div
                key={index}
                className="p-6 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg text-gray-300 group-hover:text-primary transition-colors">
                    {facility}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
