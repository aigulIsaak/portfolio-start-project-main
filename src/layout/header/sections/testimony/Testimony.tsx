import React from 'react';
import { SectionTitle } from '../../../../components/SectionTitle';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { Slider } from '../../../../components/slider/Slider';
import { FlexWrapper } from '../../../../components/FlexWrapper';
// import { IconWrapper } from '../skills/skill/Skill';
import { Container } from '../../../../components/Container';
// import { S } from '../skills/Skills_Styles';
import { S } from '../skills/skill/Skills_Styles';


 export const Testimony:React.FC  = () => {
  return (
    <StyledTestimony id={'testimony'}>
      <Container>
          <SectionTitle>Testimony</SectionTitle>
              <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                    <Icon iconId={'quote'}/>
                    </S.IconWrapper>
                    <Slider/>
              </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};


const StyledTestimony =styled.section`
min-height:50vh;
position:relative;

${S.IconWrapper}{
  margin:40px 0 72px;
}
`
