import React, { Component, useEffect } from 'react'

// useState and useEffect
// HANDLE CHANGE AND HANDLE SUBMIT FUNCTIONS
// handle change will update the state
// handle submit is where we will do the fetch request


export default function Nav({ handleSubmit, handleChange}) {  

  const logo = (
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40">
      <path d="M480.5 726Q418 726 374 681.938 330 637.875 330 576q0-63 44.062-106.5Q418.125 426 480 426q63 0 106.5 43.5t43.5 106q0 62.5-43.5 106.5t-106 44Zm-.5-60q38 0 64-26.438 26-26.437 26-63.562 0-38-26-64t-63.5-26q-37.5 0-64 26T390 575.5q0 37.5 26.438 64Q442.875 666 480 666Zm201 310q18-56 29-109.5t16-79.5q-51 58-116 84.5T480 898q-136 0-238.5-19.5T80 842v-64q56 18 110.5 29t80.5 16q-55-45-84-113.5T158 576q0-137 19.5-239T214 176h64q-18 56-28.5 109.5T235 365q48-55 114-83t131-28q137 0 239 19.5T880 310v64q-56-18-109.5-29T691 330q57 49 84 115t27 131q0 137-19.5 239T746 976h-65ZM479.882 838Q589 838 665.5 761.618q76.5-76.383 76.5-185.5Q742 467 665.618 390.5q-76.383-76.5-185.5-76.5Q371 314 294.5 390.382q-76.5 76.383-76.5 185.5Q218 685 294.382 761.5q76.383 76.5 185.5 76.5Z"/>
    </svg>
  )

  return (
    <div>
        <div id='nav-container'>
            <form onSubmit={handleSubmit}>
              <div id='nav-search'>
                Add Location:
                <input id='nav-search-bar' placeholder='city' onChange={handleChange}></input>
              </div>
            </form>
            <div id='nav-logo'>Logo</div>
            <div id='nav-login'>Login</div>
        </div>
    </div>
  )
}
