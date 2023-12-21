'use client';

import { OverlayProvider } from '@toss/use-overlay';
import { PropsWithChildren } from 'react';

export default function Provider({ children }: PropsWithChildren) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
