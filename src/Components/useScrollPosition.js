import React, { useState, useEffect} from "react";


export default function useScrollPosition(scrollFactor=0) {

const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return position*scrollFactor;
}

