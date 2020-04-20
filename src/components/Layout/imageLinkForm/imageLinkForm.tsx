import React from 'react';
import './ImageLinkForm.css'




    
const ImageLinkForm = () => {
    return (
       <div>
           <p className=' f4 ma3'>
sample text           </p>
           <div className=' center '>
               <div className=' form  center pa4 br3  shadow-4'>
                    <input className='f5  w-70 center' type='text'/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                     style={{borderRadius:200}}>Detect</button>
                </div>
           </div>
       </div> 
    )
}

export default ImageLinkForm;