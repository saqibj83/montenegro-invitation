import React from "react";
import Fade from "react-reveal/Fade";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import { openModal, closeModal } from "@redq/reuse-modal";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Link from "next/link";
import SectionWrapper, { ContentWrapper } from "./countdown.style";
import Schedule from "common/assets/image/saasClassic/poker-events-schedule.svg";
import Rules from "common/assets/image/saasClassic/poker-events-rules.svg";

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <>
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Tournament Rules - Coin Rivet Invitational
        </h3>
      </div>

      <div className="p-6 space-y-6">
        <h2 className="text-xl font-bold">GENERAL</h2>
        <ul className="px-3">
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
            Registration will end at the start of Level 11 (Day 2 - 02:55 PM)
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
            A regressive time bank system will apply, please see "Poker Rules"
          </li>
          <li>
            Upon closing registration each player will receive 5 extra Time Bank
            Cards
          </li>
          <li>
            Upon reaching the Final Table all players will receive 5 extra Time
            Bank Cards
          </li>
          <li>All Shot Clock rules listed in the "Poker Rules" will apply</li>
        </ul>
        <h2 className="text-xl font-bold">SEAT DRAW</h2>
        <ul className="px-3">
          <li>
            Businessmen and Pros will play separately for the first 8 levels
          </li>
          <li>
            At the end of level 8 there will be a complete random redraw with
            the rules explained in point (3)
          </li>
          <li>
            During levels 9, 10, 11 and 12 players will play on tables with a
            balanced numbers of pros and businessmen as much as possible (i.e. 4
            Businessmen and 4 Pros)
          </li>
          <li>At the end of level 12 there will be a complete random redraw</li>

          <li>
            Businessman/Pro pair will play at different tables from Level 9 up
            until the last two tables remaining (16 players)
          </li>
        </ul>
        <h2 className="text-xl font-bold">TV & Media Coverage</h2>
        <ul className="px-3">
          <li>This event will be televised.</li>
          <li>Players may be asked for professional photoshoot</li>
          <li>
            All Coin Rivet Invitational players will be required to provide
            their availability for interviews.
          </li>
        </ul>
      </div>
    </div>
  </>
);

const ModalContent1 = () => (
  <SectionWrapper>
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
        <h3 className=" dark:text-white">
          Schedule <br /> <span>10th - 12th September</span>
        </h3>

        <Link href="https://cdn.triton-series.com/wp-content/uploads/2019/12/20113927/coin-rivatv3.pdf">
          <a>
            <Button
              title="Download Schedule"
              className="primary-cta"
              style={{ minHeight: "20px", marginTop: "15px" }}
            />
          </a>
        </Link>
      </div>

      <div className="p-6 space-y-6 rounded">
        <h4 className="text-black">Saturday 10th Sep</h4>
        <table class="border-collapse table-auto w-full text-sm bg-black border mb-5  shadow">
          <thead>
            <tr>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pl-8 pb-3 text-white text-left">
                Start Time
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pb-3 text-white text-left">
                Late Reg
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pr-8 pb-3 text-white text-left">
                Event
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pl-8 pb-3 text-white text-left">
                Buy-in
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pb-3 text-white text-left">
                Reg Fee
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pr-8 pb-3 text-white text-left">
                Chips
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pr-8 pb-3 text-white text-left">
                Clock
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                2 PM
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                2 PM
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                Coin Rivet Invitational Day 1
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                $200K
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                $10K
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                300K
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                50
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="px-6 pb-6 ">
        <h4 className="text-black pb-4">Sunday 11th Sep</h4>
        <table class="border-collapse table-auto w-full text-sm bg-black border mb-5  shadow">
          <thead>
            <tr>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pl-8 pb-3 text-white text-left">
                Start Time
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pb-3 text-white text-left">
                Late Reg
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pr-8 pb-3 text-white text-left">
                Event
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pl-8 pb-3 text-white text-left">
                Buy-in
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pb-3 text-white text-left">
                Reg Fee
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pr-8 pb-3 text-white text-left">
                Chips
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pr-8 pb-3 text-white text-left">
                Clock
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                1 PM
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                -
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                Coin Rivet Invitational Day 2
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                $200K
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                $10K
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                300K
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                50
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-6 pb-6  ">
        <h4 className="text-black pb-4">Monday 12th Sep</h4>
        <table class="border-collapse table-auto w-full text-sm bg-black border mb-5  shadow">
          <thead>
            <tr>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pl-8 pb-3 text-white text-left">
                Start Time
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pb-3 text-white text-left">
                Late Reg
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pr-8 pb-3 text-white text-left">
                Event
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pl-8 pb-3 text-white text-left">
                Buy-in
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pb-3 text-white text-left">
                Reg Fee
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pr-8 pb-3 text-white text-left">
                Chips
              </th>
              <th class="border-b dark:border-slate-600 text-lg font-medium p-4 pr-8 pb-3 text-white text-left">
                Clock
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                1PM
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                -
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                Coin Rivet Invitational Day 3
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                $200K
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                $10K
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                300K
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                50
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SectionWrapper>
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
    <SectionWrapper className="bg-event" id="time_section">
      <Container>
        <Heading content="Tournament Info " />
        <Fade up>
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 ">
              <div className="bg-sky-900 py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg ">
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
              <div className="bg-sky-900 py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg ">
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
