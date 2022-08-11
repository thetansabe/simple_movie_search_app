import React from "react";

export default function Paging(props) {

  const activeStyle =
    "cursor-pointer inline-block rounded leading-none py-2 px-3 bg-primary";
  const visiblePages = 5;

  return (
    <div className="flex items-center justify-center text-white my-10 font-bold">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </span>

      {new Array(visiblePages).fill(0).map((item, index) => (
        <span
          key={index}
          className={
            props.activatingPage === index + 1
              ? activeStyle
              : "cursor-pointer inline-block rounded leading-none py-2 px-3"
          }
          onClick={() => {
            //setPage -> render next page
            props.setPage(index + 1);
          }}
        >
          {index + 1}
        </span>
      ))}

      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
}
