import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


function Footer() {
  return (
   
      <div className='flex justify-evenly '>
        <a href='https://github.com/'>
          <FaGithub size={40} style={{ color: "#FFFFFF" }}/>
        </a>
        <a href='https://github.com/'>
          <FaLinkedin size={40} style={{ color: "#FFFFFF" }}/>
        </a>
        <a href='https://github.com/'>
          <AiOutlineMail size={40} style={{ color: "#FFFFFF" }}/>
        </a>
      </div>

  )
}

export default Footer