import React, { useState } from 'react';

export default function Experience() {
  const [showComp2, setShowComp2] = useState(true); // Set showComp2 to true to keep two experiences visible by default
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isHoveringFirstExp, setIsHoveringFirstExp] = useState(false);

  const handleDeleteClick = () => {
    setShowComp2(false); // Set showComp2 to false to hide comp2
  };

  const handleInsertClick = () => {
    setShowComp2(true);
  };

  return (
    <>
      <div 
        className="f12"
        onMouseEnter={() => setIsHoveringFirstExp(true)}
        onMouseLeave={() => setIsHoveringFirstExp(false)}
      >
        <div className="flex justify-between f12">
          <div className="eduName">
            <div contentEditable={true}><b>Company Name 1</b>, Pune</div>
            <div contentEditable={true} className="italic">Intern - Web Developer</div>
          </div>
          <div contentEditable={true} className="eduNameYear">January 2024 - February 2024</div>
        </div>
        <ul className="list">
          <li contentEditable={true}>Developed responsive web pages using HTML, CSS, and JavaScript.</li>
          <li contentEditable={true}>Collaborated with team members to implement new features and functionalities.</li>
          <li contentEditable={true}>Assisted in debugging and troubleshooting technical issues within the web application.</li>
        </ul>
        {isHoveringFirstExp && !showComp2 && (
          <button className='bg-green-500' onClick={handleInsertClick}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus" style={{ color: 'white' }}>
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12h8"/>
          <path d="M12 8v8"/>
        </svg>
        </button>
        )}
      </div>
      {showComp2 && (
        <div
          className="comp2 f12"
          onMouseEnter={() => setShowDeleteButton(true)}
          onMouseLeave={() => setShowDeleteButton(false)}
        >
          
          <div className="flex justify-between f12">
            <div className="eduName">
              <div contentEditable={true}><b>Company Name 2</b>, Pune</div>
              <div className="italic" contentEditable={true}>Intern - Front End Developer</div>
            </div>
            <div className="eduNameYear" contentEditable={true}>February 2024 - March 2024</div>
          </div>
          <ul className="list">
            <li contentEditable={true}>Implemented user interface components following design guidelines and best practices.</li>
            <li contentEditable={true}>Optimized website performance by analyzing and refining front-end code.</li>
            <li contentEditable={true}>Worked closely with designers to translate mockups into interactive web applications.</li>
          </ul>
          {showDeleteButton && (
            <button className="deleteButton bg-red-500" onClick={handleDeleteClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2" style={{ color: 'white' }}>
  <path d="M3 6h18"/>
  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
  <line x1="10" y1="11" x2="10" y2="17"/>
  <line x1="14" y1="11" x2="14" y2="17"/>
</svg>

            </button>
          )}
        </div>
      )}
    </>
  );
}
