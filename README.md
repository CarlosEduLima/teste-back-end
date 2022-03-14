# teste-back-end

# REST API example application

API desenvolvida como teste para vaga de desenvolvedor backend.

## Tecnologias

    Node.js
    Express.js
    MongoDB
    Mongoose
    Axios


## Rodando localmente

antes de rodar é necessário criar uma base de dados no Mongo Atlas e colocar as credenciais no index.js ou arquivo .env
ou 
Usar credenciais já existentes

## Clonar projeto 
    
    git clone 'URL projeto'

## Instalar dependencias  
    
    npm install 

## Popular base de dados 

    npm run populate-database

## Rodar 

    npm start 

# REST API Arquitetura

    src - pasta com código (source code)

    domain - contém casos de uso que são definidos nas regras de negócio da api
    faz a validação dos dados antes da comunicação com a base de dados

    infra - contém toda comunicação com serviços externos, nesse caso o MongoDB
         MongoDB - configuração do Mongo
            models - models do MongoDB
            queries - folder que irá ter arquivos com funções que se comunicam com a base
                        de dados, não há nenhuma tratativa de dados aqui, pois se espera que 
                        eles cheguem aqui validados pelas outras camadas
            schemas - schemas do MongoDB

    main - configurações e controllers da API
        config - configurações da API
                    express-router.adpter - adper para o express, desing pattern para tornar a api 
                                            independente dele, assim se for utilizado outro framework
                                            não irá ter efeitos colaterais no core da api
    controllers - contém todos os controllers da api, eles irão manusear o fluxo de dados
    helpers - funções e utilitários
    presentation - camada com a qual os serviços que utilizarem a API irão se comunicar,
                   contém apenas um apontamento para um controller que irá tratar a requisição
                   e retornar um response


## Get test api

### Request

`GET http://ec2-18-118-84-139.us-east-2.compute.amazonaws.com/api`
   
### Response

    app is working

## Get universities

### Request

`GET http://ec2-18-118-84-139.us-east-2.compute.amazonaws.com/api/universities`

request por página(opcional)

`GET http://ec2-18-118-84-139.us-east-2.compute.amazonaws.com/api/universities?page=1`
   
### Response

    [
	{
		"_id": "622aa8fda6ef3f7dca4b6a4e",
		"country": "Paraguay",
		"name": "Universidad Americana",
		"alpha_two_code": "PY"
	},
	{
		"_id": "622aa8fda6ef3f7dca4b6a51",
		"country": "Paraguay",
		"name": "Universidad Comunera",
		"alpha_two_code": "PY"
	},
    ]

## Get universidade por país

### Request

`GET http://ec2-18-118-84-139.us-east-2.compute.amazonaws.com/api/universities?country=brazil`


### Response

   [
	{
		"_id": "622aa8fea6ef3f7dca4b6b78",
		"country": "Brazil",
		"name": "Centro Universitário Barao de Maua",
		"alpha_two_code": "BR"
	},
	{
		"_id": "622aa8fea6ef3f7dca4b6b7a",
		"country": "Brazil",
		"name": "Universidade Candido Mendes",
		"alpha_two_code": "BR"
	},
   ]

## Get universidade por id

### Request

`GET http://ec2-18-118-84-139.us-east-2.compute.amazonaws.com/api/university/622aa8fea6ef3f7dca4b6b78`


### Response

  {
	"_id": "622aa8fea6ef3f7dca4b6b78",
	"country": "Brazil",
	"name": "Centro Universitário Barao de Maua",
	"domains": [
		"baraodemaua.br"
	],
	"alpha_two_code": "BR",
	"web_pages": [
		"http://www.baraodemaua.br/"
	],
	"__v": 0
}

## Post adicionar um universidade

### Request

`POST http://ec2-18-118-84-139.us-east-2.compute.amazonaws.com/api/universities`

JSON Body 
{
    name: 'universty name',
    country: 'Brazil',
    alpha_two_code:'BR'    
}

### Response

{
    statusCode: 200,
    success: true
}

## Put atualizar uma universidade

### Request

`PUT http://ec2-18-118-84-139.us-east-2.compute.amazonaws.com/api/universities/622aa8fea6ef3f7dca4b6b78`

JSON Body 
{
    name: 'another universty name',
    country: 'another country',
    alpha_two_code:'PR'    
}

### Response

{
    statusCode: 200,
    success: true
}

## Delete deletar uma universidade

### Request

`DELETE http://ec2-18-118-84-139.us-east-2.compute.amazonaws.com/api/universities/622aa8fea6ef3f7dca4b6b78`

### Response

{
    statusCode: 200,
    success: true
}


## Response para dados inválidos 

{
    statusCode: 404,
    msg: "dados inválidos" 
}

## Response para dados inexistentes 

{
    statusCode: 404,
    msg: "not found" 
}

## Response para erros no server 

{
    statusCode: 500,
    msg: "internal server error" 
}