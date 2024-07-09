import React from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InitialRegistrationPage from './pages/InitialRegistrationPage';
import GuardianIndex from './pages/GuardianIndex';
import MotherChildHandbookIndex from './pages/MotherChildHandbookIndex';
// import P0Cover from './pages/p0Cover';
// import P1KosekiInfo from './pages/p1KosekiInfo';
// import P2PregnancyHealth from './pages/p2PregnancyHealth';
// import P3LivingEnvironment from './pages/p3LivingEnvironment';
// import P4PregnancyRecord from './pages/p4PregnancyRecord';
// import P5PregnancyRecord from './pages/p5PregnancyRecord';
// import P6PregnancyRecord from './pages/p6PregnancyRecord';
// import P7PregnancyRecord from './pages/p7PregnancyRecord';
// import P8PregnancyProgress from './pages/p8PregnancyProgress';
// import P10TestRecord from './pages/p10TestRecord';
// import P11SpareField from './pages/p11SpareField';
// import P12MotherClassRecord from './pages/p12MotherClassRecord';
// import P13DentalStatus from './pages/p13DentalStatus';
// import P14BirthStatus from './pages/p14BirthStatus';
// import P15PostpartumStatus from './pages/p15PostpartumStatus';
// import P16NewbornProgress from './pages/p16NewbornProgress';
// import P17ExaminationRecord from './pages/p17ExaminationRecord';
// import P18GuardianRecord from './pages/p18GuardianRecord';
// import P22HealthCheck from './pages/p22HealthCheck';
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
