import Image from "next/image";

type Tech = { name: string; logo: string; w?: number };

const rowA: Tech[] = [
  { name: "React", logo: "react" },
  { name: "Next.js", logo: "nextjs" },
  { name: "React Native", logo: "react" },
  { name: "TypeScript", logo: "typescript" },
  { name: "Figma", logo: "figma" },
  { name: "Tailwind CSS", logo: "tailwind" },
  { name: "GitHub", logo: "github" },
];

const rowB: Tech[] = [
  { name: "Node.js", logo: "nodejs" },
  { name: ".NET / C#", logo: "dotnet" },
  { name: "Python", logo: "python" },
  { name: "PostgreSQL", logo: "postgresql" },
  { name: "SQL Server", logo: "sqlserver" },
  { name: "Docker", logo: "docker" },
  { name: "AWS", logo: "aws", w: 40 },
];

function Row({ items, reverse }: { items: Tech[]; reverse?: boolean }) {
  // The list is rendered twice so the -50% loop is seamless; the copy is hidden from screen readers.
  return (
    <div className="flex overflow-hidden">
      <div className={reverse ? "mq-r" : "mq"}>
        {[0, 1].map((copy) =>
          items.map((t) => (
            <span
              key={`${copy}-${t.name}`}
              aria-hidden={copy === 1 || undefined}
              className="mr-4 flex items-center gap-3 whitespace-nowrap rounded-full bg-white py-3 pl-3.5 pr-6 text-[15px] font-semibold shadow-[0_1px_0_rgba(17,17,17,.04)]"
            >
              <Image
                src={`/tech/${t.logo}.svg`}
                alt=""
                width={t.w ?? 30}
                height={30}
                unoptimized
                className="block h-[30px] object-contain"
                style={{ width: t.w ?? 30 }}
              />
              {t.name}
            </span>
          )),
        )}
      </div>
    </div>
  );
}

export function StackMarquee() {
  return (
    <section className="tint section overflow-hidden">
      <div className="wrap">
        <span className="eb">Tools we ship with</span>
        <h2 className="disp h2 mt-[18px]">
          A stack for products that
          <br />
          need to <span className="mk">launch and last.</span>
        </h2>
        <p className="muted mt-5 max-w-[560px] text-[17px] leading-[1.6]">
          Frontend, mobile, backend and infrastructure we use every week to get from idea to
          production.
        </p>
      </div>
      <div
        role="group"
        aria-label="Technologies we use"
        className="mt-16 flex flex-col gap-[22px] [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      >
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
