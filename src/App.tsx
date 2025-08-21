import { Analytics } from "@vercel/analytics/react";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
      <Analytics />
    </div>
  );
}

export default App;
