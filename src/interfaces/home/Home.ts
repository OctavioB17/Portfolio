import { CSSProperties, ReactElement, } from "react";
import { MuiStyle } from "../MUI";
import { SxProps } from "@mui/material";
import { BooleanStateProps, StringArrayProps } from "../Reusable";

export interface sectionWithPhotoProps extends MuiStyle {
    imgUrl: string;
    children?: ReactElement
    photoSx: SxProps
}

export interface Position {
    position: DOMRect | null
} 
export interface PositionContextType extends Position {
    setPosition: React.Dispatch<React.SetStateAction<DOMRect | null>>;
}

export interface ProjectBoxProps extends StringArrayProps, ImageSliderProps {
    title?: string,
    description?: string,
    projectUrl?: string,
    sx?: SxProps,
}

export interface EnterAnimationProps extends BooleanStateProps {
    stateFinishAnimation?: boolean;
    setStateFinishAnimation?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ImageSliderProps extends StringArrayProps {
    slidesPerView: number,
    spaceBetween: number,
    photoStyle?: CSSProperties
}

export interface ExperienceBoxProps {
    institution: string,
    title?: string,
    date: string,
    description: ReactElement | string,
    photo: string,
    certificate?: React.FC | React.ReactNode
}