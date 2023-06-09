import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bgMobile from '../../images/bg/footerBG_mobile.webp';
import bgMobileRetina from '../../images/bg/footerBG_mobile@2x.webp';
import bgTablet from '../../images/bg/footerBG_Tablet.webp';
import bgTabletRetina from '../../images/bg/footerBG_Tablet@2x.webp';
import bgDesktop from '../../images/bg/footerBG_Desktop.webp';
import bgDesktopRetina from '../../images/bg/footerBG_Desktop@2x.webp';

export const FooterSection = styled.div`
  font-family: 'Poppins';
  position: relative;
  background-color:${props => props.theme.mode === "light" ? "var(--font-gray)" : "var(--accent-color-green)"};
  padding-top: 28px;
  padding-bottom: 28px;
  z-index: 3;
  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    min-height: auto;
    padding-top: 64px;
    padding-bottom: 50px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
export const Container = styled.div`
  color: #fafafa;
  @media screen and (min-width: 375px) {
    display: block;
    margin: 0 auto;
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`;
export const LogoFooterLinksWrapper = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: start;
  }
`;
export const LogoSection = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    width: 215px;
  }
`;
export const LogoBenefitsWrapper = styled.div`
  display: block;
`;
export const LogoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;
export const LogoImg = styled.img`
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
export const LogoTitle = styled.p`
  color: #fafafa;
  margin-left: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #fafafa;
  &:hover {
    color: #8baa36;
  }
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-left: 12px;
  }
`;
export const BenefitsList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 418px;
    display: block;
    margin-top: 24px;
  }
`;
export const BenefitsItem = styled.li`
  list-style-type: disc;
  margin-left: 32px;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.33;
  &:not(:first-child) {
    margin-top: 10px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    &:not(:first-child) {
      margin-top: 14px;
    }
  }
`;
export const FooterLinkWrapper = styled.ul`
  margin-top: 32px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    text-align: start;
    margin-left: 173px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 0;
  }
`;
export const FooterLink = styled(NavLink)`
  padding-top: 7px;
  padding-bottom: 7px;
  color: #fafafa;
  font-size: 14px;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: #8baa36;
  }
  .active {
    color: #8baa36;
  }
  @media screen and (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 159px;
  }
`;
export const FooterLinkItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;
export const SubscriptionSection = styled.div`
  @media screen and (min-width: 1440px) {
    width: 340px;
  }
`;
export const SubscriptionWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    h4 {
      font-size: 18px;
      font-weight: 700;
    }
    p {
      margin-top: 14px;
      font-size: 14px;
      line-height: 1.29;
    }
  }
`;
export const FollowUsSection = styled.div`
  margin-top: 44px;
  @media screen and (min-width: 768px) {
    margin-top: 38px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 41px;
  }
`;
export const SubFooterBgContainer = styled.div``;
export const SubFooter = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  background-color:${props => props.theme.mode === "light" ? "var(--body-color-light)" : "var(--body-color-dark)"};
  background-image: url('${bgMobile}');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 210px 172px;
  @media screen and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url('${bgMobileRetina}');
  }
  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    background-image: url('${bgTablet}');
    background-size: 353px 290px;
    @media screen and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
      background-image: url('${bgTabletRetina}');
    }
  }
  @media screen and (min-width: 1440px) {
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: url('${bgDesktop}');
    background-size: 424px 348px;
    @media screen and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
      background-image: url('${bgDesktopRetina}');
    }
  }
`;
export const SubFooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #22252a;
  font-size: 10px;
  p:not(:first-child) {
    margin-left: 14px;
    @media screen and (min-width: 768px) {
      margin-left: 28px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const SubFooterTextBold = styled.p`
  color:${props => props.theme.mode === "light" ? "var(--font-gray)" : "var(--font-white)"};
  opacity: 0.5;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
export const SubFooterTextRegular = styled.p`
  color:${props => props.theme.mode === "light" ? "var(--font-gray)" : "var(--font-white)"};
  opacity: 0.5;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
