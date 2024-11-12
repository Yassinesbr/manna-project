import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Roles from "./pages/Roles";
import AddRole from "./pages/AddRole";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/roles" element={<Roles />} />
          <Route path="/roles/add-role" element={<AddRole />} />
          <Route path="/roles/edit-role/:id" element={<AddRole />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
