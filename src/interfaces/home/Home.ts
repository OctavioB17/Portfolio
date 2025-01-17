import { ReactElement, } from "react";
import { MuiStyle } from "../MUI";
import { SxProps } from "@mui/material";

type sectionPhotoDirection = 'Left' | 'Right'

export interface sectionWithPhotoProps extends MuiStyle {
    imgUrl: string;
    children: ReactElement
    imgDirection: sectionPhotoDirection
    photoSx: SxProps
}