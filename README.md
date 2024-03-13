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

# códigos para rodar:

- php artisan migrate
- php artisan passport:install
- php artisan permission:create-permission-routes
- php artisan db:seed --class=UsersSeeder
