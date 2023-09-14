import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "@emotion/react";
import './styles/global.css'
import {theme} from "./styles/theme";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                 <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
    </QueryClientProvider>
)
