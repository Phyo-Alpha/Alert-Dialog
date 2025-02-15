import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'
import { AlertProvider } from './hooks/use-alert.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='bg-background min-h-screen text-foreground'>
      <AlertProvider>
        <App />
      </AlertProvider>
    </main>
  </StrictMode>,
)


