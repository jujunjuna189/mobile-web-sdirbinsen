import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/auth/AuthContext';
import { LoginContextProvider } from './contexts/auth/LoginContext';
import { BinmanKompersSatjasListContextProvider } from './contexts/binman/BinmanKompersSatjasContext';
import { BinmanPersContextProvider } from './contexts/binman/BinmanPersContext';
import { BinmanPetaJabatanContextProvider } from './contexts/binman/BinmanPetaJabatanContext';
import { BinmanPetaJabatanListContextProvider } from './contexts/binman/BinmanPetaJabatanListContext';
import { BinmatListContextProvider } from './contexts/binmat/BinmatListContext';
import { BinmatSatuanContextProvider } from './contexts/binmat/BinmatSatuanContext';
import { BinsiapsatPembinaanContextProvider } from './contexts/binsiapsat/BinsiapsatPembinaanContext';
import { BinsiapsatSatuanContextProvider } from './contexts/binsiapsat/BinsiapsatSatuanContext';
import { BukuPintarListContextProvider } from './contexts/buku_pintar/BukuPintarContext';
import { TrakorpsContextProvider } from './contexts/trakorps/TrakorpsContext';
import { TrakorpsDetailContextProvider } from './contexts/trakorps/TrakorpsDetailContext';
import { TrakorpsDetailDataPejabatDansatContextProvider } from './contexts/trakorps/TrakorpsDetailDataPejabatDansatContext';
import { TrakorpsDetailDataPrestasiContextProvider } from './contexts/trakorps/TrakorpsDetailDataPrestasiContext';
import { TrakorpsDetailDataPurnawirawanContextProvider } from './contexts/trakorps/TrakorpsDetailDataPurnawirawanContext';
import { TrakorpsDetailLambangSatuanContextProvider } from './contexts/trakorps/TrakorpsDetailLambangSatuanContext';
import { TrakorpsDetailTradisiSatuanContextProvider } from './contexts/trakorps/TrakorpsDetailTradisiSatuanContext';
import { BinmanKompersSatjarPage, BinmanPage, BinmanPersListPage, BinmanPersPage, BinmanPetaJabatanListPage, BinmanPetaJabatanPage, BinmatListPage, BinmatPage, BinmatSatuanPage, BinsiapsatPage, BinsiapsatPembinaanPage, BinsiapsatSatuanPage, BoardPage, BukuPintarListPage, BukuPintarPage, LoginPage, TrakorpsDataPejabatDansatPage, TrakorpsDataPrestasiPage, TrakorpsDataPurnawirawanPage, TrakorpsDetailPage, TrakorpsHymnePage, TrakorpsLambangSatuanPage, TrakorpsMarsPage, TrakorpsPage, TrakorpsSejarahPage, TrakorpsTradisiSatuanPage } from './pages';
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
          <TrakorpsDetailContextProvider>
            <TrakorpsDetailPage />
          </TrakorpsDetailContextProvider>
        } />
        <Route path={RouterName.trakorpsDetailHymne} element={
          <TrakorpsDetailContextProvider>
            <TrakorpsHymnePage />
          </TrakorpsDetailContextProvider>
        } />
        <Route path={RouterName.trakorpsDetailMars} element={
          <TrakorpsDetailContextProvider>
            <TrakorpsMarsPage />
          </TrakorpsDetailContextProvider>
        } />
        <Route path={RouterName.trakorpsDetailSejarah} element={
          <TrakorpsDetailContextProvider>
            <TrakorpsSejarahPage />
          </TrakorpsDetailContextProvider>
        } />
        <Route path={RouterName.trakorpsDetailLambangSatuan} element={
          <TrakorpsDetailLambangSatuanContextProvider>
            <TrakorpsLambangSatuanPage />
          </TrakorpsDetailLambangSatuanContextProvider>
        } />
        <Route path={RouterName.trakorpsDetailTradisiSatuan} element={
          <TrakorpsDetailTradisiSatuanContextProvider>
            <TrakorpsTradisiSatuanPage />
          </TrakorpsDetailTradisiSatuanContextProvider>
        } />
        <Route path={RouterName.trakorpsDetailDataPrestasi} element={
          <TrakorpsDetailDataPrestasiContextProvider>
            <TrakorpsDataPrestasiPage />
          </TrakorpsDetailDataPrestasiContextProvider>
        } />
        <Route path={RouterName.trakorpsDetailDataPejabatDansat} element={
          <TrakorpsDetailDataPejabatDansatContextProvider>
            <TrakorpsDataPejabatDansatPage />
          </TrakorpsDetailDataPejabatDansatContextProvider>
        } />
        <Route path={RouterName.trakorpsDetailDataPurnawirawan} element={
          <TrakorpsDetailDataPurnawirawanContextProvider>
            <TrakorpsDataPurnawirawanPage />
          </TrakorpsDetailDataPurnawirawanContextProvider>
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
          <BinmanKompersSatjasListContextProvider>
            <BinmanKompersSatjarPage />
          </BinmanKompersSatjasListContextProvider>
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
        {/* Binsiapsat */}
        <Route path={RouterName.binsiapsat} element={
          <BinsiapsatPage />
        } />
        <Route path={RouterName.binsiapsatSatuan} element={
          <BinsiapsatSatuanContextProvider>
            <BinsiapsatSatuanPage />
          </BinsiapsatSatuanContextProvider>
        } />
        <Route path={RouterName.binsiapsatSatuanPembinaan} element={
          <BinsiapsatPembinaanContextProvider>
            <BinsiapsatPembinaanPage />
          </BinsiapsatPembinaanContextProvider>
        } />
        {/* Buku Pintar */}
        <Route path={RouterName.bukuPintar} element={
          <BukuPintarPage />
        } />
        <Route path={RouterName.bukuPintarList} element={
          <BukuPintarListContextProvider>
            <BukuPintarListPage />
          </BukuPintarListContextProvider>
        } />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
