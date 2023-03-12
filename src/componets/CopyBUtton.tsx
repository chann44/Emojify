import { useEffect, useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineCopy } from "react-icons/ai";
const delay = 1;

export const CopyButon = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const intervalRef = useRef<any>(0);
  function handleStartClick() {
    const intervalId = setTimeout(() => {
      setCopied(false);
    }, 2000);
    intervalRef.current = intervalId;
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        handleStartClick();
      }}
    >
      {copied ? <AiOutlineCheck color="green" /> : <AiOutlineCopy />}
    </div>
  );
};
