'use client';

import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GeminiChatButtonProps {
  onClickAction: () => void;
  isOpen?: boolean;
}

export const GeminiChatButton = ({
  onClickAction,
  isOpen = false,
}: GeminiChatButtonProps) => {
  return (
    <Button
      onClick={onClickAction}
      size="icon"
      variant="default"
      className={cn(
        'fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg transition-all hover:scale-105',
        isOpen && 'rotate-90'
      )}
      aria-label="Open Gemini Chat"
    >
      <Sparkles className="h-6 w-6" />
    </Button>
  );
}; 