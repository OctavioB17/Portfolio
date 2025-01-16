import { CSSProperties, ReactNode } from "react";
import { SpringValue } from "@react-spring/web";
import { CSSStyles } from "../Reusable";

export interface TextLayerUpProps {
  node: ReactNode;
  style: CSSProperties;
  onAnimationStart?: () => void; 
}

export interface AvatarApearAnimationProp extends CSSStyles {
    spring?: {
        x: SpringValue<number>;
        y: SpringValue<number>;
        height: SpringValue<number>;
        width: SpringValue<number>;
    }
}