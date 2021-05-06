# ClimaBR

Uma aplicação simples para consulta à previsão do tempo de cidades brasileiras.

Deploy: [CLIMABR](https://proj-climabr-modelagem.firebaseapp.com/home)

### Apresentação

Localização do vídeo de apresentação do app:

```
ClimaBR/
├── projetoPraticoModelagem
│   └── apresentacao/
│        └── apresentacao_trabalho_gcc132.mp4
```

# Como usar?

Clone este repositório.

Entre na pasta do projeto e execute o comando abaixo para instalar as dependências:

`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `api_key` para a sua chave de API):

```ts
export const OPEN_WEATHER_CONFIG = {
  api_key: '<your-api-key>',
  api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  api_icon_url: 'http://openweathermap.org/img/wn',
};
```

Para abrir a aplicação, execute o comando:

`ionic serve`

Enjoy!

## Projeto realizado para a disciplina GCC132 - Modelagem e Implementação de Software

Disciplina ministrada pelo professor Paulo Afonso Parreira Júnior (pauloafpjunior)

### Integrantes do grupo:

```
  Andrew Takeshi Tanaka de Vita (4andrewtanakashi)
  Gabriel Henrique Silva Amorim (ghamorim)
  Luiz Carlos Coelho Conde (luizcoelhoc1)
```
