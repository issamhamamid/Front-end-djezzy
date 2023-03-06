import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import Header from "./Header";
import DataTable from "./DataTable";

const Utilisateurs= () => {
    const toolbarOptions = ['Search'];

    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="" title="Liste des utilisateurs" />
            <div >
                <DataTable/>
            </div>

        </div>
    );
};
export default Utilisateurs;
