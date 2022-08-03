import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';
import '../RegisterCustom/style.css';
import CIcon from "@coreui/icons-react";
import { cilDataTransferDown, cilDescription, cilLoop, cilSearch} from "@coreui/icons";
import Settlement from "./Settlement";
import UpdateWallet from "../accountWallet/UpdateWallet";
import AddWallet from "../accountWallet/AddWallet";

export default class guaranteedAccount extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          NGAY: "30/07/2022 17:00",
          SOTK: "106870xxxx1111",
          TENTK: "NGUYEN VAN LOC",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "2.000.000"
        },
        {
          NGAY: "30/07/2022 13:30",
          SOTK: "106870xxxx1121",
          TENTK: "DANG DINH TUNG",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "3.300.000"
        },
        {
          NGAY: "30/07/2022 12:45",
          SOTK: "106870xxxx1021",
          TENTK: "PHUNG QUANG MINH",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "140.000"
        },
        {
          NGAY: "30/07/2022 12:01",
          SOTK: "106870xxxx1092",
          TENTK: "LE THI HOA",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "1.200.000"
        },
        {
          NGAY: "30/07/2022 11:50",
          SOTK: "106870xxxx1959",
          TENTK: "CHU TUONG MINH",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "900.000"
        },
        {
          NGAY: "30/07/2022 11:09",
          SOTK: "106870xxxx1980",
          TENTK: "NGUYEN THI BICH",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "100.000"
        },
        {
          NGAY: "30/07/2022 11:05",
          SOTK: "106870xxxx1922",
          TENTK: "NGUYEN THI HOA",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "200.000"
        },
        {
          NGAY: "30/07/2022 11:00",
          SOTK: "106870xxxx1943",
          TENTK: "NGUYEN THI HUYEN",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH:"140.000"
        },
        {
          NGAY: "30/07/2022 10:00",
          SOTK: "107006xxxx4141",
          TENTK: "NGUYEN MINH NHAT ",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "360.000"
        },
        {
          NGAY: "29/07/2022 17:45",
          SOTK: "106870xxxx8878",
          TENTK: "NGUYEN VAN DIEP ",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "1.000.000"
        },
        {
          NGAY: "29/07/2022 13:00",
          SOTK: "106870xxxx1199",
          TENTK: "DANG DINH KHANH",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "800.000"
        },
        {
          NGAY: "28/07/2022 12:45",
          SOTK: "106870xxxx0211",
          TENTK: "NGUYEN KHANH LINH",
          NGANHANG: "Ngân hàng VietinBank (VTB)",
          TONGSODUTKDBtaiNH: "870.000"
        }
       ],
      phone: "",
      checkDetail: false,
      dataCheck: [],
      settlement: false,

    };
  }
  settlement = () => {
    this.setState({
      settlement: true
    })
  }
  onSelectModal = () => {
    this.setState({
      settlement: false,
    })
  }
  componentDidMount() {
  }

  render() {
    const { data, dataCheck } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách tài khoản đảm bảo thanh toán ví điện tử</b>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <div className="input-group mb-3">
              <input type="phone" className="form-control" placeholder="Số tài khoản đảm bảo" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">Ngân hàng liên kết</option>
              <option value="1">Viettinbank</option>
              <option value="2">VP bank</option>
              <option value="3">BIDV</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"left"}} onClick={this.settlement}>
              <CIcon icon={cilDescription} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Quyết toán</Button>
          </Col>
          <Col >
            <Button variant="success" style={{ color: "#fff", float:"right"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"left"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Ngày</th>
              <th scope="col">Số tài khoản</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Ngân hàng</th>
              <th scope="col">Tổng số dư TKĐB tại NH</th>
              <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td>{val.NGAY}</td>
                  <td>{val.SOTK}</td>
                  <td align={"left"}>{val.TENTK}</td>
                  <td>{val.NGANHANG}</td>
                  <td align={"right"}>{val.TONGSODUTKDBtaiNH}</td>
                  <td>
                    <CIcon icon={cilLoop} customClassName="nav-icon" style={{width:"20px", height:"20px"}} />
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Row>
        <Row>
          <Col className='d-flex'>
            <span>Xem</span>
            <select className='add_option'>
              <option selected>10</option>
              <option value="1">20</option>
              <option value="2">30</option>
              <option value="3">50</option>
              <option value="4">100</option>
            </select>
            <span> trên tổng số {data.length} bản ghi</span>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />

              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>

              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>

        {this.state.settlement == true ? <Settlement Data={data} onSelectModal={this.onSelectModal} /> : ""}

      </div>
    )
  }
}
