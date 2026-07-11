import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

function ChatGreetingBubble() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    const hideTimer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(hideTimer);
  }, [visible]);

  const openWidget = () => {
    setVisible(false);
    document.querySelector('.teviq-chat-button')?.click();
  };

  return (
    <div
      className={`fixed bottom-[92px] right-[22px] z-[2147483647] flex max-w-[220px] cursor-pointer items-start gap-2 rounded-2xl border border-zinc-100 bg-white px-4 py-3 shadow-dropdown transition-all duration-[250ms] ease-out ${
        visible ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-2.5 scale-95 opacity-0'
      }`}
      role="button"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={openWidget}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') openWidget();
      }}
    >
      <p className="flex-1 text-sm font-semibold leading-5 text-black">Hi! May I help you?</p>
      <button
        type="button"
        aria-label="Dismiss"
        tabIndex={visible ? 0 : -1}
        onClick={(event) => {
          event.stopPropagation();
          setVisible(false);
        }}
        className="shrink-0 text-zinc-400 transition hover:text-black"
      >
        <FiX className="h-4 w-4" />
      </button>
      <span className="absolute -bottom-[5px] right-6 h-3 w-3 rotate-45 border-b border-r border-zinc-100 bg-white" />
    </div>
  );
}

export default ChatGreetingBubble;
