import React, {useEffect, useState} from "react";
import logo from "../assets/djezzy.png";
import {useStateContext} from "../contexts/ContextProvider";
import {useLocalState} from "../util/useLocalStorage";

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


  const [formErrors , setFormErrors ] = useState({})
  const [isSubmit , setIsSubmit] = useState(false)


  const handleChange = (event) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
   event.preventDefault()
    setFormErrors(validate())
    setIsSubmit(true)



  };
  const [token , setToken] = useLocalState("" , "token");

  useEffect(()=>{
    if(Object.keys(formErrors).length ===0 && isSubmit){
      const reqBody = {
        "username": registerFormData.username,
        "password": registerFormData.password,
        "roles": "ROLE_ADMIN",
        "firstname": registerFormData.firstName,
        "number": registerFormData.phoneNumber,
        "birthDate": "2001-01-20",
        "lastname": registerFormData.lastName
      }
      fetch("/users/adduser", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },


        method: "POST" ,
        body: JSON.stringify(reqBody) ,
      }).then(response => {if(response.status ===200) return response.json();
      }).then(userData =>{


      })
      window.location.href ='users'

    }
  } , [formErrors])

  const validate =()=>{
    const errors = {}
    if(!registerFormData.username){
     errors.username = " Le nom d'utilisateur est requis."
    }

    if(registerFormData.username && registerFormData.username.length<4){
      errors.username = " Le nom d'utilisateur doit contenir au moins  4 caractères."
    }

    if(!registerFormData.firstName){
      errors.firstname = "Le Prenom est requis."
    }

    if(registerFormData.firstName && registerFormData.firstName.length<3){
      errors.firstname = "  Le prenom doit contenir au moins  3 caractères."
    }

    if(!registerFormData.lastName){
      errors.lastname = "Le Nom est requis."
    }

    if(registerFormData.lastName && registerFormData.lastName.length<3){
      errors.lastname = "  Le Nom doit contenir au moins  3 caractères."
    }



    if(!registerFormData.phoneNumber){
      errors.number = "Le Numero de telephone est requis."
    }

    if(registerFormData.phoneNumber && registerFormData.phoneNumber.length<10){
      errors.number = " Le Numéro de telephone doit contenir 10 chiffres."
    }


    if(!registerFormData.password){
      errors.password = "Le Mot de passe est requis."
    }

    if(registerFormData.password && registerFormData.password.length<4){
      errors.password = " Le Mot de passe doit contenir au moin 4 caractères."
    }


    if(registerFormData.password != registerFormData.passwordConfirmation){
      errors.confirmation = " Les mots de passe ne correspondent pas."
    }




    return errors;

  }

  const  {activeMenu} = useStateContext()







  return (
      <div>

    <div className="bg-gray-200 min-h-screen">
      <div className="p-4 mx-auto max-w-lg pt-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-md shadow-md">
          <img
            className=" object-scale-down h-20 w-20"
            src={logo}
            alt="djeezy logo"/>
          <div class="font-medium p-4 self-center text-center text-2xl uppercase text-gray-800">
            Créer un compte
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="userName">
              Nom d'utilisateur
            </label>
            <input
              className={ !formErrors.username ? "border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "
                  : "border border-red-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "

              }
              type="text"
              name="username"
              id="userName"
              placeholder="Nom d'utilisateur"
              value={registerFormData.userName}
              onChange={handleChange}
             />
             <p className="text-red-600 ml-3 text-[14px]">{formErrors.username}</p>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="firstName">
              Prénom
            </label>
            <input
                className={ !formErrors.firstname ? "border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "
                    : "border border-red-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "

                }
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Prénom"
              value={registerFormData.firstName}
              onChange={handleChange}
              />
            <p className="text-red-600 ml-3 text-[14px]">{formErrors.firstname}</p>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="lastName">
              Nom
            </label>
            <input
                className={ !formErrors.lastname ? "border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "
                    : "border border-red-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "

                }
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Nom"
              value={registerFormData.lastName}
              onChange={handleChange}
              />
           <p className="text-red-600 ml-3 text-[14px]">{formErrors.lastname}</p>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="phoneNumber">
              Numéro de téléphone
            </label>
            <input
                className={ !formErrors.number ? "border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "
                    : "border border-red-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "

                }
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="XX XX XX XX XX"
              value={registerFormData.phoneNumber}
              onChange={handleChange}
              />
            <p className="text-red-600 ml-3 text-[14px]">{formErrors.number}</p>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="dateOfBirth">
              Année de naissance
            </label>
            <input
              className="border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400"
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={registerFormData.dateOfBirth}
              onChange={handleChange}/>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="password">
              Mot de passe
            </label>

            <input
                className={ !formErrors.password ? "border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "
                    : "border border-red-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "

                }
              type="password"
              name="password"
              id="password"
              placeholder="Entrez le mot de passe"
              value={registerFormData.password}
              onChange={handleChange}
              />
            <p className="text-red-600 ml-3 text-[14px]">{formErrors.password}</p>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="passwordConfirmation">
              Confirmez le mot de passe
            </label>
            <input
                className={ !formErrors.confirmation ? "border border-gray-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "
                    : "border border-red-400 p-2 w-full text-base placeholder-gray-500 pr-4 rounded-lg py-2 focus:outline-none focus:border-red-400 "

                }
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Confirmez le mot de passe"
              value={registerFormData.passwordConfirmation}
              onChange={handleChange}
              />
            <p className="text-red-600 ml-3 text-[14px]">{formErrors.confirmation}</p>
          </div>
          <button
            className="flex items-center justify-center focus:outline-none border-4 border-red-600 rounded-full text-white text-base bg-red-600 hover:bg-red-700 py-2 w-full transition duration-150 ease-in"
            type="submit">
            Créer
          </button>
        </form>
      </div>
    </div>
      </div>
  );
}

export default Register;
