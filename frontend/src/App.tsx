import { AppRoute } from 'AppRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={AppRoute.home}
          element={
            <main className="intro">
              <h1>Mentoring frontend start</h1>
            </main>
          }
        />
      </Routes>
    </Router>
  );
};
