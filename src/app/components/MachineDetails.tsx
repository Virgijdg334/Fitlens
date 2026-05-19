import { useNavigate } from "react-router";
import { ChevronLeft, Play, BookmarkPlus, Share2, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { BottomNav } from "./Home";

export function MachineDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-lg font-semibold">Detalles de la máquina</h1>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Success Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-6 mt-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl p-4"
      >
        <div className="flex items-center space-x-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          <div>
            <p className="text-white font-semibold">¡Máquina identificada!</p>
            <p className="text-gray-400 text-sm">Confianza: 98%</p>
          </div>
        </div>
      </motion.div>

      {/* Machine Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-6 mt-6"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Prensa de Piernas</h2>
        <p className="text-gray-400">Máquina de fuerza • Miembro inferior</p>
      </motion.div>

      {/* 3D Anatomy Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-6 mt-6"
      >
        <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold mb-4 text-white">Músculos trabajados</h3>
          
          {/* Anatomical illustration placeholder with highlights */}
          <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 mb-4 aspect-[3/4] flex items-center justify-center overflow-hidden">
            {/* Silhouette */}
            <div className="relative">
              <svg width="150" height="300" viewBox="0 0 150 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Body outline */}
                <ellipse cx="75" cy="30" rx="20" ry="25" fill="#2A2A2A" />
                <rect x="60" y="50" width="30" height="60" rx="8" fill="#2A2A2A" />
                
                {/* Highlighted legs - Quadriceps and Glutes */}
                <ellipse cx="60" cy="130" rx="18" ry="35" fill="url(#gradient1)" className="animate-pulse" />
                <ellipse cx="90" cy="130" rx="18" ry="35" fill="url(#gradient1)" className="animate-pulse" />
                
                {/* Upper legs */}
                <rect x="48" y="165" width="20" height="50" rx="10" fill="url(#gradient2)" className="animate-pulse" />
                <rect x="82" y="165" width="20" height="50" rx="10" fill="url(#gradient2)" className="animate-pulse" />
                
                {/* Lower legs */}
                <rect x="50" y="215" width="16" height="60" rx="8" fill="#2A2A2A" />
                <rect x="84" y="215" width="16" height="60" rx="8" fill="#2A2A2A" />
                
                {/* Arms */}
                <rect x="30" y="60" width="12" height="55" rx="6" fill="#2A2A2A" />
                <rect x="108" y="60" width="12" height="55" rx="6" fill="#2A2A2A" />
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Glow effects */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Muscle groups list */}
          <div className="space-y-2">
            <MuscleItem name="Cuádriceps" intensity="primary" />
            <MuscleItem name="Glúteos" intensity="primary" />
            <MuscleItem name="Isquiotibiales" intensity="secondary" />
            <MuscleItem name="Pantorrillas" intensity="secondary" />
          </div>
        </div>
      </motion.div>

      {/* Video Tutorial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-6 mt-6"
      >
        <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-gray-800">
          {/* Video Thumbnail */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
            <img
              src="https://images.unsplash.com/photo-1738321791161-db1a9974652c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBsZWclMjBwcmVzcyUyMG1hY2hpbmUlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcxODgzNTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Video tutorial"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </button>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
              4:32
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-1">Tutorial de técnica correcta</h3>
            <p className="text-gray-400 text-sm mb-3">Aprende la postura y ejecución perfecta</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>👁️ 12.5k visualizaciones</span>
              <span>⭐ 4.9</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-6 mt-6"
      >
        <div className="bg-[#1A1A1A] rounded-2xl p-5 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Consejos clave</h3>
          <div className="space-y-3">
            <TipItem text="Mantén la espalda pegada al respaldo durante todo el movimiento" />
            <TipItem text="Desciende hasta que tus rodillas formen un ángulo de 90°" />
            <TipItem text="Empuja con toda la planta del pie, no solo con los dedos" />
            <TipItem text="Evita bloquear completamente las rodillas al extender" />
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-6 mt-6 flex space-x-3"
      >
        <button className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-shadow">
          Registrar ejercicio
        </button>
        <button className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
          <BookmarkPlus className="w-6 h-6 text-white" />
        </button>
      </motion.div>

      <BottomNav currentPage="machine" />
    </div>
  );
}

function MuscleItem({ name, intensity }: { name: string; intensity: "primary" | "secondary" }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className={`w-3 h-3 rounded-full ${
          intensity === "primary" ? "bg-emerald-400" : "bg-cyan-400"
        }`}></div>
        <span className="text-white">{name}</span>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full ${
        intensity === "primary" 
          ? "bg-emerald-500/20 text-emerald-400" 
          : "bg-cyan-500/20 text-cyan-400"
      }`}>
        {intensity === "primary" ? "Principal" : "Secundario"}
      </span>
    </div>
  );
}

function TipItem({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}
