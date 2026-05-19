import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { X, Focus, Zap } from "lucide-react";
import { motion } from "motion/react";
import { BottomNav } from "./Home";

export function Scanner() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    // Simulate scanning after 1 second
    const timer = setTimeout(() => {
      setScanning(true);
    }, 1000);

    // Auto-navigate to machine details after scanning animation
    const navigateTimer = setTimeout(() => {
      navigate("/machine/leg-press");
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Camera Viewfinder Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1738321791161-db1a9974652c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBsZWclMjBwcmVzcyUyMG1hY2hpbmUlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcxODgzNTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gym equipment"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Top Bar */}
      <div className="relative z-20 flex items-center justify-between px-6 pt-12">
        <button
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-white font-medium">IA Activa</span>
        </div>
      </div>

      {/* Scanning Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        {/* Corner Brackets - Scanning Frame */}
        <div className="relative w-full max-w-sm aspect-[3/4]">
          {/* Top-left corner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-16 h-16"
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${scanning ? 'bg-emerald-400' : 'bg-white/60'} rounded`}></div>
            <div className={`absolute top-0 left-0 w-1 h-full ${scanning ? 'bg-emerald-400' : 'bg-white/60'} rounded`}></div>
          </motion.div>

          {/* Top-right corner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 right-0 w-16 h-16"
          >
            <div className={`absolute top-0 right-0 w-full h-1 ${scanning ? 'bg-emerald-400' : 'bg-white/60'} rounded`}></div>
            <div className={`absolute top-0 right-0 w-1 h-full ${scanning ? 'bg-emerald-400' : 'bg-white/60'} rounded`}></div>
          </motion.div>

          {/* Bottom-left corner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 w-16 h-16"
          >
            <div className={`absolute bottom-0 left-0 w-full h-1 ${scanning ? 'bg-emerald-400' : 'bg-white/60'} rounded`}></div>
            <div className={`absolute bottom-0 left-0 w-1 h-full ${scanning ? 'bg-emerald-400' : 'bg-white/60'} rounded`}></div>
          </motion.div>

          {/* Bottom-right corner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 right-0 w-16 h-16"
          >
            <div className={`absolute bottom-0 right-0 w-full h-1 ${scanning ? 'bg-emerald-400' : 'bg-white/60'} rounded`}></div>
            <div className={`absolute bottom-0 right-0 w-1 h-full ${scanning ? 'bg-emerald-400' : 'bg-white/60'} rounded`}></div>
          </motion.div>

          {/* Scanning line animation */}
          {scanning && (
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            ></motion.div>
          )}

          {/* Center focus icon */}
          {!scanning && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Focus className="w-16 h-16 text-white/80" />
            </motion.div>
          )}

          {/* Detection box when scanning */}
          {scanning && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-emerald-400 rounded-lg w-4/5 h-3/5 bg-emerald-400/5"
            >
              <div className="absolute -top-8 left-0 right-0 flex justify-center">
                <div className="bg-emerald-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MÁQUINA DETECTADA
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Status */}
      <div className="absolute bottom-32 left-0 right-0 z-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/20"
        >
          <div className="flex items-center justify-center space-x-3">
            {scanning ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full"
                ></motion.div>
                <p className="text-white font-medium">Identificando máquina...</p>
              </>
            ) : (
              <>
                <Focus className="w-6 h-6 text-emerald-400" />
                <p className="text-white font-medium">Apunta a la máquina</p>
              </>
            )}
          </div>
          {scanning && (
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5 }}
              className="mt-4 bg-emerald-400 h-1 rounded-full"
            ></motion.div>
          )}
        </motion.div>
      </div>

      <BottomNav currentPage="scanner" />
    </div>
  );
}
