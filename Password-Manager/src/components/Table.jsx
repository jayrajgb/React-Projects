import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';

const Table = () => {
  const { showPasswords, fetchPasswords, passwordsList, backendUrl } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(passwordsList && passwordsList.length >= 1){
      fetchPasswords();
    }
  }, [location]);

  useEffect(() => {
    console.log(passwordsList);
  }, [passwordsList]);

  const handleDelete = async (e) => {
    const confirmDelete = window.confirm("Are you sure you want to delete all entries?");
    if (confirmDelete) {
      try {
        const { data } = await axios.delete(backendUrl + "/passwords");
        if (data.success) {
          console.log("Delete Response: ", data.response);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error(error.message);
      } finally{
        fetchPasswords()
      }
    }
};

  return (
    <div className="w-4/5 md:w-3/5 text-sm md:text-[16px] text-white my-16 flex flex-col items-center">
      {showPasswords ? (
      <>
        <table className="w-full table-auto rounded-t-md overflow-hidden font-mono outline outline-teal-500">
          <thead className="bg-teal-500">
            <tr className="*:text-center *:w-1/3 *:py-2">
              <td>URL</td>
              <td>Username</td>
              <td>Password</td>
            </tr>
          </thead>
          {passwordsList.map((item) => (
            <tbody className="outline outline-teal-500" key={item._id}>
              <tr
                className="*:text-center *:w-1/3 *:py-2 *:text-wrap *:px-2 *:outline *:outline-teal-500 hover:bg-black/40 cursor-pointer"
                onClick={() => navigate("/edit", { state: item })}
              >
                <td>{item.url}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <button onClick={handleDelete} className='bg-red-500 hover:bg-red-700 rounded-full p-2 mt-4'>
          <img className='size-4 md:size-5' src="/bin.svg" alt="bin"  />
        </button>
      </>
      ) : (
        <button
          className="w-3/5 md:w-2/5 rounded-lg bg-teal-500 hover:bg-teal-700 cursor-pointer p-2"
          onClick={fetchPasswords}
        >
          Fetch Passwords
        </button>
      )}

    </div>
  );
};

export default Table;
