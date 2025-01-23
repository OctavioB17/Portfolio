import { SxProps } from "@mui/material";
import { ComponentWithChildren } from "./Reusable";

export interface MuiStyle {
    sx?: SxProps
}

export interface MuiStyleWithChildren extends MuiStyle, ComponentWithChildren {
    
}