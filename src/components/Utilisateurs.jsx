import React from "react";
import Header from "./Header";
import DataTable from "./DataTable";

const Utilisateurs = () => {


  return (
    <div className="  p-2 md:p-10 bg-[#FAFBFB]  rounded-3xl ">
      <Header category="" title="Liste des utilisateurs" />
      <div>
        <DataTable />
      </div>
    </div>
  );
};
export default Utilisateurs;
