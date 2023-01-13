import React from "react";
import { useRef } from "react";

export const Patient = () => {
  const listRef = (useRef < HTMLUListElement) | (null > null);
  listRef.current?.lastElementChild?.scrollIntoView();
  return (
    <>
      <div>
        <h1>How are you?</h1>

      </div>
    </>
  );
};
