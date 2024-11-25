import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/auth/AuthContext';
import { LoginContextProvider } from './contexts/auth/LoginContext';
import { BinmanPersContextProvider } from './contexts/binman/BinmanPersContext';
import { BinmanPetaJabatanContextProvider } from './contexts/binman/BinmanPetaJabatanContext';
import { BinmanPetaJabatanListContextProvider } from './contexts/binman/BinmanPetaJabatanListContext';
import { BinmatListContextProvider } from './contexts/binmat/BinmatListContext';
import { BinmatSatuanContextProvider } from './contexts/binmat/BinmatSatuanContext';
import { TrakorpsContextProvider } from './contexts/trakorps/TrakorpsContext';
import { BinmanKompersSatjarPage, BinmanPage, BinmanPersListPage, BinmanPersPage, BinmanPetaJabatanListPage, BinmanPetaJabatanPage, BinmatListPage, BinmatPage, BinmatSatuanPage, BoardPage, LoginPage, TrakorpsDetailPage, TrakorpsLambangSatuanPage, TrakorpsPage, TrakorpsSejarahPage } from './pages';
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
          <TrakorpsContextProvider>
            <TrakorpsPage />
          </TrakorpsContextProvider>
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
          <BinmanPersContextProvider>
            <BinmanPersListPage />
          </BinmanPersContextProvider>
        } />
        <Route path={RouterName.binmanPetaJabatan} element={
          <BinmanPetaJabatanContextProvider>
            <BinmanPetaJabatanPage />
          </BinmanPetaJabatanContextProvider>
        } />
        <Route path={RouterName.binmanPetaJabatanList} element={
          <BinmanPetaJabatanListContextProvider>
            <BinmanPetaJabatanListPage />
          </BinmanPetaJabatanListContextProvider>
        } />
        <Route path={RouterName.binmanKompersSatjar} element={
          <BinmanKompersSatjarPage />
        } />
        <Route path={RouterName.binmat} element={
          <BinmatPage />
        } />
        <Route path={RouterName.binmatSatuan} element={
          <BinmatSatuanContextProvider>
            <BinmatSatuanPage />
          </BinmatSatuanContextProvider>
        } />
        <Route path={RouterName.binmatList} element={
          <BinmatListContextProvider>
            <BinmatListPage />
          </BinmatListContextProvider>
        } />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
