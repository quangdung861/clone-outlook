import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "./routes/index";
// Layout
import UserLayout from "./layout/user/UserLayout";

// Page
import HomePage from "./pages/user/HomePage";
import MailPage from "./pages/user/MailPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <div>
      {/* COMMON */}
      <Routes>
        {/* USER */}
        <Route element={<UserLayout />}>
          <Route path={ROUTES.USER.HOME} element={<HomePage />} />
          <Route path={ROUTES.USER.MAIL} element={<MailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
