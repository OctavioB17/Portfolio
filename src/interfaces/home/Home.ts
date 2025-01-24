import { ReactElement, } from "react";
import { MuiStyle } from "../MUI";
import { SxProps } from "@mui/material";
import { StringArrayProps } from "../Reusable";

type sectionPhotoDirection = 'Left' | 'Right'

export interface sectionWithPhotoProps extends MuiStyle {
    imgUrl: string;
    children: ReactElement
    imgDirection: sectionPhotoDirection
    photoSx: SxProps
}

export interface Position {
    position: DOMRect | null
} 
export interface PositionContextType extends Position {
    setPosition: React.Dispatch<React.SetStateAction<DOMRect | null>>;
}

export interface ProjectBoxProps extends StringArrayProps, ImageSliderProps {
    title: string,
    description: string,
    projectUrl: string
}

export interface ImageSliderProps extends StringArrayProps {
    slidesPerView: number,
    spaceBetween: number
}