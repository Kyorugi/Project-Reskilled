import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppRoute } from 'AppRoute';
import { Home } from 'views-forRouter/home/Home';
import { SignUp } from 'views-forRouter/signUp/SignUp';
import { SignIn } from 'views-forRouter/signIn/SignIn';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.home} element={<Home />} />
        <Route path={AppRoute.signIn} element={<SignIn />} />
        <Route path={AppRoute.signUp} element={<SignUp />} />
      </Routes>
    </Router>
  );
};
