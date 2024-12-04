import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    console.log(coffee);
    const { name, quantity, details, category, taste, photo, _id } = coffee;
    console.log(photo);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your coffee has been deleted.",
                    icon: "success"
                });
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }


    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img className='w-40' src={photo} alt="OIP" border="0" />
            </figure>
            <div className="flex justify-between w-full">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>quantity: {quantity}</p>
                    <p>category:  {category}</p>
                    <p>taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn">view</button>
                       <Link to={`updateCoffee/${_id}`}>
                       <button className="btn">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-orange-400 text-black">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;