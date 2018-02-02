import React, { Component } from 'react';
import { Row, Col, Icon, Button, Select, Input } from 'antd';
const Option = Select.Option;

class GiftedSubject extends Component {
    state = {
        items: [],
        currentIndex: 0
    }

    _add = () => {
        const { items, currentIndex } = this.state;
        this.setState({
            items: [...items, currentIndex + 1],
            currentIndex: currentIndex + 1
        })
    }

    _remove = (id) => {
        const { items, currentIndex } = this.state;
        this.setState({
            items: items.filter(item => item !== id),
            currentIndex: currentIndex - 1
        })
    }

    render() {
        const gsItems = this.state.items.map((item, index) => {
            return (
                <Col key={item} offset={3} span={9}>
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
                        <Col span={12}>
                            <Input placeholder="Nhập điểm Năng khiếu" />
                        </Col>
                        <Col offset={1} span={1}>
                            <Icon
                                className="dynamic-delete-button"
                                type="minus-circle-o"
                                onClick={() => this._remove(item)}
                            />
                        </Col>
                    </Row>
                </Col>
            )
        })

        return (
            <div>
                <Row>
                    <Col offset={1} span={2}>
                        <p>Năng khiếu: </p>
                    </Col>
                    <Col span={7}>
                        <Button type="dashed" onClick={this._add} style={{ width: '100%' }}>
                            <Icon type="plus" /> Thêm môn năng khiếu
                        </Button>
                    </Col>
                </Row>
                <Row>
                    {gsItems}
                </Row>
            </div>
        );
    }
}

export default GiftedSubject;