import { useState } from "react";
import { Link } from "react-router-dom";


const ConsultationForm = ({ selectedDoctor }) => {

    console.log(selectedDoctor);



    const [formData, setFormData] = useState({
        patientName: "",
        dateOfBirth: "",
        sex: "",
        mobile: "",
        email: "",
        doctor: "",
        specialty: "",
        consultationDate: "",
        consultationTime: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
     
        // Add further logic (e.g., save data to backend/Firebase).
    };
    return (
        <div style={{ maxWidth: "600px", padding: "20px" }} className="text-black border-4 border-black mt-10 mx-auto">

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label>
                    Patient Name:
                    <input
                        className="bg-white text-black border-2"
                        type="text"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Date Of Birth:
                    <input
                        className="bg-white text-black border-2"
                        type="date"
                        name="consultationDate"
                        value={formData.consultationDate}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Sex:
                    <select className="bg-white text-black border-2" name="sex" value={formData.sex} onChange={handleChange} required>
                        <option value="" disabled>
                            Select
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <label>
                    Mobile:
                    <input className="bg-white text-black border-2"
                        type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                    />
                </label>

                <label>
                    Email:
                    <input className="bg-white text-black border-2"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        // required
                    />
                </label>

                {selectedDoctor &&
                    <label>
                        Doctor:
                        <input
                            name="doctor"
                            className="bg-white text-black border-2"
                            value={selectedDoctor.doctor_name}
                            required
                        >
                        </input>
                    </label>

                }

                {
                    selectedDoctor &&
                    <label>
                        Specialty:
                        <input
                            className="bg-white text-black border-2"
                            type="text"
                            name="specialty"
                            readOnly
                            value={selectedDoctor.doctor_specialist}
                        />
                    </label>
                }

                {/* Date and Time */}
                <label>
                    Date:
                    <input
                        className="bg-white text-black border-2"
                        type="date"
                        name="consultationDate"
                        value={formData.consultationDate}
                        onChange={handleChange}
                        required
                    />
                </label>


                <label>
                    Time:
                    <select
                        className="bg-white text-black border-2"
                        type="time"
                        name="consultationTime"
                        value={formData.consultationTime}
                        onChange={handleChange}>
                        {/* // required */}
                        <option value="">9.00 - 5.00</option>
                        <option value="">9.00 - 5.00</option>
                        <option value="">9.00 - 5.00</option>
                        <option value="">9.00 - 5.00</option>
                        </select>
                </label>



                <button type="submit" style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    <Link to={'/confirmation'}>Submit</Link>
                </button>
            </form>
        </div>
    );
};

export default ConsultationForm;
