import React from 'react';
import styled from 'styled-components';

const A = styled.div`
  color: #610cef;
  margin-top: 5px;
`;


export const QC = styled.div`
  color: #888b96;
  font-size: medium;
  padding-left: 20px;
  padding-top: 50px;
  font-weight: bold;
`;

const AC = styled.div`
  color: #888b96;
  font-size: small;
  padding-left: 20px;
  padding-top: 20px;
  font-weight: bold;
`;


function Booklet() {
  return (
    
    <>
    <A><h2><center>Booklet</center></h2></A>
    <QC>Q1- Who is the father of computer science?</QC>
    <AC>Ans- Charles Babbage</AC>
    <QC>Q2- Scientific name of computer?</QC>
    <AC>Ans- Sillico-sapiens</AC>
    <QC>Q3- SMPS stands for?</QC>
    <AC>Ans- Switched mode power supply</AC>
    <QC>Q4- Information travel between components on mother board through?</QC>
    <AC>Ans- Peripherals</AC>
    <QC>Q5- Full form of HTML?</QC>
    <AC>Ans- Hyper text markup language</AC>
    <QC>Q6- which tag defines a section which is quoted form anthor source ?</QC>
    <AC>Ans- blockquoted</AC>
    <QC>Q7- A person wants to place links from navigation which tag he/she use?</QC>
    <AC>Ans- i</AC>
    
    </>
  );
}

export default Booklet;

