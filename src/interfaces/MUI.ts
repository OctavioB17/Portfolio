import { SxProps } from "@mui/material";

export interface MuiStyle {
    sx?: SxProps
}

export interface MuiStyleWithChildren extends MuiStyle {
    children: React.ReactElement
}