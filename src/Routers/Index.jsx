// src/routes/router.js
import { createBrowserRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

// Lazy load layout components
const LandingLayout = lazy(() => import('../Layout/LandingLayout'));
const ErrorLayout = lazy(() => import('../Layout/ErrorLayout'));
const Loading  =  lazy(() => import('../Components/Loading'));
// Create BrowserRouter with route definitions
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <LandingLayout />
      </Suspense>
    ),
  },
  {
    path: '*', // Fallback route for undefined paths
    element: (
      <Suspense fallback={<Loading />}>
        <ErrorLayout />
      </Suspense>
    ),
  },
]);

export default router;
