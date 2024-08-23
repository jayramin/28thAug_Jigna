import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Koipan from './CommonCompo/HeaderFile.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Koipan />
        <h1>Hello World</h1>
      </>
    ),
  }, {
    path: "about",

    element:
      <>
        <Koipan />
        <div>About</div>
      </>
    
  }, {
    path: "contact",
    element: <><Koipan /><div>Contact</div></>,
  },
]);


root.render(<RouterProvider router={router} />); // Warning: <mainCompo /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
