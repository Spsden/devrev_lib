import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


function Footer() {
  return (
   
      <div className='flex justify-evenly '>
        <a href='https://github.com/spsden'>
          <FaGithub size={40} style={{ color: "#FFFFFF" }}/>
        </a>
        <a href='https://linkedin.com/in/spsden'>
          <FaLinkedin size={40} style={{ color: "#FFFFFF" }}/>
        </a>
        <a href="mailto:pratapsinghsuraj420@gmail.com">
          <AiOutlineMail size={40} style={{ color: "#FFFFFF" }}/>
        </a>
      </div>

  )
}

export default Footer