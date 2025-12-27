"use client";

import { useState } from "react";
import { Clock, Calendar } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const getDays = (t: any) => [
  t.timetable.monday,
  t.timetable.tuesday,
  t.timetable.wednesday,
  t.timetable.thursday,
  t.timetable.friday,
  t.timetable.saturday,
  t.timetable.sunday,
];

const dayKeys = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Schedule based on the actual gym timetable - English version
const scheduleEn: { [key: string]: { [key: string]: { name: string; duration: string; instructor: string; time: string } } } = {
  Monday: {
    "08:00": { name: "FITBALL", duration: "45MIN", instructor: "IOANNA", time: "08:00" },
    "16:00": { name: "BODYPUMP", duration: "45MIN", instructor: "GEORGIA", time: "16:00" },
    "17:45": { name: "BOOTY & CORE", duration: "45MIN", instructor: "ELENA", time: "17:45" },
    "18:45": { name: "BODYPUMP", duration: "60MIN", instructor: "GEORGIA", time: "18:45" },
    "20:00": { name: "PILATES", duration: "45MIN", instructor: "EVAGGELOS", time: "20:00" },
  },
  Tuesday: {
    "08:00": { name: "PILATES", duration: "45MIN", instructor: "ELENA", time: "08:00" },
    "18:15": { name: "FITBALL", duration: "45MIN", instructor: "EVAGGELOS", time: "18:15" },
    "19:15": { name: "PILATES", duration: "45MIN", instructor: "IOANNA", time: "19:15" },
  },
  Wednesday: {
    "08:00": { name: "STRENGTH & RESISTANCE BANDS", duration: "45MIN", instructor: "GEORGIA", time: "08:00" },
    "17:15": { name: "CORE", duration: "30MIN", instructor: "ELENA", time: "17:15" },
    "18:15": { name: "BODYPUMP", duration: "60MIN", instructor: "GEORGIA", time: "18:15" },
    "20:00": { name: "PILATES", duration: "45MIN", instructor: "EVAGGELOS", time: "20:00" },
  },
  Thursday: {
    "08:00": { name: "PILATES", duration: "45MIN", instructor: "ELENA", time: "08:00" },
    "16:15": { name: "BODYPUMP", duration: "45MIN", instructor: "GEORGIA", time: "16:15" },
    "17:15": { name: "PILATES", duration: "45MIN", instructor: "IOANNA", time: "17:15" },
    "19:00": { name: "FITBALL", duration: "45MIN", instructor: "EVAGGELOS", time: "19:00" },
  },
  Friday: {
    "08:00": { name: "PILATES", duration: "45MIN", instructor: "ELENA", time: "08:00" },
    "17:15": { name: "FITBALL", duration: "45MIN", instructor: "IOANNA", time: "17:15" },
    "18:15": { name: "PILATES", duration: "45MIN", instructor: "IOANNA", time: "18:15" },
  },
  Saturday: {
    "10:30": { name: "STRENGTH & BALL", duration: "45MIN", instructor: "GEORGIA", time: "10:30" },
    "19:00": { name: "BALL & BALANCE", duration: "45MIN", instructor: "GEORGIA", time: "19:00" },
  },
  Sunday: {},
};

// Schedule based on the actual gym timetable - Greek version
const scheduleGr: { [key: string]: { [key: string]: { name: string; duration: string; instructor: string; time: string } } } = {
  Monday: {
    "08:00": { name: "FITBALL", duration: "45MIN", instructor: "IOANNA", time: "08:00" },
    "16:00": { name: "BODYPUMP", duration: "45MIN", instructor: "GEORGIA", time: "16:00" },
    "17:45": { name: "BOOTY & CORE", duration: "45MIN", instructor: "ELENA", time: "17:45" },
    "18:45": { name: "BODYPUMP", duration: "60MIN", instructor: "GEORGIA", time: "18:45" },
    "20:00": { name: "PILATES", duration: "45MIN", instructor: "EVAGGELOS", time: "20:00" },
  },
  Tuesday: {
    "08:00": { name: "PILATES", duration: "45MIN", instructor: "ELENA", time: "08:00" },
    "18:15": { name: "FITBALL", duration: "45MIN", instructor: "EVAGGELOS", time: "18:15" },
    "19:15": { name: "PILATES", duration: "45MIN", instructor: "IOANNA", time: "19:15" },
  },
  Wednesday: {
    "08:00": { name: "ΕΝΔΥΝΑΜΩΣΗ & ΛΑΣΤΙΧΑ", duration: "45MIN", instructor: "GEORGIA", time: "08:00" },
    "17:15": { name: "CORE", duration: "30MIN", instructor: "ELENA", time: "17:15" },
    "18:15": { name: "BODYPUMP", duration: "60MIN", instructor: "GEORGIA", time: "18:15" },
    "20:00": { name: "PILATES", duration: "45MIN", instructor: "EVAGGELOS", time: "20:00" },
  },
  Thursday: {
    "08:00": { name: "PILATES", duration: "45MIN", instructor: "ELENA", time: "08:00" },
    "16:15": { name: "BODYPUMP", duration: "45MIN", instructor: "GEORGIA", time: "16:15" },
    "17:15": { name: "PILATES", duration: "45MIN", instructor: "IOANNA", time: "17:15" },
    "19:00": { name: "FITBALL", duration: "45MIN", instructor: "EVAGGELOS", time: "19:00" },
  },
  Friday: {
    "08:00": { name: "PILATES", duration: "45MIN", instructor: "ELENA", time: "08:00" },
    "17:15": { name: "FITBALL", duration: "45MIN", instructor: "IOANNA", time: "17:15" },
    "18:15": { name: "PILATES", duration: "45MIN", instructor: "IOANNA", time: "18:15" },
  },
  Saturday: {
    "10:30": { name: "ΕΝΔΥΝΑΜΩΣΗ & ΜΠΑΛΑ", duration: "45MIN", instructor: "GEORGIA", time: "10:30" },
    "19:00": { name: "ΜΠΑΛΑ & ΙΣΟΡΡΟΠΙΑ", duration: "45MIN", instructor: "GEORGIA", time: "19:00" },
  },
  Sunday: {},
};

export default function Timetable() {
  const t = useTranslation();
  const { language } = useLanguage();
  const days = getDays(t);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const selectedDayKey = dayKeys[selectedDayIndex];
  const selectedDayName = days[selectedDayIndex].toUpperCase();
  const schedule = language === "en" ? scheduleEn : scheduleGr;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark via-dark-light to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">{t.timetable.title} </span>
            <span className="text-primary">{t.timetable.timetable}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t.timetable.subtitle}
          </p>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Day Selector */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDayIndex(index)}
                  className={`px-6 py-3 rounded-md font-bold transition-all duration-300 whitespace-nowrap uppercase ${
                    selectedDayIndex === index
                      ? "bg-primary text-dark transform scale-105"
                      : "bg-dark text-gray-300 hover:bg-dark-lighter hover:text-primary"
                  }`}
                >
                  {day.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Grid */}
          <div className="bg-dark rounded-lg border border-primary/20 p-6">
            <div className="mb-4 flex items-center space-x-2 text-primary">
              <Calendar className="w-5 h-5" />
              <h2 className="text-2xl font-black uppercase">{selectedDayName}</h2>
            </div>

            {schedule[selectedDayKey] && Object.keys(schedule[selectedDayKey]).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.values(schedule[selectedDayKey])
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((classItem, index) => (
                    <div
                      key={index}
                      className="p-4 bg-dark-light rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105 group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors uppercase">
                          {classItem.name}
                        </h3>
                        <div className="flex items-center space-x-1 text-primary text-sm uppercase">
                          <Clock className="w-4 h-4" />
                          <span>{classItem.duration}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 uppercase">{t.timetable.instructor.toUpperCase()} {classItem.instructor}</div>
                      <div className="mt-2 text-primary font-semibold">{classItem.time}</div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <p className="text-xl uppercase">{t.timetable.noClasses} {selectedDayName}</p>
              </div>
            )}
          </div>

          {/* Working Hours */}
          <div className="mt-8 p-6 bg-dark rounded-lg border border-primary/20">
            <h3 className="text-2xl font-black text-primary mb-4">{t.timetable.workingHours}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <span className="font-semibold text-white">{t.timetable.mondayFriday}</span> 06:00 - 22:00
              </div>
              <div>
                <span className="font-semibold text-white">{t.timetable.saturdayHours}</span> 09:00 - 18:00
              </div>
              <div>
                <span className="font-semibold text-white">{t.timetable.sundayHours}</span> {t.contact.sunday}
              </div>
              <div className="text-primary">
                <span className="font-semibold">{t.timetable.note}</span> {t.timetable.closedHolidays}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

