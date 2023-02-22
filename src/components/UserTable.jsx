import React, { useState } from "react";
import { Table } from "antd";
import { SlTrash } from "react-icons/sl";
import { BiPencil } from "react-icons/bi";

const UserTable = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "issam", password: "123" },
  ]);

  const handleDeleteUser = (id) => {};

  const handleUpdateUser = (id) => {
    // Add code to handle updating user
  };

  const columns = [
    {
      title: "Nom d'utilisateur",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Mot de passe",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div>
          <a href="q" onClick={() => handleUpdateUser(record.id)}>
            <BiPencil />
          </a>
          <a href="q" onClick={() => handleDeleteUser(record.id)}>
            <SlTrash />
          </a>
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} />;
};

export default UserTable;
