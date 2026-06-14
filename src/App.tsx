import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import TestFormPage from './pages/TestFormPage';
import ResultPage from './pages/ResultPage';
import AdminPage from './pages/AdminPage';
import type { Player, TestRequest } from './types';

type Page = 'home' | 'test' | 'result' | 'admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [matchedPlayer, setMatchedPlayer] = useState<Player | null>(null);
  const [userData, setUserData] = useState<TestRequest | null>(null);

  useEffect(() => {
    if (window.location.pathname === '/admin') {
      setCurrentPage('admin');
    }
  }, []);

  const handleStartTest = () => {
    setCurrentPage('test');
  };

  const handleBack = () => {
    if (currentPage === 'test') {
      setCurrentPage('home');
    } else if (currentPage === 'result') {
      setCurrentPage('home');
      setMatchedPlayer(null);
      setUserData(null);
    }
  };

  const handleResult = (player: Player, user: TestRequest) => {
    setMatchedPlayer(player);
    setUserData(user);
    setCurrentPage('result');
  };

  if (currentPage === 'admin') {
    return <AdminPage />;
  }

  return (
    <>
      {currentPage === 'home' && <HomePage onStartTest={handleStartTest} />}
      {currentPage === 'test' && (
        <TestFormPage onBack={handleBack} onResult={handleResult} />
      )}
      {currentPage === 'result' && matchedPlayer && userData && (
        <ResultPage player={matchedPlayer} user={userData} onBack={handleBack} />
      )}
    </>
  );
}
