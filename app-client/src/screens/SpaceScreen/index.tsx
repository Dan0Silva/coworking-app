import React from 'react'

import * as S from './styles'

export default () => {
  const space = require('../../assets/mocks/selected_space.json')
  const assessments = require('../../assets/mocks/assessments_of_space.json')

  const renderAssessments = () => {
    return assessments.map((element: any, index: any) => {
      return (
        <S.Asscessment key={index}>
          <S.AssessmentHeader>
            <S.AssessmentImage
              source={{
                uri: element.profile,
              }}
            />
            <S.AssessmentName>{element.name}</S.AssessmentName>
          </S.AssessmentHeader>
          <S.AssessmentDescriptionContainer>
            <S.AssessmentDescription>{element.comment}</S.AssessmentDescription>
          </S.AssessmentDescriptionContainer>
        </S.Asscessment>
      )
    })
  }

  return (
    <S.Container>
      <S.Feed>
        <S.Image
          source={{
            uri: space.image,
          }}>
          <S.BackButton>
            <S.BackIcon name={'arrow-back'} size={24} color={'white'} />
          </S.BackButton>

          <S.CountContainer>
            <S.ContImage>1 | 6</S.ContImage>
          </S.CountContainer>
        </S.Image>

        <S.SpaceNameContainer>
          <S.SpaceName>{space.title}</S.SpaceName>

          <S.SubFooterContainer>
            <S.AddressContainer>
              <S.AddressIcon
                name={'ios-location-sharp'}
                size={18}
                color={'rgb(235, 12, 12)'}
              />
              <S.AddressText>{space.address}</S.AddressText>
            </S.AddressContainer>
            <S.RatingContainer>
              <S.SpaceRatingIcon
                name="star"
                size={18}
                color={'rgb(255, 221, 0)'}
              />
              <S.SpaceRatingText>{space.rating}</S.SpaceRatingText>
            </S.RatingContainer>
          </S.SubFooterContainer>
        </S.SpaceNameContainer>

        <S.Line />

        <S.DescriptionContainer>
          <S.AltTitle>Description</S.AltTitle>
          <S.Description>{space.description}</S.Description>
        </S.DescriptionContainer>

        <S.Line />

        <S.LocationContainer>
          <S.AltTitle>Location</S.AltTitle>
          <S.LocationElement>
            <S.LocationText>MAPS</S.LocationText>
          </S.LocationElement>
        </S.LocationContainer>

        <S.Line />

        <S.AssessmentsContainer>
          <S.AltTitle>Assessments</S.AltTitle>
          <S.AssessmentsSubContainer horizontal>
            {renderAssessments()}
          </S.AssessmentsSubContainer>

          <S.Button>
            <S.ButtonText>More Assessments</S.ButtonText>
          </S.Button>
        </S.AssessmentsContainer>

        <S.Line />

        <S.OwnerContainer>
          <S.AltTitle>Owner</S.AltTitle>
          <S.OwnerSubContainer>
            <S.OwnerHeader>
              <S.OwnerImage
                source={{
                  uri: space.icon,
                }}
              />
              <S.OwnerNameContainer>
                <S.OwnerName>Renato Campos</S.OwnerName>
                <S.VerifiedContainer>
                  <S.VerifiedIcon
                    name={'checkmark-circle-sharp'}
                    size={18}
                    color={'#1081FF'}
                  />
                  <S.VerifiedText>This account is verified</S.VerifiedText>
                </S.VerifiedContainer>
              </S.OwnerNameContainer>
            </S.OwnerHeader>
          </S.OwnerSubContainer>
          {/* <S.Button>
            <S.ButtonText>More Assessments</S.ButtonText>
          </S.Button> */}
        </S.OwnerContainer>
      </S.Feed>
    </S.Container>
  )
}
