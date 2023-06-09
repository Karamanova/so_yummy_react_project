import styled from 'styled-components';

import dishMobile from '../../images/hero/mobile/dish_mob1x.webp';
import dishMobileRetina from '../../images/hero/mobile/dish_mob2x.webp';
import dishTablet from '../../images/hero/tablet/dish_tab1x.webp';
import dishTabletRetina from '../../images/hero/tablet/dish_tab2x.webp';
import dishDesktop from '../../images/hero/desktop/dish_desktop1x.webp';
import dishDesktopRetina from '../../images/hero/desktop/dish_desktop2x.webp';

import spinachBlurMobile from '../../images/hero/mobile/spinach_blur_mob1x.webp';
import spinachBlurMobileRetina from '../../images/hero/mobile/spinach_blur_mob2x.webp';
import spinachBlurTablet from '../../images/hero/tablet/spinach_blur_tab1x.webp';
import spinachBlurTabletRetina from '../../images/hero/tablet/spinach_blur_tab2x.webp';
import spinachBlurDesktop from '../../images/hero/desktop/spinach_blur_desktop1x.webp';
import spinachBlurDesktopRetina from '../../images/hero/desktop/spinach_blur_desktop2x.webp';

export const HeroBox = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    justify-content: left;
    align-items: left;
  }
`;

export const Title = styled.h1`
  display: inline;
  font-size: 60px;
  letter-spacing: -0.005em;
  font-weight: 400;
  text-align: center;
  color:${props => props.theme.mode === "light" ? "var(--font-gray)" : "var(--font-white)"};

  .title-green {
    color: var(--accent-color-green);
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    padding-top: 42px;
    font-size: 72px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 34px;
    font-size: 100px;
  }
`;

export const Description = styled.p`
  text-align: center;
  padding: 14px 50px 364px;
  line-height: 1.3;
  font-weight: 400px;
  font-size: 14px;
  letter-spacing: -0.5px;
  color:${props => props.theme.mode === "light" ? "var(--font-gray)" : "var(--font-white)"};
  

  @media screen and (min-width: 768px) {
    max-width: 362px;
    text-align: left;
    padding-left: 0;
    padding-bottom: 32px;
    letter-spacing: -0.5px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 465px;
    font-size: 18px;
    padding-bottom: 50px;
  }
`;

export const BackgroundContainer = styled.section`
  width: 100%;
  height: 780px;
  background-image: url(${spinachBlurMobile}), url(${dishMobile});
  background-size: 55px auto, 375px auto;
  background-position: 0px 20px, 100% 58px;
  background-repeat: no-repeat;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${spinachBlurMobileRetina}), url(${dishMobileRetina});
  }
  @media (min-width: 768px) {
    background-image: url(${spinachBlurTablet}), url(${dishTablet});
    text-align: start;
    background-size: 65px auto, 580px auto;
    background-position: 0px 0px, top right;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${spinachBlurTabletRetina}),
        url(${dishTabletRetina});
    }
    @media (min-width: 1440px) {
      background-image: url(${spinachBlurDesktop}), url(${dishDesktop});
      background-size: 100px auto, 907px auto;
      background-position: 0px 0px, top right;
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${spinachBlurDesktopRetina}),
          url(${dishDesktopRetina});
      }
    }
  }
`;
