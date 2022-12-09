import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/sevices', data)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId){
                alert('Data inserted successfully');
            }
        });
    }

    return (
        <div>
            <h3 className="m-5">Add a new service</h3>

            <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 w-50 p-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} /> <br />
                <input className="mb-3 w-50 p-2" placeholder="Description" {...register("description")} /><br />
                <input className="mb-3 w-50 p-2" placeholder="Price" type="number" {...register("price")} /><br />
                <input className="mb-3 w-50 p-2" placeholder="Image Url" {...register("img")} /><br />
                <input className=" btn btn-primary mb-3" type="submit" />
            </form>


        </div>
    );
};

export default AddService;