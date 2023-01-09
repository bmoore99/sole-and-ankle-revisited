import React from "react";
import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/test">Another link</NavLink>
        </Nav>
        <Side>
          <MobileNav>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={2} />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} />
            </UnstyledButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${(props) => props.theme.queries.tabletAndDown} {
    border-top: 4px solid var(--color-gray-900);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.5rem,  8vw - 4rem, 5rem); // 48px;
  margin: 0px 48px;

  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  --gap: 40px;

  display: none;
  gap: var(--gap);
  margin-left: var(--gap);

  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: flex;
    justify-content: flex-end;
  }

  @media ${(props) => props.theme.queries.mobileAndDown} {
    --gap: 24px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  white-space: nowrap;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
