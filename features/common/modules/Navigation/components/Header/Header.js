import { HeaderStyledTag } from './styles'

const Header = ({children}) => {
    return (
        <HeaderStyledTag>
            {children}
        </HeaderStyledTag>
    )
}

export default Header