import { Box, Typography } from "@mui/material";
import constants from "../../constants/constants";
import Menu from "./menu";

const navStyle = {
  color: "#4BA7A7",
  fontSize: "1.6rem",
  p: 1,
};

const {HOME, PRODUCTS, ABOUT} = constants

export default function sidebar({ selected, handleSideNav}: any) {
  return (
    <>
      <Box
        sx={{ background: "#ECFBF6", height: "80vh", width: "130px", pt: 2 }}
      >
        <Menu route={HOME} selected={selected} handleSideNav={handleSideNav} />
        <Menu route={PRODUCTS} selected={selected} handleSideNav={handleSideNav} />
        <Menu route={ABOUT} selected={selected} handleSideNav={handleSideNav} />
      </Box>
    </>
  );
}
