import React from 'react'
import InputBox from '../otherComponents/InputBox'
import DropDown from '../otherComponents/DropDown'
import Button from '../otherComponents/Button'

function FormMain() {

  return (
    <div className='bg-[#edf2fa] h-[65vh] flex justify-center p-5  w-full'>
      <img src='https://res.cloudinary.com/dcttatiuj/image/upload/v1758388394/Screenshot_2025-09-20_224305_peglxn.png' className='h-90 mt-5 mr-3' />
      <div className='shadow-xl p-3'>
        <h1 className='font-bold text-3xl'>Request a callback</h1>
        <form className='flex flex-col justify-center items-center'>
          <div className='flex mt-3'>
            <div>
                <InputBox text="Student's full name" placeholder="Ex:Rohit Singh" />
                <DropDown label="Class" text={["12th+","6th+","7th+","8th+","9th+"]} />
                <DropDown label="Preffered Courses" text={["Online Courses","Classroom Courses","Online Test Series"]} />
            </div>
            <div>
              <InputBox text="Mobile Number" placeholder="Ex:+91 9876543210" />
              <DropDown label="Goals" text={["NEET","JEE ADVANCED","JEE MAIN","PNCF(Olympiads/Boards and Others)"]} />
              <DropDown label="State" text={["Andhra Pradesh",
                  "Arunachal Pradesh",
                  "Assam",
                  "Bihar",
                  "Chhattisgarh",
                  "Goa",
                  "Gujarat",
                  "Haryana",
                  "Himachal Pradesh",
                  "Jharkhand",
                  "Karnataka",
                  "Kerala",
                  "Madhya Pradesh",
                  "Maharashtra",
                  "Manipur",
                  "Meghalaya",
                  "Mizoram",
                  "Nagaland",
                  "Odisha",
                  "Punjab",
                  "Rajasthan",
                  "Sikkim",
                  "Tamil Nadu",
                  "Telangana",
                  "Tripura",
                  "Uttar Pradesh",
                  "Uttarakhand",
                  "West Bengal",
                ]} />
            </div>
          </div>
            <p className='text-center mb-2 mt-2'>By contunuing, you agree to our<span className='underline'>Terms& Conditions</span></p>
            <Button text={"submit"} styles={"blue"} />
        </form>
      </div>
    </div>
  )
}

export default FormMain
