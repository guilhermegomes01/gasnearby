### GAS NEARBY

## Credenciais para Login e Cadastro
### Login
E-mail: eve.holt@reqres.in
Senha: (qualquer caractere)
### Cadastro
E-mail: eve.holt@reqres.in
Senha: pistol
## Sobre

Gas Nearby é um sistema que mostra os postos de gasolina mais próximo de você, tanto no mapa, quanto no formato lista. Você consegue fazer avaliações sobre o local que você deseja e, também, adicioná-lo à uma lista de postos de gasolina favoritos. 


## Base de Dados
	
Para este sistema, foi utilizado a [Google Places](https://cloud.google.com/maps-platform/places/), onde nós conseguimos retornar os postos de gasolina de acordo com uma localização enviada. Foi utilizado para Autenticação o [REQ|RES](https://reqres.in/).

## MVP da Aplicação

-   Postos de gasolina próximos, no mapa
-   Lista de Postos de Gasolina
-   Lista Favoritos
-   Informações dos Postos (Nome, Avaliação e Endereço)
-   Botão para Favoritar/Desfavoritar
-   Campos para fazer uma nova avaliação
-	  Visualização da avaliação fornecida
-   Login/Cadastro

## Tecnologias

 - VueJS (Nuxt)
 - Nuxt GMaps
 - Vue Star Rating
 - Axios

## Como utilizar
### 1ª Opção

Você pode acessar clicando no link abaixo:
[GAS NEARBY](https://gasnearby.netlify.app/)

### 2ª Opção
1. Abra o terminal e digite o seguinte
```sh
git clone <url-repositorio>
```

2. Entre na pasta do projeto via terminal e digite:
```sh
npm install  ou  yarn install
```

3. Por último, inicie a aplicação com:
 ```sh
npm dev  ou  yarn dev
```

Para ver o projeto localmente, acesse

> localhost:3000

## Estrutura da Aplicação
* assets/ `Onde contém as imagens utilizadas no projeto`
* components/ `Os componentes que podem ser utilizados na aplicação.`
* middleware/ `Onde contém os verificadores intermediários`
* pages/ `Onde contém os arquivos que criam as rotas das páginas`
* store/ `Onde contém os estados globais`
