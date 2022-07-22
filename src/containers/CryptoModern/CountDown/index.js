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
        <p className="text-xl">
          General Rules for Coin Rivet Invitational $200,000 Buy-In
        </p>
        <ol className="px-6">
          <li>
            This $200,000 buy in event starts at 2pm on the 10th September and
            is a 3 day event.
          </li>
          <li>
            3% rake + 2% service charge will be applied on all entries in the
            Coin Rivet Invitational.
          </li>
          <li>The Buy-In including fees is $210,000.</li>
          <li>
            Players must pay a deposit of $20,000 to confirm their seat in the
            Coin Rivet Invitational.
          </li>
          <li>The Coin Rivet Invitational allows 1 re-entry per player.</li>
          <li>
            If a player wishes to Re – enter he/she will have 30 mins after
            getting eliminated.
          </li>
          <li>Registration will end at the start of level 11.</li>
          <li>
            There is a cap of 64 players made up of 32 professional poker
            players and 32 VIPs.
          </li>
          <li>
            The decision of who is classed as a VIP will be determined by a
            panel of 3; Rob Yong, Paul Phua &amp; Jason Koon
          </li>
          <li>
            Players are required to play from the beginning of the tournament.
          </li>
          <li>Levels are 50 mins with a 15 min break every 2 levels.</li>
          <li>There is a 60 min Dinner Break end of level 6.</li>
          <li>On Day 1, VIPs and poker pros will play in separate fields.</li>
          <li>Days 2 and 3 start 1pm.</li>
          <li>
            On day 2, the remaining players will randomly combine into tables
            that will keep as much as possible a balanced number of players
            between VIPs and Pros (i.e.: 4 VIPs + 4 Pros), maintaining the pairs
            separated.
          </li>
          <li>
            At completion of Level 12 there will be a random redraw that will
            combine all players without the above rules, with the only exception
            of maintaining the pairs separated until there will be 2 tables
            remaining in the field.
          </li>
          <li>Tables are seated 8-handed.</li>
          <li>The unofficial final table will be played 9 handed.</li>
          <li>Day 1 will play 8 levels.</li>
          <li>Day 2 will play to final 6</li>
          <li>Day 3 play to a winner.</li>
          <li>
            Each player will have the following seconds to act on the Shot
            Clock: 20 seconds pre-flop, 25 on the flop and 30 on the turn and
            river.
          </li>
          <li>
            Each player will receive 12 Time Bank cards upon registering before
            the tournament starts.
          </li>
          <li>
            Upon closing registration each player will receive 5 extra Time Bank
            Cards.
          </li>
          <li>
            Upon reaching the Final Table all players will receive 5 extra Time
            Bank Cards.
          </li>
          <li>
            Players at the featured table are required to place their hole cards
            in the RFID box at the start of each hand. Featured tables will have
            at least 30-minute broadcast delay.
          </li>
          <li>
            The Tournament Director will draw the number of hands to play in the
            final 10 minutes of the day.
          </li>
          <li>
            Management reserves the right to change or cancel tournaments.
          </li>
        </ol>
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
