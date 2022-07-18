import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Row, Col, InputGroup } from 'react-bootstrap';

export default class Edit_custom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            data: this.props.Data,
            checkEdit:false,
        }
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        const {show}=this.state;
        const {Data}=this.props;
        return (
            <div>
                <Modal show={show} onHide={this.handleClose} size='xl'>
                    {/* <Modal.Header closeButton>
                        <Row>
                            <Col>
                                <Modal.Title>{Data.fullname} <div>{Data.status}</div></Modal.Title>
                            </Col>
                            <Col></Col>
                        </Row>

                    </Modal.Header> */}
                    <Modal.Body>
                        <div className='border_button'>
                            <Row>
                                <Col sm={4}>
                                    <h5>{Data.fullname}</h5>
                                    <div className='style_active'>{Data.status}</div>
                                </Col>
                            </Row>
                        </div>
                        <div className='border_button'>
                        <Row>
                            <Col>
                                <p>Họ tên:</p>
                                <p>Điện thoại:</p>
                                <p>Email: </p>
                                <p>Giới tính: </p>
                                <p>Ngày sinh: </p>
                                <p>Quốc tịch: </p>
                                <p>CMND mặt trước: </p>
                                <p>CMND mặt sau: </p>
                                <p>Ảnh đại diện: </p>
                            </Col>
                            <Col>
                                <p>{Data.fullname}</p>
                                <p>{Data.phone}</p>
                                <p><input type="text" placeholder='Nhập email...'></input></p>
                                <p>... </p>
                                <p>... </p>
                                <p>...</p>
                                <p>... </p>
                                <p>... </p>
                                <p>... </p>
                            </Col>

                            <Col>
                            </Col>

                            <Col>
                                <p>Giấy tờ tùy thân : </p>
                                <p>Ngày cấp: </p>
                                <p>Nơi cấp: </p>
                                <p>Quê quán: </p>
                                <p>Địa chỉ thường chứ: </p>
                                <p>Loại ví: </p>
                                <p>Tài khoản ví: </p>
                                <p>Số dư ví: </p>
                                <p>Thời gian đăng ký: </p>

                            </Col>
                            <Col>
                                <p>... </p>
                                <p>... </p>
                                <p>...</p>
                                <p>...</p>
                                <p>...</p>
                                <p>...</p>
                                <p>...</p>
                                <p>...</p>
                                <p>...</p>
                            </Col>
                        </Row>
                        </div>
                        <div className='last_tr'>
                            <Button variant="success" className='w-20 mt-2'>Cập nhật</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
