import styled from 'styled-components/native'
import { ThemeType } from '../../themes/styled'
import { Ionicons } from '@expo/vector-icons'

interface Props {
  theme: ThemeType
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props: Props) => props.theme.COLORS.BACKGROUND};
`

export const Feed = styled.ScrollView`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
`
export const SearchBar = styled.TextInput`
  background-color: white;
  width: 280px;
  height: 46px;
  border-radius: 30px;
  border: 1.5px;
  elevation: 5;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20px;
`

export const FilterContainer = styled.View`
  width: 46px;
  height: 46px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 1.5px;
  elevation: 5;
  padding-top: 2px;
  margin-right: 20px;
  background-color: white;
`

export const FilterIcon = styled(Ionicons)``

export const Line = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  height: 2px;
  margin-left: 20px;
  margin-right: 20px;
`
