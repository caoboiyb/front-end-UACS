import React, { Component } from 'react';
import { Row, Col, Radio } from 'antd';
const RadioGroup = Radio.Group

class Priority extends Component {
    state = {
        value: "UT1"
    }

    _onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <Row>
                <Col offset={1} span={3}>
                    Đối tượng ưu tiên:
               </Col>
                <Col span={10}>
                    <RadioGroup onChange={this._onChange} value={this.state.value}>
                        <Radio value={"UT1"}>UT1</Radio>
                        <Radio value={"UT2"}>UT2</Radio>
                    </RadioGroup>
                </Col>
            </Row>
        );
    }
}

export default Priority;