
import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import {commentUpdate} from '../../Redux/Action/Action'
import {Modal,Button,Form} from 'react-bootstrap'
function UpdateComments({comment,id}) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [updatedComment,setUpdatedComment] = useState(comment);
    const updateComment = (ID) => {
        dispatch(commentUpdate(ID,updatedComment))
        handleClose()
      }
    return (
      <>
        <span className="btn" onClick={()=> handleShow ()} ><i class="fas fa-cog"></i></span>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Label htmlFor="comment">Comment</Form.Label>
                <Form.Control
                    as="textarea"
                    defaultValue={comment}
                    onChange={(e)=> setUpdatedComment(e.target.value)}
                />
          </Modal.Body>
          <Modal.Footer className="d-flex flex-nowrap" >
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => updateComment(id,comment)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default UpdateComments