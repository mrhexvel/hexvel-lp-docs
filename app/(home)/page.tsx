"use client";

import AnimatedCard from "@/components/AnimatedCard";
import { Brain, Code, Rocket, Settings, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen dark:text-white">
      <header
        className="py-8 text-center"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        <div className="flex justify-center items-center gap-4">
          <Brain
            className="h-12 w-12 text-emerald-500"
            style={{ animation: "pulse 3s infinite" }}
          />
          <h1 className="text-5xl font-bold">HEXVEL LP</h1>
        </div>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          Ваш умный помощник для управления VK. Автоматизация, интеллект и магия
          в одном.
        </p>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-3xl font-semibold text-emerald-500"
            style={{ animation: "fadeIn 1s ease-in-out" }}
          >
            Раскройте силу нейросетей
          </h2>
          <p
            className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto"
            style={{ animation: "fadeIn 1s ease-in-out" }}
          >
            HEXVEL — это не просто бот. Это инструмент, вдохновлённый разными
            умами, который адаптируется к вашим задачам и упрощает жизнь в VK.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard
              title="Автоматизация"
              description="Управляйте чатами, постами и друзьями одной командой."
              href="/docs/commands"
              icon={<Rocket className="h-10 w-10" />}
            />
            <AnimatedCard
              title="Интеллект"
              description="Используйте мощь ИИ для генерации контента."
              href="/docs/commands/images"
              icon={<Brain className="h-10 w-10" />}
            />
            <AnimatedCard
              title="Гибкость"
              description="Настройте бота под себя с помощью скриптов."
              href="/docs/commands/scripts"
              icon={<Settings className="h-10 w-10" />}
            />
          </div>
          <Link
            href="/docs/setup"
            className="mt-12 inline-block px-8 py-4 bg-emerald dark:text-white hover:text-white font-semibold rounded-3xl hover:bg-emerald-dark transition-colors duration-300"
            style={{ animation: "slideUp 0.8s ease-out" }}
          >
            Попробовать сейчас
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-semibold text-emerald-500"
            style={{ animation: "fadeIn 1s ease-in-out" }}
          >
            Возможности HEXVEL
          </h2>
          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            {["Управление", "Генерация", "Скрипты", "Аналитика"].map(
              (feature) => (
                <span
                  key={feature}
                  className="px-6 py-3 bg-emerald-dark text-white rounded-full"
                  style={{ animation: "pulse 3s infinite" }}
                >
                  {feature}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-3xl font-semibold text-emerald-500"
            style={{ animation: "fadeIn 1s ease-in-out" }}
          >
            Кто мы?
          </h2>
          <p
            className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto"
            style={{ animation: "fadeIn 1s ease-in-out" }}
          >
            Мы — команда энтузиастов, вдохновлённых нейросетями и
            автоматизацией. HEXVEL — это наш вклад в будущее VK.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard
              title="HEXVEL"
              description="Создатель и идейный лидер проекта."
              href="https://vk.com/hexvel"
              icon={<Users className="h-10 w-10" />}
            />
            <AnimatedCard
              title="Андрей Петров"
              description="Мастер антикапчи и надёжности."
              href="https://vk.com/id24386072"
              icon={<Code className="h-10 w-10" />}
            />
          </div>
        </div>
      </section>

      <footer className="py-8 text-center">
        <p className="text-fd-muted-foreground">
          © 2025 HEXVEL Community. Создано с{" "}
          <span className="text-emerald-500 font-bold">любовью к коду</span>.
        </p>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
