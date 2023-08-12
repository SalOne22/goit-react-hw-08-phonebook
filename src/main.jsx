import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { persistor, store } from './redux/store';
import theme from './theme';
import { PersistGate } from 'redux-persist/integration/react';
import { ScreenLoader } from './components/ScreenLoader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<ScreenLoader />} persistor={persistor}>
        <ChakraProvider
          theme={theme}
          toastOptions={{
            defaultOptions: { position: 'top-right', duration: 2500 },
          }}
        >
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
