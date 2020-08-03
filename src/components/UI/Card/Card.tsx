import React from 'react';
import cn from 'classnames';
import './Card.scss';

type Props = {
    customClass?: string,
    imageSrc?: string,
    imageAlt?: string,
    title?: string,
    description?: string,
};

const Card: React.FC<Props> = ({
    title, description, customClass, imageSrc, imageAlt,
}: Props) => (
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
