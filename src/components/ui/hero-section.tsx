import { ShinyButton } from "./shiny-button"

export function HeroSection() {
  return (
    <section id="home" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center px-0 leading-5">
          <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-8xl">
            <span className="font-open-sans-custom not-italic">Ideate.</span>{" "}
            <span className="font-serif italic">Prompt.</span>{" "}
            <span className="font-open-sans-custom not-italic">Build.</span>
          </h1>

          <p className="mb-8 mx-auto max-w-2xl text-pretty leading-relaxed text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-thin font-open-sans-custom tracking-wide leading-7 text-xl">
            whether you are a designer, a developer, or just curious, take an idea,{" "}
            <span className="font-serif italic">prompt</span> it, and watch it come alive
          </p>

          <div className="flex justify-center">
            <ShinyButton className="px-8 py-3 text-base">start building</ShinyButton>
          </div>
        </div>
      </div>
    </section>
  )
}
