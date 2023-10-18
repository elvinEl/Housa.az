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
import SearchResults from "./components/core/searchResults/SearchResults";
import SearchResultLayout from "./components/layouts/searchResultsLayout/SearchResultLayout";
import List from "./components/core/searchResults/List";
import Map from "./components/core/searchResults/Map";
import MapLayout from "./components/layouts/searchResultsLayout/MapLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="marketintelligence" element={<MarketIntelligence />} />
        <Route path="realtorportal" element={<RealtorPortal />} />
        <Route path="customizesearch" element={<CustomizeSearch />} />
        <Route path="search-results" element={<SearchResultLayout />}>
          <Route index element={<List />} />
          <Route path="map" element={<MapLayout />}>
            <Route index element={<Map />} />
          </Route>
        </Route>
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
