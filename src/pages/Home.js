import React, { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';

const Home = () => {
    const [task, setTask] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTask(data.data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {
                task.map(item => <TaskCard
                    key={item._id}
                    task={item}
                ></TaskCard>)
            }
            <h1>Hello</h1>
        </div>
    );
};

export default Home;