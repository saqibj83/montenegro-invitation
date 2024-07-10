import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
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
          <Heading {...secHeading} content="FAQ" />
        </Box>
        <FaqWrapper id="faq_section">
          <Accordion>
            <AccordionItem className="accordion_item" key="2" expanded="expend">
              <AccordionTitle className="accordion_title">
                <>
                  <Heading content="Suspendisse vitae porttitor ligula, nec rhoncus mauris." />
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  dapibus ligula aliquet malesuada tristique. Ut dictum ac ex
                  sed ullamcorper. Aenean vitae sapien aliquam, commodo neque
                  in, ullamcorper urna.
                </p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="accordion_item" key="3" expanded="expend">
              <AccordionTitle className="accordion_title">
                <>
                  <Heading content="Suspendisse vitae porttitor ligula, nec rhoncus mauris." />
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  dapibus ligula aliquet malesuada tristique. Ut dictum ac ex
                  sed ullamcorper. Aenean vitae sapien aliquam, commodo neque
                  in, ullamcorper urna.
                </p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="accordion_item" key="4" expanded="expend">
              <AccordionTitle className="accordion_title">
                <>
                  <Heading content="Suspendisse vitae porttitor ligula, nec rhoncus mauris." />
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  dapibus ligula aliquet malesuada tristique. Ut dictum ac ex
                  sed ullamcorper. Aenean vitae sapien aliquam, commodo neque
                  in, ullamcorper urna.
                </p>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </FaqWrapper>
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
