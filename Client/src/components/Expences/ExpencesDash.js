import React, { useEffect } from 'react';
// import '../Dash/Dashboardstyle.css';
// import ExpensesStyle from './expensesstyle.module.css'; // Import as an object
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Chart from 'chart.js/auto';

function ExpensesDash() {
  useEffect(() => {
    const pieChart = document.getElementById('expense-chart').getContext('2d');
    const data = {
      labels: [],
      datasets: [
        {
          data: [20, 30, 30, 10, 10],
          backgroundColor: ['#ffcc00', '#ff69b4', '#00bfff', '#32cd32', '#ff9635'],
        },
      ],
    };

    new Chart(pieChart, {
      type: 'pie',
      data: data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: { display: false },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index] + '%';
            },
          },
        },
      },
    });
  }, []);


  const MainContainer = styled.main`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-top: 20px;
`;

const HorizontalLine = styled.hr`
  width: 80%;
  margin: 10px auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PieWrap = styled.div`
  width: 300px;
  height: 300px;
`;

const ChartInfo = styled.div`
  text-align: left;
`;

const Label = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

return (
  <MainContainer>
    <Title>Your Expenses</Title>
    <HorizontalLine />
    <Wrapper>
      <PieWrap>
        <canvas id="expense-chart"></canvas>
      </PieWrap>
      <ChartInfo>
        <h2>Expense Information</h2>
        <ul>
          <li>
            <Label style={{ backgroundColor: '#ffcc00' }}></Label> Groceries
          </li>
          <li>
            <Label style={{ backgroundColor: '#ff69b4' }}></Label> Savings
          </li>
          <li>
            <Label style={{ backgroundColor: '#00bfff' }}></Label> Shopping
          </li>
          <li>
            <Label style={{ backgroundColor: '#32cd32' }}></Label> Others
          </li>
          <li>
            <Label style={{ backgroundColor: '#ff9635' }}></Label> Food
          </li>
        </ul>
      </ChartInfo>
    </Wrapper>
    <br /><br />
    <div>
      <form>
        <h2>
          <label htmlFor="income">Your Income:</label>
          <input type="text" id="Income" name="income" />
        </h2>
        <h2>
          <label htmlFor="rem">Remaining Amount:</label>
          <input type="text" id="Remaining" name="left with" />
        </h2>
      </form>
    </div>
    <HorizontalLine />
  </MainContainer>
);
}

export default ExpensesDash;
