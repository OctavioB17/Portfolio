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

export interface ProjectBoxProps {
    strings?: string[],
    title?: string,
    description?: string,
    projectUrl?: string,
    sx?: SxProps,
    slidesPerView?: number,
    spaceBetween?: number,
    photoStyle?: CSSProperties,
    coverColor?: string,
    coverTextColor?: string,
    eyebrow?: string,
    technologies?: string[],
    technologyLimit?: number,
    status?: string,
    hideTitle?: boolean,
}

export interface EnterAnimationProps extends BooleanStateProps {
    stateFinishAnimation?: boolean;
    setStateFinishAnimation?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ImageSliderProps extends StringArrayProps {
    slidesPerView: number,
    spaceBetween: number,
    photoStyle?: CSSProperties,
    onAspectRatioChange?: (aspectRatio: number) => void,
}

export interface ExperienceBoxProps {
    institution: string,
    title?: string,
    date: string,
    description: ReactElement | string,
    photo: string,
    technologies?: string[],
    impact?: {
        value: string,
        label: string,
    },
    certificates?: Array<{
        image: React.FC,
        title?: string
    }>
}
