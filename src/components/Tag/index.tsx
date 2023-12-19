import { TagContainer } from './style'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size="small">{children}</TagContainer>
)

export default Tag
