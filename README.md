**C.R.U.D.**
Create - Read - Update - Delete
Criar - Ler - Atualizar - Apagar

### **Requisitos Obrigatórios**

* Cadastro de usuário
* Listagem de usuários
* Atualização de usuário
* Remoção de usuário


### **Cadastro de Usuário**

**Geração de ID sequencial para cada usuário**
| Foi criado um ID único baseado em `Date.now()`, garantindo que não haja repetição.

**Adição de e-mail, nome e telefone do usuário**
| Utilizamos `prompt-sync` para coletar as informações do usuário, armazenando-as em um array.

**Não permitir cadastro com e-mail duplicado**
| Utilizamos um laço de repetição para acessar os itens do array e verificar a duplicidade do e-mail.

**Exibição de mensagem de erro para e-mail duplicado**
| A verificação de duplicidade é feita com uma condicional `if` e, em caso de erro, a mensagem é exibida com `console.log()`.


### **Busca de Usuários**

**Listagem de todos os usuários cadastrados**
| A lista de usuários é exibida usando uma estrutura `if` para verificar se há usuários cadastrados e um laço de repetição para formatar a exibição.

**Exibição de telefones como lista associada**
| Os números de telefone são mostrados de forma organizada, associados ao respectivo usuário.

### **Atualização de Usuário**

**Permitir atualização do nome, e-mail ou telefone**
| Utilizamos o método `findIndex` para localizar a posição do usuário no array. O `prompt-sync` é usado para coletar a nova informação e a manipulação do array é feita com `usuario[index].item = novoItem`.

**Verificar se o novo e-mail está em uso ao atualizar**
| A verificação de e-mail duplicado é feita com um laço de repetição que checa se o novo e-mail já existe no array.

**Exibir mensagem de erro caso o novo e-mail já esteja em uso**
| Caso o e-mail já esteja em uso, a mensagem de erro é exibida com `console.log()` informando que o e-mail já está em uso.

### **Remoção de Contato**

**Permitir remoção de um usuário especificando o ID**
| Em vez de exigir a digitação do número completo gerado por `Date.now()`, o sistema exibe uma lista de IDs. O usuário pode escolher o ID correspondente à posição na lista. Para facilitar a visualização, a numeração na lista começa a partir de 1 (ao invés de 0), e o número digitado pelo usuário é ajustado subtraindo 1.

**Solicitar confirmação antes de realizar a remoção**
| O sistema solicita a confirmação do usuário antes de proceder com a remoção. A decisão é feita com uma verificação `if`, e a remoção é realizada ou não, dependendo da escolha do usuário.
