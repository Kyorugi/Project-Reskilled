import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppRoute } from 'AppRoute';
import { Home } from 'views-forRouter/home';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.home} element={<Home />} />
      </Routes>
    </Router>
  );
};
