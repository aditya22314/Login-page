import React from 'react'  
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 export const Login1 = () => {

  return (
    <>  
    
    <div className='w-full h-full bg-slate-300 '>
      <div className={' ka my-box  bg-white hover:shadow-2xl transition duration-300 mx-auto my-[140px] w-[600px] h-[500px] flex justify-center items-center z-10  shadow-xl  '}> 
                <div className='block w-[600px] h-[500px] bg-white rounded'> 
                <div className='mb-24 '> 
                <h1 className=' font-bold  text-7xl text-blue-ncs flex justify-center'>Login</h1>  
                <div className='flex justify-center'> <div className="underline  w-[61px] h-[6px] bg-red-600"></div></div>
                 </div>
                
                <div className={'   flex flex-col gap-16 '}>
                <div className={' flex  justify-center gap-10 '}> 
                <FontAwesomeIcon icon={faUser} style={{ color: '#2c3068' }} size="lg" />
                 <label >Username</label>
                 <input className={''}type="text" name="" id="" /> 
                 </div>  
                 <div className={'flex  justify-center gap-10'}> 
                 <FontAwesomeIcon icon={faLock} style={{ color: '#2c3068' }} size="lg" />
                 <label >Password</label>
                 <input  type="password" name="" id="" /> 
                 </div>  
                 <div className={'text-center  mb-[40px]'}>
                 <a  
                 >Submit</a> </div> 
                 {/* <div className={'flex  justify-center'}><button className='  bg-mantis px-2 py-2  rounded-xl hover:bg-white mb-14'>Submit</button></div> */}
                 </div>   
                 <div className='flex  mb-3'>   
                 <div className="underline  w-1/4 h-[6px]   bg-mantis"></div>  
                 <div className="underline  w-1/4 h-[6px]   bg-heliotrope"></div> 
                 <div className="underline  w-1/4 h-[6px]  bg-hunyadi-yellow"></div> 
                 <div className="underline  w-1/4 h-[6px]   bg-blue-ncs"></div> 
                 </div>
                 </div>
      </div> 
      </div>
    </>
  )
}
