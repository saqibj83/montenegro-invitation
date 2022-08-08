import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import Button from "common/components/Button";

import SectionWrapper from "./updateScreen.style";
import { SCREENSHOTS } from "common/data/SaasClassic";

const UpdateScreen = ({ secTitleWrapper, secText, secHeading, button }) => {
  return (
    <SectionWrapper id="hotel_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading {...secHeading} content="HOTEL & TRANSFER" />
        </Box>
        <Tabs className="update-screen-tab">
          <TabPane tab="Venue" key="1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.0173481993006!2d33.21082231526947!3d35.35521577694966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de0db5c1e805f1%3A0xbfe6b716218cd783!2sMerit%20Royal%20Hotel%20%26%20Casino!5e0!3m2!1sen!2s!4v1656656197354!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </TabPane>
          <TabPane tab="Accommodation" key="2">
            <ul>
              <li>Arrival: 4th of September 2022</li>
              <li>Departure: 20th of September 2022</li>
              <li>
                During Triton Series CYPRUS complimentary accommodation is
                offered to players who will qualify for the USD 250K combined
                spend in tournament buy-ins. We are pleased to offer
                complimentary accommodation at:
              </li>
              <li>Merit Royal Diamond Hotel</li>
              <li>Please advise at your earliest convenience.</li>
              <li>The number of rooms available is limited.</li>
              <li>
                <Link href="https://triton-series.com/accommodation-terms-conditions/">
                  <a>Click here for accommodation terms and conditions</a>
                </Link>
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Travel Information" key="3">
            <h2>Entering Cyprus</h2>
            <h3>Arrival & Transfers</h3>
            <p>
              <strong> Ercan International Airport (ECN)</strong> is the primary
              entry point to the Turkish Republic of North Cyprus (TRNC) via
              Istanbul, Turkey. It’s a 50 minute drive to Merit Royal Diamond
              Hotel.
            </p>
            <p>
              <strong>Larnaca International Airport (LCA)</strong> is the
              primary entry point to the Republic of Cyprus. Travellers arriving
              in LCA will need to cross the border from South to TRNC to get to
              Merit Royal Diamond Hotel via land transport which takes 1.5
              hours, and will need to depart the same way.
            </p>
            <p>
              As of 13-June 2022, travellers are allowed to enter TRNC and the
              Republic of Cyprus without the requirement of taking a negative
              PCR test regardless of vaccination status.
            </p>
            <ul style={{ paddingLeft: "50px" }}>
              <li>
                • Visa is not required for most travellers travelling into TRNC
                via ECN except Nigeria, Syria, and Armenia.
              </li>
              <li>
                • Visa is not required for nationals of the countries listed
                here &nbsp;
                <Link href="https://mfa.gov.cy/no-visa-requirement.html ">
                  <a target="_blank">
                    https://mfa.gov.cy/no-visa-requirement.html{" "}
                  </a>
                </Link>{" "}
                &nbsp; travelling into the Republic of Cyprus via LCA
              </li>
              <li>
                • Visa is required for nationals of the countries listed here
                &nbsp;
                <Link href="https://mfa.gov.cy/requiring-visa-to-enter.html  ">
                  <a target="_blank">
                    https://mfa.gov.cy/requiring-visa-to-enter.html{" "}
                  </a>
                </Link>{" "}
                &nbsp; travelling into the Republic of Cyprus via LCA
              </li>
            </ul>
          </TabPane>
        </Tabs>
        <p
          style={{
            textAlign: "center",
            paddingTop: "20px",
            color: "#fff",
            fontSize: "18px",
            textTransform: "none",
          }}
        >
          Management reserves the right to impose payout option restrictions.
          All tournaments may have their structures adjusted (including, but not
          limited to) levels, level length and days added or subtracted at the
          sole discretion of the Tournament Director.
          <Link href="https://cyprus.triton-series.com/">
            <a>
              <Button
                title="Triton Cyprus 2022 Main Page"
                className="primary-cta"
                style={{ marginTop: "20px" }}
              />
            </a>
          </Link>
        </p>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ["60px", "80px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "400",
    color: "#ff4362",
    mb: "12px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "100%",
    maxWidth: "100%",
  },
};

export default UpdateScreen;
