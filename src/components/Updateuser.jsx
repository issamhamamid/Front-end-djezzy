import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";
import Navbaar from "./Navbaar";

const UpdateUser = () => {
  const { id } = useParams();
  const x = 2;

  const [token, setToken] = useLocalState("", "token");

  useEffect(() => {
    fetch(`/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((userData) => {
        setLastName(userData.lastname);
        setFirstName(userData.firstname);
        setPassword(userData.password);
        setPhoneNumber(userData.number);
        setUsername(userData.username);
      });
  }, []);

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  function userdata() {}

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbaar />
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Update User Info</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
