import React, { useState } from 'react';

const MyProfile = () => {
  // State to track if the form is in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // User profile data
  const [profileData, setProfileData] = useState({
    name: "I'm User",
    email: 'user@mail.com',
  });

  // Handle input changes
  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  // Toggle between edit and view mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>My Profile</h2>

      <div style={{ marginBottom: '20px' }}>
        <strong>Name:</strong>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        ) : (
          <p>{profileData.name}</p>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <strong>Email:</strong>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        ) : (
          <p>{profileData.email}</p>
        )}
      </div>

      <button
        onClick={toggleEditMode}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isEditing ? 'Save Changes' : 'Edit Profile'}
      </button>
    </div>
  );
};

export default MyProfile;
