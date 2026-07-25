import { Link } from '../../lib/router';

function DropdownItem({ href, icon: Icon, title, subtitle, onClick }) {
  const isInternalRoute = href.startsWith('/');
  const className = "flex gap-3 rounded-xl px-4 py-3 transition hover:bg-[#F8FAFC]";

  const content = (
    <>
      <span className="icon-box shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-sm font-bold tracking-[-0.01em] text-black">{title}</span>
        <span className="mt-1 block text-xs font-medium text-zinc-500">{subtitle}</span>
      </span>
    </>
  );

  if (isInternalRoute) {
    return (
      <Link to={href} onClick={onClick} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} onClick={onClick} className={className}>
      {content}
    </a>
  );
}

export default DropdownItem;
