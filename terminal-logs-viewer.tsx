// components/TerminalLogViewer.jsx
import { useEffect, useRef } from 'react';

export default function TerminalLogViewer({ logs = [] }: { logs: string[]}) {
  const logEndRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to the bottom on new logs
    (logEndRef.current as HTMLDivElement | null)?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div style={styles.terminal}>
      <div style={styles.output}>
        {logs.map((log, idx) => (
          <pre key={idx} style={styles.line}>
            {log}
          </pre>
        ))}
        <div ref={logEndRef} />
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties | undefined} = {
  terminal: {
    backgroundColor: '#000',
    color: '#0f0',
    fontFamily: 'monospace',
    fontSize: '14px',
    padding: '10px',
    height: '400px',
    overflowY: 'scroll',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,255,0,0.2)',
  },
  output: {
    whiteSpace: 'pre-wrap',
  },
  line: {
    margin: 0,
  },
};
