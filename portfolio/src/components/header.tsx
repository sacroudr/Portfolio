// src/components/TerminalHeader.tsx
import React from 'react';
import '../style/header.css'; // tu peux créer un CSS séparé si tu veux

interface TerminalHeaderProps {
  title: string;
  subtitle: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="terminal-header">
      <h1 className="terminal-title">{title}</h1>
      <p className="terminal-subtitle">{subtitle}</p>
    </header>
  );
};

export default TerminalHeader;
