import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";

import * as Styled from "../styles";
import Participant from "../components/Participant";
import NewParticipant from "../components/NewParticipant";

const Participants: React.FC = () => {
  const [participants, setParticipants] = useState<string[]>([]);

  useEffect(() => {
    const storedParticipants = window.localStorage.getItem("participants");
    if (storedParticipants !== null) {
      setParticipants(JSON.parse(storedParticipants));
    }
  }, []);

  const handleAdd = (participant: string) => {
    setParticipants((prev) => {
      const newParticipants = [...prev, participant];
      window.localStorage.setItem(
        "participants",
        JSON.stringify(newParticipants)
      );
      return newParticipants;
    });
  };

  const handleDelete = (toDelete: number) => {
    setParticipants((prev) => {
      const newParticipants = prev.filter((_, i) => i !== toDelete);
      window.localStorage.setItem(
        "participants",
        JSON.stringify(newParticipants)
      );
      return newParticipants;
    });
  };

  const handleClear = () => {
    setParticipants([]);
    window.localStorage.setItem("participants", JSON.stringify([]));
  };

  return (
    <div>
      <div>Participants</div>
      <ul>
        {participants.map((participant, i) => {
          return (
            <li key={i}>
              <Participant
                name={participant}
                onDelete={handleDelete.bind(this, i)}
              />
            </li>
          );
        })}
      </ul>
      <NewParticipant onAdd={handleAdd} />
      <Styled.FlexRow>
        <Styled.Button onClick={handleClear}>
          <Styled.ButtonText>Clear All</Styled.ButtonText>
          <FontAwesomeIcon icon={faTrash} />
        </Styled.Button>
        <Styled.LinkButton to="/constraints">
          <Styled.ButtonText>Set Constraints</Styled.ButtonText>
          <FontAwesomeIcon icon={faArrowRight} />
        </Styled.LinkButton>
      </Styled.FlexRow>
    </div>
  );
};

export default Participants;
