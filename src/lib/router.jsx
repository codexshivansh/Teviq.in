import {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const RouterContext = createContext(null);
const RouteParamsContext = createContext({});

function readLocation() {
  return {
    pathname: window.location.pathname || '/',
    search: window.location.search,
    hash: window.location.hash,
  };
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function matchPath(pattern, pathname) {
  const patternParts = normalizePath(pattern).split('/').filter(Boolean);
  const pathParts = normalizePath(pathname).split('/').filter(Boolean);

  if (patternParts.length !== pathParts.length) return null;

  const params = {};

  for (let index = 0; index < patternParts.length; index += 1) {
    const patternPart = patternParts[index];
    const pathPart = pathParts[index];

    if (patternPart.startsWith(':')) {
      const paramName = patternPart.slice(1);
      try {
        params[paramName] = decodeURIComponent(pathPart);
      } catch {
        params[paramName] = pathPart;
      }
    } else if (patternPart !== pathPart) {
      return null;
    }
  }

  return params;
}

function toHref(to) {
  if (typeof to === 'string') return to;
  if (!to || typeof to !== 'object') return '/';
  return `${to.pathname || '/'}${to.search || ''}${to.hash || ''}`;
}

function useRouter() {
  const router = useContext(RouterContext);
  if (!router) {
    throw new Error('Router hooks and links must be rendered inside BrowserRouter.');
  }
  return router;
}

export function BrowserRouter({ children }) {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const handlePopState = () => setLocation(readLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to, { replace = false } = {}) => {
    const href = toHref(to);
    const url = new URL(href, window.location.href);

    if (url.origin !== window.location.origin) {
      window.location.assign(url.href);
      return;
    }

    const nextLocation = `${url.pathname}${url.search}${url.hash}`;
    window.history[replace ? 'replaceState' : 'pushState']({}, '', nextLocation);
    setLocation(readLocation());
  }, []);

  const value = useMemo(() => ({ location, navigate }), [location, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function Link({
  to,
  replace = false,
  target,
  onClick,
  children,
  ...anchorProps
}) {
  const { navigate } = useRouter();
  const href = toHref(to);

  const handleClick = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (target && target !== '_self')
    ) {
      return;
    }

    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return;

    event.preventDefault();
    navigate(href, { replace });
  };

  return (
    <a {...anchorProps} href={href} target={target} onClick={handleClick}>
      {children}
    </a>
  );
}

export function Route() {
  return null;
}

export function Routes({ children }) {
  const { pathname } = useLocation();
  const routes = Children.toArray(children);

  for (const route of routes) {
    if (!isValidElement(route) || route.type !== Route) continue;

    const params = matchPath(route.props.path, pathname);
    if (params) {
      return (
        <RouteParamsContext.Provider value={params}>
          {route.props.element}
        </RouteParamsContext.Provider>
      );
    }
  }

  return null;
}

export function useLocation() {
  return useRouter().location;
}

export function useParams() {
  return useContext(RouteParamsContext);
}
