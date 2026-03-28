import React from "react";
import PropTypes from "prop-types";

function Userprofile({ 
  name, 
  age, 
  email,
  isActive = false,
  hobbies = [],
  onEdit
}) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: isActive ? '#e0ffe0' : '#ffe0e0',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: '0.3s'
    }}
    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>

      <p>
        <strong>Status:</strong>
        {isActive ? ' Active User' : ' Inactive User'}
      </p>

      <div>
        <strong>Hobbies:</strong>
        <ul>
          {hobbies.length > 0 ? (
            hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
          ) : (
            <li>No hobbies listed</li>
          )}
        </ul>
      </div>

      <button onClick={onEdit}>
        Edit Profile
      </button>
    </div>
  );
}

Userprofile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  onEdit: PropTypes.func.isRequired
};

export default Userprofile;