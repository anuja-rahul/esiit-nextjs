import "./../../app/App.scss";
// import Header from "./Header";
import "./index.scss";
import NavBar from "./navbar/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="layout bg-slate-900 text-white">
      <NavBar />
      {children}
      <h1>Footer</h1>
    </main>
  );
}
