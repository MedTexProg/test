import React, {useState} from "react";
import {addProperty} from "../services/todoservice.js";

import {useNavigate} from "react-router-dom";

const PropertyComponent = () => {
    const [Name, setName] = useState('');
    const [Type, setType] = useState('');
    const [Bedroom, setBedroom] = useState('');
    const [Bathroom, setBathroom] = useState('');
    const [Size, setSize] = useState('');
    const [Rent, setRent] = useState('');
    const [Location, setLocation] = useState('');
    const [Description, setDescription] = useState('');
    const [Images, setImages] = useState('')
    const [Activate, setActivate] = useState(false);
    const [Deleted, setDeleted] = useState(false);
    const navigate = useNavigate();

    function saveOrUpdateProperty(e) {
        e.preventDefault();

        const property = {
            Name,
            Type,
            Bathroom,
            Bedroom,
            Size,
            Rent,
            Location,
            Description,
            Images,
            Activate,
            Deleted
        };
        console.log(property);

        addProperty(property)
            .then((response) => {
                console.log(response.data);
                navigate('/properties');
            })
            .catch((error) => {
                console.error(error);
            });
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
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter Property Name'

                                    onClick={(e) => setName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property type</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter Property Type'

                                    onClick={(e) => setType(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Bedroom</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter Property Bedroom'
                                    onClick={(e) => setBedroom(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Bathroom</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter Property Bathroom'
                                    onClick={(e) => setBathroom(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Size</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter Property Size'
                                    onClick={(e) => setSize(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Location</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter Property Location'

                                    onClick={(e) => setLocation(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Description</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter Property Description'
                                    onClick={(e) => setDescription(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group'>
                                <label className='col-md-4 control-label' for='filebuton'>main_images</label>
                                <div className='col-md-4'>
                                    <input id='filebuton' name='filebutton' className='input-file' type='file'/>
                                </div>

                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Active</label>
                                <select
                                    className='form-control'
                                    value={Activate}
                                    onChange={(e) => setActivate(e.target.value)}
                                >
                                    <option value='false'>No</option>
                                    <option value='true'>Yes</option>
                                </select>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Property Delete</label>
                                <select className='form-control'
                                        value={Deleted}
                                        onChange={(e) => setDeleted(e.target.value)}
                                >
                                    <option value='false'>No</option>
                                    <option value='true'>Yes</option>
                                </select>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateProperty}>Submite</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PropertyComponent