import { BrowserRouter, Route, Redirect } from 'react-router-dom';

export function Router({ children }) {
  return (
    <BrowserRouter>
      <Route
        render={({ location: { pathname, search, hash } }) => {
          const hasSlash = pathname.slice(-1).includes('/') && pathname !== '/';

          return hasSlash ? (
            <Redirect to={`${pathname.slice(0, -1)}${search}${hash}`} />
          ) : (
            children
          );
        }}
      />
    </BrowserRouter>
  );
}
