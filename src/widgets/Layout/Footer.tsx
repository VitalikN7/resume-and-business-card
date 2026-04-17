import { Box, Container } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}>
      <Container maxWidth="lg">
        <Box sx={{ color: "text.secondary" }}>© 2024 Портфолио. Все права защищены.</Box>
      </Container>
    </Box>
  );
};
