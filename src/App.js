import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage, SignIn } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route exact path="/sign-in" element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
