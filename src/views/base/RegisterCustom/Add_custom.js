import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Row, Col, InputGroup } from 'react-bootstrap';
import './style.css';


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

        }
    }
    handleClose = () => {
        this.setState({
            show: false
        })
        this.props.onSelectModal()
    }
    handleInputChange = () => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    render() {
        console.log("sdfasdf", this.state);
        const { show } = this.state;
        const { Data } = this.props;
        return (
            <div>
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
                                                <td><input type="text" name="typeWall" placeholder='Nhập loại ví...' onChange={this.handleInputChange}></input></td>
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
                                                <td><input type="date" name="date_create" placeholder='Nhập ngày cấp...' onChange={this.handleInputChange}></input></td>
                                            </tr>
                                            <tr className="">
                                                <td>Giới tính:</td>
                                                <td><select name="male" id="cars" form="carform">
                                                    <option value="volvo">Nam</option>
                                                    <option>Nữ</option>
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
                                                <td><input type="file"></input></td>
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
                        <Button variant="success color_white" onClick={this.handleClose}>
                            Đăng ký
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
