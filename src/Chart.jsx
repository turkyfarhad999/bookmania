
import React, { useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { DataContext } from './Context';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', '#8884d8'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2},${y}
  C${x + width / 2},${y + height / 3} ${x + width - width / 3},${y + height} ${x + width},${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = () => {
    const { readlisted } = useContext(DataContext);

    const chartData = readlisted.map(book => ({
        name: book.bookName.length > 15 ? book.bookName.slice(0, 15) + '...' : book.bookName,
        pages: book.totalPages
    }));

    return (
        <div className="container mx-auto my-10 p-6 bg-gray-50 rounded-3xl max-w-5xl border border-gray-100 shadow-xs">
            <div className="w-full h-[450px] flex justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{ fill: '#888888', fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Bar 
                            dataKey="pages" 
                            shape={<TriangleBar />} 
                            label={{ position: 'top', fill: '#333', fontWeight: 'bold' }}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            {readlisted.length === 0 && (
                <p className="text-center text-gray-400 font-medium mt-4">
                    No books in read list to display chart.
                </p>
            )}
        </div>
    );
};

export default Chart;