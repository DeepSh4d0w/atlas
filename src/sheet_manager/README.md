# Sheet Manager

Autor: Deepsh.

Inicio: 25/01/2023.

---

## 🖊 Descrição

O `Sheet Manager` é um sistema de fichas no sistema de Ordem Paranormal RPG v1.1, deve ser simples de usar esse projeto para criar, visualizar, editar e apagar as fichas de personagem.

## 🧾 Requisitos

### Funcionais

- O jogador deve ser capas de criar seus personagens com base no livro básico de regras do Ordem Paranormal v1.1.
- O jogador deve receber um link único quando terminar de criar ele.
- O jogador deve ser capas de visualizar o personagem com um link único.
- Qualquer pessoa com o link único do personagem deve conseguir visualizar e editar suas informações e o apagar do panco de dados.

### Não-Funcionais

- O client deve ser hospedada na Vercel.
- O client deve ser desenvolvida em Next Js.
- A estilização do client deve ser feito com o Tailwind Css.
- O server deve ser hospedado no Heroku junto com o banco de dados.
- O server deve ser desenvolvido em Nest Js.
- Os dados do server devem ser persistidos com um banco de dados PostgreSQL e as operações devem ser feitas com Prisma ORM.

## 💾 Exemplos

Esse exemplo são mais uma linha base do que eu quero fazer e não exatamente como a aplicação vai estar na primeira versão estável, principalmente coisas mais chatas de lidar como autenticação, mas é não é impossível evoluir a aplicação a um nível mais sofisticado futuramente.

### Fluxo de aplicação:

Em <rpg.cosmux.com.br> você consegue ver seus personagens quando logado na aplicação, caso não esteja autenticado poderá ver instruções de como criar seu personagem, podendo optar por seguir direto para fazer o personagem antes de fazer de criar um conta, ou simplesmente entrar em uma conta existente.

No dashboard da Home da aplicação tem um card para cada um dos personagem apresentando informações básicas e um botão que abre a ficha em outra pagina para ser visualizado.
Mas não é incomum não ter nenhum personagem ou ter poucos personagem, uma vez que a conta pode ser nova ou porque os personagens morram ou não estão mais sendo usados e o usuário decidiu apagar eles, seja como for sempre vai ter um botão na tela bem explicativo "+ novo personagem" que ira redirecionar o usuário para <rpg.cosmux.com.br/character/new> onde poderá criar um novo personagem normalmente.

Durante a criação do personagem opções serão apresentadas ou ocultadas dependendo de NEX, e alguns outros fatores decisivos, o jogador poderá ligar ou desligar a verificação de regras durante o processo a qualquer momento, no final da criação do personagem o jogador pode ir direto para a ficha ou para o dashboard.

Em <rpg.cosmux.com.br/character/:characterId> o jogador poderá visualizar o personagem e editar ele com opções como editar o detalhes gerais, os atributos, as pericias, as habilidade, os poderes e os rituais, e excluir o personagem.
