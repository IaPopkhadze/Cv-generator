import React from "react";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import { IoIosArrowBack } from "react-icons/io";
import {useNavigate} from 'react-router-dom'
const ResumeFields = () => {
  const navigate=useNavigate()
  return (
    <div >
      <div style={myStyle.backToStartPage} onClick={()=>navigate('/')}>
        <IoIosArrowBack />
      </div>
      <div style={myStyle.currentField}>
        <PersonalInformation />
      </div>
    </div>
  );
};

const myStyle = {
  backToStartPage: {
    position:'absolute',
    top:'45px',
    left:'48px',
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'1.3rem',
    cursor:'pointer'
  },
  currentField:{
    position:'absolute',
    top:'47px',
    left:'149px'
  }
};

export default ResumeFields;
