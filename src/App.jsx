import './App.css'
import React from 'react'
import Detail from './components/Detail/Detail'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className='body'>
      <div className="project-container">
        <div className="details-container">
          <Detail title={"Address"} detail1={"Surkhet, NP12"} detail2={"Birendranagar 06"}><FaLocationDot /></Detail>
          <Detail title={"Phone"} detail1={"+0098 9893 5647"} detail2={"+0096 3434 5678"}><FaPhoneAlt /></Detail>
          <Detail title={"Email"} detail1={"codinglab@gmail.com"} detail2={"info.codinglab@gmail.com"}><MdEmail /></Detail>
        </div>
        <div className="form-container">
          <h2>Send us a message</h2>
          <h5>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</h5>
          <form>
            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Enter your email' />
            <textarea placeholder='Enter your message'></textarea>
            <div className="form-button-container">
              <button>Send Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App