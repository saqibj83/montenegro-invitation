import React, { useContext } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import NavbarWrapper from "common/components/Navbar";
import Drawer from "common/components/Drawer";
import Button from "common/components/Button";
import Logo from "common/components/UIElements/Logo";
import Box from "common/components/Box";
import HamburgMenu from "common/components/HamburgMenu";
import Container from "common/components/UI/Container";
import { DrawerContext } from "common/contexts/DrawerContext";

import { MENU_ITEMS } from "common/data/SaasClassic";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";

import LogoImage from "common/assets/image/saasClassic/triton-logo.png";
import LogoImageAlt from "common/assets/image/saasClassic/triton-logo.png";

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container>
        <Box {...row}>
          <Logo
            href="https://www.triton-series.com/"
            logoSrc={LogoImage}
            title="triton"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="https://www.triton-series.com/"
            logoSrc={LogoImageAlt}
            title="triton"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-70}
            />

            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: "70px",
    display: "block",
  },
  row: {
    flexBox: true,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  logoStyle: {
    maxWidth: ["180px", "180px"],
  },
  button: {
    type: "button",
    fontSize: "18px",
    fontWeight: "700",
    borderRadius: "4px",
    pl: "15px",
    pr: "15px",
    colors: "#000",
    minHeight: "auto",
    height: "40px",
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
  },
};

export default Navbar;
