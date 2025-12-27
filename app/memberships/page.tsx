"use client";

import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Memberships() {
  const t = useTranslation();

  const membershipTiers = [
    {
      name: t.memberships.basic,
      price: "€69",
      period: t.memberships.month,
      description: t.memberships.perfectFor,
      features: [
        t.memberships.gymAccess,
        t.memberships.allClasses,
        t.memberships.exercisePlan,
        t.memberships.bodyFat,
        t.memberships.lockerAccess,
      ],
      popular: false,
    },
    {
      name: t.memberships.premium,
      price: "€175",
      period: t.memberships.months,
      description: t.memberships.bestValue,
      features: [
        `${t.memberships.everythingIn} ${t.memberships.basic}`,
        t.memberships.priorityBooking,
        t.memberships.personalTraining,
        t.memberships.saunaAccess,
        t.memberships.nutrition,
        t.memberships.support24,
      ],
      popular: true,
    },
    {
      name: t.memberships.elite,
      price: "€475",
      period: t.memberships.year,
      description: t.memberships.ultimate,
      features: [
        `${t.memberships.everythingIn} ${t.memberships.premium}`,
        t.memberships.unlimitedTraining,
        t.memberships.reformerPilates,
        t.memberships.memberEvents,
        t.memberships.guestPasses,
        t.memberships.priorityEquipment,
        t.memberships.mealPlans,
      ],
      popular: false,
    },
  ];
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark via-dark-light to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">{t.memberships.title} </span>
            <span className="text-primary">{t.memberships.membership}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t.memberships.subtitle}
          </p>
          <p className="mt-4 text-sm text-primary">
            {t.memberships.note}
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                  tier.popular
                    ? "bg-dark border-primary shadow-[0_0_30px_rgba(0,255,0,0.3)]"
                    : "bg-dark border-primary/20 hover:border-primary"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-dark px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{t.memberships.mostPopular}</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-black text-primary">{tier.price}</span>
                    <span className="text-gray-400 ml-2">/{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-4 rounded-md font-bold transition-all duration-300 ${
                    tier.popular
                      ? "bg-primary text-dark hover:bg-primary-light hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
                      : "bg-primary/10 text-primary border-2 border-primary hover:bg-primary hover:text-dark"
                  }`}
                >
                    <span className="flex items-center justify-center space-x-2">
                    <span>{t.memberships.joinNow}</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-light rounded-lg border border-primary/20 p-8">
            <h2 className="text-3xl font-black text-primary mb-6 text-center">
              {t.memberships.specialMemberships}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{t.memberships.couples}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{t.memberships.family}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{t.memberships.student}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{t.memberships.senior}</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-dark font-bold rounded-md hover:bg-primary-light transition-all duration-300"
              >
                <span>{t.memberships.contactDetails}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

