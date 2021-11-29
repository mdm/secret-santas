import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';

import * as Styled from '../styles';
import Participant from '../components/Participant';
import NewParticipant from '../components/NewParticipant';

const Participants: React.FC = () => {
    const [participants, setParticipants] = useState<string[]>([]);

    const handleAdd = (participant: string) => {
        setParticipants((prev) => [...prev, participant]);
    };

    const handleDelete = (toDelete: number) => {
        setParticipants((prev) => prev.filter((_, i) => i !== toDelete));
    };

    const handleClear = () => {
        setParticipants([]);
    };

    return (
        <div>
            <div>Participants</div>
            <ul>
                {participants.map((participant, i) => {
                    return (
                        <li key={i}>
                            <Participant name={participant} onDelete={handleDelete.bind(this, i)}/>
                        </li>
                    );
                })}
            </ul>
            <NewParticipant onAdd={handleAdd}/>
            <Styled.FlexRow>
            <Styled.Button onClick={handleClear}>
                    <Styled.ButtonText>Clear All</Styled.ButtonText>
                    <FontAwesomeIcon icon={faTrash} />
                </Styled.Button>
                <Styled.Button>
                    <Styled.ButtonText>Set Constraints</Styled.ButtonText>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Styled.Button>
            </Styled.FlexRow>
        </div>
    );
};

export default Participants;
