import logoImg from '../../assets/logo.svg'
import { Container, Content} from './styles'

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Logo do Site (Dt Money)" />
                <button type='button'>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}