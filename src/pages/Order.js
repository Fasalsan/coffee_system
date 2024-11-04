import React, { useState } from 'react';

function Order() {
  // State to store the category name
  const [categoryName, setCategoryName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Category Name Submitted:", categoryName); // Log the category name
    setSubmitted(true); // Set submitted state to true
    setCategoryName(''); // Clear the input after submission
  };

  return (
    <div>
      <h2>Submit a Category</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <input
            type="text"
            value={categoryName}
            onChange={handleInputChange}
            placeholder="Enter category name"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Category "{categoryName}" submitted successfully!</p>}
    </div>
  );
}

export default Order;
