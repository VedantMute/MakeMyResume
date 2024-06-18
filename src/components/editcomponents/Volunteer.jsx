import React, { useState } from 'react';
import Title from './Title';

export default function Volunteer() {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleDeleteClick = () => {
    // Delete the component here
    const volunteerComponent = document.getElementById('volunteerComponent');
    volunteerComponent.remove();
  };

  return (
    <div contentEditable={true} id="volunteerComponent">
        <Title titleName="VOLUNTEER / ACHIEVEMENT (optional)"/>
      <div
        className="flex justify-between f12"
        onMouseEnter={() => setShowDeleteButton(true)}
        onMouseLeave={() => setShowDeleteButton(false)}
      >
        <div contentEditable={true}><b>Organisation : <span>ABC Community Center, City</span></b></div>
        <div contentEditable={true}><b>May 2020 - Present</b></div>
        {showDeleteButton && (
          <button className="deleteButton "  onClick={handleDeleteClick}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
          </button>
        )}
      </div>
    </div>
  );
}
