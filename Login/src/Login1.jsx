import React from 'react'  
import {useState} from 'react'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import * as yup from 'yup';  
import { Link } from "react-router-dom";  
const labelStyle = {
  fontFamily: 'Cambria, sans-serif', 
  fontSize: '16px',  
  
  color: '#333',
  
}; 
const incStyle = {
  fontFamily: 'Cambria, sans-serif', 
  fontSize: '12px',  
  
  color: '#aaa',
};

const validationSchema = yup.object().shape({
  username: yup.string().min(5, '*Username must be at least 5 characters').required('Username is required'),
  password: yup.string().min(8, '*Password must be at least 8 characters').required('Password is required'),
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
      <div className={' ka my-box   bg-white hover:shadow-2xl transition duration-300 mx-auto my-[80px] w-[600px] h-[500px] flex justify-center items-center z-10  shadow-xl  '}> 
                <div className='block w-[600px] h-[500px]   bg-white rounded'> 
                <div className='mb-24 '> 
                <h1 className=' font-bold  text-7xl text-blue-ncs flex justify-center'>Login</h1>  
                <div className='flex justify-center'> <div className="underline  w-[61px] h-[6px] bg-red-600"></div></div>
                 </div>
                
                <div className={'   flex flex-col gap-16 '}>
                <div className={' flex  justify-center gap-10 '}> 
                <FontAwesomeIcon icon={faUser} style={{ color: '#2c3068' }} size="lg" />
                 <label style={labelStyle} >Username</label>
                 <input placeholder='Enter username' className={' relative   rounded-md placeholder:text-sm'}type="text" name="username" id="username"  value={formData.username}
                onChange={handleChange} /> 
                  {errors.username && <div style={incStyle} className="text-red-500 absolute right-[460px]  mt-[30px]  font-extrabold text-xs ">{errors.username}</div>}
                 </div>  
                
                 <div className={'flex  justify-center gap-10'}> 
                 <FontAwesomeIcon icon={faLock} style={{ color: '#2c3068' }} size="lg" />
                 <label style={labelStyle} >Password</label>
                 <input placeholder='Enter password' className={' relative rounded-md placeholder:text-sm'}type="password"  name="password"
                id="password"
                value={formData.password}
                onChange={handleChange} />  
                {errors.password && <div style={incStyle} className="text-red-500 absolute  mt-[30px] text-xs font-extrabold right-[460px]">{errors.password}</div>}
                 </div>   
                 
                 <div className={'text-center  '}> 
                 <a className='bi' 
                 >Submit</a> <div className='text-right mr-4 mt-4'><h1 className='' style={labelStyle}>Change Password ?  <Link to='/password-reset' className=' text-cyan-800 font-bold' > Click Here </Link></h1> </div>  </div>  
              
                 {/* <div className={'flex  justify-center'}><button className='  bg-mantis px-2 py-2  rounded-xl hover:bg-white mb-14'>Submit</button></div> */}
                 </div>   
                 <div className='flex   mb-8'>   
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
