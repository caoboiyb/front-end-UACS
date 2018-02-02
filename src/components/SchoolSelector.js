import React, { Component } from 'react';
import { Row, Col, Select } from 'antd'
import axios from 'axios'
const Option = Select.Option

class SchoolSelector extends Component {
    state = {
        tinh: [],
        huyenh: [],
        truong: [],
        selectedTinh: 0,
        selectedHuyen: 0,
        selectedTruong: 0
    }

    _handleTinhChange = (value) => {
        this.setState({
            selectedTinh: value
        }, () => {
            axios.post('http://42.114.107.57:8080/get-huyen', {
                msTinh: this.state.selectedTinh
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }

    handleChange = value => {
        console.log(`selected ${value}`);
    }

    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }

    componentDidMount() {
        axios.get('http://42.114.107.57:8080/get-tinh')
            .then(response => {
                this.setState({
                    tinh: response.data.tinh
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const optionTinh = this.state.tinh.map((tinh, index) => {
            return (
                <Option key={tinh.msTinh} value={tinh.msTinh}>{tinh.tenTinh}</Option>
            )
        })

        return (
            <div>
                <h1>Chọn trường THPT</h1>
                <Row>
                    <Col offset={1} span={3}>
                        Tỉnh:
                    </Col>
                    <Col span={20}>
                        <Select
                            showSearch
                            placeholder="Chọn Tỉnh"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            onChange={this._handleTinhChange}
                        >
                            {optionTinh}
                        </Select>
                    </Col>
                </Row>

                <Row>
                    <Col offset={1} span={3}>
                        Quận/Huyện:
                    </Col>
                    <Col span={20}>
                        <Select
                            showSearch
                            placeholder="Chọn Quận/Huyện"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                </Row>

                <Row>
                    <Col offset={1} span={3}>
                        Trường:
                    </Col>
                    <Col span={20}>
                        <Select
                            showSearch
                            placeholder="Chọn Trường"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default SchoolSelector;