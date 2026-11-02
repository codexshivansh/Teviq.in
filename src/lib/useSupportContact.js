import { useEffect, useState } from 'react';

export function useSupportContact() {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const script = document.querySelector('script[data-brand-id="teviq"][data-api-url]');
    const base = script?.getAttribute('data-api-url')?.replace(/\/$/, '');
    if (!base) { clearTimeout(timeout); return () => controller.abort(); }
    fetch(`${base}/api/brand-config/teviq`, { signal: controller.signal, cache: 'no-store' })
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (!controller.signal.aborted) setContact(data?.supportContact || null); })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));
    return () => { clearTimeout(timeout); controller.abort(); };
  }, []);
  return contact;
}
