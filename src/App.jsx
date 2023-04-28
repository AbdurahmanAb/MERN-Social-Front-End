import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
