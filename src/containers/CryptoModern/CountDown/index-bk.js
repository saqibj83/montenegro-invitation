import React from "react";
import Fade from "react-reveal/Fade";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
const deadline = new Date("2022/09/05 00:00:00");
import SectionWrapper, { ContentWrapper } from "./countdown.style";

const CountDownSection = () => {
  return (
    <SectionWrapper className="bg-event" id="time_section">
      <Container>
        <Heading content="TIME " />
        <Fade up>
          <ul>
            <li>
              Each player will have the following seconds to act on the Shot
              Clock: 20 seconds pre-flop, 25 on the flop and 30 on the turn and
              river
            </li>
            <li>
              Each player will receive 12 Time Bank cards upon registering
              before the tournament starts
            </li>
            <li>
              A regressive time bank system will apply, please see "Poker Rules"
            </li>
            <li>
              Upon closing registration each player will receive 5 extra Time
              Bank Cards
            </li>
            <li>
              Upon reaching the Final Table all players will receive 5 extra
              Time Bank Cards
            </li>
            <li>All Shot Clock rules listed in the "Poker Rules" will apply</li>
          </ul>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
