import tela4 from '../../assets/tela4.jpeg';

import aguia from '../../assets/aguia.jpg'
import caveira1 from '../../assets/caveira1.jpg'
import caveira2 from '../../assets/caveira2.jpg'
import caveira3 from '../../assets/caveira3.jpg'

const bordado = {
    topo: {
        titulo: "Funcional"
    },
    detalhes: {
        nome:           "Detalhe do Bordado",
        imagemCliente:  tela4,
        nomeCliente:    "Val Castro",
        descricao:      "Bordado feito no ano de 2019",
        preco:          "R$ 50,00",
        botao:          "Confirmar",
    },
    itens:{
        titulo:         "Outros Bordados",
        lista: [
            {
                nome:   "aguia",
                imagem: aguia,
            },
            {
                nome:   "Caveira",
                imagem: caveira1,
            },
            {
                nome:   "Caveira Moto",
                imagem: caveira2,
            },
            {
                nome:   "Caveira Carro",
                imagem: caveira3,
            },
        ]
    }
}

export default bordado;