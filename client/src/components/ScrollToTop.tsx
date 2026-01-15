import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * ScrollToTop component that scrolls to the top of the page
 * whenever the route changes. This ensures that when navigating
 * to a new page, users always start at the top.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
