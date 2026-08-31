import { Box } from "@mui/material";
import { RouterProvider } from "react-router";
import { AppProviders } from "./AppProviders";
import { router } from "./router";

export const App = () => {
  return (
    <AppProviders>
      <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
        <RouterProvider router={router} />
      </Box>
    </AppProviders>
  );
};
