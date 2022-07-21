import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import FooterWrapper, { List, ListItem } from "./footer.style";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Input from "common/components/Input";

import facebook from "common/assets/image/saasClassic/facebook.png";
import twitter from "common/assets/image/saasClassic/twitter.png";
import instagram from "common/assets/image/saasClassic/instagram.png";
import youtube from "common/assets/image/saasClassic/youtube.png";
import twitch from "common/assets/image/saasClassic/twitch.jpg";

import { FOOTER_WIDGET } from "common/data/SaasClassic";

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  buttonStyle,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <h1 style={{ color: "#EBA800" }}>FOLLOW US ON</h1>
            <div style={{ marginRight: "20px", float: "left" }}>
              <Link href="https://facebook.com/tritonpoker">
                <a target="_blank">
                  <NextImage src={facebook} alt="facebook" />
                </a>
              </Link>
            </div>
            <div style={{ marginRight: "20px", float: "left" }}>
              <Link href="https://twitter.com/tritonpoker">
                <a target="_blank">
                  <NextImage src={twitter} alt="twitter" />
                </a>
              </Link>
            </div>
            <div style={{ marginRight: "20px", float: "left" }}>
              <Link href="https://instagram.com/tritonpokerseries">
                <a target="_blank">
                  <NextImage src={instagram} alt="instagram" />
                </a>
              </Link>
            </div>
            <div style={{ marginRight: "20px", float: "left" }}>
              <Link href="https://youtube.com/tritonpoker">
                <a target="_blank">
                  <NextImage src={youtube} alt="youtube" />
                </a>
              </Link>
            </div>

            {/* <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            /> */}
            {/* <iframe
              src="https://player.twitch.tv?channel=tritonpoker&amp;height=300&amp;parent=embed.example.com&amp;parent=othersite.example.com&amp;parent=triton-series.com&amp;referrer=https%3A%2F%2Ftriton-series.com%2Ftriton-super-high-roller-series-madrid-2022%2F&amp;width=450"
              allowfullscreen=""
              scrolling="no"
              frameborder="0"
              allow="autoplay; fullscreen"
              title="Twitch"
              sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              width="100%"
              height="300"
            ></iframe> */}
            <Link href="https://www.twitch.tv/tritonpoker">
              <a target="_blank">
                <NextImage src={twitch} alt="twitch" />
              </a>
            </Link>
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            <Container>
              <h2 style={{ color: "#EBA800", marginTop: "100px" }}>
                SUBSCRIBE TO OUR NEWSLETTER
              </h2>
              <Input
                inputType="email"
                iconPosition="right"
                isMaterial={true}
                className="email_input"
                style={{ width: "78%" }}
              />
              <Button
                {...buttonStyle}
                title="Submit Now "
                className="btn-footer"
              />
              <h2 style={{ color: "#EBA800", marginTop: "10px" }}>
                GOT A QUESTION?
              </h2>
              <div
                style={{
                  color: "#fff !important",
                  margin: "2px 20px 0 0 !important",
                  float: "left",
                }}
              >
                <h4
                  style={{
                    color: "#EBA800 !important",
                    margin: "0 !important",
                  }}
                >
                  For More INFO
                </h4>
                <p>
                  <Link href="mailto:info@triton-series.com">
                    <a>info@triton-series.com</a>
                  </Link>
                </p>
              </div>
              <div
                style={{
                  color: "#fff !important",
                  margin: "2px 20px 0 0 !important",
                  float: "left",
                }}
              >
                <h4
                  style={{
                    color: "#EBA800 !important",
                    margin: "0 !important",
                  }}
                >
                  JOIN OUR NEXT EVENT
                </h4>
                <p>
                  <Link href="mailto:info@register@triton-series.com">
                    <a>register@triton-series.com</a>
                  </Link>
                </p>
              </div>
              <div
                style={{
                  color: "#fff !important",
                  margin: "0 !important",
                  float: "left",
                }}
              >
                <h4
                  style={{
                    color: "#EBA800 !important",
                    margin: "0 !important",
                  }}
                >
                  WANT TO BE A SPONSOR?
                </h4>
                <p>
                  <Link href="mailto:partnerships@triton-series.com">
                    <a>partnerships@triton-series.com</a>
                  </Link>
                </p>
              </div>
              <div style={{ float: "left" }}>
                {" "}
                <h3
                  style={{
                    color: "#EBA800 !important",
                    margin: "20px 0 !important",
                  }}
                >
                  85, Fenlex House, St. John Street, Valleta, VLT1165, Malta
                </h3>
              </div>
              <Box style={{ float: "left", width: "100%" }}>
                <div style={{ float: "left", marginRight: "10px" }}>
                  <Link href="https://triton-series.com/privacy-policy/">
                    <a
                      className="link-fon"
                      style={{ textTransform: "uppercase" }}
                    >
                      Privacy Policy
                    </a>
                  </Link>
                </div>
                <div style={{ float: "left", marginRight: "10px" }}>
                  <Link href="https://triton-series.com/terms-and-conditions/">
                    <a
                      className="link-fon"
                      style={{ textTransform: "uppercase" }}
                    >
                      Terms and Conditions
                    </a>
                  </Link>
                </div>
                <div style={{ float: "left", marginRight: "10px" }}>
                  <Link href="https://triton-series.com/about-paul-phua">
                    <a
                      className="link-fon"
                      style={{ textTransform: "uppercase" }}
                    >
                      About Paul Phua
                    </a>
                  </Link>
                </div>
              </Box>
            </Container>

            {/* {FOOTER_WIDGET.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <Link href={item.url}>
                        <a className="ListItem">{item.text}</a>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))} */}
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Footer col one style
  colOne: {
    width: [1, "35%", "35%", "40%"],
    mt: [0, "13px"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0],
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "65%", "65%", "60%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
  // widget title default style
  titleStyle: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    mb: "30px",
  },
  // Default logo size
  logoStyle: {
    width: "130px",
    mb: "15px",
  },
  // widget text default style
  textStyle: {
    color: "#fff",
    fontSize: "16px",
    mb: "10px",
  },
};

export default Footer;
