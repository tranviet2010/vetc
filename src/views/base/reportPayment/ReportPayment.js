import React, { Component } from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import InformationCustomer from "../reportPayment/reportPayment_detail/InformationCustomer";
import TransactionSituation from "../reportPayment/reportPayment_detail/TransactionSituation";


export default class reportPayment extends Component {
  render() {
    return (
      <div style={{marginTop:"20px"}}>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Thông tin đối tác">
            <InformationCustomer />
          </Tab>
          <Tab eventKey="profit" title="Tình hình giao dịch">
            <TransactionSituation />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
