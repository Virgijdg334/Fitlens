import { useState } from "react";
import { MessageCircle, ThumbsUp, Share2, Search, TrendingUp, Award, Users } from "lucide-react";
import { motion } from "motion/react";
import { BottomNav } from "./Home";

const posts = [
  {
    id: 1,
    author: "María González",
    avatar: "https://images.unsplash.com/photo-1683848644078-f339179c4ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjBhdmF0YXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE4ODM1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Principiante",
    time: "hace 2h",
    content: "¿Alguien sabe cuál es la diferencia entre la prensa de piernas a 45° vs la horizontal? Quiero optimizar mi rutina de piernas. 💪",
    likes: 24,
    comments: 8,
    category: "Pregunta"
  },
  {
    id: 2,
    author: "Carlos Ruiz",
    avatar: "https://images.unsplash.com/photo-1752778598489-ae34ac74ab34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbWFuJTIwYXZhdGFyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODgzNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Experto",
    time: "hace 5h",
    content: "¡Consejo del día! Para principiantes: no subestimen el calentamiento. 5-10 minutos en la cinta o bici pueden prevenir lesiones y mejorar tu rendimiento en un 30%. 🔥",
    likes: 156,
    comments: 23,
    category: "Consejo"
  },
  {
    id: 3,
    author: "Ana Martínez",
    avatar: "https://images.unsplash.com/photo-1659081442510-4552bee3b007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHBlcnNvbiUyMHBvcnRyYWl0JTIwYXZhdGFyfGVufDF8fHx8MTc3MTg4MzUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Intermedio",
    time: "hace 1d",
    content: "Pregunta sobre nutrición: ¿es mejor comer antes o después del entrenamiento? He escuchado opiniones muy diferentes y no sé qué hacer 🤔",
    likes: 89,
    comments: 34,
    category: "Pregunta"
  },
  {
    id: 4,
    author: "Diego Torres",
    avatar: "https://images.unsplash.com/photo-1752778598489-ae34ac74ab34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbWFuJTIwYXZhdGFyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODgzNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Principiante",
    time: "hace 2d",
    content: "¡Acabo de completar mi primera semana en el gimnasio! Gracias a esta app por ayudarme a identificar las máquinas. Ya no me siento perdido 🎉",
    likes: 312,
    comments: 45,
    category: "Logro"
  }
];

export function Community() {
  const [activeTab, setActiveTab] = useState<"all" | "questions" | "tips">("all");

  const filteredPosts = posts.filter(post => {
    if (activeTab === "all") return true;
    if (activeTab === "questions") return post.category === "Pregunta";
    if (activeTab === "tips") return post.category === "Consejo";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-gray-800">
        <div className="px-6 pt-12 pb-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-white mb-1">Comunidad</h1>
            <p className="text-gray-400">Conecta, aprende y comparte</p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar en la comunidad..."
              className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex px-6 space-x-2 pb-3">
          <TabButton
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            icon={<Users className="w-4 h-4" />}
            label="Todo"
          />
          <TabButton
            active={activeTab === "questions"}
            onClick={() => setActiveTab("questions")}
            icon={<MessageCircle className="w-4 h-4" />}
            label="Preguntas"
          />
          <TabButton
            active={activeTab === "tips"}
            onClick={() => setActiveTab("tips")}
            icon={<TrendingUp className="w-4 h-4" />}
            label="Consejos"
          />
        </div>
      </div>

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-6 mt-6"
      >
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-4 border border-emerald-500/20">
          <div className="grid grid-cols-3 gap-4">
            <StatCard icon={<Users className="w-5 h-5" />} value="12.5k" label="Miembros" />
            <StatCard icon={<MessageCircle className="w-5 h-5" />} value="2.3k" label="Publicaciones" />
            <StatCard icon={<Award className="w-5 h-5" />} value="845" label="Expertos" />
          </div>
        </div>
      </motion.div>

      {/* Posts Feed */}
      <div className="px-6 mt-6 space-y-4">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>

      <BottomNav currentPage="community" />
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        active
          ? "bg-emerald-500 text-white"
          : "bg-[#1A1A1A] text-gray-400 border border-gray-800"
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-emerald-400 mb-1">{icon}</div>
      <p className="text-white font-bold text-lg">{value}</p>
      <p className="text-gray-400 text-xs">{label}</p>
    </div>
  );
}

function PostCard({ post }: { post: typeof posts[0] }) {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-5 border border-gray-800">
      {/* Post Header */}
      <div className="flex items-start space-x-3 mb-4">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/30"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-white font-semibold">{post.author}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              post.badge === "Experto" 
                ? "bg-emerald-500/20 text-emerald-400"
                : post.badge === "Intermedio"
                ? "bg-cyan-500/20 text-cyan-400"
                : "bg-gray-700 text-gray-300"
            }`}>
              {post.badge}
            </span>
          </div>
          <p className="text-gray-500 text-sm">{post.time}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-lg ${
          post.category === "Pregunta"
            ? "bg-blue-500/20 text-blue-400"
            : post.category === "Consejo"
            ? "bg-purple-500/20 text-purple-400"
            : "bg-yellow-500/20 text-yellow-400"
        }`}>
          {post.category}
        </span>
      </div>

      {/* Post Content */}
      <p className="text-gray-200 mb-4 leading-relaxed">{post.content}</p>

      {/* Interaction Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center space-x-2 ${
            liked ? "text-emerald-400" : "text-gray-400"
          } hover:text-emerald-400 transition-colors`}
        >
          <ThumbsUp className={`w-5 h-5 ${liked ? "fill-emerald-400" : ""}`} />
          <span className="text-sm font-medium">{liked ? post.likes + 1 : post.likes}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{post.comments}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-gray-800 space-y-3"
        >
          <Comment
            author="Luis Pérez"
            text="¡Gran pregunta! La prensa a 45° pone más énfasis en los glúteos, mientras que la horizontal se centra más en cuádriceps."
            time="hace 1h"
          />
          <Comment
            author="Sofia García"
            text="Personalmente prefiero la de 45°, siento más activación muscular. ¡Prueba ambas y decide!"
            time="hace 30m"
          />
          <div className="mt-3">
            <input
              type="text"
              placeholder="Escribe un comentario..."
              className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

function Comment({ author, text, time }: { author: string; text: string; time: string }) {
  return (
    <div className="bg-[#0A0A0A] rounded-lg p-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-white text-sm font-semibold">{author}</span>
        <span className="text-gray-500 text-xs">{time}</span>
      </div>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}
