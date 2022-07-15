import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Fade from "react-reveal/Fade";
import Container from "common/components/UI/Container";

import SectionWrapper from "./trial.style";

const TrialSection = ({ row, title, textArea }) => {
  return (
    <SectionWrapper className="trial-section" id="seat_section">
      <Container>
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="SEAT DRAW" />

            <Fade up>
              <ul>
                <li>
                  Businessmen and Pros will play separately for the first 8
                  levels
                </li>
                <li>
                  At the end of level 8 there will be a complete random redraw
                  with the rules explained in point (3)
                </li>
                <li>
                  During levels 9, 10, 11 and 12 players will play on tables
                  with a balanced numbers of pros and businessmen as much as
                  possible (i.e. 4 Businessmen and 4 Pros)
                </li>
                <li>
                  At the end of level 12 there will be a complete random redraw
                </li>

                <li>
                  Businessman/Pro pair will play at different tables from Level
                  9 up until the last two tables remaining (16 players)
                </li>
              </ul>
            </Fade>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

TrialSection.propTypes = {
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
  textArea: {
    width: ["100%", "100%", "100%", "100%"],
  },
  imageArea: {
    width: ["100%", "100%", "43%"],
    mb: ["35px", "35px", "40px", "40px"],
    flexBox: true,
    justifyContent: "center",
  },
  title: {
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: "28px",
    textAlign: "center",
    lineHeight: "1.25",
  },
  description: {
    fontSize: ["15px", "15px", "18px", "18px", "18px"],
    color: "#fff",
    lineHeight: "2.1",
    textAlign: "center",
    mb: ["35px", "35px", "40px", "60px"],
  },
  ImageOne: {
    ml: "auto",
    mr: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
  },
  btnStyle: {
    minWidth: "156px",
    fontSize: ["13px", "14px"],
    fontWeight: "500",
    colors: "secondaryWithBg",
    pl: ["15px", "30px"],
    pr: ["15px", "30px"],
  },
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#0f2137",
    colors: "secondary",
  },
};

export default TrialSection;
