import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Logo from "common/components/UIElements/Logo";
import Container from "common/components/UI/Container";
import FooterWrapper, { List, ListItem } from "./footer.style";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Input from "common/components/Input";

import facebook from "common/assets/image/saasClassic/facebook.png";
import twitter from "common/assets/image/saasClassic/twitter.png";
import instagram from "common/assets/image/saasClassic/instagram.png";
import youtube from "common/assets/image/saasClassic/youtube.png";
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
        <div className="footer-top">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/2 px-2">
              <div className="footer-top__social">
                <span className="footer-nav__col-title">SITEMAP</span>
                <ul>
                  <li>
                    <Link href="#banner_section">
                      <a>
                        <i className="icon-arrow-sm"></i>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#general_section">
                      <a>
                        <i className="icon-arrow-sm"></i>
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#participants_section">
                      <a>
                        <i className="icon-arrow-sm"></i>Participants
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#tournament_info">
                      <a>
                        <i className="icon-arrow-sm"></i>Tournament Info
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#hotel_section">
                      <a>
                        <i className="icon-arrow-sm"></i>Hotel
                      </a>
                    </Link>
                  </li>
                </ul>

                <div className="footer-nav_subscribe mt-8">
                  <span className="footer-nav__col-title">NEWSLETTER</span>

                  {/* <div class="box-field__row">
                    <div id="mc_embed_signup">
                      <form
                        action="https://triton-series.us18.list-manage.com/subscribe/post?u=3957510c4fa663fcbc59da452&amp;id=1e0fdfae29"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                        novalidate
                      >
                        <div id="mc_embed_signup_scroll">
                          <div class="box-field">
                            <input
                              type="email"
                              value=""
                              name="EMAIL"
                              class="email"
                              id="mce-EMAIL"
                              placeholder="email address"
                              required
                            />
                          </div>
                          <div
                            style={{ position: "absolute", left: "-5000px;" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_3957510c4fa663fcbc59da452_1e0fdfae29"
                              tabindex="-1"
                              value=""
                            />
                          </div>
                          <div class="clear">
                            <input
                              type="submit"
                              value="SUBSCRIBE"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              class=" btn"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> */}

                  <div className="box-field__row">
                    <div className="box-field">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(180,128,44,1) 0%, rgba(246,208,110,1) 15%, rgba(225,166,52,1) 32%, rgba(239,193,88,1) 42%, rgba(246,208,110,1) 50%, rgba(240,191,84,1) 58%, rgba(225,166,52,1) 68%, rgba(246,208,110,1) 85%, rgba(180,128,44,1) 100%, rgba(246,208,110,1) 7064%);",
                      }}
                    >
                      subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="footer-nav_cotact mt-8">
                <span className="footer-nav__col-title">CONTACT</span>
                <p
                  style={{
                    fontSize: "16px",
                    float: "left",
                  }}
                >
                  <i className="icon-map-pin"></i> 85, Fenlex House, St. John
                  Street, Valleta, VLT1165, Malta
                </p>
                <ul>
                  <li>
                    <i className="icon-mail"></i>
                    <a target="_blank" href="mailto:info@triton-series.com">
                      info@triton-series.com{" "}
                    </a>
                  </li>
                  <li>
                    <i className="icon-mail"></i>
                    <a target="_blank" href="mailto:register@triton-series.com">
                      register@triton-series.com
                    </a>
                  </li>
                  <li>
                    <i className="icon-mail"></i>
                    <a
                      target="_blank"
                      href="mailto:partnerships@triton-series.com"
                    >
                      partnerships@triton-series.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
              <ul className="social">
                <Link href="https://facebook.com/tritonpoker">
                  <a target="_blank">
                    <li className="facebook"></li>
                  </a>
                </Link>
                <Link href="https://twitter.com/tritonpoker">
                  <a target="_blank">
                    <li className="twitter"></li>
                  </a>
                </Link>
                <Link href="https://instagram.com/tritonpokerseries">
                  <a target="_blank">
                    <li className="instagram"></li>
                  </a>
                </Link>
                <Link href="https://www.twitch.tv/tritonpoker">
                  <a target="_blank">
                    <li className="twitch"></li>
                  </a>
                </Link>
                <Link href="https://youtube.com/tritonpoker">
                  <a target="_blank">
                    <li className="youtube"></li>
                  </a>
                </Link>
                <Link href="https://discord.gg/tritonpoker">
                  <a target="_blank">
                    <li className="discord"></li>
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <span>&copy; All rights reserved. Triton Series 2023</span>

          <div>
            <Link href="https://triton-series.com/privacy-policy/">
              <a target="_blank" className="linkFooter">
                Privacy Policy
              </a>
            </Link>
            <Link href="https://triton-series.com/terms-and-conditions/">
              <a target="_blank" className="linkFooter">
                Terms and Conditions
              </a>
            </Link>
            <Link href="https://triton-series.com/about-paul-phua">
              <a target="_blank" className="linkFooter">
                About Paul Phua
              </a>
            </Link>
          </div>
        </div>
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
