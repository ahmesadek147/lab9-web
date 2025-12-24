const API_URL = "http://localhost:3000/courses";

export const getCourses = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const createCourse = async (course) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course)
    });
    return res.json();
};

export const updateCourse = async (id, course) => {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course)
    });
};

export const deleteCourse = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
