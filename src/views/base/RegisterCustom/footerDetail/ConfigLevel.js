import React, { Component } from 'react'
import { Button, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import callApi from 'src/api/config';
import { BiEdit, BiXCircle } from "react-icons/bi";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { addFail, addSuccess, updateErro, updateSucc } from 'src/views/helper/codeError';

export default class ConfigLevel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            checkAdd: false,
            isEdit: false,
            idCheck: [],
            update: false,
            channel: "",
            verify: "VERIFY_PASSWD",
            type_Gd: [],
            hmGg: "",
            hmNgay: "",
            hmThang: "",
            productId: "",
            kenh: "",
            type_gd: "",
            hm_gd: "",
            hm_ngay: "",
            hm_thang: ""
        }
    }
    handleInputChange = () => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    addRow = () => {
        this.setState({
            checkAdd: !this.state.checkAdd
        })
    }
    cancelRow = () => {
        this.setState({
            checkAdd: !this.state.checkAdd
        })
    }
    addData = () => {
        const { channel, hmGg, hmNgay, hmThang, productId } = this.state;
        let dataSend = {
            channel,
            custId: this.props.Data.custId,
            hmGg,
            hmNgay,
            hmThang,
            productId,
            walletId: "",
            walletType: ""
        }
        callApi(`account_limit`, 'POST', dataSend).then((res) => {
            toast(addSuccess)
        }).catch((err) => {
            toast.error(addFail)
        })
    }
    isEditData = (val) => {
        console.log("val==", val)
        this.setState({
            isEdit: true,
            idCheck: val,
            update: true
        })


    }
    isDestroy = () => {
        this.setState({
            update: false,
            isEdit: false
        })
    }
    handleInputEdit = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        console.log("value",value);
        console.log("name",name);
        this.setState({
            [name]: value
        })
    }
    isUpdate = () => {
        const { kenh, type_gd, hm_gd, hm_ngay, hm_thang,idCheck } = this.state;
        let dataUpdate = {
            channel: kenh.length==0?idCheck.channel:kenh,
            custId: this.props.Data.custId,
            hmGg:  hm_gd.length==0?idCheck.hmGg:hm_gd,
            hmNgay: hm_ngay.length==0?idCheck.hmNgay:hm_ngay,
            hmThang: hm_thang.length==0?idCheck.hmThang:hm_thang,
            productId: type_gd.length==0?idCheck.productId:type_gd
        }
        callApi(`account_limit`, 'PUT', dataUpdate).then((res) => {
            toast(updateSucc);
            this.componentDidMount();
            this.setState({
                update:false,
                isEdit:false
            })
        }).catch((err) => {
            toast.error(updateErro)
        })
    }
    isDeleteData = (e) => {
        let dataDelete={
            channel: e.channel,
            custId: e.custId,
            hmGg: e.hmGg,
            hmNgay: e.hmNgay,
            hmThang: e.hmThang,
            productId: e.productId
          }
        callApi(`account_limit`, 'DELETE',dataDelete).then((res) => {
            toast(updateSucc)
            this.componentDidMount()
        }).catch((err) => {
            toast.error(updateErro)
        })
    }
    componentDidMount() {
        const { Data } = this.props;
        callApi(`product/all`).then((res) => {

            this.setState({
                type_Gd: res.data
            })
        })
        callApi(`account_limit/detail?cust_id=${Data.custId}`).then((res) => {
            console.log("res==", res)
            this.setState({
                data: res.data
            })
        }).catch((err) => {

        })
    }
    render() {
        const { data, checkAdd, isEdit, idCheck, update, type_Gd } = this.state;
        console.log("data==", data);
        console.log("idCheck", idCheck)
        return (
            <div>
                <div className='d-flex justify-content-end mb-2'>
                    <Button variant="success" className='button_right color_white' onClick={this.addRow}>+ Thêm mới</Button>
                </div>
                <Row>
                    <table className="table table-bordered">
                        <thead className="last_right">
                            <tr>
                                <th scope="col">Kênh</th>
                                <th scope="col">Loại giao dịch</th>
                                <th scope="col">Hạn mức 1GD</th>
                                <th scope="col">Tổng hạn mức ngày</th>
                                <th scope="col">Hạn mức tháng</th>
                                <th scope="col">Công cụ</th>
                            </tr>
                        </thead>



                        <tbody className="table-group-divider">
                            {
                                checkAdd ? <tr className="last_tr">
                                    <td>
                                        <select name="channel" id="cars" form="carform" onChange={this.handleInputChange}>
                                            <option value="Web">Web</option>
                                            <option value="Mobile">Mobile</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="productId" id="cars" form="carform" onChange={this.handleInputChange}>
                                            {
                                                type_Gd.map((val, index) => (
                                                    <option value={val.id} key={index}>{val.notes}</option>
                                                ))
                                            }
                                        </select>
                                    </td>
                                    <td><input type="text" placeholder='Nhập số tiền...' name="hmGg" onChange={this.handleInputChange} /></td>
                                    <td><input type="text" placeholder='Nhập số tiền...' name="hmNgay" onChange={this.handleInputChange} /></td>
                                    <td><input type="text" placeholder='Nhập số tiền...' name="hmThang" onChange={this.handleInputChange} /></td>
                                    <td className='d-flex justify-content-evenly chi_tiet'>
                                        <p onClick={this.addData}><FcCheckmark /></p>
                                        <p onClick={this.cancelRow}><FcCancel /></p>
                                    </td>
                                </tr> : null
                            }
                            {
                                data&&data.map((val, index) => (
                                    <tr className="last_tr" key={index}>
                                        <td>{isEdit && idCheck.id == val.id ? <select defaultValue={val.channel} name="kenh" id="cars" form="carform" onChange={this.handleInputEdit}>
                                            <option value="Mobile">Mobile</option>
                                            <option value="Web">Web</option>
                                        </select> : val.channel}</td>
                                        <td>{isEdit && idCheck.id == val.id ? <select defaultValue={val.productId} name="type_gd" id="cars" form="carform" onChange={this.handleInputEdit}>
                                            {
                                                type_Gd.map((val, index) => (
                                                    <option value={val.id} key={index}>{val.notes}</option>
                                                ))
                                            }
                                        </select> : val.productId}</td>
                                        <td >
                                            {isEdit && idCheck.id == val.id ? <input type="text" name='hm_gd' defaultValue={val.hmGg} onChange={this.handleInputEdit} /> : val.hmGg}
                                        </td>
                                        <td>{isEdit && idCheck.id == val.id ? <input type="text" name='hm_ngay' defaultValue={val.hmNgay} onChange={this.handleInputEdit} /> : val.hmNgay}</td>
                                        <td>{isEdit && idCheck.id == val.id ? <input type="text" name='hm_thang' defaultValue={val.hmThang} onChange={this.handleInputEdit} /> : val.hmThang}</td>
                                        {update && idCheck.id == val.id ? <td className='d-flex justify-content-around chi_tiet'>
                                            <p onClick={this.isUpdate}>Cập nhật</p>
                                            <p onClick={this.isDestroy}>Hủy</p>
                                        </td> : <td className='d-flex justify-content-evenly chi_tiet'>
                                            <p onClick={() => this.isEditData(val)}><BiEdit /></p>
                                            <p onClick={() => this.isDeleteData(val)}><BiXCircle /></p>
                                        </td>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>



                    </table>

                </Row>
            </div>
        )
    }
}
