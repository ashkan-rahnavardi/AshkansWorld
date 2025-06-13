"use client";

import React, { ReactNode, useState } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "../context/CustomCursorContext";

interface CustomCursorManagerProps {
  children: ReactNode;
}

const CustomCursorManager: React.FC<CustomCursorManagerProps> = ({
  children,
}) => {
  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
