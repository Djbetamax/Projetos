import React from 'react';
import * as S from './styled';

const RepositoryItem = ({ name, linkToRepo, fullname }) => {
    return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullname>full name:</S.WrapperFullname>
      <S.WrapperLink href={linkToRepo} target="_blank" rel='noopener noreferrer'>
        {fullname}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;