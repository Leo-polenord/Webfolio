import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import MentionsLegales from "@/components/ui/mentions-legales"
import MacBookDisplay from "@/components/ui/macbook-display"

export default function App() {
  return (
    <BrowserRouter basename="/Webfolio/">
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </BrowserRouter>
  )
}

function MainApp() {
  return (
    <>
      <FloatingNavbar />
      <MacBookDisplay />
    </>
  )
}