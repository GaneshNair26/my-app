import * as React from 'react';
import { color } from '@storybook/addon-knobs';
export interface IButtonProps {
  children?: React.ReactNode,
  
  disabled?:boolean

  click :boolean
  onClick?: (click:boolean, clickcolor:string) => void
 
background:string
  
 
 
  
}

const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button: React.SFC<IButtonProps> = (props) => (
  <button disabled={props.disabled} background-color={props.background} onClick={() =>
    props.click === true && ( alert(" Clicked"))} type="button">
    {props.children}
  </button>
);
Button.defaultProps = {
  onClick: () => {}
};
export default Button;