import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

const AppHelmetProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider context={helmetContext}>
      {children}
    </HelmetProvider>
  );
};

export default AppHelmetProvider;
