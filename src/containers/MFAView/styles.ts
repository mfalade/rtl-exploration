import styled, { keyframes } from 'styled-components';

export const ViewWrapper = styled.section`
  color: #1c2f2c;
  width: 480px;
  position: relative;
`;

export const Pagination = styled.span`
  color: #9451e4;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  margin-top: 8px;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 24px;
`;

export const RecoveryKeysContainer = styled.div`
  background: #c5fafb;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 24px;
  flex-wrap: wrap;
`;

export const RecoveryKey = styled.h4`
  font-size: 19px;
  flex: 50%;
  display: flex;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background: #2047ce;
  padding: 12px 32px;
  color: white;
  outline: none;
  border: none;
  border-radius: 50px;
  margin-top: 40px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const spinnerAnimation = keyframes`
0% { transform: rotate(0deg);  }
100% { transform: rotate(360deg)}
`;
export const LoadingIndicator = styled.div`
  position: relative;
  left: 40%;
  height: 40px;
  width: 40px;
  border: 4px solid #2047ce;
  border-top: 4px solid #f3f3f3;
  border-radius: 50%;
  background: none;
  margin-top: 40px;
  margin-bottom: 16px;
  animation: ${spinnerAnimation} 1s linear infinite;
`;
