import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from './contexts/AppContext'

const Edit = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [url, setUrl] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");
    const { backendUrl } = useContext(AppContext)

    useEffect(() => {
        console.log("Received State: ", location)
        setUrl(location.state.url)
        setUsername(location.state.username)
        setPassword(location.state.password)
        setId(location.state._id)
    }, [location])

    const updateForm = async (formData) => {
        try {
            const { data } = await axios.patch(backendUrl + "/passwords", formData);
            if (data.success) {
                console.log("Update Response: ", data.response);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            // Clear input fields after submission
            setUrl("");
            setUsername("");
            setPassword("");
            navigate("/");
        }
    };

    const deleteUser = async (id) => {
        try {
            const { data } = await axios.delete(backendUrl + `/passwords/${id}`);
            if (data.success) {
                console.log("Delete Response: ", data.response);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            // Clear input fields after submission
            setUrl("");
            setUsername("");
            setPassword("");
            setId("");
            navigate("/")
        }
    }

    const handleForm = (e) => {
        e.preventDefault();

        if (!url || !username || !password) {
            alert("Please fill all fields!");
            return;
        }

        if (!(url.startsWith("https://") || url.startsWith("http://") || url.startsWith("www."))) {
            alert("URL must be valid!");
            setUrl("");
            return;
        }

        if (password.length < 4) {
            alert("Password must be at least 4 characters!");
            setPassword("");
            return;
        }

        // Create a new formData object
        const formData = { url, username, password, id };

        // Directly submit form with the latest values
        updateForm(formData);
    };

    const handleDelete = (e) => {
        e.preventDefault(); // Prevent form submission

        if (!url || !username || !password) {
            alert("Not a valid user!");
            return;
        }

        const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
        if (confirmDelete) {
            
            deleteUser(id)

            // Clear inputs
            setUrl("");
            setUsername("");
            setPassword("");
        }
    };

    return (
        <div className='w-full overflow-hidden min-h-screen bg-neutral-800 pt-16 flex flex-col items-center'>
            <div  onClick={()=>navigate("/")} >
                <img className='absolute top-0 left-0 invert size-4 md:size-5 m-6 rounded-full hover:ring hover:ring-[#b02e3a] hover:ring-offset-2' src="/arrow.svg" alt='arrow' />
            </div>
            <div className='w-4/5 md:w-3/5 max-h-96 md:h-96 bg-black/40 mt-16 rounded-md font-mono text-white p-4'>
                <form onSubmit={handleForm} className='w-full flex flex-col gap-y-1'>
                    <label htmlFor="URL">URL</label>
                    <input type="text" className='input' onChange={e => setUrl(e.target.value)} value={url} name='URL' />
                    <br />
                    <label htmlFor="Username">Username</label>
                    <input type="text" className='input' onChange={e => setUsername(e.target.value)} value={username} name='Username' />
                    <br />
                    <label htmlFor="Password">Password</label>
                    <input type="password" className='input' onChange={e => setPassword(e.target.value)} value={password} name='Password' />

                    <div className="flex justify-center gap-4 mt-10 mb-4">
                        {/* Update Button (submits form) */}
                        <button type="submit" className="w-2/5 rounded-lg bg-teal-500 hover:bg-teal-700 cursor-pointer p-2">
                            Update
                        </button>

                        {/* Delete Button (calls delete function) */}
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="w-2/5 rounded-lg bg-red-500 hover:bg-red-700 cursor-pointer p-2">
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit
