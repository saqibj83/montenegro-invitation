import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
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
  const { locale, locales, push, router } = useRouter();
  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };
  const { t: translate } = useTranslation("common");
  return (
    <ThemeProvider theme={saasClassicTheme}>
      <Fragment>
        <Head>
          <title>{translate("title")} </title>
          <meta
            name="description"
            content="The event's unique format, which was inspired by the record breaking 2019 Triton Million in London, pairs professional players with recreational players, with a buy-in of $200,000 for each..
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
          {/* <h1>{locale}</h1>
          <h2>{translate("hello world")}</h2>
          <div>
            {locales.map((l) => (
              <h2 key={l}>
                <Link href={`/`} locale={l}>
                  {l}
                </Link>
              </h2>
            ))}
          </div> */}
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />

          <ServiceSection />
          <Testimonials />

          <CountDown />
          <UpdateScreen />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default SaasClassic;
