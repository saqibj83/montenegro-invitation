import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Fade from "react-reveal/Fade";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SectionWrapper from "./service.style";
import { SERVICE_ITEMS } from "common/data/SaasClassic";

const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  secDes,
}) => {
  return (
    <SectionWrapper id="general_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading
            {...secHeading}
            content=" The inaugural Coin Rivet Invitational powered by Triton Poker will be held at the Merit Royal Diamond, North Cyprus from 10-12th September 2022.
            "
          />
          <p>
            The Coin Rivet Invitational powered by Triton Poker, at the Luxon
            Pay Mediterranean Poker Party is a special new event at Merit Royal
            Diamond, North Cyprus. The event is a $200,000 NLH single re-entry
            tournament. Taking inspiration from the unique format of the record
            breaking Triton Million that took place in London in 2019 the event
            sees the pairing of professional players with wealthy recreational
            players. On day one the professional players and recreational
            players are separated before the fields are merged on day two.
            Players are encouraged to find themselves a pairing just like they
            did at the historic Triton event in London.
          </p>
        </Box>
        <Box {...secTitleWrapper}>
          <Heading
            {...secHeading}
            content=" GENERAL
            "
          />
        </Box>
        <Box>
          <Fade up>
            <ul>
              <li>
                Players are required to play from the very beginning of the
                tournament
              </li>
              <li>
                Tournament will play 8-handed – the final table will be 9-handed
              </li>
              <li>
                Single (1) Re-Entry available during the Registration Period
              </li>
              <li>
                If a player wishes to Re-Enter he/she will have 30 Mins to do so
                after getting eliminated{" "}
              </li>
              <li>
                Registration will end at the start of Level 11 (Day 2 - 02:55
                PM)
              </li>
              <li>Day 2 will play down to the Final Table</li>
            </ul>
          </Fade>
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
