import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Index';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import Loading from './Components/Loading';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mihigo Prince Jordan",
    "url": "https://yourdomain.com",
    "sameAs": [
      "https://www.instagram.com/mihigojordan/",
      "https:https://github.com/12th-ai",
      "https://x.com/JordanMihi12912?mx=2",
      "https://www.linkedin.com/in/mihigo-jordan-0a2455331/"
    ],
    "image": "./image2.jpg",
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    },
    "description": "Mihigo Prince Jordan is a talented web developer, specializing in frontend development using React, JavaScript, and building modern web applications. and backend using node js express and nest js and mongo database "
  };

  return (
    <ErrorBoundary>
      {/* Adding Helmet for SEO optimization */}
      <Helmet>
        <title>Mihigo Prince Jordan - Web Developer</title> {/* Title for SEO */}
        <meta name="description" content="Welcome to the world of Mihigo Prince Jordan, a skilled web developer specializing in React, JavaScript, databases, and more. Discover my work and projects here." />
        <meta name="keywords" content="Mihigo Prince Jordan, web developer, React portfolio, JavaScript portfolio, React, Vue.js, frontend development, database, web projects, developer portfolio, software development" />
        <meta name="author" content="Mihigo Prince Jordan" />
        
        {/* Open Graph metadata for social media sharing */}
        <meta property="og:title" content="Mihigo Prince Jordan - Web Developer Portfolio" />
        <meta property="og:description" content="Explore the web development projects and skills of Mihigo Prince Jordan. Check out my React, JavaScript, and other programming skills!" />
        <meta property="og:image" content="./image2.jpg" /> {/* Image for sharing */}
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card metadata */}
        <meta name="twitter:title" content="Mihigo Prince Jordan - Web Developer Portfolio" />
        <meta name="twitter:description" content="Discover the skills, projects, and achievements of Mihigo Prince Jordan, a passionate developer." />
        <meta name="twitter:image" content="./image2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data - JSON-LD Schema Markup for enhanced SEO */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>

        {/* Favicon */}
        <link rel="icon" href="./image2.jpg" />
        
        {/* Additional meta tags for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Apple touch icon for iPhone */}
        <link rel="apple-touch-icon" href="./image2.jpg" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#00aaff" />
      </Helmet>

      {/* Suspense and ErrorBoundary setup */}
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
