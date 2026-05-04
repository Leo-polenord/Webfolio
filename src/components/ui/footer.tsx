import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative z-50 bg-background/80 border-t border-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto py-4 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-muted-foreground text-xs md:text-sm">
        <span>© {new Date().getFullYear()} Léo-Paul Jay</span>
        <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
      </div>
    </footer>
  );
}