import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">我的作品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.img
          src="/images/sample.jpg"
          alt="示例作品"
          className="rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
        <motion.video
          src="/videos/sample.mp4"
          controls
          className="rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
        />
      </div>
    </section>
  );
}

export default Projects;