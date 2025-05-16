Atividade Express (Requisitos)
1. Crie uma função de Middleware para cada uma das rotas mostradas exibindo apenas uma página com nome da rota
2. Crie uma função Middleware de aplicação que realiza o registro no console do acesso a cada página (ver exemplos anteriores nesta aula)
3. Ao entrar, crie uma rota (/users/:userid) que recebe o userid do usuário e exibe na página uma msg de boas vindas usando esse valor
4. Caso o usuário acesse sem userid é direcionado à página signup (pesquise como usar res.redirect())
5. Qualquer outra página que não tenha a rota indicada é direcionada para a página de erro 404 com link para o índice (pesquise como usar res.status())
