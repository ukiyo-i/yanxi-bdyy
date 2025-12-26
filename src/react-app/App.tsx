import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import BackgroundMusic from "@/react-app/components/BackgroundMusic";
import ThemeToggle from "@/react-app/components/ThemeToggle";

export default function App() {
  return (
    <Router>
      <BackgroundMusic />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
