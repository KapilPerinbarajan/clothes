import React, { useState } from 'react';
import './ProfilePage.css';

// Card Component
export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white shadow-xl rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

// CardContent Component
export const CardContent = ({ children }) => {
  return <div className="mt-2 text-black">{children}</div>;
};

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('Profile');
  const [profileDetails, setProfileDetails] = useState({
    fullName: 'Kapil',
    mobile: '9360596739',
    email: '- not added -',
    gender: 'MALE',
    dob: '- not added -',
    location: '- not added -',
    alternateMobile: '- not added -',
    hintName: '- not added -',
  });

  const [savedCard, setSavedCard] = useState({
    cardNumber: '**** **** **** 1234',
    cardHolder: 'Kapil',
    expiryDate: 'MM/YY'
  });

  const [savedUPI, setSavedUPI] = useState({
    upiID: 'kapil@upi',
    upiName: 'Kapil'
  });

  const [addresses, setAddresses] = useState([{
    addressLine1: '123 Street Name',
    addressLine2: 'Apt 456',
    city: 'City Name',
    state: 'State Name',
    zipCode: '123456'
  }]);

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [isEditingUPI, setIsEditingUPI] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails({ ...profileDetails, [name]: value });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setSavedCard({ ...savedCard, [name]: value });
  };

  const handleUPIChange = (e) => {
    const { name, value } = e.target;
    setSavedUPI({ ...savedUPI, [name]: value });
  };

  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAddresses = [...addresses];
    updatedAddresses[index][name] = value;
    setAddresses(updatedAddresses);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditCardClick = () => {
    setIsEditingCard(true);
  };

  const handleEditUPIClick = () => {
    setIsEditingUPI(true);
  };

  const handleEditAddressClick = () => {
    setIsEditingAddress(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleSaveCardClick = () => {
    setIsEditingCard(false);
  };

  const handleSaveUPIClick = () => {
    setIsEditingUPI(false);
  };

  const handleSaveAddressClick = () => {
    setIsEditingAddress(false);
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteAccount = () => {
    alert('Account deleted successfully!');
    setShowDeleteConfirmation(false);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Profile':
        return (
          <div className="p-6 text-black">
            <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
            <ul className="space-y-2">
              {Object.entries(profileDetails).map(([key, value]) => (
                <li key={key}>
                  <strong>{`${key.replace(/([A-Z])/g, ' $1')}:`}</strong>{' '}
                  {isEditing ? (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-1 rounded-md w-full"
                    />
                  ) : (
                    value
                  )}
                </li>
              ))}
            </ul>
            {isEditing ? (
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={handleSaveClick}
              >
                Save
              </button>
            ) : (
              <button
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
          </div>
        );
      case 'Orders & Returns':
        return <div className="p-6 text-black">Orders & Returns Content</div>;
      case 'Saved Cards':
        return (
          <div className="p-6 text-black">
            <h3 className="text-xl font-semibold mb-4">Saved Card Details</h3>
            <ul className="space-y-2">
              {Object.entries(savedCard).map(([key, value]) => (
                <li key={key}>
                  <strong>{`${key.replace(/([A-Z])/g, ' $1')}:`}</strong>{' '}
                  {isEditingCard ? (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleCardChange}
                      className="border border-gray-300 p-1 rounded-md w-full"
                    />
                  ) : (
                    value
                  )}
                </li>
              ))}
            </ul>
            {isEditingCard ? (
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={handleSaveCardClick}
              >
                Save
              </button>
            ) : (
              <button
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                onClick={handleEditCardClick}
              >
                Edit
              </button>
            )}
          </div>
        );
      case 'Saved UPI':
        return (
          <div className="p-6 text-black">
            <h3 className="text-xl font-semibold mb-4">Saved UPI Details</h3>
            <ul className="space-y-2">
              {Object.entries(savedUPI).map(([key, value]) => (
                <li key={key}>
                  <strong>{`${key.replace(/([A-Z])/g, ' $1')}:`}</strong>{' '}
                  {isEditingUPI ? (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleUPIChange}
                      className="border border-gray-300 p-1 rounded-md w-full"
                    />
                  ) : (
                    value
                  )}
                </li>
              ))}
            </ul>
            {isEditingUPI ? (
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={handleSaveUPIClick}
              >
                Save
              </button>
            ) : (
              <button
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                onClick={handleEditUPIClick}
              >
                Edit
              </button>
            )}
          </div>
        );
      case 'Addresses':
        return (
          <div className="p-6 text-black">
            <h3 className="text-xl font-semibold mb-4">Address Details</h3>
            {addresses.map((address, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold">Address {index + 1}</h4>
                <ul className="space-y-2">
                  {Object.entries(address).map(([key, value]) => (
                    <li key={key}>
                      <strong>{`${key.replace(/([A-Z])/g, ' $1')}:`}</strong>{' '}
                      {isEditingAddress ? (
                        <input
                          type="text"
                          name={key}
                          value={value}
                          onChange={(e) => handleAddressChange(index, e)}
                          className="border border-gray-300 p-1 rounded-md w-full"
                        />
                      ) : (
                        value
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {isEditingAddress ? (
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={handleSaveAddressClick}
              >
                Save
              </button>
            ) : (
              <button
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                onClick={handleEditAddressClick}
              >
                Edit
              </button>
            )}
          </div>
        );
      case 'Delete Account':
        return (
          <div className="p-6 text-black">
            <h3 className="text-xl font-semibold mb-4">Delete Account</h3>
            <p className="mb-4">Are you sure you want to delete your account? This action cannot be undone.</p>
            {showDeleteConfirmation ? (
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={confirmDeleteAccount}
              >
                Confirm Delete
              </button>
            ) : (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            )}
          </div>
        );
      default:
        return <div className="p-4 text-black">Content for {activeSection}</div>;
    }
  };

  return (
    <div className="flex min-h-screen p-4 bg-black">
      <aside className="w-64 bg-white p-4 shadow-xl rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Account</h2>
        <p className="text-sm mb-6">{profileDetails.fullName}</p>
        <nav>
          <ul className="space-y-2">
            {['Profile', 'Orders & Returns', 'Saved Cards', 'Saved UPI', 'Addresses','Delete Account'].map((section) => (
              <li key={section}>
                <button
                  className={`w-full justify-start p-2 rounded-md text-left text-black ${
                    activeSection === section ? 'bg-blue-100 text-black' : 'hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 ml-6">
        <Card className="shadow-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-black">{activeSection}</h2>
          <CardContent>{renderSectionContent()}</CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProfilePage;
