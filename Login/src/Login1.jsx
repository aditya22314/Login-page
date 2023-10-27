import React from 'react'  
import {useState} from 'react'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import * as yup from 'yup';  
import { Link } from "react-router-dom";   
import EyeOpened from '~icons/material-symbols/visibility-outline'
import EyeClosed from '~icons/material-symbols/visibility-off-outline'
const labelStyle = {
  fontFamily: 'Cambria, sans-serif', 
  fontSize: '16px',  
  
  color: '#333',
  
}; 
const incStyle = {
  fontFamily: 'Cambria, sans-serif', 
  fontSize: '12px',  
  fontWeight:300,
  color: 'red',
};
 
const buttonStyle = {
  position: 'fixed', // or 'absolute' depending on your requirements
  top: '345px', // Adjust the top position as needed
  right: '430px', // Adjust the right position as needed
  zIndex: 9999,  
  fontFamily: 'Cambria, sans-serif', 
  fontSize: '12px',  
  background: 'var(--bgc)',
  height:'40px',
  width:'40px',
  borderRadius: '50%' ,
  transition: 'background-color 0.3s', 
  
};
const validationSchema = yup.object().shape({
  username: yup.string().min(5, '*Username must be at least 5 characters').required('Username is required'),
  password: yup.string().min(8, '*Password must be at least 8 characters').required('Password is required'),
});

 export const Login1 = () => {  
   
  
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });  

  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    }); 
   
    
    validationSchema
    .validateAt(name, formData)
    .then(() => {
      setErrors({ ...errors, [name]: '' });
    })
    .catch((error) => {
      setErrors({ ...errors, [name]: error.message });
    });
};


  return (
    <>  
    
    <div className='w-full h-full bg-slate-300 '>
      <div className={' ka my-box   bg-white hover:shadow-2xl transition duration-300 mx-auto my-[80px] w-[600px] h-[500px] flex justify-center items-center z-10  shadow-xl  '}> 
                <div className='block w-[600px] h-[500px]   bg-white rounded'> 
                <div className='mb-24  '> 
                <h1 className=' font-bold  text-7xl text-blue-ncs flex justify-center'>Login</h1>  
                <div className='flex justify-center'> <div className="underline  w-[61px] h-[6px] bg-red-600"></div></div>
                 </div>
                
                <div className={'   flex flex-col gap-16 '}>
                <div className={' flex  justify-center gap-10 '}> 
                <FontAwesomeIcon icon={faUser} style={{ color: '#2c3068' }} size="lg" />
                 <label style={labelStyle} >Username</label>
            <div className='flex border-2 rounded border-slate-500 px-2 w-[220px]'> <input placeholder='Enter username' className={' relative grow  rounded-md placeholder:text-sm border-none outline-none'}type="text" name="username" id="username"  value={formData.username}
                onChange={handleChange} />   </div> 
                  {errors.username && <div style={incStyle} className="text-red-500 absolute right-[480px]  mt-[30px]  font-extrabold text-xs ">{errors.username}</div>}
                 </div>  
                
                 <div className={'flex  justify-center gap-10'}> 
                 <FontAwesomeIcon icon={faLock} style={{ color: '#2c3068' }} size="lg" />
                 <label style={labelStyle} >Password  </label>
                 <div className=' px-2  flex border-2 w-[220px] border-slate-500 rounded items-center '><input placeholder='Enter password' className={' relative rounded-md placeholder:text-sm grow border-none outline-none'}
                 type={isVisible?"text":"password"}  name="password"
                id="password"
                value={formData.password}  
                onChange={handleChange}  />
                <button onClick={()=>setIsVisible(!isVisible)}
                >
                {
                  isVisible?(<EyeClosed/>):(<EyeOpened />)
                }</button>
                
                
                </div>{errors.password && <div style={incStyle} className="text-red-500 absolute  mt-[30px] text-xs font-extrabold right-[480px]">{errors.password}</div>}  
                

                 </div>   
                
                 <div className={'text-center  '}> 
                 <a className='bi' 
                 >Submit</a>   </div>  
             
                 {/* <div className={'flex  justify-center'}><button className='  bg-mantis px-2 py-2  rounded-xl hover:bg-white mb-14'>Submit</button></div> */}
                 </div>    
                 
                 <div className='flex  mt-8'>   
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
