import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import QuestionsScreen from "./screens/QuestionsScreen/QuestionsScreen";
import ResultScreen from "./screens/ResultScreen/ResultScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/questions" element={<QuestionsScreen />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
