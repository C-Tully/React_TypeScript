import { type ReactNode } from "react";

//Descriminated union
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "hint" | "warning";
  /**
   * optional props
   * severity: "low" | "medium" | "high" | undefined;
   * severity?: "low" | "medium" | "high";
   */
  severity: "low" | "medium" | "high";

  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

// export default function InfoBox({ mode, children, severity }: InfoBoxProps) {
export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  //Mode is warning as of here..
  const { severity } = props;
  // {/* { mode === 'warning' ? <h2>Warning</h2> : <h2>Hint</h2> } */}
  return (
    <aside
      className={`infobox infobox-warning warning--medium warning--${severity}`}
    >
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
