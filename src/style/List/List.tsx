import React from 'react';
import classnames from 'classnames';

function List(props: any) {
    return (
        <ul
            className={
                classnames(
                    'list',
                    props.customClass
                )
            }
        >{props.children}</ul>
    )
}

export default List;