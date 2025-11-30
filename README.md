# Saúde Plural — Repositório do Projeto

Este repositório contém o código-fonte do aplicativo **Saúde Plural**, desenvolvido inicialmente pelo Stevão e continuado pelo Mateus Matos e pela Maria.

## 📱 Sobre o Projeto

O **Saúde Plural** é um aplicativo mobile desenvolvido em **React Native (Expo)** com foco em facilitar o acesso a serviços de saúde, registro rápido e navegação simples. O aplicativo segue um design baseado no Figma (link abaixo).

## 🎨 Figma do Projeto

**Figma:** *[INSIRA AQUI O LINK DO FIGMA](https://www.figma.com/design/lYjyB4MgoW0wIB5V8VAmLn/PI---Sa%C3%BAde-Plural--Copy-?node-id=0-1&t=cBEdgyf3yeFqLVH1-1)*

As próximas três telas que devem ser desenvolvidas estão marcadas dentro do Figma.

## 📂 Estrutura do Projeto

```
saude-plural/
│
├── app/
│   ├── index.tsx
│   ├── login.tsx
│   ├── register.tsx
│   ├── modal.tsx
│   └── (tabs)/
│       └── _layout.tsx
│
├── assets/
│   └── images/
│       ├── logo.png (ou logo personalizada)
│       ├── icon.png
│       ├── splash-icon.png
│       └── outros ícones do sistema
│
├── components/
├── constants/
├── hooks/
├── package.json
└── README.md
```

## 🏗️ O que já foi implementado

### ✔️ 1. Estrutura do projeto com Expo

* Pasta organizada por rotas
* Navegação com estrutura de tabs pelo _layout
* Configuração inicial do Expo

### ✔️ 2. Telas desenvolvidas

* **Login**
* **Cadastro (Register)**
* **Tela inicial (Index)**
* **Tela de Modal**

### ✔️ 3. Integração da logo e identidade visual

* Inserida a pasta `assets/images`
* Ajustes no `register.tsx` para carregar a nova logo
* Personalização do header com texto *Saúde Plural*

### ✔️ 4. Layout funcional seguindo o Figma

* Componentes e espaçamentos fiéis ao design
* Alterações permitidas: cores, logo e melhorias visuais

## 🧭 Próximas telas a serem desenvolvidas

Os próximos responsáveis (**Mateus Matos** e **Maria**) deverão criar as **3 próximas telas indicadas no Figma**.

Cada tela já possui:

* layout definido
* ordenação correta
* componentes indicados

**Atenção:** Seguir o padrão atual de componentes e organização.

## 🛠️ Como rodar o projeto

```bash
npm install
npm start
```

Ou

```bash
npx expo start
```

O app pode ser aberto via Expo Go no celular.

## 📝 Contribuição

### Para Mateus e Maria:

1. Criar uma branch com seu nome.
2. Implementar as telas seguintes.
3. Manter o mesmo padrão visual e estrutural.
4. Antes de enviar, testar no celular pelo Expo.
5. Abrir Pull Request para revisão.

## 🔗 Repositório GitHub

**GitHub:** *[INSIRA AQUI O LINK DO REPOSITÓRIO](https://github.com/Stevaoo/SaudePluralAppMobile)*

---

Qualquer dúvida, fale com o Stevão — responsável pela primeira fase do projeto.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
