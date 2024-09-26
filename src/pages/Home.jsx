import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        mobile: '',
        checkbox: false
    });

    const [error, setError] = useState({
        name: '',
        username: '',
        email: '',
        mobile: '',
        checkbox: ''
    });

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value === 'checkbox' ? e.target.checked : e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = {};
        if (data.name || data.name.trim() === "") {
            error.name = 'Name is required';
        }
        if (data.username || data.username.trim() === "") {
            error.username = 'Username is required';
        }
        if (data.email || data.email.trim() === "") {
            error.email = 'Email is required';
        }
        if (data.mobile || data.mobile.trim() === "") {
            error.mobile = 'Mobile is required';
        }
        if (data.checkbox === false) {
            error.checkbox = 'Checkbox is required';
        }
        setError(error);
        if (Object.keys(error).length > 0) {
            return;
        }else{
            alert('Form submitted successfully');
            localStorage.setItem('user', JSON.stringify(data));
            setData({
                name: '',
                username: '',
                email: '',
                mobile: '',
                checkbox: false
            });
            navigate('/selection');
        }
    }


    return (
        <div>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '40vw',
                marginLeft: 'auto',
                marginRight: 'auto',
            }} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" value={data.name} onChange={handleInput} />
                <span style={{ color: 'red', height: '20px' }}>{error.name}</span>

                <input type="text" name="username" placeholder="username" value={data.username} onChange={handleInput} />
                <span style={{ color: 'red', height: '20px' }}>{error.username}</span>

                <input type="email" name="email" placeholder="email" value={data.email} onChange={handleInput} />
                <span style={{ color: 'red', height: '20px' }}>{error.email}</span>

                <input type="mobile" name="mobile" placeholder="mobile" value={data.mobile} onChange={handleInput} />
                <span style={{ color: 'red', height: '20px' }}>{error.mobile}</span>

                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" onChange={handleInput} />
                    <label htmlFor="checkbox">Share my registration data with Superapp</label>
                </div>
                <span style={{ color: 'red', height: '20px' }}>{error.checkbox}</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home
