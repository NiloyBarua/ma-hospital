
import { useLocation } from "react-router-dom";
import ConsultationForm from "../ConsultationForm/ConsultationForm";
import { useEffect, useState } from "react";

const Appointments = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const doctorId = queryParams.get('id'); // Convert the query param to a number


  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    fetch('../../../public/doctors.json')
      .then(res => res.json())
      .then(data => setDoctors(data.doctors))
  }, [])



  const selectedDoctor = doctors.find(
    (doctor) => doctor.doctor_id === doctorId
  );
  console.log(selectedDoctor);







  return (
    <div>

      <h1>{doctors.length}</h1>

      <ConsultationForm selectedDoctor={selectedDoctor}></ConsultationForm>
    </div>
  );
};

export default Appointments;
