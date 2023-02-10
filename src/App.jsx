import axios from 'axios';
import './style.css';
import { useEffect, useState } from 'react'
import useFetch from './components/useFetch';
function App() {
  let [data] = useFetch('https://reqres.in/api/users?page=2');
  return (
    <>
      <h1 className='head'>User Details</h1>
      <table>
        {data && data.data.map((val) => {
          return (
            <>
              <tr>
                <td>Name</td>
                <td>{val.first_name + " " + val.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{val.email}</td>
              </tr>
            </>
          )
        })}
      </table>
    </>
  )
}

export default App
