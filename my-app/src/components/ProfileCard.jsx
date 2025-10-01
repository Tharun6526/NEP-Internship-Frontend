import React from "react";

const ProfileCard = () => {
const student = {
    name: "John Doe",
    email: "john@example.com",
    skills: ["React", "Python", "SQL"],
    resume: "Resume.pdf",
};

return (
    <div className="bg-white shadow p-6 rounded-md w-full max-w-md">
    <h2 className="text-xl font-bold mb-2">{student.name}</h2>
    <p className="mb-2">{student.email}</p>
    <div className="mb-2">
        <strong>Skills:</strong> {student.skills.join(", ")}
    </div>
    <div>
        <strong>Resume:</strong> <a href={`/${student.resume}`} className="text-blue-500">Download</a>
    </div>
    </div>
);
};

export default ProfileCard;
