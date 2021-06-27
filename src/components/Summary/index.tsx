import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'

import { Container } from "./styles";

export function Summary(){
    return(
        <>
            <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt='Imagem representando o simbolo de entrada'></img>
                    </header>
                    <strong>R$1000,0</strong>
                </div>
                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeImg} alt='Imagem representando o simbolo de saída'></img>
                    </header>
                    <strong>- R$5000,0</strong>
                </div>
                <div className='highlight-background'>
                    <header>
                        <p>Entradas</p>
                        <img src={totalImg} alt='Imagem representando o simbolo de total'></img>
                    </header>
                    <strong>-R$4000,0</strong>
                </div>

            </Container>
        </>
    )
}