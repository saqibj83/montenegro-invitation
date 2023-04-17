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
          Tournament Rules - Luxon Invitational
        </h3>
      </div>

      <div className="p-6 space-y-6">
        <h2 className="text-xl text-black font-bold">GENERAL</h2>
        <ul className="px-3">
          <li>
            Registration Fees are not included in the buy-in. Total buy-in
            210,000 USD.
          </li>
          <li>
            Players are required to play from the very beginning of the
            tournament
          </li>
          <li>
            Tournament will play 8-handed – the final table will be 9-handed
          </li>
          <li>Single (1) Re-Entry available during the Registration Period</li>
          <li>
            If a player wishes to Re-Enter he/she will have 30 Mins to do so
            after getting eliminated
          </li>
          <li>
            Registration will end at the start of Level 11 (Day 2 – 2:55PM)
          </li>
          <li>Day 2 will play down to the Final Table</li>
        </ul>
        <h2 className="text-xl font-bold">TIME</h2>
        <ul className="px-3">
          <li>
            Each player will have the following seconds to act on the Shot
            Clock: 20 seconds pre-flop, 25 on the flop and 30 on the turn and
            river
          </li>
          <li>
            Each player will receive 12 Time Bank cards upon registering before
            the tournament starts
          </li>
          <li>
            A regressive time bank system will apply, please see “Tournament
            Rules”
          </li>
          <li>
            Upon reaching the Final Table all players will receive 5 extra Time
            Bank Cards
          </li>
          <li>
            All Shot Clock rules listed in the "Tournament Rules" will apply
          </li>
        </ul>
        <h2 className="text-xl font-bold">SEAT DRAW</h2>
        <ul className="px-3">
          <li>VIPs and Pros will play separately for the first 8 levels</li>
          <li>
            At the end of level 8 there will be a complete random redraw with
            the rules explained in point (3)
          </li>
          <li>
            During levels 9, 10, 11 and 12 players will play on tables with a
            balanced numbers of pros and VIPs as much as possible (i.e. 4 VIPs
            and 4 Pros)
          </li>
          <li>At the end of level 12 there will be a complete random redraw</li>

          <li>
            VIPs/Pro pair will play at different tables from Level 9 up until
            the last two tables remaining (16 players)
          </li>
        </ul>
        <h2 className="text-xl font-bold">TV & Media Coverage</h2>
        <ul className="px-3">
          <li>This event will be televised.</li>
          <li>Players may be asked to be professionally photographed</li>
          <li>
            All Luxon Invitational players will be required to provide their
            availability for interviews
          </li>
        </ul>
        <p>
          <strong>
            **All other Triton Poker SHRS tournament rules apply. &nbsp;
            <a
              style={{ color: "#eba800" }}
              target="_blank"
              href="https://triton-series.com/tournament-rules/"
            >
              Click here
            </a>
          </strong>
        </p>
      </div>
    </div>
  </>
);

const ModalContent1 = () => (
  <ContentTable>
    <div className="relative bg-white main-box rounded-lg shadow  ">
      <div className="flex justify-between items-start p-4 rounded-t border-b ">
        <h3 className=" text-black">
          Schedule <br /> <span>18th - 20th May</span>
        </h3>

        <Link href="https://triton-aws-s3-images-bucket.s3.ap-southeast-1.amazonaws.com/SHRS_North_Cyprus_e115689374.pdf">
          <a>
            <Button
              title="Download Schedule"
              className="primary-cta"
              style={{ minHeight: "20px", marginTop: "15px" }}
            />
          </a>
        </Link>
      </div>

      <div className=" p-0 mb-3  space-y-6 rounded sm:p-3 sm:mb-0">
        <h4 className="text-black pl-3 pt-4 sm:pt-0 ">THURSDAY 18th May</h4>
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
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                1 PM
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                -
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  pr-8 text-slate-500 ">
                NLH - LUXON INVITATIONAL Day 1
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                $200K
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                $10K
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  pr-8 text-slate-500 ">
                300K
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  pr-8 text-slate-500 ">
                50
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-0 mb-3 space-y-6 rounded sm:p-3 sm:mb-0 ">
        <h4 className="text-black pl-3 ">Friday 19th May</h4>
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
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                1 PM
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                -
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  pr-8 text-slate-500 ">
                NLH - LUXON INVITATIONAL Day 2
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                $200K
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                $10K
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  pr-8 text-slate-500 ">
                300K
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  pr-8 text-slate-500 ">
                50
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-0 mb-3  space-y-6 rounded sm:p-3 sm:mb-0 ">
        <h4 className="text-black pl-3">Satuday 20th May</h4>
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
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                1PM
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                -
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  pr-8 text-slate-500 ">
                NLH - LUXON INVITATIONAL Day 3
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                $200K
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  text-slate-500 ">
                $10K
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  pr-8 text-slate-500 ">
                300K
              </td>
              <td class="border-b border-slate-100  p-1 sm:p-4  pr-8 text-slate-500 ">
                50
              </td>
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
        <Heading content="Tournament Info " />
        <Fade up>
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 ">
              <div className="bg-b py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg ">
                <div className="w-full text-center ">
                  <NextImage src={Schedule} alt="Schedule" />
                  <h1>SCHEDULE</h1>
                  <button
                    className="shadow inline-flex items-center btn-bg  text-black  py-2 px-4 rounded-lg"
                    onClick={handleVideoModal1}
                  >
                    VIEW SCHEDULE
                  </button>
                </div>
              </div>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 ">
              <div className="bg-b py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg ">
                <div className="w-full text-center ">
                  <NextImage src={Rules} alt="Tournament Rules" />
                  <h1>TOURNAMENT RULES</h1>

                  <button
                    className="shadow inline-flex items-center btn-bg  text-black  py-2 px-4 rounded-lg"
                    onClick={handleVideoModal}
                  >
                    READ THE RULES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
