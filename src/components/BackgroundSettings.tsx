'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function BackgroundSettings() {
  const [useLiquidEther, setUseLiquidEther] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const savedPreference = localStorage.getItem('backgroundPreference');
    if (savedPreference) {
      setUseLiquidEther(savedPreference === 'liquidEther');
    }
  }, []);

  const toggleBackground = (value: boolean) => {
  setUseLiquidEther(value);
  localStorage.setItem('backgroundPreference', value ? 'liquidEther' : 'floating');
    // Reload the page to apply the new background
    window.location.reload();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Background Settings</CardTitle>
        <CardDescription>Customize your background experience</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Liquid Ether Background</h3>
            <p className="text-sm text-muted-foreground">
              Dynamic fluid simulation background that responds to your mouse movement
            </p>
          </div>
          <Switch
            checked={useLiquidEther}
            onCheckedChange={toggleBackground}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Floating Elements</h3>
            <p className="text-sm text-muted-foreground">
              Gentle floating shapes in the background
            </p>
          </div>
          <Switch
            checked={!useLiquidEther}
            onCheckedChange={(value) => toggleBackground(!value)}
          />
        </div>
        
        <div className="pt-4 border-t">
          <h3 className="text-lg font-medium mb-2">Preview</h3>
          <div className="relative h-40 rounded-lg overflow-hidden border">
            {useLiquidEther ? (
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-medium">Liquid Ether Preview</span>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 relative">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-500/20 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-pink-500/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-blue-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Floating Elements Preview</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}