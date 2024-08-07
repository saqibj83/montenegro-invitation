import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SectionWrapper from "./service.style";
import { FAQ_DATA } from "common/data/SassMinimal";
import NextImage from "common/components/NextImage";

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
import arrow from "common/assets/image/arrow.png";

const ServiceSection = ({ secTitleWrapper, secHeading }) => {
  return (
    <SectionWrapper id="general_section">
      <Container className="mt-12">
        <h2 className=" text-center mt-5 ">Livestream Schedule</h2>
        <div className="container m-auto grid grid-cols-1">
          <div>
            <FaqWrapper id="faq_section">
              <Accordion>
                <AccordionItem
                  className="accordion_item"
                  key="2"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="DAY 1 - Sunday, August 4, 2024" />
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
                    <table className="border-collapse table-auto w-full sm:text-sm bg-black border mt-0  shadow">
                      <thead>
                        <tr>
                          <th className="border-b  text-center sm:text-sm p-1 font-medium text-white text-left">
                            Local Time
                          </th>
                          <th className="border-b text-center  sm:text-sm p-1 sm:p-4 font-medium text-white text-left">
                            Featured Table
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        <tr class="hover:bg-gray-100 poiter">
                          <td className="border text-center p-1 sm:p-4  text-slate-500 ">
                            4PM - 1AM
                          </td>
                          <td className="border text-center  p-1 sm:p-4  text-slate-500 ">
                            Table 1
                          </td>
                        </tr>

                        <tr className="text-center bg-black">
                          <td colspan="4" className="text-center">
                            <img
                              src="https://cdn.triton-series.com/wp-content/uploads/2019/12/04214447/table-1-day-1.png"
                              alt=""
                              className="inline"
                            />
                            <p className="text-xs italic text-slate-300 leading-3">
                              All information displayed is subject to change
                              without notice. The Triton Poker Series reserves
                              the right to modify any details at their
                              discretion.
                            </p>
                          </td>
                        </tr>

                        <tr class="hover:bg-gray-100">
                          <td
                            colspan="4"
                            className="border p-1 sm:p-4  text-black text-center   bg-table "
                          >
                            <NextImage
                              className="cyprus-img"
                              src={arrow}
                              alt="Next Arrow"
                            />{" "}
                            <br />
                            <span>JOE ZOU > ELIZABETH CHEN</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  className="accordion_item"
                  key="3"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="DAY 2 - Monday, August 5, 2024" />
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
                    <table className="border-collapse table-auto w-full sm:text-sm bg-black border mt-0  shadow">
                      <thead>
                        <tr>
                          <th className="border-b  text-center sm:text-sm p-1 font-medium text-white text-left">
                            Local Time
                          </th>
                          <th className="border-b text-center  sm:text-sm p-1 sm:p-4 font-medium text-white text-left">
                            Featured Table
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        <tr class="hover:bg-gray-100 poiter">
                          <td className="border text-center p-1 sm:p-4  text-slate-500 ">
                            6PM - 3AM
                          </td>
                          <td className="border text-center  p-1 sm:p-4  text-slate-500 ">
                            Table 1
                          </td>
                        </tr>

                        <tr className="text-center bg-black">
                          <td colspan="4" className="text-center">
                            <img
                              src="https://cdn.triton-series.com/wp-content/uploads/2019/12/05214954/table-1-day-2.png"
                              alt=""
                              className="inline"
                            />
                            <p className="text-xs italic text-slate-300 leading-3">
                              All information displayed is subject to change
                              without notice. The Triton Poker Series reserves
                              the right to modify any details at their
                              discretion.
                            </p>
                          </td>
                        </tr>

                        <tr class="hover:bg-gray-100">
                          <td
                            colspan="4"
                            className="border p-1 sm:p-4  text-black text-center   bg-table "
                          >
                            <NextImage
                              className="cyprus-img"
                              src={arrow}
                              alt="Next Arrow"
                            />{" "}
                            <br />
                            <span>PAUL PHUA > ROB YONG</span>
                            <br />
                            <span>PHIL IVEY > DANIEL CATES</span>
                            <br />
                            <span>JOE ZOU > ELIZABETH CHEN</span>
                            <br />
                            <span>TONY G > PAUL PHUA</span>
                            <br />
                            <span>MIKHAIL PETROV > HANDZ</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  className="accordion_item"
                  key="4"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="DAY 3 - Tuesday, August 6, 2024" />
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
                    <table className="border-collapse table-auto w-full text-sm bg-black border mt-0  shadow">
                      <thead>
                        <tr>
                          <th className="border-b  text-center sm:text-sm p-1 font-medium text-white text-left">
                            Local Time
                          </th>
                          <th className="border-b text-center  sm:text-sm p-1 sm:p-4 font-medium text-white text-left">
                            Featured Table
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        <tr class="hover:bg-gray-100">
                          <td className="border text-center p-1 sm:p-4  text-slate-500 ">
                            6PM - 3AM
                          </td>
                          <td className="border text-center  p-1 sm:p-4  text-slate-500 ">
                            Table 1
                          </td>
                        </tr>
                        <tr className="text-center bg-black">
                          <td colspan="4" className="text-center">
                            <img
                              src="https://cdn.triton-series.com/wp-content/uploads/2019/12/06230323/table-1-day-3.png"
                              alt=""
                              className="inline"
                            />
                            <p className="text-xs italic text-slate-300 leading-3">
                              All information displayed is subject to change
                              without notice. The Triton Poker Series reserves
                              the right to modify any details at their
                              discretion.
                            </p>
                          </td>
                        </tr>
                        <tr class="hover:bg-gray-100">
                          <td
                            colspan="4"
                            className="border p-1 sm:p-4  text-black text-center   bg-table "
                          >
                            <NextImage
                              className="cyprus-img"
                              src={arrow}
                              alt="Next Arrow"
                            />{" "}
                            <br />
                            <span>> ROB YONG</span>
                            <br />
                            <span>PHIL IVEY > DANNY TANG</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  className="accordion_item"
                  key="4"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="DAY 4 - Wednesday, August 7, 2024" />
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
                    <table className="border-collapse table-auto w-full text-sm bg-black border mt-0  shadow">
                      <thead>
                        <tr>
                          <th className="border-b  text-center sm:text-sm p-1 font-medium text-white text-left">
                            Local Time
                          </th>
                          <th className="border-b text-center  sm:text-sm p-1 sm:p-4 font-medium text-white text-left">
                            Featured Table
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        <tr class="hover:bg-gray-100">
                          <td className="border text-center p-1 sm:p-4  text-slate-500 ">
                            6PM - 3AM
                          </td>
                          <td className="border text-center  p-1 sm:p-4  text-slate-500 ">
                            Table 1
                          </td>
                        </tr>
                        <tr className="text-center bg-black">
                          <td colspan="4" className="text-center">
                            <img
                              src="https://cdn.triton-series.com/wp-content/uploads/2019/12/15151511/new-team.png"
                              alt=""
                              className="inline"
                            />
                            <p className="text-xs italic text-slate-300 leading-3">
                              All information displayed is subject to change
                              without notice. The Triton Poker Series reserves
                              the right to modify any details at their
                              discretion.
                            </p>
                          </td>
                        </tr>
                        <tr class="hover:bg-gray-100">
                          <td
                            colspan="4"
                            className="border p-1 sm:p-4  text-black text-center   bg-table "
                          >
                            <NextImage
                              className="cyprus-img"
                              src={arrow}
                              alt="Next Arrow"
                            />{" "}
                            <br />
                            <span>TV Table Change & Hot Seat Redraw</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  className="accordion_item"
                  key="4"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="DAY 5 - Thursday, August 8, 2024" />
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
                    <table className="border-collapse table-auto w-full text-sm bg-black border mt-0  shadow">
                      <thead>
                        <tr>
                          <th className="border-b  text-center sm:text-sm p-1 font-medium text-white text-left">
                            Local Time
                          </th>
                          <th className="border-b text-center  sm:text-sm p-1 sm:p-4 font-medium text-white text-left">
                            Featured Table
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        <tr class="hover:bg-gray-100">
                          <td className="border text-center p-1 sm:p-4  text-slate-500 ">
                            6PM - 3AM
                          </td>
                          <td className="border text-center  p-1 sm:p-4  text-slate-500 ">
                            Table 1
                          </td>
                        </tr>
                        <tr className="text-center bg-black">
                          <td colspan="4" className="text-center">
                            <img
                              src="https://cdn.triton-series.com/wp-content/uploads/2019/12/15151511/new-team.png"
                              alt=""
                              className="inline"
                            />
                            <p className="text-xs italic text-slate-300 leading-3">
                              All information displayed is subject to change
                              without notice. The Triton Poker Series reserves
                              the right to modify any details at their
                              discretion.
                            </p>
                          </td>
                        </tr>
                        <tr class="hover:bg-gray-100">
                          <td
                            colspan="4"
                            className="border p-1 sm:p-4  text-black text-center   bg-table "
                          >
                            <NextImage
                              className="cyprus-img"
                              src={arrow}
                              alt="Next Arrow"
                            />{" "}
                            <br />
                            <span>TV Table Change & Hot Seat Redraw</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  className="accordion_item"
                  key="4"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="DAY 6 - Friday, August 9, 2024" />
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
                    <table className="border-collapse table-auto w-full text-sm bg-black border mt-0  shadow">
                      <thead>
                        <tr>
                          <th className="border-b  text-center sm:text-sm p-1 font-medium text-white text-left">
                            Local Time
                          </th>
                          <th className="border-b text-center  sm:text-sm p-1 sm:p-4 font-medium text-white text-left">
                            Featured Table
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        <tr class="hover:bg-gray-100">
                          <td className="border text-center p-1 sm:p-4  text-slate-500 ">
                            6PM - 3AM
                          </td>
                          <td className="border text-center  p-1 sm:p-4  text-slate-500 ">
                            Table 1
                          </td>
                        </tr>
                        <tr className="text-center bg-black">
                          <td colspan="4" className="text-center">
                            <img
                              src="https://cdn.triton-series.com/wp-content/uploads/2019/12/15151511/new-team.png"
                              alt=""
                              className="inline"
                            />
                            <p className="text-xs italic text-slate-300 leading-3">
                              All information displayed is subject to change
                              without notice. The Triton Poker Series reserves
                              the right to modify any details at their
                              discretion.
                            </p>
                          </td>
                        </tr>
                        <tr class="hover:bg-gray-100">
                          <td
                            colspan="4"
                            className="border p-1 sm:p-4  text-black text-center   bg-table "
                          >
                            <NextImage
                              className="cyprus-img"
                              src={arrow}
                              alt="Next Arrow"
                            />{" "}
                            <br />
                            <span>TV Table Change & Hot Seat Redraw</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  className="accordion_item"
                  key="4"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="DAY 7 - Saturday, August 10, 2024" />
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
                    <table className="border-collapse table-auto w-full text-sm bg-black border mt-0  shadow">
                      <thead>
                        <tr>
                          <th className="border-b  text-center sm:text-sm p-1 font-medium text-white text-left">
                            Local Time
                          </th>
                          <th className="border-b text-center  sm:text-sm p-1 sm:p-4 font-medium text-white text-left">
                            Featured Table
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        <tr class="hover:bg-gray-100">
                          <td className="border text-center p-1 sm:p-4  text-slate-500 ">
                            6PM - 3AM
                          </td>
                          <td className="border text-center  p-1 sm:p-4  text-slate-500 ">
                            Table 1
                          </td>
                        </tr>
                        <tr className="text-center bg-black">
                          <td colspan="4" className="text-center">
                            <img
                              src="https://cdn.triton-series.com/wp-content/uploads/2019/12/15151511/new-team.png"
                              alt=""
                              className="inline"
                            />
                            <p className="text-xs italic text-slate-300 leading-3">
                              All information displayed is subject to change
                              without notice. The Triton Poker Series reserves
                              the right to modify any details at their
                              discretion.
                            </p>
                          </td>
                        </tr>
                        <tr class="hover:bg-gray-100">
                          <td
                            colspan="4"
                            className="border p-1 sm:p-4  text-black text-center   bg-table "
                          >
                            <NextImage
                              className="cyprus-img"
                              src={arrow}
                              alt="Next Arrow"
                            />{" "}
                            <br />
                            <span>TV Table Change & Hot Seat Redraw</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </FaqWrapper>
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
    color: "#DFA95A",
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
