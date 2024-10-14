
const Course = async () => {
    let res = await fetch('http://localhost:3000/api/course')
    res = await res.json();
    console.log(res);

    return (
        <div>

            <h1 className="text-3xl text-black font-bold underline bg-purple-500 p-3 text-center">Courses</h1>
            <div className="grid grid-col-4 container mx-auto gap-4 mt-5 ">
                {
                    res.data?.map((data) => (
                        <div key={data.id} className="bg-fuchsia-100 border-2 border-purple-500 rounded p-3 space-y-2">
                             <h1><span className=' font-bold'>Title: </span> {data.title}</h1>
                            <h1><span className=' font-bold'>Duration: </span> {data.duration}</h1>
                            <h1><span className=' font-bold'>Timing: </span> {data.timing}</h1>
                            <h1><span className=' font-bold'>Teacher: </span> {data.teacher}</h1>

                        </div>
                    ))
                }

            </div>
        </div>
        
        
    )
    
}

export default Course;