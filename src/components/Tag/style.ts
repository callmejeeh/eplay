import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from './index'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '40px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '24px 40px' : '6px 8px')};
  border-radius: 8px;
  display: inline-block;
`
