
const Course = async () => {
    let course = await fetch('http://localhost:3000/api/course')
    course = await course.json();
    console.log(course);

    return (
        <div>

            <h1 className="text-3xl text-fuchsia-800 font-bold underline bg-fuchsia-400 p-3 text-center">Courses</h1>
            <div className="grid grid-col-4 container mx-auto gap-4 mt-5 ">
                {
                    course.course.map((date) => (
                        <div>
                            
                        </div>
                    ))
                }

            </div>
        </div>
        
        
    )
    
}