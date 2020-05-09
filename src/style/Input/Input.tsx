import React from 'react';
import classnames from 'classnames';

function Input(props: any) {
    return (
        <input
            {...props}
            className={
                classnames(
                    'input',
                    props.customClass
                )
            }
        />
    );
}

export default Input;