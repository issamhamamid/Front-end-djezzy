import React from "react";

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
    ResponsiveContainer,
} from "recharts";
import {Table} from "antd";

const dataLine = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 200 },
    { name: "D", value: 100 },
];

const dataTop5 = [
    { name: "Product A", value: 5000 },
    { name: "Product B", value: 4000 },
    { name: "Product C", value: 3000 },
    { name: "Product D", value: 2000 },
    { name: "Product E", value: 1000 },
];
const columns = [
    {
        title: "name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "name",
        dataIndex: "value",
        key: "name",
    }
];

const dataCards = [
    { title: "Sales", value: 25, increase: 10 },
    { title: "Revenue", value: 5000, increase: 5 },
    { title: "Customers", value: 1000, increase: 20 },
    { title: "Orders", value: 200, increase: 15 },
];

export default function Dashboard() {
    return (
        <div className="flex flex-1 bg-gray-100 min-h-screen w-full">
            <div className="flex-1 max-w-7xl w-full mx-auto my-6 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
                    {/* Display 4 cards with increased percentages */}
                    {dataCards.map((card) => (
                        <div className="bg-white rounded-md p-6 m-2" key={card.title}>
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                {card.title}
                            </h3>
                            <div className="relative w-full h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-4xl font-bold text-gray-800">
                                        {card.value}
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-2 my-4">
                    {/* Display 3 instances of the LineChart */}
                    {[...Array(1)].map((_, index) => (
                        <div className="bg-white rounded-md p-6" key={index}>
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                Line Chart
                            </h3>
                            <div className="relative w-full h-full">
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={dataLine}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Display a top 5 list of random data */}
                <div className="bg-white rounded-md p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Top 5 List</h3>
                    <div className="relative w-full h-full">
                        <div>
                            <Table columns={columns} dataSource={dataTop5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
