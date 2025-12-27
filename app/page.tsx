"use client";

import Link from "next/link";
import { ArrowRight, Dumbbell, Users, Clock, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const t = useTranslation();

  return (
    <div className="min-h-screen bg-dark text-white pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark z-0"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block text-white">{t.home.heroTitle1}</span>
              <span className="block text-primary">{t.home.heroTitle2}</span>
              <span className="block text-white">{t.home.heroTitle3}</span>
              <span className="block text-primary">{t.home.heroTitle4}</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/memberships"
                className="group px-8 py-4 bg-primary text-dark font-bold text-lg rounded-md hover:bg-primary-light transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>{t.home.ctaStart}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-primary text-primary font-bold text-lg rounded-md hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
              >
                {t.home.ctaLearn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            <span className="text-white">{t.home.whyChoose} </span>
            <span className="text-primary">{t.home.bodyStyle}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dumbbell,
                title: t.home.premiumEquipment,
                description: t.home.premiumEquipmentDesc,
              },
              {
                icon: Users,
                title: t.home.expertTrainers,
                description: t.home.expertTrainersDesc,
              },
              {
                icon: Clock,
                title: t.home.flexibleHours,
                description: t.home.flexibleHoursDesc,
              },
              {
                icon: TrendingUp,
                title: t.home.provenResults,
                description: t.home.provenResultsDesc,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-white">{t.home.readyTo} </span>
            <span className="text-primary">{t.home.elevate}</span>
            <span className="text-white"> {t.home.yourFitness}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t.home.ctaJoin}
          </p>
          <Link
            href="/memberships"
            className="inline-flex items-center space-x-2 px-10 py-5 bg-primary text-dark font-bold text-xl rounded-md hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
          >
            <span>{t.home.viewMemberships}</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
