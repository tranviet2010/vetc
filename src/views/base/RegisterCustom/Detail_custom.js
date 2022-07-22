
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
import callApi from 'src/api/config';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class detail_custom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            data: [],
            checkEdit: false,
            dataEdit: [],
        }
    }
    handleClose = () => {
        this.setState({
            show: false
        })
        this.props.onSelectModal();
    }
    handleEdit = (t) => {
        this.setState({
            checkEdit: true,
            dataEdit: t
        })
    }
    onClose = () => {
        this.setState({
            checkEdit: false,
        })
    }
    handleBlock = () => {
        const { Data } = this.props
        callApi(`customer/state?customerId=${Data.custId}&value=BLOCK`, 'POST').then((res) => {
            if (res.status == 200) {
                toast.success("Khóa thành công !")
                // this.setState({
                //     show: !this.state.show
                // })
            } else {

            }
        })
    }
    handleOpen = () => {
        const { Data } = this.props
        callApi(`customer/state?customerId=${Data.custId}&value=OPEN`, 'POST').then((res) => {
            toast.success("Mở khóa thành công !")
        })
    }
    verifyUpdate = () => {
        const { Data } = this.props
        callApi(`customer/verify-state?customerId=${Data.custId}&value=VERIFIED`, 'POST').then((res) => {
            if (res.status == 200) {
                toast.success("Duyệt định danh thành công !")
            } else {

            }

        })
    }
    componentDidMount() {
        callApi(`customer-detail?customerId=${this.props.Data.custId}`).then((res) => {
            console.log("data==",res)
            this.setState({
                data: res.data
            })


        })
    }
    render() {
        const { show, checkEdit, dataEdit, data } = this.state;
        const { Data } = this.props;
        return (
            <div>
                <ToastContainer />
                <Modal show={show} onHide={this.handleClose} size='xl'>
                    <Modal.Body>
                        <div className='border_button'>
                            <Row>
                                <Col sm={4}>
                                    <h5>{Data.custName}</h5>
                                    <div className='style_active'>{Data.state}</div>
                                </Col>
                                <Col sm={8}>
                                    <Button variant="info" className='button_right color_white' onClick={this.verifyUpdate}>Duyệt định danh</Button>
                                    <Button variant="info" className='button_right color_white'>Cấp lại mật khẩu</Button>
                                    {Data.state=="OPEN"?<Button variant="info" className='button_right color_white' onClick={this.handleBlock}>Khóa</Button>:
                                    <Button variant="info" className='button_right color_white' onClick={this.handleOpen}>Mở khóa</Button>}
                                    <Button variant="info" className='button_right color_white' onClick={() => this.handleEdit(Data)}>Chỉnh sửa</Button>
                                    <Button variant="info" className='button_right color_white' onClick={this.handleClose}>Đóng</Button>
                                </Col>
                            </Row>
                        </div>
                        <div className='border_button'>
                            <Row>
                                <Col>
                                    <p>Họ tên: {Data.custName}</p>
                                    <p>Điện thoại: {Data.mobiNumber}</p>
                                    <p>Email: {Data.email}</p>
                                    <p>Giới tính: {data.gender == 1 ? "Nam" : "Nữ"}</p>
                                    <p>Ngày sinh: {new Date(data.dob).toLocaleDateString("vi-VN")}</p>
                                    <p>Quốc tịch: {data.nationality}</p>
                                    <p>CMND mặt trước: </p>
                                    <p>CMND mặt sau: </p>
                                    <p>Ảnh đại diện: </p>

                                </Col>

                                <Col>
                                    <p>Giấy tờ tùy thân : {data.idNo}</p>
                                    <p>Ngày cấp: {new Date(data.idIssueDate).toLocaleDateString("vi-VN")}</p>
                                    <p>Nơi cấp: {data.idIssuePlace}</p>
                                    <p>Quê quán: {data.homeTown}</p>
                                    <p>Địa chỉ thường chú: {data.district}</p>
                                    <p>Loại ví: {data.cusType}</p>
                                    <p>Tài khoản ví: {data.walletType}</p>
                                    <p>Số dư ví: {data.balance}</p>
                                    <p>Thời gian đăng ký: {new Date(data.createdDate).toLocaleDateString("vi-VN")}</p>

                                </Col>
                            </Row>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <Tabs
                                defaultActiveKey="home"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Thông tin biển số xe">
                                    <Info_Car Data={this.props.Data} />
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
                    {checkEdit == true ? <Edit_custom Data={data} onClose={this.onClose} /> : ''}
                </div>
            </div>
        )
    }
}
