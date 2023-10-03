import { CSSProperties, ReactNode } from "react";
import { FontSize } from "../../constants/components";

const styleMap: Record<FontSize, CSSProperties> = {
  [FontSize.xs]: {
    fontSize: "12px",
    lineHeight: "16px",
    fontFamily: "Roboto",
  },
  [FontSize.sm]: {
    fontSize: "14px",
    lineHeight: "20px",
    fontFamily: "Roboto",
  },
  [FontSize.base]: {
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    fontFamily: "Roboto",
  },
  [FontSize.lg]: {
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: "0.5px",
    fontFamily: "Roboto",
  },
  [FontSize.xl]: {
    fontSize: "20px",
    lineHeight: "28px",
    fontFamily: "Roboto",
  },
  [FontSize["2xl"]]: {
    fontSize: "24px",
    lineHeight: "32px",
    fontFamily: "Roboto",
  },
  [FontSize["3xl"]]: {
    fontSize: "30px",
    lineHeight: "36px",
    fontFamily: "Roboto",
  },
  [FontSize["4xl"]]: {
    fontSize: "36px",
    lineHeight: "40px",
    fontFamily: "Roboto",
  },
  [FontSize["5xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
    letterSpacing: "0px",
    fontFamily: "Roboto",
  },
  [FontSize["6xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
    fontFamily: "Roboto",
  },
  [FontSize["7xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
    fontFamily: "Roboto",
  },
  [FontSize["8xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
    fontFamily: "Roboto",
  },
  [FontSize["9xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
    fontFamily: "Roboto",
  },
};

type TextProps = {
  children: ReactNode;
  size: FontSize;
  style?: CSSProperties;
  className?: string;
};

const Text = ({ children, size, style, className }: TextProps) => {
  return (
    <div style={{ ...styleMap[size], ...style }} className={className}>
      {children}
    </div>
  );
};

export default Text;
