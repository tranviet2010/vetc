import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Row, Col, InputGroup } from 'react-bootstrap';
import './style.css';
import callApi from 'src/api/config';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Edit_custom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            data: this.props.Data,
            checkEdit:false,
            email:"",
            date_cap:"",
            noi_cap:"",
        }
    }
    handleClose = () => {
        this.setState({
            show: false
        })
        this.props.onClose()
    }
    handleInputChange=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked  : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleUpdate=()=>{
        const {Data}=this.props;
        let data={
                address: Data.address,
                avatar: "string",
                busPermitIssueDate: "",
                busPermitNo: "",
                checkerAt: "",
                checkerId: 0,
                createdBy: "admin",
                createdDate:Data.createdDate,
                cusKind: "",
                cusType: "",
                custNo: this.state.giayto,
                district: "",
                dob: this.state.birthday,
                email: this.state.email.length==0?Data.email:this.state.email,
                fax: "",
                gender: Data.gender,
                id: Data.custId,
                idIssueDate: this.state.date_cap.length==0?Data.idIssueDate:this.state.date_cap,    //ngày cấp
                idIssuePlace: this.state.noi_cap.length==0?Data.idIssuePlace:this.state.noi_cap,
                idNo: Data.idNo,
                invCycleEffectDate: "2022-07-21",
                invoiceCycleType: 0,
                lastModifiedDate: "2022-07-21",
                linkInvite: "string",
                makerAt: "2022-07-21",
                makerId: 0,
                mobiNumber: Data.mobiNumber,
                name: Data.custName,
                nameSearch: "",
                nationality: Data.nationality,
                parentId: 0,
                precinct: "string",
                province: "string",
                qrcode: "string",
                ranking: 0,
                repreDob: "2022-07-21",
                repreGender: "string",
                repreIdIssueDate: "2022-07-21",
                repreIdIssuePlace: "string",
                repreIdNo: "string",
                repreMobiNumber: "string",
                repreName: "string",
                repreNationality: "string",
                rootId: 0,
                state: "OPEN",
                status: 1,
                tin: "string",
                tinEffectedDate: "2022-07-21",
                vectState: "string",
                verifyState: "string",
                vetcAccount: "string",
                male:""
        }

        callApi(`customer`,"PUT",data).then((res)=>{
            toast("Cập nhật thành công !")
            this.props.onClose()
        })
        .catch((error)=>{
            toast.error("Cập nhật thất bại !")
        })
    }
    render() {
        const {show}=this.state;
        const {Data}=this.props;
        let date=Data.idIssueDate&& new Date(Data.idIssueDate).toLocaleDateString("sv-SE")
        return (
            <div>
                <ToastContainer />
                <Modal show={show} onHide={this.handleClose} size='xl'>
                    {/* <Modal.Header closeButton>
                        <Row>
                            <Col>
                                <Modal.Title>{Data.fullname} <div>{Data.status}</div></Modal.Title>
                            </Col>
                            <Col></Col>
                        </Row>

                    </Modal.Header> */}
                    <Modal.Body className='modal_fix'>
                        <div className='border_button'>
                            <Row>
                                <Col sm={4}>
                                    <h5>{Data.custName}</h5>
                                    {/* <div className='style_active'>{Data.status}</div> */}
                                </Col>
                            </Row>
                        </div>
                        <div className=''>
                        <Row>
                        <Col>
                                    <table className="table table-bordered">

                                        <tbody className="">
                                            <tr className="">
                                                <td>Họ tên:</td>
                                                <td>{Data.custName}</td>
                                                <td>Loại ví:</td>
                                                <td>Cá nhân</td>
                                            </tr>
                                            <tr className="">
                                                <td>Điện thoại:</td>
                                                <td>{Data.mobiNumber}</td>
                                                <td>Giấy tờ tùy thân:</td>
                                                <td>{Data.idNo}</td>
                                            </tr>
                                            <tr className="">
                                                <td>Email:</td>
                                                <td><input type="text" name="email" defaultValue={Data.email} placeholder='Nhập email...' onChange={this.handleInputChange}></input></td>
                                                <td>Ngày cấp:</td>
                                                <td><input type="date" name="date_cap" defaultValue={date} placeholder='Nhập ngày cấp...' onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Giới tính:</td>
                                                <td>{Data.gender==1?"Nam":"Nữ"}</td>
                                                <td>Nơi cấp:</td>
                                                <td><input type="text" name="noi_cap" defaultValue={Data.idIssuePlace} placeholder='Nhập nơi cấp...' onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Ngày sinh:</td>
                                                <td>{new Date(Data.dob).toLocaleDateString("vi-VN")}</td>
                                                <td>Địa chỉ thường trú:</td>
                                                <td>{Data.address}</td>
                                            </tr>
                                            <tr className="">
                                                <td>CMND mặt trước:</td>
                                                <td></td>
                                                <td>Quê quán:</td>
                                                <td>{Data.homeTown}</td>
                                            </tr>
                                            <tr className="">
                                                <td>CMND mặt sau:</td>
                                                <td></td>
                                                <td>Loại ví:</td>
                                                <td></td>
                                            </tr>
                                            <tr className="">
                                                <td>Số dư ví: </td>
                                                <td>{Data.balance}</td>
                                                <td>Ảnh đại diện:</td>
                                                <td></td>
                                            </tr>
                                            <tr className="">
                                                <td></td>
                                                <td></td>
                                                <td>Thời gian đăng ký:</td>
                                                <td>{new Date(Data.createdDate).toLocaleDateString("vi-VN")}</td>
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                        </Row>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary color_white" onClick={this.handleClose}>
                            Đóng
                        </Button>
                        <Button variant="success color_white" onClick={this.handleUpdate}>
                        Cập nhật
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
