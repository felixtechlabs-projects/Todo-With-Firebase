import { push, ref } from 'firebase/database';
import React, { useState } from 'react';
import { database } from '../environments/environment';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoRef = ref(database, 'Todos');
        push(todoRef, {
            text: input,
            description: desc
        })
        setInput('');
        setDesc('');
    }

  return (
    <div className='container-fluid w-50'>
        <div className="row">
            <div className="col-md-12 mb-3"> 
                <h3 className='text-center text-primary'> Add Todo </h3>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="row mb-3">
            <div className="col-12 form-group">
                <label htmlFor=""> Enter your Todo: </label>
                <input type="text" className='form-control' placeholder='Tom Cruise' 
                value={input} onChange={(e) => setInput(e.target.value)}
                required/>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-12 form-group">
                <label htmlFor=""> Description: </label>
                <textarea cols={30} rows={5} className='form-control'
                value={desc} onChange={(e) => setDesc(e.target.value)}
                ></textarea>
            </div>
        </div>
        
        <button className="btn btn-success m-auto d-block"> Submit </button>
        </form>
    </div>
  )
}

export default AddTodo