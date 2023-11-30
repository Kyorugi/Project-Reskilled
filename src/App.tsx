import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppRoute } from 'AppRoute';
import { Home } from 'views-forRouter/home/Home';
import { SignUp } from 'views-forRouter/signUp/SignUp';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.home} element={<Home />} />
        <Route path={AppRoute.signUp} element={<SignUp />} />
      </Routes>
    </Router>
  );
};
