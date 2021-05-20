import HeaderContainer from './styles'

export interface HeaderProps {
    title: string;
}

/**
 * Component to show a header
 * @param title Header title
 * @returns
 */
const Header: React.FC<HeaderProps> = ({title}) => (
    <HeaderContainer>
        <h1>{title}</h1>
    </HeaderContainer>
);

export default Header;