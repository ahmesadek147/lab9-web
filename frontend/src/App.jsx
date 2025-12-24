import React, { useState, useEffect } from "react";
import { getCourses, createCourse, updateCourse, deleteCourse } from "./api";
import CourseList from "./components/CourseList";
import CreateCourse from "./components/CreateCourse";
import "./style.css";

export default function App() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleCreate = async (course) => {
    await createCourse(course);
    fetchCourses();
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    fetchCourses();
  };

  const handleUpdate = async (id, course) => {
    await updateCourse(id, course);
    fetchCourses();
  };

  return (
    <div className="container">
      <h1>Course Management</h1>
      <CreateCourse onCreate={handleCreate} />
      <CourseList courses={courses} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}
