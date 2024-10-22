'use client'; // Mark as Client Component

import React, { useState } from 'react';
import PricingComponent from './Component/PricingComponent';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en">
      <body className={`antialiased ${isDarkMode ? 'dark' : 'light'}`}>
        <header style={{ display: 'flex', justifyContent: 'center', padding: '20px', position: 'fixed', top: '0', left: '0', right: '0', backgroundColor: isDarkMode ? '#333' : '#fff', zIndex: 1000 }}>
          <div className="theme-toggle-container" style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: '10px', marginBottom: '0px' }}>Light Mode</p>
            <label className="theme-switch">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleThemeSwitch}
              />
              <span className="theme-slider round"></span>
            </label>
            <p style={{ marginLeft: '10px', marginBottom: '0px' }}>Dark Mode</p>
          </div>
        </header>

        
        <main style={{ paddingTop: '80px' }}>
          {/* Pricing Component */}
          <PricingComponent isDarkMode={isDarkMode} />

          {/* Render Children */}
          {children}
        </main>
      </body>
    </html>
  );
}
