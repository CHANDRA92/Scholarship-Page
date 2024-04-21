import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idCardNo: '',
    age: '',
    eligibility: '',
    tenthMarks: '',
    eleventhMarks: '',
    twelfthMarks: '',
    mobileNo: '',
    address: '',
    documents: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Scholarship Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="idCardNo" className="block text-sm font-medium text-gray-700">Government ID Card No</label>
          <input type="text" id="idCardNo" name="idCardNo" value={formData.idCardNo} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="eligibility" className="block text-sm font-medium text-gray-700">Eligibility Criteria</label>
          <select id="eligibility" name="eligibility" value={formData.eligibility} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="tenthMarks" className="block text-sm font-medium text-gray-700">10th Marks</label>
          <input type="text" id="tenthMarks" name="tenthMarks" value={formData.tenthMarks} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="eleventhMarks" className="block text-sm font-medium text-gray-700">11th Marks</label>
          <input type="text" id="eleventhMarks" name="eleventhMarks" value={formData.eleventhMarks} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="twelfthMarks" className="block text-sm font-medium text-gray-700">12th Marks</label>
          <input type="text" id="twelfthMarks" name="twelfthMarks" value={formData.twelfthMarks} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input type="text" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows="3" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="documents" className="block text-sm font-medium text-gray-700">Upload Documents (max 50kb)</label>
          <input type="file" id="documents" name="documents" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo (max 50kb, clear backgroud, should be recent photo)</label>
          <input type="file" id="photo" name="photo" onChange={handleFileChange} accept="image/*" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
