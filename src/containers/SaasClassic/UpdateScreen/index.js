import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "common/components/Accordion";
import Container from "common/components/UI/Container";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/entypo/plus";
import { minus } from "react-icons-kit/entypo/minus";

import Button from "common/components/Button";

import SectionWrapper from "./updateScreen.style";
import { SCREENSHOTS } from "common/data/SaasClassic";

const UpdateScreen = ({
  secTitleWrapper,
  secText,
  secHeading,
  button,
  title,
  description,
}) => {
  return (
    <SectionWrapper id="venue">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading {...secHeading} content="Event Venue and Accommodation" />
        </Box>
        <Tabs className="update-screen-tab">
          <TabPane tab="Venue" key="1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.488926801349!2d18.89106747610459!3d42.26808547120148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd419b115fb9f%3A0xb1d9ed78edc4bcdc!2sMaestral%20Resort%20%26%20Casino!5e0!3m2!1sen!2smy!4v1711422732038!5m2!1sen!2smy"
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
                <p>
                  Arrival: 06<sup>th</sup> of August 2024 <br />
                  Departure: 11<sup>th</sup> of August 2024
                  <br />
                  Accommodation: Maestral Resort & Casino
                  <br />
                  <Link
                    href="https://cdn.triton-series.com/wp-content/uploads/2019/12/08125724/SHRS-2024-Montenegro_Accommodation-and-Transfer-Promo_20240402.pdf"
                    legacyBehavior
                  >
                    <a target="_blank">EN Brochure</a>
                  </Link>{" "}
                  -
                  <Link
                    href="https://triton-series.com/triton-poker-montenegro-2024-accommodation-en/"
                    legacyBehavior
                  >
                    <a target="_blank">Hotel Promo T&C</a>
                  </Link>
                  <br />
                  <Link
                    href="https://cdn.triton-series.com/wp-content/uploads/2019/12/08125730/SHRS-2024-Montenegro_Accommodation-and-Transfer-Promo-SC_20240402.pdf"
                    legacyBehavior
                  >
                    <a target="_blank">CN Brochure</a>
                  </Link>
                  -
                  <Link
                    href="https://triton-series.com/triton-poker-montenegro-2024-accommodation-cn/"
                    legacyBehavior
                  >
                    <a target="_blank">Hotel Promo T&C</a>
                  </Link>
                </p>
              </li>

              <li>
                <h2>
                  <strong>Accommodation Offer</strong>
                </h2>
                <br />
                <h3>
                  <strong>Premium Rooms</strong>
                </h3>
                <p>Rate Single Occupancy: €320 / $352</p>
                <p>
                  Fully equipped and affluently decorated 25 m² space featuring
                  a private balcony for guests to relax and enjoy their stay
                  overlooking the gardens or the Adriatic Sea.{" "}
                </p>
                <p>
                  <Link
                    href="https://maestral.me/rooms/premium-sea-view-room/"
                    legacyBehavior
                  >
                    <a target="_blank">
                      https://maestral.me/rooms/premium-sea-view-room/
                    </a>
                  </Link>
                </p>
              </li>

              <li>
                <h3>
                  <strong>Superior Rooms</strong>
                </h3>
                <p>Rate Single Occupancy: €420 / $462</p>
                <p>
                  Featuring 33 m² of space, Superior rooms are decorated in
                  contemporary minimal and luxurious yet functional materials.
                </p>
                <p>
                  <Link
                    href="https://maestral.me/rooms/superior-sea-view-room/"
                    legacyBehavior
                  >
                    <a target="_blank">
                      https://maestral.me/rooms/superior-sea-view-room/
                    </a>
                  </Link>
                </p>
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Travel Information" key="3">
            <ul>
              <li>
                <h3 className="mb-3"> Arrival & Transfers</h3>
                <p className="mb-3">
                  We are pleased to offer complimentary airport transfers for
                  players who confirmed their participation. The transfer
                  service can be redeemed between August 06<sup>st</sup> to 11
                  <sup>th</sup>, 2024. 24-Hour advance notice is required.
                  Please get in touch with our Event Concierge Team at{" "}
                  <a href="mailto:vip@triton-series.com">
                    vip@triton-series.com
                  </a>{" "}
                  .
                </p>
              </li>
            </ul>

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
