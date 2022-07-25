import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import callApi from 'src/api/config';

export default class Config_positive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      verify: "",
      from_monney: "",
      to_monney: "",
      checkAdd: false,
      isEdit: false,
      idCheck: [],
      update:false,
      minEdit:"",
      maxEdit:"",
      verify:"",

    }

  }
  handleInputChange = () => {
    let value = event.target.value;
    this.setState({
      [name]: value
    })

  }
  addRow = () => {
    this.setState({
      checkAdd: !this.state.checkAdd
    })
  }
  addData = () => {
    let dataSend = {
      cateId: 0,
      custGroupCode: "",
      custId: 1,
      custType: "",
      id: 0,
      maxAmount: this.state.to_monney,
      minAmount: this.state.from_monney,
      notes: "",
      productId: 0,
      verifyMethod: this.state.verify
    }
    callApi(`verify-rule-config`, 'POST', dataSend).then((res) => {
      toast("Thêm mới thành công !")
    }).catch((err) => {

    })
  }
  isEditData = (val) => {

    this.setState({
      isEdit: true,
      idCheck: val,
      update:true
    })
  }
  isDestroy=()=>{
    this.setState({
      update:false
    })
  }
  handleInputEdit=()=>{
    let value=event.target.value;
    const name = event.target.name;
    console.log("value",value)
    this.setState({
      [name]:value
    })
  }
  isUpdate=()=>{
    const {idCheck}=this.state;
    let dataUpdate={
        cateId: idCheck.cateId,
        custGroupCode: "",
        custId: idCheck.custId,
        custType: "",
        id: 2,
        maxAmount: this.state.maxEdit.length==0?idCheck.maxAmount:this.state.maxEdit,
        minAmount: this.state.minEdit.length==0?idCheck.minAmount:this.state.minEdit,
        notes: "note",
        productId: 0,
        verifyMethod: this.state.verify.length==0?idCheck.verifyMethod:this.state.verify,
    }
    callApi(`verify-rule-config`,'PUT',dataUpdate).then((res)=>{
      console.log("res===",res)
      toast("Cập nhật thành công !")
    }).catch((err)=>{
      toast.error("Cập nhật thất bại !")
    })
  }
  isDeleteData=()=>{

  }
  componentDidMount() {
    callApi(`verify-rule-config?custId=1`).then((res) => {
      this.setState({
        data: res.data
      })
    }).catch((err) => {

    })
  }
  render() {
    const { data, checkAdd, isEdit, idCheck, update } = this.state;
    console.log("data==", this.state)
    return (
      <div>
        <div className='d-flex justify-content-end mb-2'>
          <Button variant="success" className='button_right color_white' onClick={this.addRow}>+ Thêm mới</Button>
        </div>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
              <tr>
                <th scope="col">Từ số tiền</th>
                <th scope="col">Tới số tiền</th>
                <th scope="col">Phương thức xác thực</th>
                {/* <th scope="col">Tổng hạn mức ngày</th */}
                <th scope="col">Công cụ</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {
                checkAdd ? <tr className="last_tr">
                  <th><input type="text" placeholder='Nhập số tiền...' name="from_monney" onChange={this.handleInputChange} /></th>
                  <td><input type="text" placeholder='Nhập số tiền...' name="to_monney" onChange={this.handleInputChange} /></td>
                  <td>
                    <select name="verify" id="cars" form="carform" onChange={this.handleInputChange}>
                      <option value="VERIFY_PASSWD">Xác thực mật khẩu</option>
                      <option value="OPT_SMS">Xác thực tin nhắn</option>
                    </select>
                  </td>
                  <td>
                    <Button variant="success" className='button_right color_white' onClick={this.addData}>Thêm mới</Button>
                  </td>
                </tr> : ''
              }
              {
                data.map((val, index) => (
                  <tr className="last_tr" key={index}>
                    <th >
                      {isEdit && idCheck.id == val.id ? <input type="text" name='minEdit' defaultValue={val.minAmount} onChange={this.handleInputEdit}/> : val.minAmount}
                    </th>
                    <td>{isEdit && idCheck.id == val.id ? <input type="text" name='maxEdit' defaultValue={val.maxAmount} onChange={this.handleInputEdit}/> : val.maxAmount}</td>
                    <td>{isEdit && idCheck.id == val.id ? <select name="verify" id="cars" form="carform" onChange={this.handleInputEdit}>
                      <option value="VERIFY_PASSWD">Xác thực mật khẩu</option>
                      <option value="OPT_SMS">Xác thực tin nhắn</option>
                    </select> : val.verifyMethod}</td>
                    {!update?<td className='d-flex justify-content-around chi_tiet'>
                      <p onClick={() => this.isEditData(val)}>Sửa</p>
                      <p onClick={()=>this.isDeleteData(val.id)}>Xóa</p>
                    </td>:<td className='d-flex justify-content-around chi_tiet'>
                            <p onClick={this.isUpdate}>Cập nhật</p>
                            <p onClick={this.isDestroy}>Hủy</p>
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
