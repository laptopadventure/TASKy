import './Panel.css';
import React from 'react'

type PanelProps = {
  inHeader?: React.ReactNode;
}

function Panel({inHeader, children, style, className}: React.PropsWithChildren<PanelProps> & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div style={style} className={`Panel ${className}`}>
      {inHeader && (
        <div className="panel-header">{inHeader}</div>
      )}
      {children}
    </div>
  );
}

export default Panel;
