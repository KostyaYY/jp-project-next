'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export function HeaderMenuHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('menu') === 'open') {
      // Здесь можно передать сигнал в контекст или глобальное состояние,
      // если нужно открыть меню
      // setMenuOpen(true); → пока просто чистим параметр

      const newParams = new URLSearchParams(searchParams);
      newParams.delete('menu');
      const query = newParams.toString() ? `?${newParams.toString()}` : '';
      router.replace(`/${query}`, { scroll: false });
    }
  }, [searchParams, router]);

  return null; // компонент ничего не рендерит
}