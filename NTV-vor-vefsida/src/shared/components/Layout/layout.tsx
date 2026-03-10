import "./layout.style.css";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header>
        <div>NTV framhald - vor 26</div>
        <nav>Navigation</nav>
      </header>
      <main> {children} </main>
      <footer>© Inga M Beck</footer>
    </div>
  );
}
