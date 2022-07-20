import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const header = () => {
  return (
    <Box sx={{ display: "flex", alignContent: "center", pl: 2, background: '#ECFBF6' }}>
      <img src="/logo.svg" width={40} />
      <Typography
        sx={{ color: "#CEA86E", fontSize: "4rem", fontWeight: "bold", ml: 5 }}
      >
        3mArt
      </Typography>
    </Box>
  );
};

export default header;
