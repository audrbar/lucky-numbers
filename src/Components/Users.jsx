import { useContext, useState } from 'react';
import { Global } from './Global';
import List from './List';
import Create from './Create';


function Users() {

    const [users, setUsers] = useContext(Global);
    const { list, setDeleteModal } = useContext(Global);



    return (
        <>
        <div className="container">
            <div className="row">
            <div className="col-5">
                <Create />
            </div>
            <div className="col-7">
                <List />
            </div>
            </div>
        </div>
         <div className="card mt-4">
            <div className="card-header">
                Your selected lucy numbers
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        users?.map(u => (<li key={u.id} className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <h2>{u.number}</h2>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-danger" onClick={() => setDeleteModal(u)}>DELETE</button>
                                    </div>
                                </div>
                            </div>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    </>
    )
}

export default Users;