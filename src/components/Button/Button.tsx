import * as React from 'react';
import { stringify } from 'querystring';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { X, Search } from 'react-feather';
import './style.css'
import { IconButton, IIconProps, IContextualMenuProps, Stack, Link } from 'office-ui-fabric-react';

//import { iconAddGlyph, iconSearch } from '@wfp/icons';

export interface IButtonProps {
  children?: React.ReactNode,
  
  disabled?:boolean
  buttonText: string;

  click?:boolean
  onClick?: (click:boolean) => void
  backgroundColor?:string  
  color?:string
  icon?: string
  outline?:boolean
  isIcon?:boolean
  primary?: boolean;

danger?: boolean;
  
}




export default (props: IButtonProps) => {
  const {backgroundColor,buttonText,color,isIcon,icon,disabled,primary,danger} = props;
  let styles;
    primary ? (styles = "primary") : danger ? (styles = "danger") : (styles = "");
  
  return (
    <div>
       <button className="btn btn-primary"  style={{backgroundColor,color}}  disabled={disabled} onClick={() =>
    props.click === true && ( alert(" Clicked"))}   type="button">
    {props.children}
    
   

            


  </button> 
   </div>

  )

  
  }
