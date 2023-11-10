import React, {useState} from 'react'

function ListeOfProperty() {
    const dummyData = [
        {
            "id": 1,
            "title": "Monlisa",
            "description": "this is my dream house",
            "completed": false
        },
        {
            "id": 2,
            "title": "lisa",
            "description": "this is my dream house",
            "completed": true
        },
        {
            "id": 3,
            "title": "Mona",
            "description": "this is my dream house",
            "completed": false
        },
        {
            "id": 4,
            "title": "Ashino",
            "description": "this is my dream house",
            "completed": false
        },
    ]

    const [todo, setTodo] = useState(dummyData)

    return (
        <div className='container'>
            <h2 className="text-center">List of property</h2>
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Property Title</th>
                        <th>Property Description</th>
                        <th>Property complete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todo.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'YES' : 'NO'}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListeOfProperty