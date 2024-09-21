import React, { useState } from "react";

function Form({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-col justify-center items-center mob:w-full mob:text-xs">
      <div className="flex flex-col gap-3 w-2/3 justify-center items-center mob:w-full mob:text-xs">
        <label htmlFor="urlIp">Enter your Shorten URL : 👇🏻</label>
        <input
          type="text"
          value={input} 
          onChange={handleChange}
          name="urlIp"
          id="urlIp"
          className="border border-blue-400 rounded-xl outline-none pl-3 h-9 w-full m-auto mob:w-full"
        />
      </div>
      <button type="submit" className="border bg-green-700 w-2/3 m-auto h-9 rounded-2xl text-white mob:w-full mob:text-xs">SUBMIT</button>
    </form>
  );
}

export default Form;
