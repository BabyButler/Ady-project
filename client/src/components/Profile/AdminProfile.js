import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAllUsers,deleteUser,updateProfile} from '../../Redux/Action/Action'
import {Table} from 'react-bootstrap'
function AdminProfile() {
  let user = JSON.parse(localStorage.getItem('current_user'))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  const users = useSelector((state) => state.UserReducer.users)
  const deleteProfile = (ID) => {
    dispatch(deleteUser(ID))
  }
  const updateUser = (ID,active) => {
    dispatch(updateProfile(ID,{active:active}))
  }
  return (
    <div className="container-fluid">
      <h1 className="text-center m-3">LISTS OF USERS</h1>
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => 
            <tr>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              {user.active == 1 ? <td className="status"><span className='status-active btn' onClick={()=>updateUser(user._id,0)}>{user.active}</span></td> : <td className="status"><span className='status-notavtive btn' onClick={()=>updateUser(user._id,1)}>{user.active}</span></td>}
              {user.active == 1 ? 
              <td>
                  <span className="btn text-white" onClick={()=> deleteProfile(user._id)}> active</span>
              </td> 
              :
              <td>
              <span className="btn text-white" onClick={()=> deleteProfile(user._id)}> not active</span>
              </td> 
              }
              
            </tr>
            )}
          </tbody>
        </Table>
    </div>
  )
}

export default AdminProfile