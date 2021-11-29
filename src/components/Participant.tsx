import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import * as Styled from '../styles';

type Props = {
    name: string;
    onDelete: () => void;
}

const Participant: React.FC<Props> = (props: Props) => {
    const handleDelete = () => {
        props.onDelete();
    };

    return (
        <Styled.FlexRow>
            <Styled.Name>
                {props.name}
            </Styled.Name>
            <Styled.Button onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} />
            </Styled.Button>
        </Styled.FlexRow>
    );
};

export default Participant;
