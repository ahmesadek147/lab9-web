import React from "react";
import CourseCard from "./CourseCard";

export default function CourseList({ courses, onDelete, onUpdate }) {
    return (
        <div>
            {courses.map(course => (
                <CourseCard key={course._id} course={course} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
        </div>
    );
}
