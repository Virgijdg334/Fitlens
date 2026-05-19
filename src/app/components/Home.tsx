import { Link } from "react-router";
import { Scan, Dumbbell, Apple, TrendingUp, ChevronRight, Zap } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Buenos días" : currentHour < 18 ? "Buenas tardes" : "Buenas noches";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Fitlens
          </h1>
          <p className="text-gray-400 mt-1">Tu entrenador personal con IA</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold">{greeting}, Alex</h2>
          <p className="text-gray-400 mt-1">¿Listo para entrenar hoy?</p>
        </motion.div>
      </div>

      {/* AI Scanner FAB - Prominent Central Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-6 mb-6"
      >
        <Link to="/scanner">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-8 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Scan className="w-8 h-8 text-white" />
                </div>
                <Zap className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Escáner IA</h3>
              <p className="text-white/90">Identifica cualquier máquina del gimnasio al instante</p>
              <div className="mt-6 flex items-center text-white font-semibold">
                <span>Abrir cámara</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          </div>
        </Link>
      </motion.div>

      {/* Daily Workout Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-6 mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Rutina de hoy</h3>
          <span className="text-emerald-400 text-sm font-medium">Lunes - Piernas</span>
        </div>
        <div className="bg-[#1A1A1A] rounded-2xl p-5 border border-gray-800">
          <div className="space-y-4">
            <ExerciseItem name="Prensa de piernas" sets="3 × 12" completed={false} />
            <ExerciseItem name="Sentadilla con barra" sets="4 × 10" completed={false} />
            <ExerciseItem name="Zancadas" sets="3 × 12 cada pierna" completed={false} />
            <ExerciseItem name="Curl de pierna" sets="3 × 15" completed={false} />
          </div>
          <div className="mt-5 pt-5 border-t border-gray-800">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Progreso</span>
              <span className="text-emerald-400 font-semibold">0/4 completados</span>
            </div>
            <div className="mt-2 bg-gray-800 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full w-0 transition-all"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Diet Plan Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-6 mb-6"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Plan nutricional</h3>
        <div className="grid grid-cols-3 gap-3">
          <NutritionCard
            icon={<Apple className="w-6 h-6" />}
            label="Desayuno"
            calories="450"
            color="from-orange-500 to-red-500"
          />
          <NutritionCard
            icon={<Dumbbell className="w-6 h-6" />}
            label="Almuerzo"
            calories="680"
            color="from-emerald-500 to-green-500"
          />
          <NutritionCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="Cena"
            calories="520"
            color="from-cyan-500 to-blue-500"
          />
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-6"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Resumen semanal</h3>
        <div className="bg-[#1A1A1A] rounded-2xl p-5 border border-gray-800">
          <div className="grid grid-cols-2 gap-4">
            <StatItem label="Entrenamientos" value="4" unit="de 5" />
            <StatItem label="Calorías quemadas" value="2.8k" unit="kcal" />
            <StatItem label="Tiempo activo" value="3.5" unit="horas" />
            <StatItem label="Racha actual" value="12" unit="días" />
          </div>
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="home" />
    </div>
  );
}

function ExerciseItem({ name, sets, completed }: { name: string; sets: string; completed: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          completed ? 'bg-emerald-500' : 'bg-gray-800'
        }`}>
          <Dumbbell className={`w-5 h-5 ${completed ? 'text-white' : 'text-gray-500'}`} />
        </div>
        <div>
          <p className="text-white font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{sets}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-600" />
    </div>
  );
}

function NutritionCard({ icon, label, calories, color }: { icon: React.ReactNode; label: string; calories: string; color: string }) {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-4 border border-gray-800">
      <div className={`bg-gradient-to-br ${color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-white font-semibold">{calories} <span className="text-xs text-gray-500">kcal</span></p>
    </div>
  );
}

function StatItem({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div>
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-white text-2xl font-bold">
        {value} <span className="text-sm text-gray-500 font-normal">{unit}</span>
      </p>
    </div>
  );
}

export function BottomNav({ currentPage }: { currentPage: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-gray-800 px-6 py-4">
      <div className="max-w-md mx-auto flex items-center justify-around">
        <Link to="/">
          <div className={`flex flex-col items-center ${currentPage === 'home' ? 'text-emerald-400' : 'text-gray-500'}`}>
            <Dumbbell className="w-6 h-6" />
            <span className="text-xs mt-1">Inicio</span>
          </div>
        </Link>
        <Link to="/scanner">
          <div className={`flex flex-col items-center ${currentPage === 'scanner' ? 'text-emerald-400' : 'text-gray-500'}`}>
            <Scan className="w-6 h-6" />
            <span className="text-xs mt-1">Escáner</span>
          </div>
        </Link>
        <Link to="/community">
          <div className={`flex flex-col items-center ${currentPage === 'community' ? 'text-emerald-400' : 'text-gray-500'}`}>
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs mt-1">Comunidad</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
