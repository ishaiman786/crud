import axios from 'axios'
import React, { useEffect, useState } from 'react'

const initialUserInfo ={
  name: '',
  username:'',
  email: '',
  phone: '',
  website: '',
  address: {
    street: '',
    suite: '',
    city: '', 
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
  },
  },
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
    },


}

function ViewUser(props)  {
  const [userInfo, setUserInfo]=useState(initialUserInfo)
  useEffect(()=>{
    fetchUserData()

  },[]);
  const fetchUserData = async()=>{
    try{
      const response = await axios.get('https://localhost:4000/users/'+ props.userId)
      if(response){
        console.log(response.data);
        setUserInfo(response.data);
    }
    return
  }
    catch(e){
      console.log(e);
    }
  
  }
  return (
    <div className='user-view'>
      <h1>Basic Info</h1>
      <div className='box'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>full name</span>
            <span>{userInfo.name}</span>
          </p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>Username</span>
            <span>{userInfo.username}</span>
          </p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>full name</span>
            <span>{userInfo.name}</span>
          </p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>Username</span>
            <span>{userInfo.username}</span>
          </p>
        </div><div className='col-sm-12 col-md-6'>
          <p>
            <span>full name</span>
            <span>{userInfo.name}</span>
          </p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>Username</span>
            <span>{userInfo.username}</span>
          </p>
        </div>
      </div>
      </div>
      <h1>User Address</h1>
      <div className='box'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>full name</span>
            <span>{userInfo.name}</span>
          </p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>Username</span>
            <span>{userInfo.username}</span>
          </p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>full name</span>
            <span>{userInfo.name}</span>
          </p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>Username</span>
            <span>{userInfo.username}</span>
          </p>
        </div><div className='col-sm-12 col-md-6'>
          <p>
            <span>full name</span>
            <span>{userInfo.name}</span>
          </p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <p>
            <span>Username</span>
            <span>{userInfo.username}</span>
          </p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default ViewUser