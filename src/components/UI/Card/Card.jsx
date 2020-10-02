import React from 'react';
import cn from 'classnames';

import './Card.scss';

const Card = ({
    title, description, customClass, imageSrc, imageAlt,
}) => (
    <div
        className={
            cn(
                customClass,
                'card',
            )
        }
    >
        {imageSrc ? (
            <img
                src={imageSrc}
                alt={imageAlt}
                className="card__image"
            />
        ) : null}
        <div className="card__info">
            <div className="card__title">
                {title}
            </div>
            <p className="card__description">
                {description}
            </p>
        </div>
    </div>
);

Card.defaultProps = {
    customClass: '',
    imageSrc: '',
    imageAlt: '',
    title: '',
    description: '',
};

export default Card;
