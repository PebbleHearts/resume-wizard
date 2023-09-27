import { CSSProperties, ReactNode } from "react";
import { FontSize } from "../../constants/components";

const styleMap: Record<FontSize, CSSProperties> = {
  [FontSize.xs]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  [FontSize.sm]: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  [FontSize.base]: {
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
  },
  [FontSize.lg]: {
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: "0.5px",
  },
  [FontSize.xl]: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  [FontSize["2xl"]]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  [FontSize["3xl"]]: {
    fontSize: "30px",
    lineHeight: "36px",
  },
  [FontSize["4xl"]]: {
    fontSize: "36px",
    lineHeight: "40px",
  },
  [FontSize["5xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
    letterSpacing: "0px",
  },
  [FontSize["6xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
  },
  [FontSize["7xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
  },
  [FontSize["8xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
  },
  [FontSize["9xl"]]: {
    fontSize: "48px",
    lineHeight: "55px",
  },
};

type TextProps = {
  children: ReactNode;
  size: FontSize;
  style?: CSSProperties;
  className?: string
};

const Text = ({ children, size, style, className }: TextProps) => {
  return <div style={{...styleMap[size], ...style}} className={className}>{children}</div>;
};

export default Text;
