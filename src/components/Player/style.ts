import styled from 'styled-components';

interface IStyleProps {
    mainColor: string;
    secondaryColor: string;
    numberColor: string;
    x: number;
    y: number;
}

export const Wrapper = styled.div`
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid ${({ secondaryColor }: IStyleProps) => secondaryColor};
    background-color: ${({ mainColor }: IStyleProps) => mainColor};
    left: ${({ x }: IStyleProps) => `${x}px`};
    top: ${({ y }: IStyleProps) => `${y}px`};
    transform: ${({ x, y }: IStyleProps) => `translate(-15px, -15px)`};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 720px) {
        width: 30px;
        height: 30px;
        border: 3px solid ${({ secondaryColor }: IStyleProps) => secondaryColor};
    }
`;

export const Num = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: ${({ numberColor }: { numberColor: string }) => numberColor};

    @media (min-width: 720px) {
        font-size: 16px;
    }
`;

export const Name = styled.div`
    position: absolute;
    top: 30px;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px #000;
    white-space: nowrap;

    @media (min-width: 720px) {
        top: 35px;
        font-size: 15px;
    }
`;
