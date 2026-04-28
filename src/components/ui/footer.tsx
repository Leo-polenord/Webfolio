import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer
      className="relative z-50 bg-background/80 border-t border-border backdrop-blur-md"
    >
      <div className="max-w-4xl mx-auto py-3 px-4 flex items-center justify-between text-muted-foreground text-xs">
        <span>© {new Date().getFullYear()} Léo-Paul Jay</span>
        <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
      </div>
    </footer>
  );
}