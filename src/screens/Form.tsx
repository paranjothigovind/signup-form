import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TextInput } from '../components';
import validate from "validate.js";
import { useDispatch } from 'react-redux';
import { signIn, signUp } from '../store/actions/auth';

const Intro = () => {

    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState('SIGNUP')

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [userLogin ,setUserLogin] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: [],
        password: [],
        confirmPassword: []
    });


    const handleSubmit = () => {
      try{
        const error = validate(inputs, signupSchema);
        if(error){
            return setErrors(error);
        }

        dispatch(
            signUp(
                inputs
            )
        )
        setActiveTab('LOGIN');
      }
      catch(err){
        console.log(err);
      }
    }

    const handleLogin = () => {
        try{
          const error = validate(userLogin, loginSchema);
          if(error){
              return setErrors(error);
          }
  
          dispatch(
              signIn(
                  userLogin
              )
          )

          window.location.href = '/post-login'
        }
        catch(err){
          console.log(err);
        }
      }

    return(
        <Container className="login-container">
            <Row>
                <Col lg={12} className="text-center">
                   {activeTab === 'SIGNUP' ? <h4>Let's start with basic details</h4> : <h4>Sign In</h4>}
                </Col>
            </Row>
           {activeTab === 'SIGNUP' ? <Row>
                <Col 
                    lg={12} 
                    className="d-flex justify-content-center"
                >
                    <TextInput 
                        label="Email"
                        type="email"
                        errors={errors.email}
                        value={inputs.email}
                        onChange={(evt: any) => {
                            setInputs({
                                ...inputs,
                                email: evt.target.value
                            })
                        }}
                    />
                </Col>
                <Col 
                    lg={12} 
                    className="d-flex justify-content-center mt-3"
                >
                    <TextInput 
                        label="Password"
                        value={inputs.password}
                        errors={errors.password}
                        type="password"
                        onChange={(evt: any) => {
                            setInputs({
                                ...inputs,
                                password: evt.target.value
                            })
                        }}
                    />
                </Col>
                <Col 
                    lg={12} 
                    className="d-flex justify-content-center mt-3"
                >
                    <TextInput 
                        label="Confirm password"
                        type="text"
                        errors={errors.confirmPassword}
                        value={inputs.confirmPassword}
                        onChange={(evt: any) => {
                            setInputs({
                                ...inputs,
                                confirmPassword: evt.target.value
                            })
                        }}
                    />
                </Col>
                <Col 
                    lg={12} 
                    className="d-flex justify-content-center mt-4"
                >
                   <Button className="btn btn-primary w-100" onClick={handleSubmit}>
                       SUBMIT
                   </Button>
                </Col>
                <Col 
                    lg={12} 
                    className="d-flex justify-content-center mt-4"
                >
                    Already registered ?  &nbsp;<u onClick={() => setActiveTab('LOGIN')}> Click here to login</u>
                </Col>
            </Row> : <Row>
            <Col 
                    lg={12} 
                    className="d-flex justify-content-center"
                >
                    <TextInput 
                        label="Email"
                        type="email"
                        errors={errors.email}
                        value={userLogin.email}
                        onChange={(evt: any) => {
                            setUserLogin({
                                ...userLogin,
                                email: evt.target.value
                            })
                        }}
                    />
                </Col>
                <Col 
                    lg={12} 
                    className="d-flex justify-content-center mt-3"
                >
                    <TextInput 
                        label="Password"
                        value={userLogin.password}
                        errors={errors.password}
                        type="password"
                        onChange={(evt: any) => {
                            setUserLogin({
                                ...userLogin,
                                password: evt.target.value
                            })
                        }}
                    />
                </Col>
                <Col 
                    lg={12} 
                    className="d-flex justify-content-center mt-4"
                >
                   <Button className="btn btn-primary w-100" onClick={handleLogin}>
                       LOGIN
                   </Button>
                </Col>
                <Col 
                    lg={12} 
                    className="d-flex justify-content-center mt-4"
                >
                    New register ?  &nbsp;<u onClick={() => setActiveTab('SIGNUP')}> Click here to signup</u>
                </Col>
            </Row>}
        </Container>
    )
}

export default Intro;

const signupSchema = {
    email: {
      presence: { allowEmpty: false },
      email: true,
    },
    password: {
        presence: { allowEmpty: false },
        length: {
            minimum: 8,
            message: "should contain atleast 8 charecters",
        },
    },
    confirmPassword: {
        presence: { allowEmpty: false },
        equality: "password",
    },
  };

  const loginSchema = {
    email: {
      presence: { allowEmpty: false },
      email: true,
    },
    password: {
        presence: { allowEmpty: false },
        length: {
            minimum: 8,
            message: "should contain atleast 8 charecters",
        },
    }
  };