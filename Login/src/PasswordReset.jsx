import {React,useState} from 'react' 
import './App.css'  
import * as yup from 'yup';

const labelStyle = {
  fontFamily: 'Amazon-Ember, sans-serif', // Change the font family as desired
  fontSize: '16px', // Change the font size as desired
  color: '#333', // Change the color as desired
}; 
const validationSchema = yup.object().shape({
  currentPassword: yup.string().min(8, 'Current Password must be at least 8 characters').required('Current Password is required'),
  newPassword: yup.string().min(8, 'New Password must be at least 8 characters').required('New Password is required'),
  reenterPassword: yup
    .string()
    .min(8, 'Re-enter Password must be at least 8 characters')
    .required('Re-enter Password is required') 
    .test('passwords-match', 'Passwords must match', function (value) {
      return value === this.parent.newPassword;
    }),
});
export const PasswordReset = () => {  
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    reenterPassword: '',
  });

  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    reenterPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validationSchema
      .validateAt(name, { ...formData, [name]: value })
      .then(() => {
        setErrors({ ...errors, [name]: '' });
      })
      .catch((error) => {
        setErrors({ ...errors, [name]: error.message }); 

      }); 
      if (name === 'newPassword' || name === 'reenterPassword') {
        if (formData.newPassword === formData.reenterPassword) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            reenterPassword: '', // Clear the error message
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            reenterPassword: 'Passwords must match',
          }));
        }
      }
  };
  return (
    <div className='' >
      <div className=' bg-white hover:shadow-2xl transition duration-300 mx-auto w-[600px] h-[400px]  z-10 relative shadow-xl'>
         <div className=' absolute mt-[18px]  w-[600px] h-[39px]'><h1 className=' font-bold mb-[350px] text-center text-4xl text-blue-ncs h-[100px]'>Change Your Password</h1>   </div>
          <div className=" absolute mt-[59px]  w-[120px] h-[6px]  left-[225px] bg-red-600"></div>
          <div className='absolute mt-[100px] w-full flex flex-col gap-9'> 
          <div className='hi'>
          <label style={labelStyle} className='w-36' >Current Password</label>  
          <div><input placeholder='Enter current password' className={' relative  w-[250px]  rounded-md placeholder:text-sm'}type="password"  
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange} 
                 />
                 {errors.currentPassword && <div className="text-red-500  text-[12px]">{errors.currentPassword}</div>}</div>  
                  
                   </div>  
                   
                 <div className='hi'>
                 <label  style={labelStyle}  className='w-36'>New Password</label>  
        <div>  <input placeholder='Enter new password' className={' relative w-[250px]  rounded-md placeholder:text-sm'}type="password" 
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange} /> 
                {errors.newPassword && <div className="text-red-500 text-[12px]">{errors.newPassword}</div>}
                 </div> </div> 
                 <div className='hi'>
                 <label  className='w-36' style={labelStyle} >Re-enter Password</label>  
       <div>   <input placeholder='Re-enter new password' className={' relative w-[250px]  rounded-md placeholder:text-sm'}type="password" 
                 name="reenterPassword"
                 value={formData.reenterPassword}
                 onChange={handleChange}
                /> 
                 {errors.reenterPassword && <div className="text-red-500 text-[12px]">{errors.reenterPassword}</div>}
                  </div>  </div>
           </div> 
           <a className='bi absolute mt-[310px] left-[210px]  ' 
                 >Submit</a> 
      </div>  
      
      <div>

      </div>
    </div>
  )
}
