import React from 'react';
import styled from 'styled-components';
import SignupBanner from '../../components/user/signup/SignupBanner';
import SignupForm from '../../components/user/signup/SignupForm';

const RightSection = styled.div`
  flex: 1.1;
`;

const SignupContainer = styled.div`
  margin-top: 40px;
  display: flex;
`;
export default function SignupPage() {
  return (
    <SignupContainer>
      <SignupBanner />
      <RightSection>
        <SignupForm />
      </RightSection>
    </SignupContainer>
  );
}
