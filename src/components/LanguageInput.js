import React, { Component } from 'react';
import {
  Input, Row, Col, Select
} from 'antd';
const Option = Select.Option;

class LanguageInput extends Component {
  render() {
    return (
      <div>
        <Col offset={1} span={2}>
          <p>Ngoại ngữ: </p>
        </Col>
        <Col span={9}>
          <Row>
            <Col span={10}>
              <Select defaultValue="None">
                <Option value="">None</Option>
                <Option value="4">Tiếng Anh</Option>
                <Option value="12">Tiếng Nga</Option>
                <Option value="13">Tiếng Pháp</Option>
                <Option value="14">Tiếng Trung</Option>
                <Option value="15">Tiếng Đức</Option>
                <Option value="16">Tiếng Nhật</Option>
              </Select>
            </Col>
            <Col span={14}>
              <Input placeholder="Nhập điểm Ngoại ngữ" />
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default LanguageInput;