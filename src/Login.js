import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { Row, Col } from 'antd';
import axios from 'axios'
import querystring from 'querystring';
import Route from './Route'
import { withRouter } from "react-router-dom"


const FormItem = Form.Item;


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            Item:[]
        }

    }


    handleSubmit = async (e) => {
        e.preventDefault()
        if(this.state.username ==='' || this.state.password === ''){
            alert('กรุณากรอกให้ครบ');
            return;
        }

        let arr = this.state.Item
        arr.push({
            username:this.state.username,
            password:this.state.password
        })

        const user ={
            user:this.state.username,
            password:this.state.password
        }
        let pData = querystring.stringify(user);

        await axios.post(`http://122.154.235.70:4000/checkuser`,pData)
        .then(res => {
            let status = res.data[0].status
            console.log(status)
            if(status === 'true'){
                this.props.history.push("/");
            }else{
                alert(' username หรือ password ไม่ถูกต้อง');
            }
        })
        
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value


        })
    }


    render() {
        return (

            <Row style={{ marginTop: 50 }}>
                <Col lg = {{ span:6 ,offset:9 }}>
                    <div style={{ background: "#91ffde" }} >

                        <Form onSubmit={this.handleSubmit} className="login-form" style={{ marginLeft: 50, marginRight: 50, marginTop: 50 }}>
                            <br />
                            <h1 style={{ textAlign: 'center' }}>เข้าสู่ระบบ</h1>
                            <FormItem>
                                <Input name="username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={this.onChange} value={this.state.username} />
                            </FormItem>
                            <FormItem>
                                <Input name="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"  onChange={this.onChange} value={this.state.password}  />
                            </FormItem>
                            <FormItem>

                                <Button type="primary"  className="login-form-button" style={{ width: '100%' }}  onClick={(e) => this.handleSubmit(e)}  >
                                    Log in
          </Button>

                            </FormItem>
                        </Form>
                        <br />
                    </div>
                </Col>
            </Row>

        )
    }
}

export default withRouter(Login)