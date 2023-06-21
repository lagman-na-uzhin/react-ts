import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "@emotion/react";
import {theme} from "./styles/theme";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)
