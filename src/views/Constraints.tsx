import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";

import * as Styled from "../styles";

const Constraints: React.FC = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [constraints, setConstraints] = useState<boolean[][]>([]);

  useEffect(() => {
    const storedParticipants = window.localStorage.getItem("participants");
    if (storedParticipants !== null) {
      setParticipants(JSON.parse(storedParticipants));
    }
  }, []);

  const initializeConstraints = () => {
    const initalConstraints = [];
    for (let i = 0; i < participants.length; ++i) {
      const constraintsForGiver = [];
      for (let j = 0; j < participants.length; ++j) {
        constraintsForGiver.push(i !== j);
      }
      initalConstraints.push(constraintsForGiver);
    }
    window.localStorage.setItem(
      "constraints",
      JSON.stringify(initalConstraints)
    );
    window.localStorage.removeItem("assignments");
    setConstraints(initalConstraints);
  };

  useEffect(() => {
    if (!participants.length) {
      return;
    }

    const storedConstraints = window.localStorage.getItem("constraints");
    if (storedConstraints !== null) {
      setConstraints(JSON.parse(storedConstraints));
    } else {
      initializeConstraints();
    }
  }, [participants]);

  const handleToggle = (giver: number, receiver: number) => {
    setConstraints((prev) => {
      const newConstraints = prev.map((constraintsForGiver) => [
        ...constraintsForGiver,
      ]);
      newConstraints[giver][receiver] = !newConstraints[giver][receiver];
      window.localStorage.setItem(
        "constraints",
        JSON.stringify(newConstraints)
      );
      window.localStorage.removeItem("assignments");
      return newConstraints;
    });
  };

  const handleReset = () => {
    initializeConstraints();
  };

  return (
    <div>
      <div>Constraints</div>
      <ul>
        {participants.map((giver, i) => {
          return (
            <li key={i}>
              <Styled.Name>{giver}</Styled.Name>
              <ul>
                {participants.map((receiver, j) => {
                  return (
                    <li key={j}>
                      <Styled.FlexRow>
                        <FontAwesomeIcon icon={faArrowRight} />
                        <Styled.Name onClick={handleToggle.bind(this, i, j)}>
                          {!constraints.length || constraints[i][j] ? (
                            receiver
                          ) : (
                            <span>{receiver}</span>
                          )}
                        </Styled.Name>
                      </Styled.FlexRow>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <Styled.FlexRow>
        <Styled.Button onClick={handleReset}>
          <Styled.ButtonText>Reset Constraints</Styled.ButtonText>
          <FontAwesomeIcon icon={faTrash} />
        </Styled.Button>
        <Styled.LinkButton to="/assignments">
          <Styled.ButtonText>Assign Secret Santas</Styled.ButtonText>
          <FontAwesomeIcon icon={faArrowRight} />
        </Styled.LinkButton>
      </Styled.FlexRow>
    </div>
  );
};

export default Constraints;
