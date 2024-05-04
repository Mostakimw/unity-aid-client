import { ReactNode } from "react";
import "./SectionTitle.css";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="title">
      <h1>{children}</h1>
    </div>
  );
};

export default SectionTitle;
