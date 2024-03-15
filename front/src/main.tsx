import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'lightgray' }}>
          <App />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
