// backend-example.js - Node.js/Express Server Example
// This is a template for connecting your frontend to a backend

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files

// Sample student data (replace with database query)
const studentDatabase = {
    'DE.2024/6026': {
        session: "2025/2026",
        semester: "1st Semester",
        receipt: "20251231037681",
        student: {
            name: "Akanbi, Toluwani Emmanuel",
            matNo: "DE.2024/6026",
            regNumber: "2024402601188HA",
            faculty: "Engineering",
            department: "Petroleum",
            degreeInView: "BACHELOR OF TECHNOLOGY",
            studyMode: "Full Time",
            programmeType: "Under Graduate"
        },
        courses: [
            {
                sn: 1,
                code: "PEE201",
                title: "Petroleum Geology",
                units: 3,
                grade: "F",
                gradePoints: 0,
                remarks: "Fail",
                status: "Awaiting Approval"
            },
            {
                sn: 2,
                code: "ENT211",
                title: "Entrepreneurship and Innovation",
                units: 2,
                grade: "-",
                gradePoints: 0,
                remarks: "-",
                status: "Awaiting Approval"
            },
            // ... more courses
        ],
        summary: {
            totalCreditUnit: 22,
            gradePoint: 18,
            gpa: 0.81,
            cumulativeUnit: 54,
            cumulativePoints: 71,
            cgpa: 1.31
        },
        outstandingCourses: {
            semester: "1st",
            courses: ["PHY101", "PEE201", "ENT211", "RSU-GET203", "GET205", "GET211"]
        }
    }
};

// API endpoint to fetch student result
app.get('/api/student-result/:matNo', (req, res) => {
    const { matNo } = req.params;
    
    if (studentDatabase[matNo]) {
        res.json({
            success: true,
            data: studentDatabase[matNo]
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Student not found'
        });
    }
});

// API endpoint to update grades (protected in real app)
app.post('/api/student-result/:matNo/update-grades', (req, res) => {
    const { matNo } = req.params;
    const { courses } = req.body;
    
    if (studentDatabase[matNo]) {
        studentDatabase[matNo].courses = courses;
        
        // Recalculate GPA
        let totalPoints = 0;
        let totalUnits = 0;
        courses.forEach(course => {
            if (course.gradePoints > 0) {
                totalPoints += course.gradePoints;
                totalUnits += course.units;
            }
        });
        
        studentDatabase[matNo].summary.gpa = totalUnits > 0 
            ? (totalPoints / totalUnits).toFixed(2) 
            : 0;
        
        res.json({
            success: true,
            message: 'Grades updated successfully',
            data: studentDatabase[matNo]
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Student not found'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// To use this backend:
// 1. Install dependencies: npm install express cors
// 2. Run: node backend-example.js
// 3. Access: http://localhost:3000
