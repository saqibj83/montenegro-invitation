import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SectionWrapper from "./service.style";
import { FAQ_DATA } from "common/data/SassMinimal";

import { FaqWrapper } from "../Faq/faq.style";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "common/components/Accordion";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/entypo/plus";
import { minus } from "react-icons-kit/entypo/minus";

const ServiceSection = ({ secTitleWrapper, secHeading }) => {
  return (
    <SectionWrapper id="general_section">
      <Container className="mt-12">
        <h2 className=" text-center mt-5 mb-12">Schedule</h2>
        <div className="container m-auto grid grid-cols-2">
          <div>
            <FaqWrapper id="faq_section">
              <Accordion>
                <AccordionItem
                  className="accordion_item"
                  key="1"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="What are the visa requirements to enter Montenegro?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        Information on visa requirements can be found on the
                        official website: &nbsp;
                        <a
                          href="https://www.gov.me/en/article/visas-and-visa-regime"
                          target="_blank"
                        >
                          https://www.gov.me/en/article/visas-and-visa-regime
                        </a>
                      </li>
                      <li>
                        Kindly consult your respective embassy for specific
                        requirements.
                      </li>
                      <li>
                        Triton Poker Series is pleased to provide personalized
                        invitations for visa purposes upon request.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  className="accordion_item"
                  key="2"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="Where is the nearest airport to Maestral Resort & Casino?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        {" "}
                        <strong>Tivat Airport</strong> is approximately 27 km
                        away from Maestral Resort & Casino, which is about a 30
                        – 40 minutes drive depending on traffic conditions.
                      </li>
                      <li>
                        {" "}
                        <strong>Podgorica Airport</strong> is approximately 67
                        km away from Maestral Resort & Casino, which is about an
                        hour and 15 minutes drive depending on traffic
                        conditions.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  className="accordion_item"
                  key="3"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="How do I get to Maestral Resort & Casino from the airport?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        {" "}
                        <strong>Private Transfer</strong> – we offer private
                        airport transfer services. Please get in touch with our
                        Event Concierge Team at{" "}
                        <a href="mailto:vip@triton-series.com">
                          vip@triton-series.com
                        </a>
                        .
                      </li>
                      <li>
                        {" "}
                        <strong>Taxi</strong> – There are plenty of taxis at
                        Podgorica Airport and Tivat Airport at any given time.
                        There’s also a counter in both airports where guests can
                        request or ask for assistance in getting a taxi outside
                        the airport to their destination. It is recommended for
                        guests to check and agree on a price with the taxi
                        driver prior to getting on.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  className="accordion_item"
                  key="4"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="How do I book accommodation at the Maestral Resort & Casino?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        We offer preferential rates and complimentary
                        accommodation packages for players that confirmed their
                        participation. Please get in touch with our Event
                        Concierge Team at&nbsp;
                        <a href="mailto:vip@triton-series.com">
                          vip@triton-series.com
                        </a>
                        &nbsp; for further assistance.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </FaqWrapper>
          </div>
          <div className="text-center mt-8">
            <img
              className="inline"
              src="https://cdn.triton-series.com/wp-content/uploads/2019/12/17170431/img-p.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  secDes: PropTypes.object,
};

ServiceSection.defaultProps = {
  secTitleWrapper: {},
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#EBA800",
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
    width: "70%",
    maxWidth: "100%",
    lineHeight: "50px",
  },
  Row: {
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    ml: ["0", "-15px", "-20px", "-35px", "-35px"],
    mr: ["0", "-15px", "-20px", "-35px", "-35px"],
  },
  Col: {
    pl: ["15px", "15px", "25x", "35px", "35px"],
    pr: ["15px", "15px", "25px", "35px", "35px"],
    mb: "40px",
  },
  serviceTitleStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "17px"],
    fontWeight: "500",
    color: "#ff4361",
    mb: 0,
  },
  secDes: {
    fontSize: ["14px", "15px", "16px"],
    color: "#5d646d",
    lineHeight: "1.875",
    mt: "30px",
    ml: "auto",
    mr: "auto",
    width: "470px",
    maxWidth: "100%",
    textAlign: "center",
  },
};

export default ServiceSection;
