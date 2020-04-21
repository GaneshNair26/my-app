import styled from 'styled-components';
import { rgba } from 'polished';
import { Button } from 'reactstrap';

interface ButtonProps {
  outline?: boolean;
  disabled?: boolean;
  isSelected?: boolean;
  theme: any;
}

export const CustomButton = styled(Button)`
  font-family: ${(props: ButtonProps) =>
    props.theme.typographyPrimary.fontFamily};
  height: 35px;
  min-width: 20px;
  border-radius: 4px;
  border: solid 1px #5f27cd;
  ${(props: ButtonProps) => (props.outline ? `color: #5f27cd` : `color: #fff`)};
  ${(props: ButtonProps) => (props.outline ? `` : `background-color: #5f27cd`)};
  &:hover {
    ${(props: ButtonProps) =>
      !props.outline ? `color: #5f27cd` : `color: #fff`};
    ${(props: ButtonProps) =>
      !props.outline
        ? `background-color: ${rgba('#5f27cd', 0.1)}`
        : `background-color: #5f27cd`};
  }
  &:disabled {
    color: #c6c6c6;
    pointer-events: none;
    border: solid 1px #c6c6c6;
    background-color: ${rgba('#5f27cd', 0.1)};
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    ${(props: ButtonProps) =>
      props.outline ? `color: #5f27cd` : `color: #fff`};
    ${(props: ButtonProps) =>
      props.outline ? `` : `background-color: #5f27cd`};
  }
  &:active {
    ${(props: ButtonProps) =>
      props.outline ? `color: #5f27cd` : `color: #fff`} !important;
    ${(props: ButtonProps) =>
      props.outline ? `background-color: #fff` : `background-color: #5f27cd`};
  }
`;
export const LoginButton = styled(Button)`
  height: 44px;
  font-family: ${(props: ButtonProps) =>
    props.theme.typographyPrimary.fontFamily};
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  width: 214px;
  margin: 0 auto;
  display: block;
  text-transform: uppercase;
  background: rgb(95, 39, 205);
  &:hover {
    background: rgb(95, 39, 205);
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    ${(props: ButtonProps) =>
      props.outline ? `color: #5f27cd` : `color: #fff`};
    ${(props: ButtonProps) =>
      props.outline ? `` : `background-color: #5f27cd`};
  }
`;
export const InnerText = styled.div`
  font-family: ${(props: ButtonProps) =>
    props.theme.typographyPrimary.fontFamily};
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
`;
export const InnerIcon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
`;

export const CheckedButton = styled.div`
  font-family: ${(props: ButtonProps) =>
    props.theme.typographyPrimary.fontFamily};
  cursor: pointer;
  height: 35px;
  width: 100%;
  padding: 0.375rem 0.75rem;
  min-width: 20px;
  border-radius: 4px;
  border: solid 1px ${(props: ButtonProps) => props.theme.palette.primarycolor};
  ${(props: ButtonProps) =>
    props.isSelected &&
    `
  background-color: ${
    props.isSelected
      ? props.theme.palette.primarycolor
      : props.theme.palette.white
  };
`}
  ${(props: ButtonProps) =>
    props.isSelected
      ? `color:${props.theme.palette.white}`
      : `color: ${props.theme.palette.primarycolor}`};
`;

/* In case we need add hover */
// &:hover {
//   ${(props: ButtonProps) =>
//     !props.isSelected ? `color: #fff` : `color: #5f27cd`};
//   ${(props: ButtonProps) =>
//     !props.isSelected
//       ? `background-color: ${rgba('#5f27cd', 1)}`
//       : `background-color: ${rgba('#5f27cd', 0.1)}`}
// }

export const InnerIconStyle = {
  marginRight: '5px',
};
export const InnerIconStyleWithoutText = {
  marginRight: '0px',
};
