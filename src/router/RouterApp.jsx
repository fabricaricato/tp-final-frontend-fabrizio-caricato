import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../views/Login";
import { Messages } from "../views/Messages";
import { NotFound } from "../views/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import Help from "../views/Help";
import Gallery from "../views/Gallery";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>}
        />
        <Route path="/help" element={<Help />} />
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }