export default function SkillCard({ title, items }) {
  return (
    <div className="rounded-2xl p-5 border border-white/10 bg-white/5">
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <ul className="space-y-2 text-white/80">
        {items.map((t, i) => (
          <li key={i}>• {t}</li>
        ))}
      </ul>
    </div>
  );
}
