import React from "react";

export default function Home({ internships }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Welcome section */}
      <h1 className="text-4xl font-bold text-primary">Hello NEP Portal</h1>
      <h2 className="text-4xl font-bold text-blue-700">
        Welcome to NEP Internship Portal
      </h2>
      <p className="mt-4 text-lg text-gray-600 w-2/3">
        A platform to connect students with exciting internship opportunities in
        education and research.
      </p>

      {/* Internships list */}
      <div className="mt-10 w-3/4">
        <h3 className="text-2xl font-semibold mb-4">Available Internships</h3>
        {internships && internships.length > 0 ? (
          <ul className="space-y-4">
            {internships.map((item) => (
              <li
                key={item.id} // replace with your backend's unique id
                className="p-4 border rounded shadow bg-white text-left"
              >
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p>{item.company}</p>
                <p>{item.location}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No internships available at the moment.</p>
        )}
      </div>
    </div>
  );
}
