export default function ProjectCard({ title, tags, bullets }) {
  return (
    <article className="rounded-2xl p-5 border border-white/10 bg-white/5 hover:bg-white/[0.07] transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className="px-2 py-1 rounded-full text-xs border border-white/15 text-white/80">
            {t}
          </span>
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-white/80">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </article>
  );
}
