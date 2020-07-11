import React from 'react';
import classnames from 'classnames';
import './Card.scss';

interface IProps {
    customClass?: string;
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
}

const Card: React.FC<IProps> = ({
    title, description, customClass, imageSrc, imageAlt,
}: IProps) => (
    <div
        className={
            classnames(
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
