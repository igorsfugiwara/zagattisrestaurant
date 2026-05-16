export interface MenuItem {
  id: string
  nome: string
  nomeItaliano: string
  descricao: string
  preco: string
  destaque?: boolean
}

export interface MenuCategory {
  id: string
  titulo: string
  subtitulo: string
  itens: MenuItem[]
}

export const menuItems: Record<string, MenuCategory> = {
  massas: {
    id: 'massas',
    titulo: 'Massas Frescas',
    subtitulo: 'Pasta Fresca',
    itens: [
      {
        id: 'fettuccine-funghi',
        nome: 'Fettuccine ao Funghi Porcini',
        nomeItaliano: 'Fettuccine ai Funghi Porcini',
        descricao: 'Massa fresca artesanal com creme de funghi porcini importado, finalizada com trufa negra e parmesão reggiano.',
        preco: 'R$ 59,90',
        destaque: true,
      },
      {
        id: 'tagliatelle-ragu',
        nome: 'Tagliatelle ao Ragù',
        nomeItaliano: 'Tagliatelle al Ragù Bolognese',
        descricao: 'Massa fresca com molho bolognese lento, preparado por 6 horas com músculo bovino, pancetta e vinho tinto.',
        preco: 'R$ 54,90',
      },
      {
        id: 'pesto-ricota',
        nome: 'Pesto com Ricota',
        nomeItaliano: 'Pasta al Pesto e Ricotta',
        descricao: 'Massa ao molho pesto de manjericão fresco, ricota artesanal, pinoli tostado e azeite extra virgem.',
        preco: 'R$ 49,90',
      },
      {
        id: 'rigatoni-carbonara',
        nome: 'Rigatoni à Carbonara',
        nomeItaliano: 'Rigatoni alla Carbonara',
        descricao: 'Rigatoni artesanal com guanciale italiano, gema de ovo caipira, pecorino romano e pimenta-do-reino.',
        preco: 'R$ 56,90',
        destaque: true,
      },
      {
        id: 'parmegiana',
        nome: 'Frango à Parmegiana',
        nomeItaliano: 'Pollo alla Parmigiana',
        descricao: 'Filé de frango empanado, gratinado com molho pomodoro fresco e mozzarella de búfala. Acompanha massa.',
        preco: 'R$ 52,90',
      },
    ],
  },
  risotos: {
    id: 'risotos',
    titulo: 'Risotos',
    subtitulo: 'Risotti',
    itens: [
      {
        id: 'risoto-funghi',
        nome: 'Risoto de Funghi',
        nomeItaliano: 'Risotto ai Funghi Misti',
        descricao: 'Arroz arbóreo com mix de cogumelos frescos e desidratados, caldo caseiro, manteiga e parmesão.',
        preco: 'R$ 57,90',
        destaque: true,
      },
      {
        id: 'risoto-camarao',
        nome: 'Risoto de Camarão',
        nomeItaliano: 'Risotto ai Gamberi',
        descricao: 'Arroz arbóreo com camarão fresco ao alho e azeite, bisque caseiro, toque de limão siciliano.',
        preco: 'R$ 64,90',
      },
      {
        id: 'risoto-costela',
        nome: 'Risoto de Costela',
        nomeItaliano: 'Risotto alla Costola Brasata',
        descricao: 'Costela bovina desfiada ao vinho tinto, sobre cremoso risoto ao parmesão com gremolata.',
        preco: 'R$ 62,90',
        destaque: true,
      },
      {
        id: 'risoto-limao',
        nome: 'Risoto ao Limão Siciliano',
        nomeItaliano: 'Risotto al Limone Siciliano',
        descricao: 'Arroz arbóreo com creme de limão siciliano, caperi, parmesão e ervas frescas.',
        preco: 'R$ 53,90',
      },
    ],
  },
  executivo: {
    id: 'executivo',
    titulo: 'Executivo do Dia',
    subtitulo: 'Pranzo del Giorno',
    itens: [
      {
        id: 'executivo-ancho',
        nome: 'Ancho Executivo',
        nomeItaliano: 'Controfiletto del Giorno',
        descricao: 'Ancho grelhado ao ponto com alecrim, batata rústica e salada verde. Inclui café ou suco.',
        preco: 'R$ 49,90',
        destaque: true,
      },
      {
        id: 'executivo-frango',
        nome: 'Sobrecoxa Italiana',
        nomeItaliano: 'Coscia di Pollo al Forno',
        descricao: 'Sobrecoxa assada com ervas mediterrâneas, polenta cremosa e legumes salteados.',
        preco: 'R$ 39,90',
      },
      {
        id: 'executivo-saint-peter',
        nome: 'Saint Peter Grelhado',
        nomeItaliano: 'Pesce alla Griglia',
        descricao: 'Filé de saint peter grelhado com azeite e limão, arroz de brócolis e legumes ao vapor.',
        preco: 'R$ 44,90',
      },
    ],
  },
  bebidas: {
    id: 'bebidas',
    titulo: 'Bebidas',
    subtitulo: 'Bevande',
    itens: [
      {
        id: 'agua',
        nome: 'Água Mineral',
        nomeItaliano: 'Acqua Minerale',
        descricao: 'Com ou sem gás. 500ml.',
        preco: 'R$ 6,00',
      },
      {
        id: 'suco-laranja',
        nome: 'Suco de Laranja Natural',
        nomeItaliano: 'Succo d\'Arancia Fresco',
        descricao: 'Suco de laranja espremido na hora. 300ml.',
        preco: 'R$ 12,00',
      },
      {
        id: 'cafe',
        nome: 'Café Espresso',
        nomeItaliano: 'Caffè Espresso',
        descricao: 'Blend especial italiano, extraído na pressão ideal.',
        preco: 'R$ 8,00',
      },
      {
        id: 'cappuccino',
        nome: 'Cappuccino',
        nomeItaliano: 'Cappuccino Italiano',
        descricao: 'Espresso com leite vaporizado e espuma cremosa, canela a gosto.',
        preco: 'R$ 11,00',
      },
      {
        id: 'limonada',
        nome: 'Limonada Siciliana',
        nomeItaliano: 'Limonata Siciliana',
        descricao: 'Limão siciliano, água com gás, hortelã e um toque de mel. 400ml.',
        preco: 'R$ 14,00',
        destaque: true,
      },
      {
        id: 'vinho-tinto',
        nome: 'Vinho Tinto da Casa',
        nomeItaliano: 'Vino Rosso della Casa',
        descricao: 'Seleção do sommelier. Taça 150ml.',
        preco: 'R$ 22,00',
      },
    ],
  },
}
