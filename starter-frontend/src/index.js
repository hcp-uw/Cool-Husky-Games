import 'bootstrap/dist/css/bootstrap.css';
import * as bootstrap from 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Home';
import { RouterProvider, createMemoryHistory, createRootRoute, createRoute, createRouter } from "@tanstack/react-router"
import Layout from './Layout';
import NotFoundPage from './NotFoundPage';

// defines a rootLayout (not actually a separate route, despite the name)
const rootRoute = createRootRoute({
  notFoundComponent: () => <NotFoundPage />,
  component: () => <Layout />
});

// creates a home page at the path '/', and has a parent "route" of the root route (just means it uses the layout)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <HomePage />
});

// add all routes to this children array for the route tree
const routeTree = rootRoute.addChildren([indexRoute]);

// use hash-based routing because of github pages
const memoryHistory = createMemoryHistory({
  initialEntries: ["/"]
});

const router = createRouter({
  routeTree,
  history: memoryHistory
});


const rootNode = document.getElementById('root');
if (!rootNode.innerHTML) {
  const root = ReactDOM.createRoot(rootNode);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

