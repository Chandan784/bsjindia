export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`
        max-w-3xl
        ${align === "center" ? "mx-auto text-center" : ""}
      `}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#f15a24]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}