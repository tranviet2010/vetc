import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

export default class Config_level extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    handleEdit=()=>{
        
    }
    render() {
        return (
            <div>
                <Row>
                    <table className="table table-bordered">
                            <thead className="last_right">
                                <tr>
                                    <th scope="col">Kênh</th>
                                    <th scope="col">Loại giao dịch</th>
                                    <th scope="col">Hạn mức 1 GD</th>
                                    <th scope="col">Tổng hạn mức ngày</th>
                                    <th scope="col">Hạn mức tháng</th>
                                    <th scope="col">Công cụ</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr className="last_tr">
                                    <th scope="row">88L1-000.48</th>
                                    <td>Trắng</td>
                                    <td>Trắng</td>
                                    <td>Trắng</td>
                                    <td>Trắng</td>
                                    <td className='d-flex justify-content-around chi_tiet'>
                                        <span onClick={this.handleEdit}>Sửa</span>
                                        <span>Xóa</span>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                    
                </Row>
            </div>
        )
    }
}
