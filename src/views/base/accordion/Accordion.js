import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import Detail_custom from './Detail_custom';

export default class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { magd: "001", fullname: "Trần văn huy", phone: "0987654321", email: "net@vetc.com.vn", cmnd: "0265895354", typemout: "a", status: "Hoạt động", datecreate: "20/10/2019" },
        { magd: "002", fullname: "Nguyễn quốc C", phone: "0334598568", email: "quocc@vetc.com.vn", cmnd: "5689876566", typemout: "b", status: "Chờ phê duyệt", datecreate: "01/02/2010" },
      ],
      phone: "",
      checkDetail:false,
      dataCheck:[],

    };
  }
  handleClick=(t)=>{
    this.setState({
      checkDetail:!this.state.checkDetail,
      dataCheck:t
    })
  }
  componentDidMount(){
    console.log("ádfasdf",this.state.dataCheck)
  }
  render() {
    const { data, dataCheck } = this.state;
    console.log("ádfasdf",this.state.dataCheck)
    return (
      <div>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách khách hàng đăng ký ví</b>
            </Col>
            <Col className='d-flex justify-content-end'>
              <Button variant="success" className='button_right color_white'>Thêm mới</Button>
              <Button variant="success" className="color_white">Xuất excel</Button>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <div className="input-group">
              <input type="date" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="phone" className="form-control" placeholder="Điện thoại" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Giấy tờ tùy thân" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Trạng thái</option>
              <option value="1">Hoạt động</option>
              <option value="2">Chưa xác thực</option>
              <option value="3">Khóa</option>
              <option value="4">Đóng</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff" }}>Tìm kiếm</Button>
          </Col>
        </Row>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã GD</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col">CMND</th>
                <th scope="col">Loại ví</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Ngày tạo</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {
                data.map((val, index) => (
                  <tr className="last_tr">
                    <th scope="row">{index + 1}</th>
                    <td>{val.magd}</td>
                    <td>{val.fullname}</td>
                    <td>{val.phone}</td>
                    <td>{val.email}</td>
                    <td>{val.cmnd}</td>
                    <td>{val.typemout}</td>
                    <td>{val.status}</td>
                    <td>{val.datecreate}</td>
                    <td href="#" onClick={()=>this.handleClick(val)}>Chi tiết</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </Row>
        <Row>
          <Col className='d-flex'>
              {/* <span>Xem</span> 
              <select className="form-select">
                <option selected>10</option>
                <option value="1">10</option>
                <option value="2">20</option>
                <option value="3">50</option>
                <option value="4">100</option>
            </select>
            <span>trên tổng số {data.length} bản ghi</span> */}
          </Col>
          <Col>
          {/* <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item"><a className="page-link">1</a></li>
              <li className="page-item"><a className="page-link">2</a></li>
              <li className="page-item"><a className="page-link">3</a></li>
              <li className="page-item">
                <a className="page-link">Next</a>
              </li>
            </ul>
          </nav> */}
          </Col>
        </Row>
        {this.state.checkDetail==true?<Detail_custom Data={dataCheck} />:''}
        
      </div>
    )
  }
}
