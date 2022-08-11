import React from 'react'

export default function SearchBar(props) {
  return (
    <div className="flex px-4 text-white mb-8">
        <div className="flex-1 relative">
          <input
            type="text"
            className="w-full p-4 bg-transparent border border-primary rounded-lg focus:border-primary"
            placeholder="Search movie..."
            onChange={props.change}
            value = {props.stateValue}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-4 right-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
  )
}
