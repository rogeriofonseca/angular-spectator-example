export interface Address {
    cep?: string;
    logradouro?: string;
    complemento?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string;
    enderecoCompleto?: string;
}

// {
//     cep: '01001-000',
//     logradouro: 'Praça da Sé',
//     complemento: 'lado ímpar',
//     bairro: 'Sé',
//     localidade: 'São Paulo',
//     uf: 'SP',
//     ibge: '3550308',
//     gia: '1004',
//     ddd: '11',
//     siafi: '7107'
//   }