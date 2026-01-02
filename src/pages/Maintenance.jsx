import { motion } from "framer-motion"

const BG = "bg-[#0b0f17]"
const CARD = "bg-white/5 border border-white/10 backdrop-blur"

export default function Maintenance() {
  return (
    <main className={`${BG} min-h-screen flex items-center justify-center text-white px-4`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`max-w-xl w-full text-center rounded-3xl p-10 ${CARD}`}
      >
        {/* Icon */}
        <motion.div
          className="mx-auto mb-6 w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <svg
            className="w-10 h-10 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 3a6.75 6.75 0 014.5 0l.75 3h3a6.75 6.75 0 010 4.5l-3 .75v3l3 .75a6.75 6.75 0 010 4.5h-3l-.75 3a6.75 6.75 0 01-4.5 0l-.75-3h-3a6.75 6.75 0 010-4.5l3-.75v-3l-3-.75a6.75 6.75 0 010-4.5h3l.75-3z"
            />
          </svg>
        </motion.div>

        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Website đang bảo trì
        </h1>

        <p className="text-white/70 text-lg leading-relaxed">
          Chúng tôi đang nâng cấp hệ thống để mang lại trải nghiệm tốt hơn.<br />
          Vui lòng quay lại sau ít phút.
        </p>

        <motion.div
          className="mt-8 text-sm text-white/50"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ⏳ Maintenance in progress...
        </motion.div>

        <div className="mt-10">
          <a
            href="mailto:nguyenviettruong1808@gmail.com"
            className="inline-block px-6 py-3 rounded-xl border border-white/20 hover:border-blue-500 transition"
          >
            Liên hệ hỗ trợ
          </a>
        </div>
      </motion.div>
    </main>
  )
}
