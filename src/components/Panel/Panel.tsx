import './Panel.css';

type PanelProps = {
  headerText?: string,
  children: JSX.Element | string
}

function Panel({headerText, children}: PanelProps) {
  return (
    <div className="Panel">
      {headerText && (
        <div className="panel-header">{headerText}</div>
      )}
      {children}
    </div>
  );
}

export default Panel;
