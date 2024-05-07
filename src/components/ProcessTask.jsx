import React from 'react';

const statuses = ["Done", "In Progress", "To Do"];

const ProcessTask = ({ tasks, changeDragAndDrop }) => {
    const handleDragStart = (e, task) => {
        e.dataTransfer.setData("task", JSON.stringify(task));
    };

    const handleDrop = (e, newStatus) => {
        e.preventDefault();
        const task = JSON.parse(e.dataTransfer.getData("task"));
        changeDragAndDrop(task, newStatus);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center gap-4">
            {statuses.map((status, index) => (
                <div key={index} className="flex flex-col bg-gray-100 p-4 rounded shadow-lg w-72 min-h-[800px]"
                     onDrop={(e) => handleDrop(e, status)} onDragOver={handleDragOver}>
                    <h2 className="text-lg font-bold text-center mb-4">{status}</h2>
                    {tasks.filter(task => task.status === status).map((task, index) => (
                        <div key={index}
                             className="bg-white p-3 m-2 rounded shadow border border-gray-200 cursor-pointer hover:bg-gray-50 transition"
                             draggable
                             onDragStart={(e) => handleDragStart(e, task)}>
                            <h3 className="font-semibold">{task.title}</h3>
                            <p className="text-sm text-gray-700">{task.description}</p>
                            <p className="text-sm text-gray-500 mt-2">{task.assignee}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProcessTask;
