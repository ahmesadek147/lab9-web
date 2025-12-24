const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 🔹 Fake data (بديل Mongo مؤقتًا)
let courses = [
    {
        id: "1",
        title: "React Basics",
        description: "Learn React",
        instructor: "Ahmed",
        price: 100,
        category: "Frontend",
        students: 20
    }
];

// Routes
app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/courses', (req, res) => {
    const newCourse = {
        id: Date.now().toString(),
        ...req.body
    };
    courses.push(newCourse);
    res.json(newCourse);
});

app.put('/courses/:id', (req, res) => {
    courses = courses.map(course =>
        course.id === req.params.id
            ? { ...course, ...req.body }
            : course
    );
    res.send("Updated");
});

app.delete('/courses/:id', (req, res) => {
    courses = courses.filter(course => course.id !== req.params.id);
    res.send("Deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000 (No Mongo)");
});
