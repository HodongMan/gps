import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './index.css';



export default class Contents extends PureComponent{
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    render(){
        return(
            <div>
                <button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</button>
                    <Modal isOpen={this.state.modal} modalTransition={{ timeout: 20 }} backdropTransition={{ timeout: 10 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>메모 남기기</ModalHeader>
                        <ModalBody>
                        <div><textarea className="comment" cols="50" rows="5" placeholder="내용을 기입해주세요."></textarea></div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>저장</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>취소</Button>
                    </ModalFooter>

                    <Form inline>
                        <FormGroup>
                            <Label for="comment" hidden>comment</Label>
                            <Input type="text" name="comment" id="comment" size="40" placeholder="comment" />
                        </FormGroup>
                       {' '}
                        <Button>댓글 저장</Button>
                    </Form>
                    </Modal>
            </div>
        );
      }
    }
