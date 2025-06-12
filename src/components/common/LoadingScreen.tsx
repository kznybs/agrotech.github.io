import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
          className="bg-white/20 p-8 rounded-3xl mb-8 inline-block backdrop-blur-sm border border-white/30"
        >
          <Cpu className="h-16 w-16 text-white" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-black text-white mb-4"
        >
          AgroTech Qualifica
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto max-w-xs"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-emerald-200 mt-4 font-semibold"
        >
          Carregando experiência imersiva...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;