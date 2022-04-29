import styled from 'styled-components';

import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';

export default function StartPage() {
  return (
    <PageContainer>
      <Header></Header>
      <Navigation></Navigation>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
`;
