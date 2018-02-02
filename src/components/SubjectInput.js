import React, { Component } from 'react';
import { Input, Col } from 'antd';

class SubjectInput extends Component {
    render() {
        const placeholder = `Nhập điểm ${this.props.name}`

        return (
            <div>
                <Col offset={1} span={2}>
                    {this.props.name}:
                </Col>
                <Col span={9}>
                    <Input placeholder={placeholder} name={this.props.id} />
                </Col>
            </div>
        );
    }
}


export default SubjectInput