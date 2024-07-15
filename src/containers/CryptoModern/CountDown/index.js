import React from "react";
import Fade from "react-reveal/Fade";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import { openModal, closeModal } from "@redq/reuse-modal";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Link from "next/link";
import SectionWrapper, {
  ContentWrapper,
  ContentTable,
} from "./countdown.style";
import Schedule from "common/assets/image/saasClassic/poker-events-schedule.svg";
import Rules from "common/assets/image/saasClassic/poker-events-rules.svg";
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={
      <svg
        height="22px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="22px"
        style={{ transform: "rotate(45deg)" }}
      >
        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
      </svg>
    }
  />
);

const ModalContent = () => (
  <>
    <div className="relative bg-white rounded-lg shadow  ">
      <div className="flex justify-between items-start p-4 rounded-t border-b ">
        <h3 className="text-xl font-semibold text-black">
          Triton Poker Series: Cash Game Invitational I: Terms & Conditions
        </h3>
      </div>

      <div className="p-6 space-y-6">
        <h2 className="text-xl text-black font-bold">Event Details:</h2>
        <ul className="px-3">
          <li>
            {" "}
            <strong>Location:</strong> Maestral Resort & Casino, Montenegro
          </li>
          <li>
            <strong>Dates:</strong> 1st - 7th August 2024
          </li>
          <li>
            <strong>Scheduled Play Time:</strong> 3:00PM to 00:00AM. After-hours
            play is permitted, but players must return by 3:00PM the following
            day.
          </li>
        </ul>
        <h2 className="text-xl font-bold">Attendance & Participation:</h2>
        <ul className="px-3">
          <li>
            Players must confirm their attendance to the proposed lineups by
            June 27th.
          </li>
          <li>
            Seat assignments will be drawn randomly at the start of play and may
            occur mid-session if announced beforehand.
          </li>
          <li>
            A "Hot Seat" redraw will occur for all "Hot Seat" players, including
            reserves, halfway through play (4.5 hours in).
          </li>
          <li>
            A player on both "Hot Seat" and Reserve cannot draw a Reserve Seat
            twice consecutively.
          </li>
          <li>
            From Day 5, some tables will feature higher stakes, with increased
            minimum buy-ins, blinds, and/or big blind antes.
          </li>
          <li>Day 7 lineup and stakes are to be determined.</li>
          <li>
            We reserve the right to change the lineup, stakes, and minimum
            buy-ins.
          </li>
          <li>
            The seat draw for all tables is subject to change. We do not
            guarantee a number of players per table - tables may not play
            8-handed as in the proposed schedule
          </li>
          <li>
             Reserve lists will be announced daily and each of the 3 tables may
            have their own reserve list.
          </li>
        </ul>
      </div>
    </div>
  </>
);

const ModalContent1 = () => (
  <ContentTable>
    <div className="relative bg-white main-box rounded-lg shadow  ">
      <div className="flex justify-between items-start p-4 rounded-t border-b ">
        <h3 className=" text-black">
          Schedule <br />{" "}
          <span>
            24<sup>th</sup> - 26<sup>th</sup> OCTOBER
          </span>
        </h3>

        {/* <Link href="#">
          <a>
            <Button
              title="Download Schedule"
              className="primary-cta"
              style={{ minHeight: "20px", marginTop: "15px" }}
            />
          </a>
        </Link> */}
      </div>

      <div className=" p-0 mb-3  space-y-6 rounded sm:p-3 sm:mb-0">
        <h4 className="text-black pl-3 pt-4 sm:pt-0 ">
          Tuesday 24<sup>TH</sup> October
        </h4>
        <table class="border-collapse table-auto w-full text-sm bg-black border mt-0 shadow">
          <thead>
            <tr>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Start Time
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Late Reg
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Event
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Buy-in
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Reg Fee
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Chips
              </th>
              <th class="border-b  text-lg font-medium  text-white text-left">
                Clock
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">2 PM</td>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">-</td>
              <td class="border-b  p-1 sm:p-4  pr-8 text-slate-500 ">
                NLH - INVITATIONAL Day 1
              </td>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">$200K</td>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">$10k</td>
              <td class="border-b  p-1 sm:p-4  pr-8 text-slate-500 ">250K</td>
              <td class="border-b  p-1 sm:p-4  pr-8 text-slate-500 ">50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-0 mb-3 space-y-6 rounded sm:p-3 sm:mb-0 ">
        <h4 className="text-black pl-3 ">
          Wednesday 25<sup>th</sup> October
        </h4>
        <table class="border-collapse table-auto w-full text-sm bg-black border mt-0  shadow">
          <thead>
            <tr>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Start Time
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Late Reg
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Event
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Buy-in
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Reg Fee
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Chips
              </th>
              <th class="border-b  text-lg font-medium  text-white text-left">
                Clock
              </th>
            </tr>
          </thead>
          <tbody class="bg-white ">
            <tr>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">1 PM</td>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">-</td>
              <td class="border-b  p-1 sm:p-4  pr-8 text-slate-500 ">
                NLH - INVITATIONAL Day 2
              </td>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">$200K</td>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">$10k</td>
              <td class="border-b  p-1 sm:p-4  pr-8 text-slate-500 ">250K</td>
              <td class="border-b  p-1 sm:p-4  pr-8 text-slate-500 ">50</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-0 mb-3  space-y-6 rounded sm:p-3 sm:mb-0 ">
        <h4 className="text-black pl-3">
          Thursday 26<sup>th</sup> October
        </h4>
        <table class="border-collapse table-auto w-full text-sm bg-black border mt-0  shadow">
          <thead>
            <tr>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Start Time
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Late Reg
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Event
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Buy-in
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Reg Fee
              </th>
              <th class="border-b  text-lg p-1 sm:p-4 font-medium text-white text-left">
                Chips
              </th>
              <th class="border-b  text-lg font-medium  text-white text-left">
                Clock
              </th>
            </tr>
          </thead>
          <tbody class="bg-white ">
            <tr>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">1PM</td>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">-</td>
              <td class="border-b  p-1 sm:p-4  pr-8 text-slate-500 ">
                NLH - INVITATIONAL Day 3
              </td>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">$200K</td>
              <td class="border-b  p-1 sm:p-4  text-slate-500 ">$10k</td>
              <td class="border-b  p-1 sm:p-4  pr-8 text-slate-500 ">250K</td>
              <td class="border-b  p-1 sm:p-4  pr-8 text-slate-500 ">50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </ContentTable>
);

const CountDownSection = () => {
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const handleVideoModal1 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent1,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <SectionWrapper className="bg-event" id="tournament_info">
      <Container>
        <Heading content="RULES " />
        <Fade up>
          <div className="flex flex-wrap -mx-1 lg:-mx-4 mb-12">
            <div className="bg-b py-12 flex-1 flex  shadow-lg rounded-lg ">
              <div className="w-full px-5  xs:text-center  ">
                <h1>
                  {" "}
                  <NextImage
                    className="inline"
                    src={Rules}
                    alt="Tournament Rules"
                  />{" "}
                  <br />
                  CASH GAME RULES
                </h1>

                <ul className="px-3 text-white">
                  <li className="text-white">
                    ⁠Seats will be assigned randomly before each session.
                  </li>
                  <li className="text-white">
                    Televised table swaps may result in changes at the
                    organization's discretion.
                  </li>
                  <li className="text-white">
                    Minimum buy-ins for each table are predetermined, starting
                    at 100BB, but players may buy in for any amount above this.
                  </li>
                  <li className="text-white">
                    ⁠Straddles and unannounced side games are allowed if all
                    participants agree, subject to organizational fairness
                    oversight.
                  </li>
                  <li className="text-white">
                    Players with a "Hot Seat" will draw for new seats during
                    announced "Hot Seat Swaps." Any player, including reserves,
                    can draw any hot seat, but a reserve hot seat cannot draw a
                    reserve seat twice consecutively.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
