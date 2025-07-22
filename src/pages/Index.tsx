import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Home } from './Home';
import { EcosystemExplorer } from './EcosystemExplorer';
import { About } from './About';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    
    // Update URL based on page
    switch (page) {
      case 'explorer':
        navigate('/explorer');
        break;
      case 'about':
        navigate('/about');
        break;
      default:
        navigate('/');
        break;
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'explorer':
        return <EcosystemExplorer />;
      case 'about':
        return <About />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderCurrentPage()}
    </div>
  );
};

export default Index;
