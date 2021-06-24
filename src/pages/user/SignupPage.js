import React from 'react';
import styled from 'styled-components';
import SignupBanner from 'components/user/signup/SignupBanner';
import SignupForm from 'components/user/signup/SignupForm';

const RightSection = styled.div`
  flex: 1.1;
  @media ${({ theme }) => theme.mobile} {
    padding: 0 15px;
    width: 100%;
    fieldset {
      width: 100%;
    }
    button {
      width: 100%;
    }
    div {
      width: 100%;
      select {
        width: 100%;
      }
    }
  }
`;

const SignupContainer = styled.div`
  margin-top: 40px;
  display: flex;
  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
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
