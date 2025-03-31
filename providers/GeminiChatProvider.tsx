'use client';

import { createContext, useContext, useState } from 'react';
import { GeminiChatButton } from '@/components/GeminiChatButton';
import { GeminiChatPanel } from '@/components/GeminiChatPanel';

interface GeminiChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
}

const GeminiChatContext = createContext<GeminiChatContextType | undefined>(
  undefined
);

export function GeminiChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  return (
    <GeminiChatContext.Provider value={{ isOpen, openChat, closeChat }}>
      {children}
      <GeminiChatButton onClickAction={openChat} isOpen={isOpen} />
      <GeminiChatPanel isOpen={isOpen} onCloseAction={closeChat} />
    </GeminiChatContext.Provider>
  );
}

export function useGeminiChat() {
  const context = useContext(GeminiChatContext);
  if (context === undefined) {
    throw new Error('useGeminiChat must be used within a GeminiChatProvider');
  }
  return context;
} 