import { useState, useCallback, useEffect } from 'react'
interface typing {
  result: string;
}

const useTyping = () => {
  const [typing, setTyping] = useState<string>();

  const handlerinput = useCallback(
    (event:any) => {
      if (event === null) {
        setTyping('input kosong');
      } else {
        setTyping(event);
        console.log(event);
      }
    },
    [typing]
  );

  return { typing, handlerinput };
};

export default useTyping;
