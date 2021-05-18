export interface HeaderProps {
    title: string;
}

/**
 * Component to show a header
 * @param title Header title
 * @returns
 */
const Header: React.FC<HeaderProps> = ({title}) => (
    <header>
        <h1>{title}</h1>
    </header>
);

export default Header;