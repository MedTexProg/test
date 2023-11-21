import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {addProperty} from "../services/todoservice.js";

const PropertyComponent = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [bathroom, setBathroom] = useState('');
    const [size, setSize] = useState('');
    const [rent, setRent] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    const navigate = useNavigate();

    function saveOrUpdateProperty(e) {
        e.preventDefault();

        const property = {
            name,
            description,
            bedroom,
            bathroom,
            size,
            rent,
            location,
            category,
            isDeleted,
            isActivated
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
            <br/> <br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter Name of property'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Bedroom </label>
                                <input
                                    type={"number"}
                                    className={'form-control'}
                                    placeholder={'Enter total bedroom'}
                                    name={bedroom}
                                    value={bedroom}
                                    onChange={(e) => setBedroom(e.target.value)}
                                ></input>

                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Bathroom </label>
                                <input
                                    type={"number"}
                                    className={'form-control'}
                                    placeholder={'Enter total Bathroom'}
                                    name={bathroom}
                                    value={bathroom}
                                    onChange={(e) => setBathroom(e.target.value)}
                                ></input>

                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Square space </label>
                                <input
                                    type={"number"}
                                    className={'form-control'}
                                    placeholder={'Enter room space '}
                                    name={size}
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                ></input>

                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> paiement </label>
                                <input
                                    type={"number"}
                                    className={'form-control'}
                                    placeholder={'Enter the amount to pay'}
                                    name={rent}
                                    value={rent}
                                    onChange={(e) => setRent(e.target.value)}
                                ></input>

                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Address </label>
                                <input
                                    type={"text"}
                                    className={'form-control'}
                                    placeholder={'Enter Address of property'}
                                    name={location}
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Categories </label>
                                <input
                                    type={"text"}
                                    className={'form-control'}
                                    placeholder={'Enter Name of property'}
                                    name={category}
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                ></input>

                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Description </label>
                                <input
                                    type={"text"}
                                    className={'form-control'}
                                    placeholder={'Enter Description of property'}
                                    name={description}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></input>

                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Delete</label>
                                <select
                                    className='form-control'
                                    value={isDeleted.toString()}
                                    onChange={(e) => setIsDeleted(e.target.value === 'true')}
                                >
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </select>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Active</label>
                                <select
                                    className='form-control'
                                    value={isActivated.toString()}
                                    onChange={(e) => setIsActivated(e.target.value === 'true')}
                                >
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </select>
                            </div>

                            <button
                                className='btn btn-success'
                                onClick={(e) => saveOrUpdateProperty(e)}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyComponent;