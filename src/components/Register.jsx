import React, { useState } from "react";
import logo from "../assets/djezzy.png";

function Register() {
  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (event) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // your form submission logic here
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="p-4 mx-auto max-w-lg pt-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-md shadow-md"
        >
          <img
            className=" object-scale-down h-20 w-20"
            src={logo}
            alt="djeezy logo"
          />
          <div class="font-medium p-4 self-center text-center text-2xl uppercase text-gray-800">
            Créer un compte
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="userName"
            >
              Nom d'utilisateur
            </label>
            <input
              className="border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400"
              type="text"
              name="usertName"
              id="userName"
              placeholder="Nom d'utilisateur"
              value={registerFormData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="firstName"
            >
              Prénom
            </label>
            <input
              className="border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Prénom"
              value={registerFormData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="lastName"
            >
              Nom
            </label>
            <input
              className="border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Nom"
              value={registerFormData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="phoneNumber"
            >
              Numéro de téléphone
            </label>
            <input
              className="border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400"
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="XX XX XX XX XX"
              value={registerFormData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="dateOfBirth"
            >
              Année de naissance
            </label>
            <input
              className="border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400"
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={registerFormData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className="border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400"
              type="password"
              name="password"
              id="password"
              placeholder="Entrez le mot de passe"
              value={registerFormData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="passwordConfirmation"
            >
              Confirmez le mot de passe
            </label>
            <input
              className="border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400"
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Confirmez le mot de passe"
              value={registerFormData.passwordConfirmation}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="flex items-center justify-center focus:outline-none border-4 border-red-600 rounded-full text-white text-base bg-red-600 hover:bg-red-700 py-2 w-full transition duration-150 ease-in"
            type="submit"
          >
            Créer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
