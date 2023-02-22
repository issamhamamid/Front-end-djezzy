import React, { useState } from "react";
import { Table, Tag, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const UserTable = () => {
    const [users, setUsers] = useState([
        { id: 1, username: "issam", password: "123" },


    ]);

    const handleDeleteUser = (id) => {

    }

    const handleUpdateUser = (id) => {
        // Add code to handle updating user
    }

    const columns = [
        {
            title: "Nom d'utilisateur",
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Mot de passe',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => handleUpdateUser(record.id)}><EditOutlined /></a>
                    <a onClick={() => handleDeleteUser(record.id)}><DeleteOutlined /></a>
                </Space>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={users} />
    );
}

export default UserTable;