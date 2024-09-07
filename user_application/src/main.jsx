import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import { createTheme, CssBaseline } from '@mui/material'

const theme = createTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssBaseline>
  </ThemeProvider>
)
