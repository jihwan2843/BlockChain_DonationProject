import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Myprofile from "./pages/myprofile";
import Registerwallet from "./pages/registerwallet";
import Mydonationlist from "./pages/mydonationlist";
import Domesticdonation from "./pages/domesticdonation";
import Internationaldonation from "./pages/internationaldonation";
import Beneficiary from "./pages/beneficiary";
import MyInfo from "./pages/myInfo";
import { useState } from "react";
import Beneficiarysignup from "./pages/beneficiarysignup";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isLogin={isLogin} setIsLogin={setIsLogin} />}>
          <Route path="/" />
          <Route
            path="/login"
            element={
              <Login
                setIsLogin={setIsLogin}
                email={email}
                setEmail={setEmail}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup email={email} setEmail={setEmail} />}
          />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/myInfo" element={<MyInfo />} />
          <Route
            path="/registerwallet"
            element={<Registerwallet email={email} />}
          />
          <Route path="/mydonationlist" element={<Mydonationlist />} />
          <Route path="/domesticdonation" element={<Domesticdonation />} />
          <Route path="/international" element={<Internationaldonation />} />
          <Route path="/beneficiary" element={<Beneficiary />} />
          <Route path="/beneficiarysignup" element={<Beneficiarysignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
