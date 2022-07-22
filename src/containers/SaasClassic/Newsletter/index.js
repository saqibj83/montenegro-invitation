import React from "react";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";

import Container from "common/components/UI/Container";
import "react-datepicker/dist/react-datepicker.css";

import NewsletterWrapper, { ContactFormWrapper } from "./newsletter.style";

const Newsletter = ({
  sectionWrapper,

  title,
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="media_section">
      <Container>
        <Box style={{ paddingTop: "100px" }}>
          <Heading
            style={{ marginBottom: "50px" }}
            {...title}
            content="TV & Media Coverage"
          />
        </Box>
        <NewsletterWrapper>
          <Fade up>
            <ul>
              <li>This event will be televised.</li>
              <li>Players may be asked for professional photoshoot</li>
              <li>
                All Coin Rivet Invitational players will be required to provide
                their availability for interviews.
              </li>
            </ul>
          </Fade>
        </NewsletterWrapper>
      </Container>
    </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {
    backgroundColor: "#011933",
    pb: "0",
  },
  textArea: {
    mb: ["40px", "40px", "40px", "50px", "50px"],
    pr: ["0", "0", "0", "80px", "20px"],
  },
  title: {
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#fff",
    lineHeight: "1.34",
    mb: ["14px", "14px", "14px", "14px", "13px"],
    textAlign: ["center", "center", "center", "center", "center"],
    letterSpacing: "-0.025em",
  },
  description: {
    fontSize: ["14px", "14px"],
    fontWeight: "400",
    color: "#fefefe",
    lineHeight: "1.7",
    mb: 0,
    textAlign: ["center", "center", "center", "left", "left"],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: "submit",
    fontSize: "18px",
    fontWeight: "700",
    pl: "30px",
    pr: "30px",
    color: "#fff",
    backgroundColor: "#000",
  },
};

export default Newsletter;
