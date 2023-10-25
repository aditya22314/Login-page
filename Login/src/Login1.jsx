import React from 'react'  
import {useState} from 'react'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import * as yup from 'yup';  

const validationSchema = yup.object().shape({
  username: yup.string().min(5, '*Username must be at least 5 characters').required('Username is required'),
  password: yup.string().min(6, '*Password must be at least 6 characters').required('Password is required'),
});

 export const Login1 = () => {  

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
                 <input placeholder='Enter username' className={' relative   rounded-md'}type="text" name="username" id="username"  value={formData.username}
                onChange={handleChange} /> 
                  {errors.username && <div className="text-red-500 absolute  mt-[30px]  font-extrabold text-xs right-[628px]">{errors.username}</div>}
                 </div>  
                
                 <div className={'flex  justify-center gap-10'}> 
                 <FontAwesomeIcon icon={faLock} style={{ color: '#2c3068' }} size="lg" />
                 <label >Password</label>
                 <input placeholder='Enter password' className={' relative rounded-md'}type="password"  name="password"
                id="password"
                value={formData.password}
                onChange={handleChange} />  
                {errors.password && <div className="text-red-500 absolute  mt-[30px] text-xs font-extrabold right-[628px] ">{errors.password}</div>}
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
