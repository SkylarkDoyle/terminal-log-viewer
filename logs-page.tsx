'use client';

import { useState, useEffect } from 'react';
import TerminalLogViewer from '@/app/components/terminal-logs-viewer';


export default function LogsPage() {
  const [logs, setLogs] = useState<string[]>([]);

  // Simulate receiving new logs every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => [...prev, `Log entry at ${new Date().toLocaleTimeString()}`]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Terminal Log Viewer</h1>
      <TerminalLogViewer logs={logs} />
    </div>
  );
}
