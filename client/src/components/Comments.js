import React, {useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap'
import {addComment} from '../Redux/Action/Action'
import {useDispatch} from 'react-redux'
function Comments({post_id}) {
  
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [comment,setComment] = useState('');
  let user = JSON.parse(localStorage.getItem('current_user')) 
  
  const CommentAdded = () =>{ 
    dispatch(addComment({comment,username:user.username,avatar:user.avatar,post_id}))
    handleClose()
  }
  return (
    <>
      <Button className="btncomm" variant="primary" onClick={handleShow}>
        comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD COMMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicCommentaire">
          <Form.Label>Comments</Form.Label>
          <Form.Control type="text" placeholder="Enter your commentaire" onChange={e => setComment(e.target.value)} />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => CommentAdded()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Comments