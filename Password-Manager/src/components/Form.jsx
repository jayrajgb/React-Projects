import React, { useContext, useState } from 'react'
import axios from 'axios';
import { AppContext } from '../contexts/AppContext';

const Form = () => {

    const [url, setUrl] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { fetchPasswords, backendUrl } = useContext(AppContext)

    const submitForm = async (formData) => {
        try {
            const { data } = await axios.post(backendUrl + "/passwords", formData);
            if (data.success) {
                console.log("Create Response: ", data.response);
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
            fetchPasswords();
        }
    };

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
        const formData = { url, username, password };

        // Directly submit form with the latest values
        submitForm(formData);
    };

    return (
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
                
                <button className='w-2/5 mt-10 mb-4 rounded-lg bg-teal-500 hover:bg-teal-700 cursor-pointer p-2 self-center'>Add</button>
            </form>
        </div>
    )
}

export default Form
