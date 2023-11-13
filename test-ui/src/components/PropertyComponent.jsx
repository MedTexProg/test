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

    return (
        <div className='container'>
            <div className='row'>
                <div className=' card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Property</h2>
                    <div className='card-boby'>
                        <form>
                            
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default PropertyComponent