import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://f954fd5c68d35bb7be984867d399c2c4@o4509047015407616.ingest.us.sentry.io/4509047034871808"
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
