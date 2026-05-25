// Student Result System - JavaScript

// Sample data structure for backend integration
const studentResultData = {
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
        {
            sn: 3,
            code: "GET201",
            title: "Applied Electricity I",
            units: 3,
            grade: "D",
            gradePoints: 6,
            remarks: "Satisfactory",
            status: "Awaiting Approval"
        },
        {
            sn: 4,
            code: "RSU-GET203",
            title: "Engineering Graphics and Solid works Modeling II",
            units: 2,
            grade: "-",
            gradePoints: 0,
            remarks: "-",
            status: "Awaiting Approval"
        },
        {
            sn: 5,
            code: "GET205",
            title: "Fundamentals of Engineering Thermodynamics",
            units: 3,
            grade: "-",
            gradePoints: 0,
            remarks: "-",
            status: "Awaiting Approval"
        },
        {
            sn: 6,
            code: "RSU-GET207",
            title: "Strength of Materials/Engineering Materials",
            units: 3,
            grade: "C",
            gradePoints: 9,
            remarks: "Average",
            status: "Awaiting Approval"
        },
        {
            sn: 7,
            code: "GET209",
            title: "Engineering Mathematics I",
            units: 3,
            grade: "D",
            gradePoints: 3,
            remarks: "Pass",
            status: "Awaiting Approval"
        },
        {
            sn: 8,
            code: "GET211",
            title: "Computing and Software Engineering",
            units: 3,
            grade: "-",
            gradePoints: 0,
            remarks: "-",
            status: "Awaiting Approval"
        }
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
};

// Function to populate data from an object
function populateStudentData(data) {
    // This function can be used to dynamically load student data
    console.log("Student data loaded:", data);
    // Implementation would involve DOM manipulation to update the page with provided data
}

// Function to calculate GPA
function calculateGPA(courses) {
    let totalPoints = 0;
    let totalUnits = 0;
    
    courses.forEach(course => {
        if (course.gradePoints > 0) {
            totalPoints += course.gradePoints;
            totalUnits += course.units;
        }
    });
    
    return totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : 0;
}

// Function to validate grades
function validateGrade(grade) {
    const validGrades = ['A', 'B', 'C', 'D', 'F', '-'];
    return validGrades.includes(grade);
}

// Function to get grade color
function getGradeColor(grade) {
    const colors = {
        'A': '#27ae60',
        'B': '#27ae60',
        'C': '#a9b3c1',
        'D': '#f39c12',
        'F': '#e74c3c',
        '-': '#bdc3c7'
    };
    return colors[grade] || '#999';
}

// Function to export data as JSON
function exportDataAsJSON() {
    const dataStr = JSON.stringify(studentResultData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'student-result.json';
    link.click();
}

// Function to search courses
function searchCourses(query) {
    const courses = studentResultData.courses;
    return courses.filter(course => 
        course.code.toLowerCase().includes(query.toLowerCase()) ||
        course.title.toLowerCase().includes(query.toLowerCase())
    );
}

// Function to filter courses by grade
function filterCoursesByGrade(grade) {
    return studentResultData.courses.filter(course => course.grade === grade);
}

// Function to analyze performance
function analyzePerformance() {
    const courses = studentResultData.courses;
    const analysis = {
        totalCourses: courses.length,
        passedCourses: courses.filter(c => c.grade !== 'F' && c.grade !== '-').length,
        failedCourses: courses.filter(c => c.grade === 'F').length,
        pendingCourses: courses.filter(c => c.grade === '-').length,
        averageGrade: calculateGPA(courses),
        gpa: studentResultData.summary.gpa
    };
    return analysis;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log("Student Result System Initialized");
    console.log("Performance Analysis:", analyzePerformance());
    
    // Add event listeners to print button
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl+P or Cmd+P to print
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        window.print();
    }
    
    // Ctrl+S or Cmd+S to export
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        exportDataAsJSON();
    }
});
