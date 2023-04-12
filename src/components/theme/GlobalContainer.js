import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 16px 28px 16px;

  // 375px//

  @media screen and (min-width: 375px) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  // 768px//

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 28px 32px;
  }

  // 1440px//

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 28px 100px;
  }
`;
