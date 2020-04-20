import React, { useState } from 'react'; 
import { storiesOf } from "@storybook/react";
import DatePickerT from './datepicker';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';



export interface State {
   // startDate:any,
   //   onChange:()=> Date,
   // setStartDate:any
   date: any;
   onChange : () => void
   startDate:Date;
   handleChange: () => void
 }

storiesOf("DateSelector", module)
    .add("Date Selection",
       ()=> { 
         const [startDate , setStartDate] = useState(new Date());
         const handleChange =(date : any)=>{
           setStartDate(date);
         }
         
     return(
      <DatePickerT   startDate={startDate}  onChange={handleChange} flag={1}  />
     );
       }
   )
     

    .add("Date Selection with time",
    ()=> {
      const [startDate , setStartDate] = useState(new Date());
      const handleChange =(date : any)=>{
        setStartDate(date);
      }
       return(
         <DatePickerT startDate={startDate}  onChange={handleChange} flag={2}
         showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={1}
      timeCaption="Time"
      dateFormat="yyyy/MM/dd HH:mm" />
       );
      
    }
 )

    .add("Date Range Selection",
    () => {
      const [startDate, setStartDate] = useState(new Date("2020/02/08"));
      const [endDate, setEndDate] = useState(new Date("2024/02/10"));
      const handleChange =(date : any)=>{
         setStartDate(date);
       }

       const handleChange1 =(date : any)=>{
         setEndDate(date);
       }
      return (
        <>
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            
          />
          <DatePicker
            selected={endDate}
            onChange={handleChange1}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            
          />
        </>
      );
    } );

