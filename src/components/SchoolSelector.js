import React, { Component } from 'react';
import { Row, Col, Select } from 'antd'
import axios from 'axios'
const Option = Select.Option

class SchoolSelector extends Component {
    state = {
        tinh: [],
        huyen: [],
        truong: [],
        selectedTinh: undefined,
        selectedHuyen: undefined,
        selectedTruong: undefined
    }

    _handleTinhChange = (value) => {
        this.setState({
            selectedTinh: value,
            selectedHuyen: undefined,
            selectedTruong: undefined
        }, () => {
            axios.post('http://42.114.107.57:8080/get-huyen', {
                msTinh: this.state.selectedTinh
            })
                .then(response => {
                    this.setState({
                        huyen: response.data.quanHuyen
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }

    _handleHuyenChange = value => {
        this.setState({
            selectedHuyen: value,
            selectedTruong: undefined
        }, () => {
            axios.post('http://42.114.107.57:8080/get-truong', {
                msTinh: this.state.selectedTinh,
                msHuyen: this.state.selectedHuyen
            })
                .then(response => {
                    this.setState({
                        truong: response.data.truong
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }

    _handleTruongChange = value => {
        this.setState({
            selectedTruong: value
        })
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

        const optionHuyen = this.state.huyen.map((huyen, index) => {
            return (
                <Option key={huyen.msHuyen} value={huyen.msHuyen}>{huyen.tenHuyen}</Option>
            )
        })

        const optionTruong = this.state.truong.map((truong, index) => {
            return (
                <Option key={truong.msTruong} value={truong.msTruong}>{truong.tenTruong}</Option>
            )
        });

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
                            value={this.state.selectedTinh}
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
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            onChange={this._handleHuyenChange}
                            value={this.state.selectedHuyen}
                        >
                            {optionHuyen}
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
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            onChange={this._handleTruongChange}
                            value={this.state.selectedTruong}
                        >
                            {optionTruong}
                        </Select>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default SchoolSelector;