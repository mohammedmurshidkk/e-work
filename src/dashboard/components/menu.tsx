import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function menu(props: any) {
  const route = props.route;
  const selected = props.selected;
  const handleSideNav = props.handleSideNav;

  const getIcon = () => (route === selected ? `${route}-selected` : route);
  const getTitle = () =>
    route ? route.charAt(0).toUpperCase() + route.slice(1) : "";
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 1,
        }}
        onClick={()=> handleSideNav(route)}
      >
        <img src={`/icons/${getIcon()}.svg`} alt="" width={35} />
        <Typography sx={{ fontSize: "0.8rem", mt: 1 }}>{getTitle()}</Typography>
      </Box>
    </>
  );
}
