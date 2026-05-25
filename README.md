# Student Result Portal - Rivers State University Replica

A professional HTML/CSS/JavaScript replica of the Rivers State University Online Student Result portal.

## Files Included

- **index.html** - Main HTML structure and markup
- **styles.css** - Complete styling with responsive design
- **script.js** - JavaScript functionality for interactivity and data management
- **README.md** - This file

## Features

✅ **Pixel-Perfect Design** - Matches the original portal colors, layout, and styling  
✅ **Responsive Design** - Works on desktop, tablet, and mobile devices  
✅ **Print Functionality** - Print result as PDF with print button  
✅ **Student Data Display** - Shows all course results, grades, and summary  
✅ **Professional Styling** - Color-coded grades and status badges  
✅ **Backend Ready** - JavaScript structured for easy backend integration  

## Color Scheme

- **Primary Navy**: `#1a1a4d` (Headers, titles, text)
- **Grade Fail (F)**: `#e74c3c` (Red)
- **Grade D**: `#f39c12` (Orange)
- **Grade C**: `#a9b3c1` (Gray-Blue)
- **Grade A/B**: `#27ae60` (Green)
- **Status Badge**: `#ffc107` (Yellow)
- **Print Button**: `#ff6b6b` (Red)

## How to Use

### 1. Basic Setup
```
1. Download all three files (index.html, styles.css, script.js)
2. Place them in the same directory
3. Open index.html in a web browser
```

### 2. Customize with Logo
```
Replace the placeholder logo:
- Add your university logo as "logo.png" in the same directory
- Or update the img src in index.html to your logo path
```

### 3. Update Student Data
Edit the HTML directly or use the JavaScript to populate data dynamically:

```javascript
// In script.js, modify the studentResultData object:
const studentResultData = {
    session: "2025/2026",
    semester: "1st Semester",
    student: {
        name: "Your Name",
        // ... other fields
    },
    courses: [
        // ... course data
    ]
};
```

### 4. Keyboard Shortcuts
- **Ctrl+P** (or **Cmd+P** on Mac) - Print result
- **Ctrl+S** (or **Cmd+S** on Mac) - Export data as JSON

## JavaScript Functions Available

### Calculate GPA
```javascript
calculateGPA(courses)  // Returns calculated GPA from courses array
```

### Search Courses
```javascript
searchCourses("GET201")  // Search by code or title
```

### Filter by Grade
```javascript
filterCoursesByGrade("F")  // Returns all courses with grade F
```

### Performance Analysis
```javascript
analyzePerformance()  // Returns object with pass/fail/pending counts
```

### Export Data
```javascript
exportDataAsJSON()  // Downloads student result as JSON file
```

## Responsive Breakpoints

- **Desktop**: Full layout (1200px+)
- **Tablet**: 2-column to 1-column layout (1024px and down)
- **Mobile**: Single column, optimized for small screens (768px and down)

## Customization Guide

### Change Colors
Edit the CSS color values in `styles.css`:
```css
.page-title h2 {
    color: #1a1a4d;  /* Change this */
}
```

### Modify Layout
- Adjust padding/margins in `styles.css`
- Change grid layouts in `.summary-grid` section
- Modify table styling in `.courses-table` section

### Add More Courses
Add `<tr>` rows to the courses table in `index.html`:
```html
<tr>
    <td>9</td>
    <td>COURSE_CODE</td>
    <td>Course Title</td>
    <td>3</td>
    <td><span class="grade grade-a">A</span></td>
    <td>12</td>
    <td>Remark</td>
    <td><span class="status awaiting-approval">Awaiting Approval</span></td>
</tr>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Print/PDF Export

Click "Print Result" button or press Ctrl+P to:
- Generate a PDF-ready view
- Print to physical paper
- Save as PDF file

The print styling automatically hides the print button and optimizes layout.

## Backend Integration

To connect with a backend API:

1. **Replace hardcoded data** with API calls:
```javascript
fetch('/api/student-result')
    .then(response => response.json())
    .then(data => populateStudentData(data))
    .catch(error => console.error('Error:', error));
```

2. **Use the data structure** in `script.js` as your API response format

3. **Implement dynamic population** function to update DOM

## File Structure
```
project-folder/
├── index.html
├── styles.css
├── script.js
├── logo.png (optional - add your logo here)
└── README.md
```

## License & Disclaimer

This is a design replica for educational purposes. 
- The original Rivers State University portal design is their intellectual property
- You should NOT republish actual student data without permission
- Use this template with placeholder/sample data only
- Ensure compliance with educational institution policies when deploying

## Support & Customization

For questions or modifications needed:
1. Review the inline comments in the HTML and CSS
2. Check the JavaScript functions available in script.js
3. Refer to this README for common customizations

## Notes

- Logo placeholder shows "No Image" - replace with actual logo
- All student data in this template is sample data
- GPA calculations follow standard academic formulas
- Fully responsive and print-friendly

---

**Created**: 2026  
**Version**: 1.0  
**Last Updated**: May 25, 2026
