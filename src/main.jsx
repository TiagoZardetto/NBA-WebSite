import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import { IndexLayout } from "./layouts/index-layout.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
	
				<Route element={<IndexLayout />} >
          <Route index element={<App />} />
        </Route>
			
      </Routes>
		</BrowserRouter>
	</StrictMode>
);
