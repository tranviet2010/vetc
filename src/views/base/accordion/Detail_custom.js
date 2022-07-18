
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Edit_custom from './Edit_custom';
import Info_Car from './Footer_detail/Info_Car';
import Config_level from './Footer_detail/Config_level';
import Config_positive from './Footer_detail/Config_positive';

export default class detail_custom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            data: this.props.Data,
            checkEdit:false,
            dataEdit:[],
        }
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleEdit=(t)=>{
        this.setState({
            checkEdit:!this.state.checkEdit,
            dataEdit:t
        })
    }
    componentDidMount() {
    }
    render() {
        const { show,checkEdit,dataEdit } = this.state;
        const { Data } = this.props;
        return (
            <div>
                <Modal show={show} onHide={this.handleClose} size='xl'>
                    <Modal.Body>
                        <div className='border_button'>
                            <Row>
                                <Col sm={4}>
                                    <h5>{Data.fullname}</h5>
                                    <div className='style_active'>{Data.status}</div>
                                </Col>
                                <Col sm={8}>
                                    <Button variant="info" className='button_right color_white'>Duyệt định danh</Button>
                                    <Button variant="info" className='button_right color_white'>Cấp lại mật khẩu</Button>
                                    <Button variant="info" className='button_right color_white'>Khóa</Button>
                                    <Button variant="info" className='button_right color_white'>Mở khóa</Button>
                                    <Button variant="info" className='button_right color_white' onClick={()=>this.handleEdit(Data)}>Chỉnh sửa</Button>
                                    <Button variant="info" className='button_right color_white'>Đóng</Button>
                                </Col>
                            </Row>
                        </div>
                        <div className='border_button'>
                        <Row>
                            <Col>
                                <p>Họ tên: {Data.fullname}</p>
                                <p>Điện thoại: {Data.phone}</p>
                                <p>Email: {Data.email}</p>
                                <p>Giới tính: </p>
                                <p>Ngày sinh: </p>
                                <p>Quốc tịch: </p>
                                <p>CMND mặt trước: </p>
                                <p>CMND mặt sau: </p>
                                <p>Ảnh đại diện: </p>

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
                        </Row>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <Tabs
                                defaultActiveKey="home"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Thông tin biển số xe">
                                    <Info_Car />
                                </Tab>
                                <Tab eventKey="profit" title="Cấu hình hạn mức">
                                    <Config_level />
                                </Tab>
                                <Tab eventKey="contact" title="Cấu hình xác thực">
                                    <Config_positive />
                                </Tab>
                            </Tabs>
                        </div>


                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save
                        </Button>
                    </Modal.Footer> */}
                    
                </Modal>
                <div>
                    {checkEdit==true?<Edit_custom Data={dataEdit} />:''}
                </div>
            </div>
        )
    }
}
