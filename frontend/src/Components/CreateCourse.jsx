import React, { useState } from "react";

export default function CreateCourse({ onCreate }) {
    const [title, setTitle] = useState("");

    const handleSubmit = () => {
        if (!title) return;
        onCreate({ title });
        setTitle("");
    };

    return (
        <div>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Course Title" />
            <button onClick={handleSubmit}>Add Course</button>
        </div>
    );
}
