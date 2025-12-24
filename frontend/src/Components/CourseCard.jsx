import React, { useState } from "react";

export default function CourseCard({ course, onDelete, onUpdate }) {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(course.title);

    const handleUpdate = () => {
        onUpdate(course._id, { title });
        setEditing(false);
    };

    return (
        <div className="course-card">
            {editing ? (
                <>
                    <input value={title} onChange={e => setTitle(e.target.value)} />
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    <span>{course.title}</span>
                    <div>
                        <button onClick={() => setEditing(true)}>Edit</button>
                        <button onClick={() => onDelete(course._id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
}
