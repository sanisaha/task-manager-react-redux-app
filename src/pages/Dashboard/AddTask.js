import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const submit = (data) => {
        const task = {
            name: data.name,
            type: data.type,
            status: data.status === "true" ? true : false,
        };

        console.log(task);
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log('post successful');
                }
            })
            .catch(e => console.error(e))

    };
    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='name'>
                        Name
                    </label>
                    <input type='text' id='name' {...register("name")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='type'>
                        Type
                    </label>
                    <select name='type' id='type' {...register("type")}>
                        <option value='home'>Home</option>
                        <option value='work'>Work</option>
                        <option value='other'>Other</option>
                    </select>
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <h1 className='mb-3'>Status</h1>
                    <div className='flex gap-3'>
                        <div>
                            <input
                                type='radio'
                                id='inProgress'
                                value={true}
                                {...register("status")}
                            />
                            <label className='ml-2 text-lg' htmlFor='inProgress'>
                                In Progress
                            </label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='newTask'
                                name='status'
                                value={false}
                                {...register("status")}
                            />
                            <label className='ml-2 text-lg' htmlFor='newTask'>
                                New Task
                            </label>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;