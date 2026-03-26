"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Sun, CloudRain, CloudSnow, Wind } from "lucide-react";

interface WeatherData {
  temperature: number;
  weatherCode: number;
  city: string;
}

function getWeatherIcon(code: number) {
  if (code === 0) return <Sun size={16} className="text-yellow-400" />;
  if (code <= 3) return <Cloud size={16} className="text-gray-300" />;
  if (code <= 67) return <CloudRain size={16} className="text-blue-400" />;
  if (code <= 77) return <CloudSnow size={16} className="text-blue-200" />;
  return <Wind size={16} className="text-gray-400" />;
}

function getWeatherDesc(code: number): string {
  if (code === 0) return "مشمس";
  if (code <= 3) return "غائم جزئياً";
  if (code <= 67) return "ممطر";
  if (code <= 77) return "ثلجي";
  return "عاصف";
}

export default function WeatherWidget({ compact = false }: { compact?: boolean }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number, city: string) => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await res.json();
        setWeather({
          temperature: Math.round(data.current_weather.temperature),
          weatherCode: data.current_weather.weathercode,
          city,
        });
      } catch {
        setWeather({ temperature: 28, weatherCode: 0, city: "الرياض" });
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          // Reverse geocode via open-meteo doesn't have city names
          // Use country/region from coordinates heuristically
          let city = "موقعك";
          try {
            const r = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const d = await r.json();
            city =
              d.address?.city ||
              d.address?.town ||
              d.address?.county ||
              "موقعك";
          } catch {/* keep fallback */}
          fetchWeather(latitude, longitude, city);
        },
        () => {
          // Default to Riyadh
          fetchWeather(24.7136, 46.6753, "الرياض");
        }
      );
    } else {
      fetchWeather(24.7136, 46.6753, "الرياض");
    }
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center gap-2 ${compact ? "text-xs" : "text-sm"} text-white/40`}>
        <div className="w-4 h-4 rounded-full border-2 border-[#c8a951]/40 border-t-[#c8a951] animate-spin" />
        <span>الطقس...</span>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-2 ${compact ? "text-xs" : "text-sm"}`}
      >
        {getWeatherIcon(weather.weatherCode)}
        <span className="text-white/80 font-medium">
          {weather.temperature}°
        </span>
        {!compact && (
          <>
            <span className="text-white/40">•</span>
            <span className="text-white/60">{getWeatherDesc(weather.weatherCode)}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60">{weather.city}</span>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
