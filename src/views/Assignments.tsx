import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faRedo } from "@fortawesome/free-solid-svg-icons";

import * as Styled from "../styles";
import { findAssignments } from "../algorithm";

const Assignments: React.FC = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [constraints, setConstraints] = useState<boolean[][]>([]);
  const [assignments, setAssignments] = useState<number[]>([]);

  useEffect(() => {
    const storedParticipants = window.localStorage.getItem("participants");
    if (storedParticipants !== null) {
      setParticipants(JSON.parse(storedParticipants));
    }

    const storedConstraints = window.localStorage.getItem("constraints");
    if (storedConstraints !== null) {
      setConstraints(JSON.parse(storedConstraints));
    }
  }, []);

  const makeAssignments = () => {
    if (!constraints.length) {
      return;
    }

    const newAssignments = findAssignments(constraints);
    if (newAssignments !== null) {
      setAssignments(newAssignments);
    } else {
      setAssignments([]);
    }
  };

  useEffect(() => {
    makeAssignments();
  }, [constraints]);

  const handleReroll = () => {
    makeAssignments();
  };

  return (
    <div>
      <div>Assignments</div>
      {!assignments.length ? (
        <i>Assignment impossible. Relax constraints.</i>
      ) : (
        <ul>
          {participants.map((giver, i) => {
            return !assignments.length ? null : (
              <li key={i}>
                <Styled.Name>{giver}</Styled.Name>
                <Styled.FlexRow>
                  <FontAwesomeIcon icon={faArrowRight} />
                  <Styled.Name>{participants[assignments[i]]}</Styled.Name>
                </Styled.FlexRow>
              </li>
            );
          })}
        </ul>
      )}
      {/* <Styled.FlexRow>
        <Styled.Button onClick={handleReroll}>
          <Styled.ButtonText>Reroll Assignments</Styled.ButtonText>
          <FontAwesomeIcon icon={faRedo} />
        </Styled.Button>
      </Styled.FlexRow> */}
    </div>
  );
};

export default Assignments;
