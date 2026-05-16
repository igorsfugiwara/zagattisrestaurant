export interface MidiaItem {
  id: string
  publicacao: string
  logo?: string
  data: string
  titulo: string
  descricao: string
  link: string
  tipo: 'matéria' | 'indicação' | 'prêmio' | 'entrevista'
}

export const midiaItems: MidiaItem[] = [
  {
    id: 'estadao-2024',
    publicacao: 'Estadão',
    data: 'Novembro 2024',
    titulo: 'Del Mastro: o refúgio italiano que conquistou a Paulista',
    descricao:
      'O guia gastronômico do Estadão elegeu o Del Mastro como um dos melhores almoços executivos da Av. Paulista, destacando a autenticidade das massas artesanais e o acolhimento do espaço. "Uma experiência que transporta o comensal diretamente para as trattorias do norte da Itália."',
    link: 'https://estadao.com.br',
    tipo: 'matéria',
  },
  {
    id: 'veja-sp-2024',
    publicacao: 'Veja São Paulo',
    data: 'Setembro 2024',
    titulo: 'Os melhores almoços da Paulista: Del Mastro se destaca pelo risoto',
    descricao:
      'Em especial sobre a culinária italiana em São Paulo, a Veja SP destacou o risoto de funghi e o fettuccine ao ragù como "imperdíveis". O restaurante foi incluído na lista "Endereços que valem o desvio" da publicação.',
    link: 'https://vejasaopaulo.abril.com.br',
    tipo: 'indicação',
  },
  {
    id: 'guia-michelin-2025',
    publicacao: 'Guia Michelin',
    data: 'Março 2025',
    titulo: 'Bib Gourmand 2025 — Del Mastro',
    descricao:
      'O Guia Michelin reconheceu o Del Mastro com a distinção Bib Gourmand, concedida a restaurantes que oferecem boa gastronomia a preço justo. Uma honra que celebra o trabalho diário de toda a equipe e o compromisso com ingredientes de qualidade.',
    link: 'https://guide.michelin.com',
    tipo: 'prêmio',
  },
]
