import { createContext } from "react";
import { PositionContextType } from "../interfaces/home/Home";

export const PositionContext = createContext<PositionContextType | undefined>(undefined);
