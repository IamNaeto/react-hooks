import React, { useEffect, useState } from "react";

const InputElement = () => {
  const random_boolean = Math.random() >= 0.5;
  const [isLoading, setIsLoading] = useState(random_boolean === true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })
  return isLoading ? <div>Loading...</div> : <input placeholder="Enter Some Text" />;
};

export default InputElement;