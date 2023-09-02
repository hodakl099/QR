import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Contact = React.lazy(() => import("pages/Contact"));
const Menu = React.lazy(() => import("pages/Menu"));
const SubMenu = React.lazy(() => import("pages/SubMenu"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submenu/:categoryId" element={<SubMenu />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
