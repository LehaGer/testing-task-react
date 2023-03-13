import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './components/AppProvider/AppProvider';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className={'App'}>
          <AppRouter />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
