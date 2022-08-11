import React from 'react'

export default function GenreButton(props) {
  return (
    <button className="border rounded px-4 py-2 mt-5 border-primary text-primary">{props.name}</button>
  )
}
