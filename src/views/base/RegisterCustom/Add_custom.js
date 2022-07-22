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


export default class Add_custom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            data: this.props.Data,
            checkEdit: false,
            fullname: "",
            typeWall: "",
            phone: "",
            giayto: "",
            email: "",
            date_create: "",
            noi_cap: "",
            birthday: "",
            thuong_tru: "",
            district: "",
            cmnd_mt:"",
            type_wall:"",
        }
    }
    handleClose = () => {
        this.setState({
            show: false
        })
        this.props.onSelectModal()
    }
    sendForm = () => {
        console.log("adfsadf", this.state)
        if(this.state.fullname.length==0){
            toast.error("Vui lòng nhập họ và tên !")
            return
        }
        let data={
                address: this.state.thuong_tru,
                avatar: "/opt/manage-api/files/avatar/63-1658481137156-do-mac-cho-meo_1.jpg",
                busPermitIssueDate: "",
                busPermitNo: "",
                checkerAt: "",
                checkerId: 0,
                createdBy: "admin",
                createdDate: "2022-07-21",
                cusKind: "",
                cusType: "",
                custNo: this.state.giayto,
                district: "",
                dob: this.state.birthday,
                email: this.state.email,
                fax: "",
                gender: 0,
                id: 0,
                idIssueDate: "2022-07-21",    //ngày cấp
                idIssuePlace: this.state.noi_cap,
                idNo: "",
                invCycleEffectDate: "2022-07-21",
                invoiceCycleType: 0,
                lastModifiedDate: "2022-07-21",
                linkInvite: "string",
                makerAt: "2022-07-21",
                makerId: 0,
                mobiNumber: this.state.phone,
                name: this.state.fullname,
                nameSearch: "",
                nationality: "Việt Nam",
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


        callApi(`customer`,'POST',data).then((res)=>{
            if(res.status==200){
                toast("Thêm mới thành công !")
            }else{

            }
        })
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked  : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleInputDate=(e)=>{
        
    }
    handleFile=(event)=>{
        console.log("ádfasdf",event.target.files[0])
    }
    render() {
        console.log("adfasdf",this.state)
        const { show } = this.state;
        const { Data } = this.props;
        return (
            <div>
                <ToastContainer />
                <Modal show={show} onHide={this.handleClose} size='xl'>
                    <Modal.Header>
                        <Modal.Title>Đăng ký ví</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className='border_button'>
                            <Row>
                                <Col>
                                    <table className="table table-bordered">

                                        <tbody className="">
                                            <tr className="">
                                                <td>Họ tên:</td>
                                                <td><input type="text" name="fullname" placeholder='Nhập họ và tên...' onChange={this.handleInputChange}></input></td>
                                                <td>Loại ví:</td>
                                                <td>
                                                <select name="type_wall" id="cars" disabled form="carform" onChange={this.handleInputChange}>
                                                    <option value="Cá nhân">Cá nhân</option>
                                                </select>
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td>Điện thoại:</td>
                                                <td><input type="text" name="phone" placeholder='Nhập số điện thoại...' onChange={this.handleInputChange}></input></td>
                                                <td>Giấy tờ tùy thân:</td>
                                                <td><input type="text" name="giayto" placeholder='Nhập giấy tờ tùy thân...' onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Email:</td>
                                                <td><input type="text" name="email" placeholder='Nhập email...' onChange={this.handleInputChange}></input></td>
                                                <td>Ngày cấp:</td>
                                                <td><input type="date" name="date_create" placeholder='Nhập ngày cấp...' onChange={this.handleInputDate}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Giới tính:</td>
                                                <td><select name="male" id="cars" form="carform" onChange={this.handleInputChange}>
                                                    <option value="1">Nam</option>
                                                    <option value="2">Nữ</option>
                                                </select></td>
                                                <td>Nơi cấp:</td>
                                                <td><input type="text" name="noi_cap" placeholder='Nhập nơi cấp...' onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Ngày sinh:</td>
                                                <td><input type="date" name="birthday" placeholder='Nhập họ và tên...' onChange={this.handleInputChange}></input></td>
                                                <td>Địa chỉ thường trú:</td>
                                                <td><input type="text" name="thuong_tru" placeholder='Nhập địa chỉ thường chú...' onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>CMND mặt trước:</td>
                                                <td><input type="file"></input></td>
                                                <td>Quê quán:</td>
                                                <td><input type="text" name="district" placeholder='Nhập quê quán...' onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>CMND mặt sau:</td>
                                                <td><input type="file" name="cmnd_mt" onChange={this.handleFile}></input></td>
                                                <td>Quốc tịch:</td>
                                                <td><input type="text" name="typeWall" placeholder='Nhập email...' onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td></td>
                                                <td></td>
                                                <td>Ảnh đại diện:</td>
                                                <td><input type="file" name="typeWall" ></input></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                        </div>
                        {/* <div className='last_tr'>
                            <Button variant="success" className='w-20 mt-2'>Đăng ký</Button>
                        </div> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary color_white" onClick={this.handleClose}>
                            Đóng
                        </Button>
                        <Button variant="success color_white" onClick={this.sendForm}>
                            Đăng ký
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
