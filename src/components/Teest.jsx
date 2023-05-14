import React, {useState} from "react";
import {RiSurveyLine} from "react-icons/ri";
import {BsFillClipboardCheckFill} from "react-icons/bs"
import {GiClick} from "react-icons/gi"
import {FaCoins} from "react-icons/fa"
import Header from "./Header";
import {Fake} from "./Fake"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Teest = () => {


    const dataLine = [
    {

        name:"1-8",
        surveySent: 10000,
        surveyCompleted: 2500,
    },
    {

        name:"8-15",
        surveySent: 12000,
        surveyCompleted: 2800,
    },
    {

        name:"15-23",
        surveySent: 7800,
        surveyCompleted: 200,
    },
    {

        name:"23-31",
        surveySent:3500,
        surveyCompleted: 30,
    }
];

  return (
      <div >

          <div className=" p-2 md:p-10 bg-[#FAFBFB]  rounded-3xl">
<Header  category="" title="Resumé du mois de mars"  />
              </div>

   <div className="   flex flex-col gap-4 px-4 sm:px-8 lg:px-16 xl:px-20 w-full  ">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-600">
        <RiSurveyLine className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Questionnaires envoyés</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">15000</strong>
        </div>
      </div>
    </BoxWrapper>
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-600">
        <BsFillClipboardCheckFill className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Questionnaires complétés</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">15000</strong>
        </div>
      </div>
    </BoxWrapper>
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-600">
        <GiClick className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Souscriptions aux offres</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">15000</strong>
        </div>
      </div>
    </BoxWrapper>
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-600">
        <FaCoins className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Clients ayant atteint 0 de crédit</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">15000</strong>
        </div>
      </div>
    </BoxWrapper>
  </div>



<div className='   h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex gap-10 '>


    <ResponsiveContainer width="88%"
    height="120%">
      <LineChart
        data={dataLine}


      >
        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
           <Line  dataKey="surveySent" stroke="#d62448" />
        <Line  dataKey="surveyCompleted" stroke="#8884d8" />

      </LineChart>
    </ResponsiveContainer>
        <div className="w-full ml-24">
           <ResponsiveContainer width="88%"
    height="120%">
      <LineChart
        data={dataLine}

      >
        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="surveyCompleted" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
            </div>






</div>

</div>






</div>

  );
};

export default Teest;

function  BoxWrapper ({children}){
    return (<div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center ">{children}</div>)
}
