import { useEffect } from "react";

export default function useClickOutSide(ref, fun) {
  useEffect(() => {
    const listner = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      fun();
    };
    document.addEventListener("mousedown", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
    };
  }, [ref]);
}
