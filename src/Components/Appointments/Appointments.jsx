import { useLocation } from "react-router-dom";
import UserForm from "../UserForm/UserForm";

const Appointments = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const doctorName = queryParams.get('name');

    return (
        <div>
            <h1 className="text-5xl text-black text-center">Appointment for  {doctorName}</h1>



            <UserForm doctorname = {doctorName}></UserForm>
                    </div>
                    );
};

                    export default Appointments;
