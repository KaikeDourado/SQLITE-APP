# 📱 App de Receitas com React Native e SQLite

Este é um aplicativo de gerenciamento de receitas culinárias, desenvolvido em **React Native** com **Expo** e utilizando **SQLite** como banco de dados local. Ele permite:

- ➕ Adicionar novas receitas
- 📝 Editar receitas existentes
- ❌ Excluir receitas
- 📃 Listar todas as receitas
- 🔍 Buscar receitas por nome

---

## 🛠 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [SQLite (via `expo-sqlite`)](https://docs.expo.dev/versions/latest/sdk/sqlite/)

---

## 📦 Instalação e Execução

1. **Clone o repositório**:

```bash
   git clone https://github.com/KaikeDourado/SQLITE-APP
   cd SQLITE-APP
````

2. **Instale as dependências**:

```bash
   npm install
````


3. **Inicie o projeto com Expo**:

```bash
   npx expo start
````

   > Você pode escanear o QR code com o aplicativo **Expo Go** no seu celular ou usar um emulador Android/iOS.



## 🧠 Estrutura do Projeto

````
.
├── App.js                    # Componente principal da aplicação
├── components/
│   ├── ReceitaForm.js        # Modal para adicionar/editar receitas
│   └── ReceitaList.js        # Lista de receitas com busca, edição e exclusão
├── hooks/
│   └── useReceitas.js        # Hook personalizado que integra lógica com SQLite
````


## 🖼️ Layout

O app possui um layout simples, limpo e funcional, com uso de `View`, `Text`, `TextInput`, `FlatList` e `TouchableOpacity`, além de modais para cadastro/edição.

## 📋 Funcionalidades

* As receitas são armazenadas localmente usando SQLite.
* É possível editar ou excluir qualquer receita.
* Busca de receitas é feita em tempo real digitando no campo de busca.
* Interface responsiva e fácil de usar.

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

## ✨ Autor

Feito por [Kaike Dourado](https://github.com/KaikeDourado) 💙
