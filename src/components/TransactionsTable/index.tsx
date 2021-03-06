import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className='withdraw'>R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/01/2020</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className='deposit'>R$ 1.000</td>
                        <td>Casa</td>
                        <td>11/01/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}