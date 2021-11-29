import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import * as Styled from '../styles';

type Props = {
    onAdd: (participant: string) => void;
}

const NewParticipant: React.FC<Props> = (props: Props) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.FormEvent) => {
        setInputValue((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const participant = inputValue.trim();

        if (participant.length > 0) {
            setInputValue('');
            props.onAdd(participant);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Styled.FlexRow>
                <Styled.Input type="text" placeholder="New participant" value={inputValue} onChange={handleChange}></Styled.Input>
                <Styled.Button type="submit">
                    <FontAwesomeIcon icon={faPlus} />
                </Styled.Button>
            </Styled.FlexRow>
        </form>
    );
};

export default NewParticipant;