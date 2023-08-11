import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 23px;

  /* background-color: blue; */
`

export const OtpBox = styled.View`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 8px;
  border-width: 2.2px;
  align-items: center;
  justify-content: center;
  border-color: #f00f;
`

export const OtpInput = styled.TextInput`
  border-bottom-width: 1px;
  text-align: center;
`
