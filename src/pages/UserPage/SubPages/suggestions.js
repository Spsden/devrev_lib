import React from "react";

const Suggestions = () => {
  function getRandomItems(arr, numItems) {
    if (numItems >= arr.length) {
      return arr; 
    }

    const shuffled = arr.slice(); 
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
    }

    return shuffled.slice(0, numItems); 
  }

  
  return <div>Suggestions</div>;
};

export default Suggestions;
