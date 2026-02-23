import { ViteReactSSG } from 'vite-react-ssg/single-page';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import InvertFilterDefs from './components/invert_filter_defs.tsx';

export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />

    <InvertFilterDefs />
  </StrictMode>,
);
