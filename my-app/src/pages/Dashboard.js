import React from "react";

export default function Dashboard() {
const internships = [
    { title: "Teaching Internship", desc: "Work with schools and gain teaching experience." },
    { title: "Research Internship", desc: "Assist professors in educational research projects." },
];

return (
    <div className="p-10">
    <h2 className="text-3xl font-bold mb-6">Available Internships</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {internships.map((i, idx) => (
        <div key={idx} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-600">{i.title}</h3>
            <p className="mt-2 text-gray-600">{i.desc}</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Apply
            </button>
        </div>
        ))}
    </div>
    </div>
);
}
