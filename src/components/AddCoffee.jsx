import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const category = form.category.value;
        const taste = form.taste.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, details, category, taste, photo }
        console.log(newCoffee);


        // send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: "success!",
                    text: "user added success.",
                    icon: 'success',
                    confirmButtonText: 'cool'
                  });
            }
        })

    }
    return (
        <div>
            <h1>add coffee</h1>

            <div class="hero">
                <div class="">

                    <div class="card bg-base-100  shrink-0 shadow-2xl">
                        <form onSubmit={handleAddCoffee} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Coffee Name</span>
                                </label>
                                <input type="text" name='name' placeholder="YOUR COFFEE" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">available quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="available quantity" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Details</span>
                                </label>
                                <input type="text" name='details' placeholder="Enter details" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">category</span>
                                </label>
                                <input type="text" name='category' placeholder="Enter category" class="input input-bordered" required />
                            </div>


                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Taste</span>
                                </label>
                                <input type="text" name='taste' placeholder="Enter coffee taste" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter photo URL" class="input input-bordered" required />
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Add this coffee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;