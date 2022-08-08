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
import Testimonials from "containers/SaasAppDark/Testimonials";
import Navbar from "containers/SaasClassic/Navbar";
import ServiceSection from "containers/SaasClassic/Service";
import UpdateScreen from "containers/SaasClassic/UpdateScreen";
import PartnerSection from "containers/SaasClassic/Partner";
import Footer from "containers/SaasClassic/Footer";

const SaasClassic = () => {
  return (
    <ThemeProvider theme={saasClassicTheme}>
      <Fragment>
        <Head>
          <title>Coin Rivet Invitational Powered by Triton Poker </title>
          <meta
            name="description"
            content="TThe event's unique format, which was inspired by the record breaking 2019 Triton Million in London, pairs professional players with recreational players, with a buy-in of $200,000 for each..
"
          />
          <meta name="keywords" content="coin rivet, Triton Poker, Poker" />
          <meta name="theme-color" content="#eba800" />
          <meta
            name="google-site-verification"
            content="OUn2prDdnV-MyCWAa56nnZAV-dqzTiN7b3zaOyhPAUA"
          />
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
          <Testimonials />
          {/* <div className="hidden md:block">
            <PartnerSection />
          </div> */}
          <CountDown />
          <UpdateScreen />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasClassic;
