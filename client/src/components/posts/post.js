import React,{useState} from 'react';
import {Modal,Button,Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addPost} from '../../Redux/Action/Action'
function Posts() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [description,setDescription] = useState('');
    const [media,setMedia] = useState('');
    const current = JSON.parse(localStorage.getItem('current_user'))
    const add_post = () => {
        dispatch(addPost({description,media,username:current.username,userAvatar:current.avatar}))
        handleClose()
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Post
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Posts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter your description" onChange={e=>setDescription(e.target.value)} />
                </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Media Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Media Link" onChange={e=>setMedia(e.target.value)} />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex flex-nowrap">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => add_post()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Posts;