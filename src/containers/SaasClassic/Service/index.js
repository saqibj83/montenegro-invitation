import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SectionWrapper from "./service.style";

const ServiceSection = ({ secTitleWrapper, secHeading }) => {
  return (
    <SectionWrapper id="general_section">
      <Container>
        <Box {...secTitleWrapper} style={{ textAlign: "center" }}>
          {/* <img
            src="https://cdn.triton-series.com/wp-content/uploads/2019/12/14182030/last-frame00.png"
            alt=""
            style={{ width: "400px", textAlign: "center", display: "inline" }}
          /> */}

          <p>
            <strong>$200,000 NLH</strong> <br />
            24<sup>TH</sup> - 26<sup>TH</sup> OCTOBER 2023{" "}
          </p>
          <p>
            The Special Triton Invitational is a unique $200,000 NLH buy-in that
            features high-net-worth individuals and poker professionals battling
            for prize money and the coveted title & trophy. This unique format
            was inspired by the record breaking Triton Million that took place
            in London in 2019 where affluent individuals and poker pros play the
            first 8 levels separately, then converge to battle against each
            other to a winner. This exclusive event will start on kick-off at
            the Triton Poker SHRS in Monte-Carlo on the 24<sup>th</sup> of
            October, 2023 at the luxurious Monte-Carlo Sporting - Salle Des
            Étoiles and conclude October 26<sup>th</sup>, 2023.
          </p>
        </Box>
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
