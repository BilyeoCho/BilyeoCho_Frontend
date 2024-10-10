import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  width: 48%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BackButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
`;

const RegisterButton = styled(Button)`
  background-color: black;
  color: white;
`;

const Register = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // ȸ������ ���� ����
  };

  return (
    <Container>
      <Title>ȸ������</Title>
      <Input
        placeholder="�̸��� �Է��ϼ���"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="���̵� �Է��ϼ���"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Input
        type="password"
        placeholder="��й�ȣ�� �Է��ϼ���"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="��й�ȣ�� �ѹ� �� �Է��ϼ���"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <ButtonContainer>
        <BackButton>���ư���</BackButton>
        <RegisterButton onClick={handleRegister}>�����ϱ�</RegisterButton>
      </ButtonContainer>
    </Container>
  );
};

export default Register;