import axios from "axios";
import { useState } from "react";
function Email() {
    const [email, setEmail] = useState("");
    const sendEmail = async (e) => {
        e.preventDefault();

        const data = {
            email,
        };

        const response = await axios.post(
            "http://localhost:8000/api/v1/payment/sendemail",
            data
        );
        console.log(response.data);
    };

    return (
        <div className="">
            <div className=" m-5">
                <form className="flex flex-col gap-5 w-[25%] mx-auto" onSubmit={sendEmail}>
                    <input
                        className="border px-4 py-2 rounded-lg"
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="bg-green-600 px-4 py-2 rounded-lg ">
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Email;
