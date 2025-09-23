import React from 'react';
import { BackgroundSettings } from '@/components/BackgroundSettings';

export function Settings() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Customize your experience</p>
      </div>
      
      <BackgroundSettings />
    </div>
  );
}

export default Settings;