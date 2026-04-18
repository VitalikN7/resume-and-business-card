import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

interface AboutContactsCardProps {
  compact?: boolean;
}

export const AboutContactsCard = ({ compact = false }: AboutContactsCardProps) => {
  return (
    <Card
      sx={(theme) => ({
        color: "text.primary",
        background: `linear-gradient(160deg, ${alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.1 : 0.18)} 0%, ${alpha(theme.palette.background.paper, 0.96)} 48%, ${alpha(theme.palette.success.main, theme.palette.mode === "light" ? 0.08 : 0.16)} 100%)`,
        border: "1px solid",
        borderColor: alpha(theme.palette.divider, 0.8),
        boxShadow:
          theme.palette.mode === "light"
            ? "0 14px 36px rgba(15, 23, 42, 0.08)"
            : "0 14px 36px rgba(0, 0, 0, 0.28)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0 18px 40px rgba(15, 23, 42, 0.12)"
              : "0 18px 40px rgba(0, 0, 0, 0.34)",
        },
      })}>
      <CardContent sx={{ p: compact ? 2 : 3, "&:last-child": { pb: compact ? 2 : 3 } }}>
        <Typography variant={compact ? "h6" : "h5"} sx={{ mb: compact ? 1.5 : 2, color: "text.primary" }}>
          Контакты
        </Typography>

        <Box sx={{ display: "grid", gap: compact ? 1.25 : 2 }}>
          <Box
            sx={{
              p: compact ? 1.2 : 1.5,
              borderRadius: 2,
              bgcolor: "action.hover",
              transition: "transform 200ms ease, background-color 200ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                bgcolor: "action.selected",
              },
            }}>
            <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 0.5 }}>
              Телефон
            </Typography>
            <Link href="tel:+79180555410" underline="hover" sx={{ fontSize: compact ? "0.95rem" : "1rem" }}>
              +7 918 055 54 10
            </Link>
            <Typography variant="body2" sx={{ mt: 0.5, color: "text.secondary", fontSize: compact ? "0.8rem" : "0.875rem" }}>
              Предпочитаемый способ связи
            </Typography>
          </Box>

          <Box
            sx={{
              p: compact ? 1.2 : 1.5,
              borderRadius: 2,
              bgcolor: "action.hover",
              transition: "transform 200ms ease, background-color 200ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                bgcolor: "action.selected",
              },
            }}>
            <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 0.5 }}>
              Email
            </Typography>
            <Link
              href="mailto:vitalik.kolodko.dev@yandex.ru"
              underline="hover"
              sx={{
                display: "block",
                fontSize: compact ? "0.84rem" : "1rem",
                whiteSpace: "nowrap",
                wordBreak: "normal",
              }}>
              vitalik.kolodko.dev@yandex.ru
            </Link>
          </Box>

          <Box
            sx={{
              p: compact ? 1.2 : 1.5,
              borderRadius: 2,
              bgcolor: "action.hover",
              transition: "transform 200ms ease, background-color 200ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                bgcolor: "action.selected",
              },
            }}>
            <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 0.5 }}>
              Telegram
            </Typography>
            <Link
              href="https://t.me/SaiLaRN7"
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ fontSize: compact ? "0.95rem" : "1rem" }}>
              @SaiLaRN7
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
