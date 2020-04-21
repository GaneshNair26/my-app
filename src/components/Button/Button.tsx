import * as React from 'react';
import { stringify } from 'querystring';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { X, Search, Icon } from 'react-feather';
import { Button } from 'reactstrap';
import { Camera } from 'react-feather';



import { IconButton, IIconProps, IContextualMenuProps, Stack, Link } from 'office-ui-fabric-react';
import { actions } from '@storybook/addon-actions';

//import { iconAddGlyph, iconSearch } from '@wfp/icons';

export interface IButtonProps {
  children?: React.ReactNode,
  
  disabled?:boolean
  buttonText: string;

  click?:boolean
  onClick?: (onClick:any) => void
  backgroundColor?:string  
  color?:string
  Icon?:(Icon)
  outline?:boolean
  isIcon?:boolean
  primary?: boolean;
  flag?:number
  action?:any


danger?: boolean;
  
}




export default (props: IButtonProps) => {
  const {flag,backgroundColor,buttonText,color,isIcon,Icon,disabled,action,primary,danger} = props;
 
  if(flag===1)
  {
  return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
       <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={() =>
         props.click === true && ( alert(" Clicked"))}  type="button">
      
           <div>
            <X/>  
          </div>
            {props.children}
      </button> 
   </div>

  )
       }
       else if (flag===2)
       {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
           <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={() =>
             props.click === true && ( alert(" Clicked"))}   type="button">
          
               <div>
                <Search/>  
              </div>
                {props.children}
          </button> 
       </div>
    
      )
      
       }
       else if(flag===3)
       {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }} >
           <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={() =>
             props.click === true && ( alert(" Clicked"))}   type="button">
          
               <div>
                <Camera/>  
              </div>
                {props.children}
          </button> 
       </div>
    
      )
       }
       else
       
       {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
           <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={() =>
             props.click === true && ( alert(" Clicked"))}   type="button">
          
                {props.children}
          </button> 
       </div>
    
      )
       }
  }



