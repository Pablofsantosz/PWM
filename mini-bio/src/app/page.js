import React from 'react';
import "./index.css";
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <div className='main'>
   
    <img src="/images/MinhaFoto.jpg" alt="Logo" className='minha-foto' />
    <h1 >Pablo Felipe dos Santos</h1>
    <p>Studying a Bachelor's Degree in Computer Science (5th semester) at the Catholic University of Pernambuco (UNICAP). Passionate about software development and quality assurance, I'm always looking to improve my skills and contribute to meaningful projects. I develop using <strong>PythonPython, C#, JavaScript, C, Java, </strong>and use libraries and frameworks like React, Django, and Node.js to build impactful projects.</p>

   </div>
  </>
  );
}
