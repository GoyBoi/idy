import { ThemedHoverBackground } from '@/components/ThemedHoverBackground';

export default function HoverBackgroundDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Themed Hover Background Demo</h1>
      
      <ThemedHoverBackground className="w-full h-96 rounded-xl overflow-hidden">
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4 p-6">
            <h2 className="text-4xl font-bold text-foreground">Dynamic Theme Background</h2>
            <p className="text-lg text-foreground/80 max-w-md">
              This background automatically adapts to your theme (light/dark mode) and 
              features interactive elements that respond to mouse movement.
            </p>
            <div className="pt-4">
              <p className="text-sm text-foreground/60">
                Try hovering over different areas to see the parallax effect
              </p>
            </div>
          </div>
        </div>
      </ThemedHoverBackground>
      
      <div className="mt-8 p-6 bg-background/50 rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-3">How to use:</h3>
        <p className="text-foreground/80 mb-4">
          The ThemedHoverBackground component automatically adapts to your website's 
          light/dark theme and uses your brand colors (teal accents).
        </p>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`import { ThemedHoverBackground } from '@/components/ThemedHoverBackground';

export default function MyComponent() {
  return (
    <ThemedHoverBackground className="w-full h-96">
      <div className="flex items-center justify-center h-full">
        {/* Your content here */}
      </div>
    </ThemedHoverBackground>
  );
}`}
        </pre>
      </div>
    </div>
  );
}