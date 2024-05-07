import React from 'react'
import { Input, Button, Select } from 'antd'

const statuses = ["Done", "In Progress", "To Do"];

function InsertProcess({setNewTask, insertTask, newTask }) {

    console.log(newTask)
    
  return (
    <div className='w-full flex flex-col items-center'>
        <div className="flex flex-col gap-4 items-center  border-2 m-5 p-10 w-80 rounded-xl">
            <Input placeholder="Title" onChange={(e) => setNewTask({...newTask, title: e.target.value})} />
            <Input placeholder="Description" className='min-h-14' onChange={(e) => setNewTask({...newTask, description: e.target.value})} />
            <Select className='w-full' placeholder="Status" options={statuses.map(status => ({label: status, value: status}))} onChange={(value) => setNewTask({...newTask, status: value})} />
            <Input placeholder="Assignee" onChange={(e) => setNewTask({...newTask, assignee: e.target.value})} />
            <Button 
                type="primary" 
                onClick={() => insertTask(newTask)}
                disabled={!newTask.title || !newTask.description || !newTask.status || !newTask.assignee}
                >
                Create New Task
            </Button>
        </div>
    </div>
    )
}

export default InsertProcess


            