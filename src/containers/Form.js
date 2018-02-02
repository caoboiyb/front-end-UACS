import React, { Component } from 'react';
import { Layout } from 'antd'
import SubjectInput from '../components/SubjectInput';
import SchoolSelector from '../components/SchoolSelector';
import LanguageInput from '../components/LanguageInput';
import GiftedSubject from '../components/GiftedSubject';
import Priority from '../components/Priority';
import { Row, Button } from 'antd';


const { Header, Content, Footer } = Layout;

class Form extends Component {
    state = {

    }

    render() {
        return (
            <Layout className="layout">
                <Header></Header>
                <Content style={{ padding: '0 10%' }}>
                    <form>
                        <SchoolSelector />
                        <h1>Điểm môn học</h1>
                        <Row>
                            <SubjectInput name="Toán" id="mat" />
                            <SubjectInput name="Lý" id="phy" />
                            <SubjectInput name="Hoá" id="che" />
                            <SubjectInput name="Sinh" id="bio" />
                            <SubjectInput name="Văn" id="lit" />
                            <SubjectInput name="Sử" id="his" />
                            <SubjectInput name="Địa" id="geo" />
                            <LanguageInput />
                        </Row>
                        <GiftedSubject />
                        <Priority />
                        <br/>
                        <Button type="primary" style={{float: "right"}}>Tính điểm</Button>
                    </form>
                </Content>
                <Footer>
                    <hr/>
                </Footer>
            </Layout>
        );
    }
}

export default Form;