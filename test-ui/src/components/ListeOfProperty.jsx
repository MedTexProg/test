import React, {useEffect, useState} from 'react';
import {getAllProperties} from '../services/todoservice.js';
import {useNavigate} from "react-router-dom";

const ListeOfProperty = () => {
    const [property, setProperty] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        listProperty();
    }, []);

    function listProperty() {
        getAllProperties()
            .then((response) => {
                setProperty(response.data);
            })
            .catch((error) => {
                console.error('Error fetching properties:', error);
            });
    }

    function addNewProperty() {
        navigate('/add-todo')
    }

    return (
        <div className="container">
            <h2 className="text-center">List of property</h2>
            <button className='btn btn-primary mb-2' onClick={addNewProperty}>Add Property</button>
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Bedroom</th>
                        <th>Bathroom</th>
                        <th>Size</th>
                        <th>Rent</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Activate</th>
                        <th>Deleted</th>
                    </tr>
                    </thead>
                    <tbody>
                    {property.map((property) => (
                        <tr key={property.id}>
                            <td>{property.id}</td>
                            <td>{property.name}</td>
                            <td>{property.type}</td>
                            <td>{property.bedroom}</td>
                            <td>{property.bathroom}</td>
                            <td>{property.size}</td>
                            <td>{property.rent}</td>
                            <td>{property.location}</td>
                            <td>{property.description}</td>
                            <td>{property.active ? 'YES' : 'NO'}</td>
                            <td>{property.delete ? 'YES' : 'NO'}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListeOfProperty;
