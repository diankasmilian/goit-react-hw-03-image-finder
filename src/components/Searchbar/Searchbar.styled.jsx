import styled from 'styled-components';

export const HeaderSearch = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: #e15b64;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 400px;
  background-color: transparent;
  border-radius: 3px;
  overflow: hidden;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    border: none;
    border-radius: 50%;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  button:hover {
    opacity: 1;
  }

  button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    color: #fff;
    background-color: transparent;
  }

  input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
