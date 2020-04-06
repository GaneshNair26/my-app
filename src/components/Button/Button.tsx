import * as React from 'react';
export interface IButtonProps {
  children?: React.ReactNode,
  
  disabled?:boolean
 // flag:boolean
  click?:boolean
  onClick?: (click:boolean) => void
  backgroundColor:string  
  
}


export default (props: IButtonProps) => {
  const {backgroundColor,disabled} = props;
  return (
    <div>
       <button style={{backgroundColor}} disabled={disabled} onClick={() =>
    props.click === true && ( alert(" Clicked"))} type="button">
    {props.children}
  </button> 


  </div>
  )
  }
