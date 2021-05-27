import MainContainer from './styles';

export interface MainProps {

}

const Main: React.FC<MainProps> = ({children}) => (
    <MainContainer>{children}</MainContainer>
);

export default Main;