import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Roles from "./pages/Roles";
import AddRole from "./pages/AddRole";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={homeRoute} element={<Home />} />
          <Route path={rolesRoute} element={<Roles />} />
          <Route path={addRoleRoute} element={<AddRole />} />
          <Route path={editRoleRoute} element={<AddRole />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

export const homeRoute = "/";
export const rolesRoute = "/roles";
export const addRoleRoute = "/roles/add-role";
export const editRoleNeutralRoute = "/roles/edit-role";
export const editRoleRoute = `${editRoleNeutralRoute}/:id`;
