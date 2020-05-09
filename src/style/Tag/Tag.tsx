import React from 'react';
import classnames from 'classnames';

function Tag(props: any) {
    return (
        <span
            className={
                classnames(
                    'tag',
                    props.customClass
                )
            }
        >{props.children}</span>
    )
}

export default Tag;