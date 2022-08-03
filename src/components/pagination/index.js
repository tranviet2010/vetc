import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

export default class index extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className='d-flex'>
            <span>Xem</span>
            <select className='add_option' onChange={this.panigationHandle}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span> trên tổng số {totalCount} bản ghi</span>
          </Col>
          <Col className='d-flex justify-content-end'>
          <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={page}
              totalItemsCount={Number(totalCount)}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange.bind(this)}
              itemClass="page-item"
              linkClass="page-link"
            />
          </Col>
        </Row>
      </div>
    )
  }
}
