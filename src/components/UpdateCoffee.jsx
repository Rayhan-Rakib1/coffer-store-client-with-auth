import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, quantity, details, category, taste, photo, _id } = coffee;
    console.log(coffee);

    const handleUpdatedCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const category = form.category.value;
        const taste = form.taste.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, details, category, taste, photo }
        console.log(updatedCoffee);


        // send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "success!",
                    text: "coffee updated successfully.",
                    icon: 'success',
                    confirmButtonText: 'cool'
                  });
            }
        })

    }

    return (
          <div>
            <h1>updateCoffee coffee: {name}</h1>

            <div class="hero">
                <div class="">

                    <div class="card bg-base-100  shrink-0 shadow-2xl">
                        <form onSubmit={handleUpdatedCoffee} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Coffee Name</span>
                                </label>
                                <input type="text" defaultValue={name} name='name' placeholder="YOUR COFFEE" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">available quantity</span>
                                </label> 
                                <input type="text" defaultValue={quantity} name='quantity' placeholder="available quantity" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Details</span>
                                </label>
                                <input type="text" defaultValue={details} name='details' placeholder="Enter details" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">category</span>
                                </label>
                                <input type="text" defaultValue={category} name='category' placeholder="Enter category" class="input input-bordered" required />
                            </div>


                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Taste</span>
                                </label>
                                <input type="text" defaultValue={taste} name='taste' placeholder="Enter coffee taste" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Photo URL</span>
                                </label>
                                <input type="text" defaultValue={photo} name='photo' placeholder="Enter photo URL" class="input input-bordered" required />
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Update coffee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;