import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout'
import { ThemeProvider } from './context/ThemeProvider'
import { CalculatorProvider } from './context/CalculatorProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CalculatorProvider>
        <Layout/>
      </CalculatorProvider >      
    </ThemeProvider>    
  </StrictMode>,
)
