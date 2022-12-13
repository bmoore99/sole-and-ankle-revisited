import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
      <CloseButton onClick={onDismiss}>
        <Icon id="close" />
        <VisuallyHidden>
          Dismiss modal
        </VisuallyHidden>
      </CloseButton>
      <Nav>
        <Link href="/sale" current>Sale</Link>
        <Link href="/new">New&nbsp;Releases</Link>
        <Link href="/men">Men</Link>
        <Link href="/women">Women</Link>
        <Link href="/kids">Kids</Link>
        <Link href="/collections">Collections</Link>
      </Nav>
      <Footer>
        <Link href="/terms">Terms and Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/contact">Contact Us</Link>
      </Footer>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLORS.blackTransparent};
  display: none;

  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  padding: 32px;
  min-width: 300px;
  color: ${COLORS.gray[900]};
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  flex-grow: 1;
  justify-content: center;
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
`;

const Link = styled.a`
  color: ${props => props.current ? COLORS.secondary : 'inherit'};
  text-decoration: none;
`;
