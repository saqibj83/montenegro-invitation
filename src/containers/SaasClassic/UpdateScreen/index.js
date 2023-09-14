import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import Button from "common/components/Button";

import SectionWrapper from "./updateScreen.style";
import { SCREENSHOTS } from "common/data/SaasClassic";

const UpdateScreen = ({ secTitleWrapper, secText, secHeading, button }) => {
  return (
    <SectionWrapper id="venue">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading {...secHeading} content="Event Venue and Accommodation" />
        </Box>
        <Tabs className="update-screen-tab">
          <TabPane tab="Venue" key="1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.2273527023285!2d7.43519157669217!3d43.74737537109779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc28787641953%3A0x86d104ab1fa681b!2sMonte-Carlo%20Sporting%20%2F%20Salle%20Des%20%C3%89toiles!5e0!3m2!1sen!2s!4v1694424977740!5m2!1sen!2s"
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
              <li>
                Arrival: 23<sup>rd</sup> of October 2023
              </li>
              <li>
                Departure: 5<sup>th</sup> of November 2023
              </li>
              <li>Accommodation: Monte-Carlo Bay Hotel & Resort</li>
              {/* <li>
                During Triton Series CYPRUS complimentary accommodation is
                offered to players who will qualify for the USD 300K combined
                spend in tournament buy-ins. We are pleased to offer
                complimentary accommodations at the Merit Royal Diamond Hotel
              </li> */}
              <li>
                <Link
                  href="https://triton-series.com/triton-poker-monte-carlo-2023-accommodation-tc/"
                  legacyBehavior
                >
                  <a target="_blank">
                    Click here for accommodation terms and conditions
                  </a>
                </Link>
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Travel Information" key="3">
            <h3 className="mb-3"> Arrival & Transfers</h3>
            <p className="mb-3">
              The hotel is 20 km from Nice’s International Airport, with
              transfers by helicopter (7 mins) or taxi/limousine (30 mins), by
              bus line 110 “Aéroport-Monaco” (40 minutes).
            </p>
            <p>Visa: TBC</p>
            {/* <ul style={{ paddingLeft: "20px" }}>
              <li>
                VISA INFORMATION: Passport holders of most countries require a
                visa to enter the United Kingdom. To check your if you require a
                UK visa, please visit &nbsp;
                <Link href="https://www.gov.uk/check-uk-visa/y " legacyBehavior>
                  <a target="_blank">https://www.gov.uk/check-uk-visa/y</a>
                </Link>{" "}
                . &nbsp; Once you know your visa requirement, you may apply for
                a UK visa at &nbsp;
                <Link
                  href="https://visas-immigration.service.gov.uk/product/uk-visit-visa "
                  legacyBehavior
                >
                  <a target="_blank">
                    https://visas-immigration.service.gov.uk/product/uk-visit-visa
                  </a>
                </Link>{" "}
                . &nbsp; The online visa application will guide you through the
                payment options and will email you a receipt once you complete
                the payment. For further information on Visa Application
                Procedure, please visit &nbsp;
                <Link href="https://www.gov.uk/check-uk-visa " legacyBehavior>
                  <a target="_blank">https://www.gov.uk/check-uk-visa</a>
                </Link>
              </li>
            </ul> */}
            <br />
            <p></p>
          </TabPane>
        </Tabs>
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
    fontWeight: "700",
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
