import React from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InitialRegistrationPage from './pages/InitialRegistrationPage';
import GuardianIndex from './pages/GuardianIndex';
import MotherChildHandbookIndex from './pages/MotherChildHandbookIndex';
import P23ParentRecord3to4Months from './pages/p23ParentRecord3to4Months';
import P24HealthCheck3to4Months from './pages/p24HealthCheck3to4Months';

function App() {
  // const isAuthenticated = false; // 認証状態を示す変数（例: ReduxやContext APIで管理）
  const isAuthenticated = true; // 認証状態を示す変数（例: ReduxやContext APIで管理）

  // const role = localStorage.getItem('role'); // ロール情報を取得

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Initial-registration-page" element={isAuthenticated ? <InitialRegistrationPage /> : <Navigate to="/login" />} />
        <Route path="/guardian-index" element={isAuthenticated ? <GuardianIndex /> : <Navigate to="/login" />} />
        <Route path="/mother-child-handbook-index" element={isAuthenticated ? <MotherChildHandbookIndex /> : <Navigate to="/login" />} />
        <Route path="/page-23" element={isAuthenticated ? <P23ParentRecord3to4Months /> : <Navigate to="/login" />} />
        <Route path="/page-24" element={isAuthenticated ? <P24HealthCheck3to4Months /> : <Navigate to="/login" />} />
        {/* 他のページルートも同様に追加する */}
        <Route path="/"  element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}


export default App;
