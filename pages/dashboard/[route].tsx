import Home from "../../src/home";
import Products from "../../src/products";
import About from "../../src/about/about";
import Header from "../../src/dashboard/components/header";
import Sidebar from "../../src/dashboard/components/sidebar";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import constants from "../../src/constants/constants";

const {HOME, PRODUCTS, ABOUT} = constants

export default function route() {
  const router = useRouter();
  const [selected, setSelected] = useState(router.query.route);

  useEffect(() => {
    if (!router.isReady) return;
    setSelected(router.query.route);
  }, [router.isReady]);

  const handleSideNav = (item: any) => {
    setSelected(item);
    router.push(`/dashboard/${item}`);
  };

  const getView = () => {
    switch (selected) {
      case HOME:
        return <Home />;
      case ABOUT:
        return <About />;
      case PRODUCTS:
        return <Products />;
    }
  };

  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar selected={selected} handleSideNav={handleSideNav} />
        {getView()}
      </Box>
    </>
  );
}
