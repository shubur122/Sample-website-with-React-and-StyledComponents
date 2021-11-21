import React from 'react'
import { Container, 
    FormWrap, 
    Icon, 
    FormContent,
    Form, 
    FormH1, 
    FormLabel, 
    FormButton, 
    FormInput, 
    Text, 
    DemoText} from './SigninElements'

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Sample</Icon>
                    <DemoText>THIS IS JUST A DEMO LOOK WITH NO FUNCTIONALITY</DemoText>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' required />
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password' required/>
                                <FormButton type='submit'>Continue</FormButton>
                                <Text href='/signin'>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Signin
