import React, { useState } from "react";

const UserForm = ({doctorname}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get existing data from local storage or create an empty array
        const storedData = JSON.parse(localStorage.getItem("userData")) || [];
        const newEntry = { name, email };

        // Update local storage with the new entry
        storedData.push(newEntry);
        localStorage.setItem("userData", JSON.stringify(storedData));

        // Clear form fields
        setName("");
        setEmail("");
    };

    return (
        <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
            <h2>Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ display: "block", margin: "10px 0" }}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ display: "block", margin: "10px 0" }}
                    />
                </label>
                <label>
                    Doctor:
                <p>{doctorname}</p>
                </label>
                <button type="submit" style={{ marginTop: "10px" }}>Save Data</button>
            </form>
        </div>
    );
};

export default UserForm;
