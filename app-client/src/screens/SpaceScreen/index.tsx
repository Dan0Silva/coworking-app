import React from 'react'

import * as S from './styles'

export default () => {
  return (
    <S.Container>
      <S.Feed>
        <S.Image
          source={{
            uri: 'https://casacor.abril.com.br/wp-content/uploads/sites/7/2021/08/urban-airport-coworking.jpg?quality=80&strip=info&w=1024',
          }}>
          <S.BackButton>
            <S.BackIcon name={'arrow-back'} size={24} color={'white'} />
          </S.BackButton>

          <S.CountContainer></S.CountContainer>
        </S.Image>
      </S.Feed>
    </S.Container>
  )
}
