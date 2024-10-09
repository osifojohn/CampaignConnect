import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { CampaignModalProvider } from './contexts/CampaignModalContext';
import { router } from './routes';
import { DashboardProvider } from './contexts/DashboardContext';

const App: React.FC = () => {
  return (
    <CampaignModalProvider>
      <DashboardProvider>
        <RouterProvider router={router} />
      </DashboardProvider>
    </CampaignModalProvider>
  );
};

export default App;
