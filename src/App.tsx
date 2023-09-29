import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomeScreen, LoginScreen, TemplatesScreen } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginScreen} />
        <Route path="/" Component={HomeScreen} />
        <Route path="/templates" Component={TemplatesScreen} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;