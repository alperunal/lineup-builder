import styled from 'styled-components';

interface IWrapperProps {
    w: number;
    h: number;
}
  
export const Wrapper = styled.div`
  position: relative;
  height: 500px;
  max-height: ${(props: IWrapperProps) => `${props.h}px`};
  width: 100%;
  max-width: ${(props: IWrapperProps) => `${props.w}px`};
  background-color: #1b7e45;

  @media (min-width: 720px) {
    height: ${(props: IWrapperProps) => `${props.h}px`};
  }
`;

export const DragLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const GrassTexture = styled.div`
  position: absolute;
  background-repeat: repeat;
  background-size: 75px 75px;
  background-position: -20px -20px;
`;

export const FieldLines = styled.div`
  width: 99%;
  height: 99%;
  border: solid 3px rgba(255, 255, 255, 0.5);
  position: relative;
`;

export const GoalLine = styled.div`
  bottom: ${({ bottom }: { bottom?: boolean }) => (bottom ? "-2px" : "auto")};
  top: ${({ bottom }: { bottom?: boolean }) => (bottom ? "auto" : "-2px")};
  width: 16%;
  height: 6%;
  border: solid 3px rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const PenaltyLine = styled.div`
  position: absolute;
  width: 44%;
  height: 14%;
  border: solid 3px rgba(255, 255, 255, 0.5);
  border-bottom: ${({ bottom }: { bottom?: boolean }) =>
    bottom ? "none" : ""};
  border-top: ${({ bottom }: { bottom?: boolean }) => (bottom ? "" : "none")};
  left: 0;
  right: 0;
  margin: auto;
  bottom: ${({ bottom }: { bottom?: boolean }) => (bottom ? "0" : "auto")};
  top: ${({ bottom }: { bottom?: boolean }) => (bottom ? "auto" : "0")};
`;

export const MiddleLine = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 0;
  border: solid 2px rgba(255, 255, 255, 0.5);
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
`;

export const MiddleCircle = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 20%;
  height: 16%;
  border: solid 3px rgba(255, 255, 255, 0.5);
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;
`;