import React, { useEffect, useState } from 'react';
// import StyleSavings from './stylesaving.module.css';
import styled from 'styled-components';

function SavingDash() {
  const [savings, setSavings] = useState([]);

  useEffect(() => {
    // Load saved savings from localStorage on page load
    const savedSavings = JSON.parse(localStorage.getItem('savings')) || [];
    setSavings(savedSavings);
  }, []);

  const handleAddSavings = (description, amount) => {
    const newSavings = [...savings, { description, amount }];
    setSavings(newSavings);

    // Save the updated savings list to localStorage
    localStorage.setItem('savings', JSON.stringify(newSavings));
  };

  const handleDeleteSavings = (description) => {
    const updatedSavings = savings.filter((item) => item.description !== description);
    setSavings(updatedSavings);

    // Update localStorage after deleting savings
    localStorage.setItem('savings', JSON.stringify(updatedSavings));
  };


  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SavingsSection = styled.section`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin: 10px 0;
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const SavingsActions = styled.div`
  text-align: center;
`;

const AddNewSavingsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hr = styled.hr`
  width: 80%;
  margin: 10px auto;
`;

const OtherOptions = styled.section`
  text-align: center;
`;

const H3 = styled.h3`
  font-size: 18px;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 5px;
`;

const SubmitButton = styled.button`
  background-color: #008000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;


return (
  <Container>
    <SavingsSection>
      <Title>Your Savings</Title>
      <Ul>
        {savings.map((item, index) => (
          <Li key={index}>
            {item.description}: Rs {item.amount}
            <DeleteButton onClick={() => handleDeleteSavings(item.description)}>Delete</DeleteButton>
          </Li>
        ))}
      </Ul>
      <SavingsActions>
        <Hr />
        <h3>Add New Savings</h3>
        <AddNewSavingsForm
          onSubmit={(e) => {
            e.preventDefault();
            const description = document.getElementById('savings-description').value;
            const amount = parseFloat(document.getElementById('savings-amount').value);

            if (description && !isNaN(amount)) {
              handleAddSavings(description, amount);
              document.getElementById('savings-description').value = '';
              document.getElementById('savings-amount').value = '';
            }
          }}
        >
          <Input
            type="text"
            id="savings-description"
            placeholder="Description"
            required
          />
          <Input
            type="number"
            id="savings-amount"
            placeholder="Amount"
            required
          />
          <SubmitButton type="submit">Add Savings</SubmitButton>
        </AddNewSavingsForm>
      </SavingsActions>
    </SavingsSection>
    <Hr />
    <OtherOptions>
      <H3>Saving today for a brighter tomorrow.</H3>
    </OtherOptions>
  </Container>
);
}

export default SavingDash;


