import styled from 'styled-components';

export const RecipeCardBox = styled.div`
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  & .title {
    min-width: 307px;
    padding: 16px 0 16px 16px;
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translate(-50%);
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
    text-align: left;
    line-height: 1.25;
    color: var(--font-darkblue-p);

    @media screen and (min-width: 768px) {
      min-width: 300px;
    }

    @media screen and (min-width: 1440px) {
      min-width: 268px;
    }
  }
`;