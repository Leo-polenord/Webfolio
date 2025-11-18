import { Feature } from "./feature-with-advantages"

export function FeaturesSection() {
  return (
    <section id="features" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-7xl w-full">
        <Feature />
      </div>
    </section>
  )
}
