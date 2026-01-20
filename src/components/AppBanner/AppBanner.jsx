import { motion } from "framer-motion";

// Banner image
const bannerImg =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80";

const AppBanner = () => {
  // Typewriter animation variants
  const typingText = {
    hidden: { width: 0, opacity: 0 },
    visible: (i) => ({
      width: "100%",
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="relative overflow-hidden rounded-3xl p-8 md:p-14 h-[700px]"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Radial glow for cinematic warmth */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,#c08457,transparent_70%)]" />

      <div className="relative z-20 grid items-center gap-10 md:grid-cols-2 h-full">
        {/* Left Side - Text and Buttons */}
        <motion.div
          className="text-[#fef3e7] flex flex-col justify-center h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-block mb-3 rounded-full bg-[#c08457]/30 px-4 py-1 text-sm text-[#f5d0a9]">
            Premium Coffee Experience
          </span>

          {/* Animated typewriter headline */}
          {["Brewed Fresh.", "Delivered Fast."].map((text, i) => (
            <motion.h2
              key={i}
              className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl overflow-hidden whitespace-nowrap border-r-2 border-[#fef3e7]"
              variants={typingText}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {text}
            </motion.h2>
          ))}

          {/* Animated typewriter paragraph */}
          <motion.p
            className="mb-6 max-w-md text-[#e7d3c1] overflow-hidden whitespace-nowrap border-r-2 border-[#e7d3c1]"
            variants={typingText}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Discover rich aroma, bold flavor, and handcrafted blends made from
            the world’s finest coffee beans — delivered straight to your door.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-[#c08457] px-6 py-3 font-semibold text-[#1a0f0a] shadow-lg transition hover:bg-[#d39a6a]"
            >
              Order Coffee
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-[#f5d0a9]/40 px-6 py-3 font-semibold text-[#fef3e7] transition hover:bg-white/10"
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side - Main Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ y: -500, opacity: 0, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 1.5,
          }}
        >
          <img
            src={bannerImg}
            alt="Coffee Banner"
            className="mx-auto max-h-[400px] drop-shadow-2xl rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AppBanner;
