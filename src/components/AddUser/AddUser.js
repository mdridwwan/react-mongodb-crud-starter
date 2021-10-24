import React from 'react';
import { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = {name, email}
        console.log(newUser);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId){
                alert('User add the Successfully.')
                e.target.reset();

            }
        })
        // nameRef = '';
        // emailRef = '';
        e.preventDefault();
    }
    return (
        <div>
            <h2>please add an User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} />
                <input type="email" ref={emailRef} />
                <input type="submit" value="add" />
            </form>
        </div>
    );
};

export default AddUser;