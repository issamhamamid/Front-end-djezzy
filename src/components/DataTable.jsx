import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useLocalState } from "../util/useLocalStorage";
import DeleteUserModal from "./DeleteUserModal";

function DataTable() {
    const [selected, setSelected] = useState(null);

    const [token, setToken] = useLocalState("", "token");

    useEffect(() => {
        fetch("/users", {
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
                setUsers(userData);
            });
    }, []);

    // Define initial state for users
    const [users, setUsers] = useState([]);

    const handleDeleteClick = (id) => {
        fetch(`/users/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },

            method: "DELETE",
        }) .then((response) => {
            window.location.href='users'


        })

        ;

    };

    // Define state for search query
    const [searchQuery, setSearchQuery] = useState("");

    // Define function to filter users by username
    const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function handleUpdateClick(id) {
        window.location.href = `update/${id}`;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen">
            <DeleteUserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                Delete={() => handleDeleteClick(selected)}
            />

            <div className=" mx-4 my-2 mb-10 ">
                <input
                    type="text"
                    placeholder="Search by username"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-50"
                />

            </div>

            <div className="flex-grow overflow-auto">
                <table className="min-w-full divide-y divide-gray-400">
                    <thead className="bg-gray-90">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            ID
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Nom d'utilisateur
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Mot de passe
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Prenom
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Nom
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Date de naissance
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-w"
                        >
                            Role
                        </th>

                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-w"
                        >
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {/* Render rows for filtered users */}
                    {filteredUsers.map((user) => (
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
                                {user.firstname}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.lastname}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.birthDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.roles.substring(5)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button
                                    onClick={() =>handleUpdateClick(user.id)}
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-3"
                                >
                                    Modifier
                                </button>
                                <button
                                    onClick={() => {
                                        setIsModalOpen(true);
                                        setSelected(user.id);
                                    }}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Supprimer
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
