'use client';

import { useState } from 'react';
import SplashScreen from '../components/Splashscreen';

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      {children}
    </>
  );
}