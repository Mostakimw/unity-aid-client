import { CSSProperties, ReactNode } from "react";

// const style = {};

const Container = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div
      style={{
        maxWidth: "1280px",
        padding: "0 20px",
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
