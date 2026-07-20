import { Box, Typography } from "@mui/material";
import Image from "next/image";
import useGetTheme from "../../hooks/useGetTheme";

const WrittenBy = () => {
  const { isDark } = useGetTheme();

  return (
    <Box className={`written-by-wrap ${isDark ? "dark" : "light"}`}>
      <Image
        src="/images/profile.webp"
        alt="Alger Makiputin"
        width={52}
        height={52}
        className="written-by-avatar"
      />
      <Box className="written-by-text">
        <Typography className="written-by-name">Alger Makiputin</Typography>
        <Typography className="written-by-bio">
          Full Stack Software Engineer and React Developer from the Philippines.
          Builds production web and mobile apps with React, TypeScript,
          Capacitor, and modern backend technologies. Based on lessons from
          Hunter Vault (React + Capacitor personal-finance app) and Zendtri POS
          (multi-tenant React + Supabase platform).
        </Typography>
      </Box>
    </Box>
  );
};

export default WrittenBy;
