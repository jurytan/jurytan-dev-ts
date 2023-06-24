import { createTheme } from "@mui/material";

import { adaptV4Theme } from '@mui/material/styles';

export const theme = createTheme(adaptV4Theme({
    palette: {
      mode: "dark",
      primary: {
        main: "#24aee9",
      },
      secondary: {
        main: "#e539ff",
      },
      text: {
        primary: "#fff",
      },
      error: {
        main: "#fff",
      },
      background: {
        paper: "#37474F",
        default: "#212121",
      },
    },
  }));