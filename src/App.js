import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// PAGES
import Home from "./components/pages/Home";
import MarketIntelligence from "./components/pages/MarketIntelligence";
// LAYOUTS
import RootLayout from "./components/layouts/RootLayout";
import RealtorPortal from "./components/pages/RealtorPortal";
import CustomizeSearch from "./components/pages/CustomizeSearch";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/marketintelligence" element={<MarketIntelligence />} />
        <Route path="realtorportal" element={<RealtorPortal />} />
        <Route path="customizesearch" element={<CustomizeSearch />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
