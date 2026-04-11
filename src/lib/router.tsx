import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

type RouterContextValue = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextValue>({
  path: "/",
  navigate: () => {},
});

function normalize(pathname: string) {
  if (!pathname || pathname === "") return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(() =>
    typeof window !== "undefined" ? normalize(window.location.pathname) : "/"
  );

  useEffect(() => {
    const handlePop = () => {
      setPath(normalize(window.location.pathname));
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  const navigate = useCallback(
    (to: string) => {
      const next = normalize(to);
      if (next === path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      window.history.pushState({}, "", next);
      setPath(next);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    },
    [path]
  );

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  ariaLabel?: string;
};

export function Link({ to, children, className, onClick, ariaLabel }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (to.startsWith("#") || to.startsWith("http") || to.startsWith("mailto:")) {
      return;
    }
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
