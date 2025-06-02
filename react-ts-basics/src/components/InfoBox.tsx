import { type ReactNode } from "react";
type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  // {/* { mode === 'warning' ? <h2>Warning</h2> : <h2>Hint</h2> } */}
  return (
    <aside className="infobox infobox-warning warning--medium">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
