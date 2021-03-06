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
import { CheckMail, CheckText, PhoneNumber } from 'src/views/helper/validate';
import { errorBirthday, errorEmail, errorFullname, errorNoiCap, errorPhoneNUmber, errorThuongTru } from 'src/views/helper/codeError';

var axios = require('axios');


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
            cmnd_mt: "",
            type_wall: "",
            male: "",
            avatar: "",
            idNoFont: "",
            idNoBack: "",
            phoneCheck: false,
            checkText: false,
        }
    }
    handleClose = () => {
        this.setState({
            show: false
        })
        this.props.onSelectModal()
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    sendForm = () => {
        const { phone, email, fullname, noi_cap, thuong_tru, birthday, date_create } = this.state;
        if (fullname.length == 0 || CheckText(fullname)) {
            toast.error(errorFullname)
            return
        }
        else if (!PhoneNumber(phone)) {
            toast.error(errorPhoneNUmber)
            return
        } else if (!CheckMail(email)) {
            toast.error(errorEmail)
            return
        } else if (birthday.length == 0) {
            toast.error(errorBirthday)
            return
        }
        else if (noi_cap.length == 0) {
            toast.error(errorNoiCap)
            return
        }
        else if (thuong_tru.length == 0) {
            toast.error(errorThuongTru)
            return
        }
        let data = {
            address: this.state.thuong_tru,
            avatar: this.state.avatar,
            dob: this.state.birthday,
            email: this.state.email,
            gender: this.state.male,
            homeTow: "string",
            idIssueDate: this.state.date_create,
            idIssuePlace: this.state.noi_cap,
            idNo: this.state.giayto,
            idNoBack: this.state.idNoBack,
            idNoFont: this.state.idNoFont,
            mobiNumber: this.state.phone,
            name: this.state.fullname,
            nationality: "Vi???t Nam",
            walletTypeId: this.state.type_wall
        }
        callApi(`wallet`, 'POST', data).then((res) => {
            if (res.status == 200) {
                toast("Th??m m???i th??nh c??ng !")
            } else {
                toast.error("L???i h??? th???ng !")
            }
        })
            .catch((res) => {
                console.log("ress==", res)
                toast.error("L???i h??? th???ng !")
            })
    }
    handleInputDate = (e) => {

    }
    handleFile = (e, index) => {
        let selectedFile = e.target.files[0]
        const formData = new FormData();
        // formData.append("member_id", "1");
        formData.append("files", selectedFile);
        var config = {
            method: 'post',
            url: 'http://10.101.243.21:8088/api/images',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        };
        axios(config).then((res) => {
            if (index == 1) {
                this.setState({
                    avatar: res.data[0]
                })
            } else if (index == 2) {
                this.setState({
                    idNoFont: res.data[0]
                })
            } else {
                this.setState({
                    idNoBack: res.data[0]
                })
            }
        })
    };
    render() {
        const { show, phoneCheck } = this.state;
        const { Data } = this.props;
        console.log("test", PhoneNumber(this.state.phone))
        return (
            <div>
                <ToastContainer />
                <Modal show={show} onHide={this.handleClose} size='xl' className='modal_add'>
                    <Modal.Header>
                        <Modal.Title>????ng k?? v??</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className='border_button'>
                            <Row>
                                <Col>
                                    <table className="table table-bordered">

                                        <tbody className="">
                                            <tr className="">
                                                <td>H??? t??n:</td>
                                                <td>
                                                    <input type="text" name="fullname" onChange={this.handleInputChange}></input>
                                                </td>
                                                <td>Lo???i v??:</td>
                                                <td>
                                                    <select name="type_wall" id="cars" form="carform" onChange={this.handleInputChange}>
                                                        <option value="">Lo???i v??</option>
                                                        <option value="1">C?? nh??n</option>
                                                        <option value="2">T??? ch???c</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td>??i???n tho???i:</td>
                                                <td>
                                                    <input type="phone" name="phone"  onChange={this.handleInputChange}></input>
                                                </td>
                                                <td>Gi???y t??? t??y th??n:</td>
                                                <td><input type="text" name="giayto" onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Email:</td>
                                                <td><input type="text" name="email" onChange={this.handleInputChange}></input></td>
                                                <td>Ng??y c???p:</td>
                                                <td><input type="date" name="date_create" onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Gi???i t??nh:</td>
                                                <td><select name="male" id="cars" form="carform" onChange={this.handleInputChange}>
                                                    <option value="1">Nam</option>
                                                    <option value="2">N???</option>
                                                </select></td>
                                                <td>N??i c???p:</td>
                                                <td><input type="text" name="noi_cap" onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Ng??y sinh:</td>
                                                <td><input type="date" name="birthday" onChange={this.handleInputChange}></input></td>
                                                <td>?????a ch??? th?????ng tr??:</td>
                                                <td><input type="text" name="thuong_tru" onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Gi???y t??? m???t tr?????c:</td>
                                                <td><input type="file" onChange={event => this.handleFile(event, 2)}></input></td>
                                                <td>Qu?? qu??n:</td>
                                                <td><input type="text" name="district" onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Gi???y t??? m???t sau:</td>
                                                <td><input type="file" title="Choose a video please" name="cmnd_mt" onChange={event => this.handleFile(event, 3)}></input></td>
                                                <td>Qu???c t???ch:</td>
                                                <td><input type="text" name="typeWall" value="Vi???t Nam" disabled onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td></td>
                                                <td></td>
                                                <td>???nh ?????i di???n:</td>
                                                <td><input type="file" name="typeWall" onChange={event => this.handleFile(event, 1)}></input></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                        </div>
                        {/* <div className='last_tr'>
                            <Button variant="success" className='w-20 mt-2'>????ng k??</Button>
                        </div> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary color_white" onClick={this.handleClose}>
                            ????ng
                        </Button>
                        <Button variant="success color_white" onClick={this.sendForm}>
                            ????ng k??
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
