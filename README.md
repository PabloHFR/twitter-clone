# Twitter Clone

![imagem](https://i.imgur.com/a4D7WSB.jpg)

O [**Tuitter**](https://tuitter-clone.vercel.app) é um aplicativo feito com **_TypeScript_**, **_ReactJS_** e **_NextJS_**. Ele é um clone do Twitter que permite ao usuário criar sua conta, criar tweets, além de dar like e comentar neles, dar follow em outros usuários, receber notificações e editar seu próprio perfil!

![imagem](https://i.imgur.com/JIjKUaY.png)

Esta aplicação utiliza **_Tailwind CSS_** na estilização, **_NextAuth_** com _JWT_ para autenticação e validação de usuário, **_BCrypt_** para a criptografia da senha, **_Axios_** para lidar com as requisições HTTP, **_SWR_** para fazer o _data fetching_ de dados da API por meio de React Hooks utilizando a estratégia _Stale-While-Revalidate_, **_Prisma ORM_** para lidar com as informações que serão armazenadas no banco de dados **_MongoDB_**, e **_Zustand_** como alternativa ao **_Redux_** no _state management_.

Você pode acessar o projeto no site [**Tuitter**](https://tuitter-clone.vercel.app).

## Features

- O usuário poderá logar ou criar uma conta caso não seja registrado.
- O usuário poderá editar suas informações de perfil como seu nome, usuário, foto, imagem de fundo e biografia.
- O usuário poderá ver outros usuários do site na seção _Who to follow_ e acessar o perfil dessas pessoas.
- O usuário poderá criar tweets.
- O usuário poderá acessar, dar Like e Comentar em qualquer tweet.
- O usuário poderá seguir e ser seguido por outros usuários.
- O usuário receberá notificações sobre interações de outros usuários com seu perfil ou tweets.
- O usuário poderá utilizar a aplicação em qualquer dispostivo, pois o design responsivo se adequa às necessidades.
- O usuário não logado não terá acesso à determinadas abas e páginas do site, sendo automaticamente retornado para a página inicial.
- Todos os dados serão salvos em um banco de dados MongoDB com base em um _schema_ criado com o Prisma ORM.

## Tecnologias Utilizadas

- Tailwind CSS
- TypeScript
- ReactJS
- NextJS
- NextAuth
- Axios
- Prisma ORM
- MongoDB
- BCrypt
- SWR
- Zustand

O deploy foi feito na plataforma Vercel.
