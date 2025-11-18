import { forwardRef } from "react"
import { ContactCard } from "./contact-card"
import { Input } from "./input"
import { Button } from "./button"
import { Label } from "./label"
import { Textarea } from "./textarea"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20"
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-0 size-full pointer-events-none",
          "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
          "bg-[size:12px_12px]",
          "opacity-30",
        )}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl mt-[5vh]">
        <ContactCard
          title="Get in touch"
          description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
          contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "contact@21st.dev",
            },
            {
              icon: PhoneIcon,
              label: "Phone",
              value: "+92 312 1234567",
            },
            {
              icon: MapPinIcon,
              label: "Address",
              value: "Faisalabad, Pakistan",
              className: "col-span-2",
            },
          ]}
        >
          <form action="" className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                Name
              </Label>
              <Input
                type="text"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                Email
              </Label>
              <Input
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                Phone
              </Label>
              <Input
                type="tel"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                Message
              </Label>
              <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]" />
            </div>
            <Button
              className="w-full bg-white text-black hover:bg-gray-100 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] font-open-sans-custom"
              type="button"
            >
              Submit
            </Button>
          </form>
        </ContactCard>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
