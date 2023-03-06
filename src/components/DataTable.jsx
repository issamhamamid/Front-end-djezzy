import React, { useState } from "react";
import { SearchIcon } from '@heroicons/react/solid';

function DataTable() {
    // Define initial state for users
    const [users, setUsers] = useState([
        {
            id: 1,
            username: "john.doe",
            password: "password123",
            firstName: "John",
            lastName: "Doe",
            birthYear: 1985,
            phoneNumber: "555-1234",
            role: "admin"
        },
        {
            id: 2,
            username: "jane.smith",
            password: "password456",
            firstName: "Jane",
            lastName: "Smith",
            birthYear: 1990,
            phoneNumber: "555-5678",
            role: "user"
        },
        // Add more users here
    ]);

    // Define state for search query
    const [searchQuery, setSearchQuery] = useState("");

    // Define function to filter users by username
    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function handleUpdateClick(){
        window.location.href = '/test/update'
    }


    return (
        <div className="flex flex-col h-screen">

            <div className="relative mx-4 my-2 mb-10">
                <input
                    type="text"
                    placeholder="Search by username"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-50"/>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
            </div>
            {/* Table */}
            <div className="flex-grow overflow-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Username
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Password
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            First Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Birth Year
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-w">
                            Role
                        </th>

                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-w">

                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {/* Render rows for filtered users */}
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {user.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.username}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.password}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.firstName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.lastName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.birthYear}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.role}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button  onClick={handleUpdateClick}
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-3">
                                    Update
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </td>


                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DataTable;

