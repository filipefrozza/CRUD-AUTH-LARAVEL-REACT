# CRUD-AUTH-LARAVEL-REACT

Sua aplicação deve possuir:

CRUD de usuarios;

-> CRUD:
- Deve ser filtrável e ordenável por qualquer campo, e possuir paginação de 25 itens.
- Deve possuir formulários para criação e atualização de seus itens.
- Deve permitir a deleção de qualquer item de sua lista.
- Implementar validações de campos obrigatórios e tipos de dados.
- Testes unitários

-> Banco de dados
- O banco de dados deve ser criado utilizando Migrations do framework Laravel, e também utilizar Seeds e Factorys para popular as informações no banco de dados.

-> Tecnologias utilizadas:
- HTML
- CSS
- Javascript
- Framework Laravel (PHP)
- Docker (construção do ambiente de desenvolvimento)
- Mysql, Postgres

-> Entrega:
- O projeto deve ser entregue em arquivo compactado e neste deve conter um arquivo readme contendo o passo a passo para execução da aplicação.

-> Extra:
- Criação de duas aplicações (dois containers), uma frontend e outra API com comunicação via REST
- Tela de login para autenticação de usuários (usuário default: ‘root’, senha:’password’);
- Permitir deleção em massa de itens nos CRUDs.
- Permitir que o usuário mude o número de itens por página.


--------------------------

# códigos para preparar o servidor (precisa estar com o banco up tendo uma database chamada 'crud-laravel'):

-> na pasta laravel
- php artisan migrate
- php artisan passport:install
- php artisan permission:create-permission-routes
- php artisan db:seed --class=UsersSeeder

-> na pasta react
- npm install

# códigos para o docker

- docker-compose build
- docker-compose up

- VERIFICAR NOS LOGS SE O CÓDIGO DE MIGRATE RODOU CORRETAMENTE
- ACONSELHO DEPOIS DE FAZER UP UMA VEZ, PARAR OS CONTAINERS E RODAR NOVAMENTE (APÓS 5 MINUTOS UP) PARA EVITAR PROBLEMAS

# códigos para rodar laravel + react sem usar DOCKER (rodar os códigos que preparam o servidor antes de iniciar)

- abrir um servidor mysql porta 3306 com uma database chamada 'crud-laravel'
- na pasta laravel rodar: php artisan serve
- na pasta react rodar: npm start

- laravel irá rodar na porta 8000
- react irá rodar na porta 3000
