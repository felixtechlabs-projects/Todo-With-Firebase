import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import { onValue, ref, remove, update } from 'firebase/database';
import { database } from '../environments/environment';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const [editDescription, setEditDescription] = useState('');

    // Function to delete a todo from Firebase
    const deleteTodo = async(id) => {
        const todoRef = ref(database, 'Todos/' + id);
        await remove(todoRef)
    };

    // Function to handle edit button click
    const handleEditClick = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
        setEditDescription(todo.description);
    };

    // Function to save edited todo to Firebase
    const saveEdit = (id) => {
        const todoRef = ref(database, 'Todos/' + id);
        update(todoRef, { text: editText, description: editDescription })
            .then(() => {
                console.log(`Updated Todo: ${id}`);
                setEditId(null); // Reset editing state
            })
            .catch((error) => {
                console.error("Error updating todo:", error);
            });
    };

    useEffect(() => {
        const todoRef = ref(database, 'Todos');
        onValue(todoRef, (snapshot) => {
            const value = snapshot.val();
            if (value) {
                const todosArray = Object.entries(value).map(([id, value]) => ({
                    id, // Firebase unique ID
                    ...value, // Spread the rest of the data
                }));
                setTodos(todosArray);
            } else {
                setTodos([]);
            }
        });
    }, []);

    return (
        <div className='container-fluid w-50'>
            <div className="row mb-3">
                <AddTodo />
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <h3 className='text-center text-primary'>Todo List</h3>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    {todos.length > 0 ? (
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map((todo, index) => (
                                    <tr key={todo.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {editId === todo.id ? (
                                                <input
                                                    type="text"
                                                    value={editText}
                                                    onChange={(e) => setEditText(e.target.value)}
                                                />
                                            ) : (
                                                todo.text
                                            )}
                                        </td>
                                        <td>
                                            {editId === todo.id ? (
                                                <input
                                                    type="text"
                                                    value={editDescription}
                                                    onChange={(e) => setEditDescription(e.target.value)}
                                                />
                                            ) : (
                                                todo.description
                                            )}
                                        </td>
                                        <td>
                                            {editId === todo.id ? (
                                                <>
                                                    <button className='btn btn-outline-success' onClick={() => saveEdit(todo.id)}>Save</button>
                                                    &nbsp;
                                                    <button className='btn btn-outline-secondary' onClick={() => setEditId(null)}>Cancel</button>
                                                </>
                                            ) : (
                                                <>
                                                    <button className='btn btn-outline-warning' onClick={() => handleEditClick(todo)}>Edit</button>
                                                    &nbsp;
                                                    <button className='btn btn-outline-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Todos;
