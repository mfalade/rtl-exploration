import React from 'react';
import { MainLayoutWrapper, SideNav, MainContent } from './styles';

export interface MainLayoutPropTypes {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutPropTypes> = ({ children }) => {
  return (
    <MainLayoutWrapper>
      <SideNav />
      <MainContent>{children}</MainContent>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
