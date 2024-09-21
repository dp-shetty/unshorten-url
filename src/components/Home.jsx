import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Form from "../common/Form";

function Home() {
  const [submittedUrl, setSubmittedUrl] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiToken = import.meta.env.VITE_API_TOKEN;

  
  const url = submittedUrl
    ? `${apiUrl}=${submittedUrl}`
    : null;
  const headers = apiToken;

  
  const { apiData, error } = useFetch(url, headers);

  const handleFormSubmit = (inputValue) => {
    setSubmittedUrl(inputValue); 
  };

  console.log(apiData);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <header className="h-9 flex justify-center items-center bg-slate-700 w-full rounded-t-md text-white mob:text-xs mt-0">
        WELCOME TO UNSHORT YOUR URL
      </header>
      <div className="border border-gray-400 w-10/12 m-auto mt-12 p-8 rounded-lg flex flex-col gap-9 mob:w-11/12 mob:p-3 mob:text-xs">
        <Form onSubmit={handleFormSubmit} />
        <div className="flex justify-center">
          {apiData ? (
            <div className="flex flex-col items-center gap-5 p-3">
              <p className="text-red-700">
                YOUR UN-SHORTENED URL :{" "}
                <a
                  href={apiData.unshortened_url}
                  className="text-blue-600"
                  target="_blank"
                >
                  {apiData.unshortened_url}
                </a>
              </p>
              <p className="text-red-700">
                YOUR SHORTENED URL :{" "}
                <a
                  href={apiData.shortened_url}
                  className="text-blue-600"
                  target="_blank"
                >
                  {apiData.shortened_url}
                </a>
              </p>
            </div>
          ) : (
            <p>{submittedUrl ? "Loading..." : "Please submit a URL."}</p>
          )}
        </div>
      </div>
      <footer className="fixed bottom-0 w-full flex justify-center items-center h-9 rounded-b-md bg-blue-600 text-white mob:text-xs">
        ALL RIGHTS ARE RESERVED @dpshetty
      </footer>
    </>
  );
}

export default Home;
