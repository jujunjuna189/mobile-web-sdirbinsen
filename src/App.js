import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/auth/AuthContext';
import { LoginContextProvider } from './contexts/auth/LoginContext';
import { BinmanPage, BinmanPersListPage, BinmanPersPage, BoardPage, LoginPage, TrakorpsDetailPage, TrakorpsLambangSatuanPage, TrakorpsPage, TrakorpsSejarahPage } from './pages';
import { RouterName } from './utils';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        {/* Auth */}
        <Route path={RouterName.login} element={
          <LoginContextProvider>
            <LoginPage />
          </LoginContextProvider>
        } />
        {/* Board */}
        <Route path={RouterName.board} element={
          <BoardPage />
        } />
        {/* Trakorps */}
        <Route path={RouterName.trakorps} element={
          <TrakorpsPage />
        } />
        <Route path={RouterName.trakorpsDetail} element={
          <TrakorpsDetailPage />
        } />
        <Route path={RouterName.trakorpsDetailSejarah} element={
          <TrakorpsSejarahPage />
        } />
        <Route path={RouterName.trakorpsDetailLambangSatuan} element={
          <TrakorpsLambangSatuanPage />
        } />
        {/* Binman */}
        <Route path={RouterName.binman} element={
          <BinmanPage />
        } />
        <Route path={RouterName.binmanPers} element={
          <BinmanPersPage />
        } />
        <Route path={RouterName.binmanPersList} element={
          <BinmanPersListPage />
        } />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
