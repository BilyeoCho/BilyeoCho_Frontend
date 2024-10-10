import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;��
  width: 300px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px;
  width: 48%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignUpButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
`;

const LoginButton = styled(Button)`
  background-color: black;
  color: white;
`;

function LoginPage() {
  return (
    <LoginContainer>
      <LoginForm>
        <Title>�α���</Title>
        <InputLabel>���̵�</InputLabel>
        <Input type="text" placeholder="���̵� �Է��ϼ���" />
        <InputLabel>��й�ȣ</InputLabel>
        <Input type="password" placeholder="��й�ȣ�� �Է��ϼ���" />
        <ButtonContainer>
          <SignUpButton type="button">ȸ������</SignUpButton>
          <LoginButton type="submit">�α���</LoginButton>
        </ButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage;