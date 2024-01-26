import { blue, cyan } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          // palette values for light mode
bgLink:{
  main:cyan[900]
}
        }
      : {
          // palette values for dark mode
          bgLink:{
            main:blue[700]
          }
        }),
  },
});
