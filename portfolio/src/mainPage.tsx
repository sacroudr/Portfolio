import React, { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import TerminalHeader from "./components/header";
import TerminalFooter from "./components/footer";
import Terminal from "./components/terminal"; // ✅ import
import "./style/mainPage.css";

const MainPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    return now.toLocaleString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate(
        now.toLocaleString(undefined, {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-page">
      <TerminalHeader title="SACROUD Riad" subtitle="Software Engineer" />

      <div className="terminal-main">
        <ProfileCard />

        <div className="terminal-right">
          <Terminal user="sacroud@portfolio" />
        </div>
      </div>

      <TerminalFooter user="sacroud@portfolio" date={currentDate} />
    </div>
  );
};

export default MainPage;
