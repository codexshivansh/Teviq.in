export function isValidBookingPhone(value) {
  const text = String(value || '').trim();
  const digits = text.replace(/\D/g, '');
  return /^[+()\-\s\d]{7,24}$/.test(text) && digits.length >= 7 && digits.length <= 15;
}

export async function submitDemoBooking(payload, { fetchImpl = fetch, timeoutMs = 15000 } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const result = await response.json();
    if (!response.ok || result?.success !== true) throw new Error('booking_not_confirmed');
  } finally {
    clearTimeout(timeout);
  }
}
