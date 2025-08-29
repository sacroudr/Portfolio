// src/components/TerminalFooter.tsx
import React from 'react';
import '../style/footer.css';

interface TerminalFooterProps {
  user: string;
  date: string;
}

const TerminalFooter: React.FC<TerminalFooterProps> = ({ user, date }) => {
  return (
    <footer className="terminal-footer">
      <div>{user}:~</div>
      <div>{date}</div>
    </footer>
  );
};

export default TerminalFooter;
