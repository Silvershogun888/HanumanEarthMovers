
import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Hiring = React.lazy(() => import('./pages/Hiring'));
const Agri = React.lazy(() => import('./pages/Agri'));
const Infra = React.lazy(() => import('./pages/Infra'));

const LoadingFallback = () => (
  <div className="h-screen w-full bg-black flex flex-col items-center justify-center gap-4">
    <div className="w-12 h-[2px] bg-[#febd17] animate-pulse" />
    <span className="text-[10px] uppercase tracking-[0.5em] text-[#febd17] font-bold">Initializing</span>
  </div>
);

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <AnimatePresence mode="wait">
          {/* @ts-expect-error - key is required for AnimatePresence but not in RoutesProps definition */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hiring" element={<Hiring />} />
            <Route path="/agri" element={<Agri />} />
            <Route path="/infrastructure" element={<Infra />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
};

export default App;
