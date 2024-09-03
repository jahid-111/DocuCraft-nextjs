"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" bg-red-200 h-screen flex flex-col gap-4 justify-center items-center">
      <h2 className=" text-6xl">Something went wrong!</h2>
      <h2 className=" font-bold bg-red-700 text-white p-2">{error?.message}</h2>
      <button
        className=" px-4 py-2 bg-green-500  text-white    font-semibold rounded-md"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
