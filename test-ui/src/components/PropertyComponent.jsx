import React, {useState} from "react";

const PropertyComponent = () => {
    const [Name, setName] = useState('')
    const [Type, setType] = useState('')
    const [Bedroom, setBedroom] = useState('')
    const [Bathroom, setBathroom] = useState('')
    const [Size, setSize] = useState('')
    const [Rent, setRent] = useState('')
    const [Location, setLocation] = useState('')
    const [Description, setDescription] = useState('')
    const [Activate, setActivate] = useState(false)
    const [Deleted, setDeleted] = useState(false)

    function saveProperty(e) {
        e.preventDefault()

        const property = [Name, Type, Bathroom, Bedroom, Size, Rent, Location, Description, Activate, Deleted]
        console.log(property)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className=' card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Property</h2>
                    <div className='card-boby'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property name</label>
                                <input
                                    type='text'
                                    placeholder='Enter Property Name'
                                    name='title'
                                    value='Title'
                                    onClick={(e) => setName(e.target.valueOf)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property type</label>
                                <input
                                    type='text'
                                    placeholder='Enter Property Name'
                                    name='type'
                                    value='Type'
                                    onClick={(e) => setType(e.target.valueOf)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Bedroom</label>
                                <input
                                    type='text'
                                    placeholder='Enter Property Name'
                                    name='bedroom'
                                    value='Bedroom'
                                    onClick={(e) => setBedroom(e.target.valueOf)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Bathroom</label>
                                <input
                                    type='text'
                                    placeholder='Enter Property Name'
                                    name='bathroom'
                                    value='Bathroom'
                                    onClick={(e) => setBathroom(e.target.valueOf)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Size</label>
                                <input
                                    type='text'
                                    placeholder='Enter Property Name'
                                    name='size'
                                    value='Size'
                                    onClick={(e) => setSize(e.target.valueOf)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Location</label>
                                <input
                                    type='text'
                                    placeholder='Enter Property Name'
                                    name='location'
                                    value='Location'
                                    onClick={(e) => setLocation(e.target.valueOf)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Description</label>
                                <input
                                    type='text'
                                    placeholder='Enter Property Name'
                                    name='description'
                                    value='Description'
                                    onClick={(e) => setDescription(e.target.valueOf)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Active</label>
                                <select className='form-label'
                                        value='Activate'
                                        onChange={(e) => setActivate(e.target.value)}
                                >
                                    <option value='false'>No</option>
                                    <option value='true'>Yes</option>
                                </select>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Delete</label>
                                <select className='form-label'
                                        value='Deleted'
                                        onChange={(e) => setDeleted(e.target.value)}
                                >
                                    <option value='false'>No</option>
                                    <option value='true'>Yes</option>
                                </select>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveProperty}></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PropertyComponent