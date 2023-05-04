import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Submit form data to backend or perform any necessary actions
    setFormSubmitted(true);
  }

  function renderForm() {
    return (
      <form onSubmit={handleSubmit} className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-[-9px]">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone-number"
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }

  function renderThankYouMessage() {
    return (
      <div className="bg-black text-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4">Thank you for submitting the form!</h2>
        <p>We'll be in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {formSubmitted ? renderThankYouMessage() : renderForm()}
    </div>
  );
}

export default Form;
