import React from 'react';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <PublicRoutes />
      </main>
    </div>
  );
}

export default App;