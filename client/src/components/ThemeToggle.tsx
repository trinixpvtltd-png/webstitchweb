import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  // Always dark theme, no toggle
  return (
    <Button
      variant="ghost"
      size="icon"
      disabled
      data-testid="button-theme-toggle"
    >
      <Sun className="w-5 h-5" data-testid="icon-sun" />
      <span className="sr-only">Theme is always dark</span>
    </Button>
  );
}
