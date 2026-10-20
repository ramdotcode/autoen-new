import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { domAnimation, LazyMotion } from 'motion/react'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        {/* Only the animation features the site uses; keeps the first download smaller. */}
        <LazyMotion features={domAnimation} strict>
          <App />
        </LazyMotion>
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>,
)
