"use client"
import React, { useState } from 'react';


// Certification component
const Certification = ({ name, date, onDelete, disableDelete }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex justify-between f12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative' }} // Added inline style for relative positioning
    >
      <li contentEditable={true}>{name}</li>
      <div contentEditable={true}><b>{date}</b></div>
      {hovered && !disableDelete && (
        <button
          style={{ position: 'absolute', right: '-40px', paddingLeft: '20px',  }} // Adjusted inline style for button position
          onClick={onDelete}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        </button>
      )}
    </div>
  );
};

// Certifications component
export default function Certifications() {
  const defaultCertification = { name: "New Certification", date: "January 2025" };
  const [certifications, setCertifications] = useState([
    { name: "Cisco Certified Network Associate (CCNA)", date: "October 2023" },
    { name: "Microsoft Certified: Azure Administrator Associate", date: "September 2023" }
  ]);
  const [hovered, setHovered] = useState(false);

  const handleDelete = (index) => {
    if (certifications.length === 1) return; // Prevent deleting the last certification
    setCertifications(prevState => {
      const updatedCertifications = [...prevState];
      updatedCertifications.splice(index, 1);
      return updatedCertifications;
    });
  };

  const handleAddCertification = () => {
    setCertifications(prevState => [
      ...prevState,
      { ...defaultCertification }
    ]);
  };

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {certifications.map((certification, index) => (
        <Certification
          key={index}
          name={certification.name}
          date={certification.date}
          onDelete={() => handleDelete(index)}
          disableDelete={certifications.length === 1}
        />
      ))}
      {hovered && (
        <button onClick={handleAddCertification}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff11" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg></button>
      )}
    </div>
  );
}
