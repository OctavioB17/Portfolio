import { CSSProperties, ReactNode } from "react";
import { MuiStyle } from "../MUI";
import { SpringValue } from "@react-spring/web";

export interface TextLayerUpProps {
    node: ReactNode,
    style: CSSProperties,
}

export interface AvatarApearAnimationProp extends MuiStyle {
    spring?: {
        x: SpringValue<number>;
        y: SpringValue<number>;
        height: SpringValue<number>;
        width: SpringValue<number>;
    }
}