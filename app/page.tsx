'use client';

import { useOverlay } from '@toss/use-overlay';

export default function Page() {
  const overlay = useOverlay();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <button onClick={() => overlay.open(() => <div>종길종길</div>)}>
        나는 또 다른 모달 오픈!!!
      </button>
    </main>
  );
}
