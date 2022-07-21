import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { saasClassicTheme } from "common/theme/saasClassic";
import ResetCSS from "common/assets/css/style";
import {
  GlobalStyle,
  ContentWrapper,
} from "containers/SaasClassic/saasClassic.style";

import BannerSection from "containers/SaasClassic/Banner";
import CountDown from "containers/CryptoModern/CountDown";
import Navbar from "containers/SaasClassic/Navbar";
import ServiceSection from "containers/SaasClassic/Service";
import TrialSection from "containers/SaasClassic/Trial";
import UpdateScreen from "containers/SaasClassic/UpdateScreen";
import PartnerSection from "containers/SaasClassic/Partner";
import Newsletter from "containers/SaasClassic/Newsletter";
import Footer from "containers/SaasClassic/Footer";

const SaasClassic = () => {
  return (
    <ThemeProvider theme={saasClassicTheme}>
      <Fragment>
        <Head>
          <title>Triton | Cyprus 2022 </title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link href="https://use.typekit.net/wtc2zlg.css" rel="stylesheet" />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ServiceSection />
          <CountDown />

          <TrialSection />
          <Newsletter />
          <PartnerSection />
          <UpdateScreen />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasClassic;
