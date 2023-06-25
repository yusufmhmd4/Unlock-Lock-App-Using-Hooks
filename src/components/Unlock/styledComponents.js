import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
`

export const LockImage = styled.img`
  height: 100px;
  width: 100px;
`

export const LockParagraph = styled.p`
  font-family: Roboto;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 165px;
  margin-top: 20px;
  color: #ffffff;
`

export const LockButton = styled.button`
  height: 36px;
  background-color: #06b6d4;
  color: #ffffff;
  border: none;
  padding: 8px 28px;
  font-family: 'Roboto';
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
`
