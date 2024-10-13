
const Course = async () => {
    let course = await fetch('http://localhost:3000/api/course')
    course = await course.json();
    console.log(course);

    return (
        <h1>Courses</h1>
    )
    
}