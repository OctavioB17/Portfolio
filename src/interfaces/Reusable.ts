import { CSSProperties } from "react";

export interface CSSStyles {
    style?: CSSProperties
}

export interface ComponentWithChildren {
    children: React.ReactElement
}

export interface BooleanStateProps {
    state?: boolean;
    setState?: React.Dispatch<React.SetStateAction<boolean>>;
  }
  