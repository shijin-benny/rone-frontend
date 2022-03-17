import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function EditPage() {
  const [data, setData] = useState({
    username: '',
    mobile: '',
    location: '',
    email: '',
    profession: '',
    address: '',
    bio: '',
    image: ''

  })
  const [details, setDetails] = useState([])

  useEffect(() => {
    axios.get('https://test-api-rone.herokuapp.com/profilePage').then((res) => {
      setDetails(res.data[0])
    })
  }, [])
  console.log(details);
  const fileInput = useRef()

  const handleDetails = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  const selectFile = () => {
    fileInput.current.click()
  }
  const handleFile = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.files[0]
    })

  }

  const saveProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', data.image);
    formData.append('username', data.username);
    formData.append('mobile', data.mobile);
    formData.append('email', data.email);
    formData.append('location', data.location);
    formData.append('address', data.address);
    formData.append('profession', data.profession);
    formData.append('bio', data.bio);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    console.log(formData);
    axios.post('https://test-api-rone.herokuapp.com/editprofile', formData, config).then((response) => {
      setData(response.data)
    })

  }
  const [action,setAction] = useState({
    username:"hidden" ,
    mobile: "hidden",
    location: "hidden",
    email:"hidden",
    profession: "hidden",
    address: "hidden",
    bio: "hidden",
    button:"hidden"
  }) 
  return (
    <>
      <div className='w-full h-screen bg-red-500 fixed'>
        <div className='grid grid-cols-3 grid-rows-auto m-10 h-auto bg-white border-t-2 shadow-lg '>
          <div className='col-span-1 border-r'>
            <div className='flex flex-col items-center mt-20 relative'>
              <img className='rounded-full w-52 h-52' src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1647249227~hmac=986511ed4a16c1d5c45161f5ac88ce31" alt="" />
              <span className='m-2 font-semibold'>userName</span>
              <input type="file" name='image' className='mt-5 ml-5' ref={fileInput} onChange={handleFile} hidden accept=".png, .jpg, .jpeg" />
              <button className='px-4 py-2 font-semibold border-2 border-red-500 hover:bg-red-500 hover:text-white' onClick={selectFile}>Upload new Picture</button>
            </div>

          </div>
          <div className='col-span-2 m-3 text-center'>
            <div className='mt-8'>
              <h1 className=' text-3xl font-bold'>Profile Settings</h1>
            </div>
            <div className='mt-20 flex flex-col items-center'>
              <div className='relative'>
                <input type="text" value={details.username} className='w-96 h-10 border-b p-2 ' />
                <span class="material-icons absolute right-1" onClick={()=>setAction({...action,username:"",button:""})}>
                  edit
                </span>
              </div>

              <div className={`relative mt-2 ${action.username}`}>
                <input type="text" name='username' placeholder='Name' className="w-96 h-10 border-2 p-2 border-green-300 " onChange={handleDetails} />
                <span class="material-icons absolute text-2xl right-1" onClick={()=>setAction({...action,username:"hidden"})}>
                  save
                </span>
              </div>
              <div className='relative '>
              <input type="tel"  value={details.mobile} className='mt-5 w-96 h-10 border-b p-2'/>
              <span class="material-icons absolute right-1 top-5" onClick={()=>setAction({...action,mobile:"",button:""})}>
                  edit
                </span>
              </div>
              <div className={`relative mt-2 ${action.mobile}`}>
              <input type="tel" name='mobile' placeholder='Mobile Number' className='mt-5 w-96 h-10 border-2 border-green-300 p-2' onChange={handleDetails} />
              <span class="material-icons absolute text-2xl right-1 top-6" onClick={()=>setAction({...action,mobile:"hidden"})}>
                  save
                </span>
              </div>
              <div className='relative '>
              <input type="email" value={details.email} className='mt-5 w-96 h-10 border-b p-2'  />
              <span class="material-icons absolute right-1 top-5" onClick={()=>setAction({...action,email:"",button:""})}>
                  edit
                </span>
              </div>
              <div className={`relative mt-2 ${action.email}`}>
              <input type="email" name='email' placeholder='Email' className='mt-5 w-96 h-10 border-2 border-green-300 p-2' onChange={handleDetails} />
              <span class="material-icons absolute text-2xl right-1 top-6" onClick={()=>setAction({...action,email:"hidden"})}>
                  save
                </span>
              </div>

              <div className='relative '>
              <input value={details.location} className='mt-5 w-96 h-10 border-b p-2'  />
              <span class="material-icons absolute right-1 top-5" onClick={()=>setAction({...action,location:"",button:""})}>
                  edit
                </span>
              </div>
              <div className={`relative mt-2 ${action.location}`}>
              <input type="text" name='location' placeholder='Edit Location' className='mt-5 w-96 h-10 border-2 border-green-300 p-2' onChange={handleDetails} />
              <span class="material-icons absolute text-2xl right-1 top-6" onClick={()=>setAction({...action,profession:"hidden"})}>
                  save
                </span>
              </div>  
              <div className='relative '>
              <input type="text" value={details.profession} className='mt-5 w-96 h-10 border-b p-2 '  />
              <span class="material-icons absolute right-1 top-5" onClick={()=>setAction({...action,profession:"",button:""})}>
                  edit
                </span>
                </div>    
                <div className={`relative mt-2 ${action.profession}`}>
                <input type="text" name='profession' placeholder='Profession' className='mt-5 w-96 h-10 border-2 p-2 border-green-300' onChange={handleDetails} />
                <span class="material-icons absolute text-2xl right-1 top-6" onClick={()=>setAction({...action,profession:"hidden"})}>
                  save
                </span>
                  </div>        
                  <div className='relative '>
                  <input type="text" value={details.address} className='mt-5 w-96 h-10 border-b p-2'/>
                  <span class="material-icons absolute right-1 top-5" onClick={()=>setAction({...action,address:"",button:""})}>
                  edit
                </span>
             </div>
             <div className={`relative mt-2 ${action.address}`}>
             <input type="text" name='address' placeholder='Address' className='mt-5 w-96 h-10 border-2 p-2' onChange={handleDetails} />
             <span class="material-icons absolute text-2xl right-1 top-6" onClick={()=>setAction({...action,address:"hidden"})}>
                  save
                </span>
             </div>
             <div className='relative '>
             <textarea name="bio" id="" cols="10" rows="3" className='w-96 mt-5 p-2' placeholder={details.bio}></textarea>
             <span class="material-icons absolute right-1 top-5" onClick={()=>setAction({...action,bio:"",button:""})}>
                  edit
                </span>
               </div>
               <div className={`relative mt-2 ${action.bio}`}>
               <textarea name="bio" id="" cols="10" rows="3" className='border-2 w-96 mt-5 p-2' placeholder='Bio' onChange={handleDetails}></textarea>
               <span class="material-icons absolute text-2xl right-1 top-6" onClick={()=>setAction({...action,bio:"hidden"})}>
                  save
                </span>
               </div>        
             <button className={`mt-8 px-8 py-1 bg-red-500 text-white text-xl font-semibold hover:bg-black ${action.button}`} onClick={saveProfile}>Save</button>
            </div>

          </div>

        </div>
      </div>


    </>
  )
}

export default EditPage