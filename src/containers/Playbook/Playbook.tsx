import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Block } from 'components/UI';

import './Playbook.module.scss';

const Playbook = (): JSX.Element => (
    <div>
        <Container>
            <h1 className="heading">
                <FormattedMessage
                    id="playbook.heading"
                    defaultMessage="Playbook"
                />
            </h1>
            <div>
                <Block
                    title="Tactics"
                >
                    s
                </Block>
            </div>
        </Container>
    </div>
);

export default Playbook;
