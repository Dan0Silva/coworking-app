<div style="padding: 20px; border: 3px solid #eee; border-radius: 30px" align="center">
  <img src="app/src/assets/icon.png" alt="Logo do Projeto" width="120" height="120">
  <p style="color: #fafafa; font-size: 32px; font-weight: bold">
    Cool-Working
  </p>
</div>

<div>

<h2 align="center">
    Descrição
</h2>

<p>
    Repositório do app cliente e owner do projeto de TCC.
</p>

<h2 align="center">
    Estrutura de Pastas
</h2>

A estrutura de pastas do projeto é organizada da seguinte forma:

</div>

<div>
    
```markdown
├── src
│   ├── assets
│   ├── components
│   ├── contexts
│   ├── routes
│   ├── screens
│   └── services
├── App.tsx
```

<ul>
    <li>
        <b>App.tsx:</b>
        Arquivo principal, geralmente só está portando o componente
        principal de rotas.
    </li>
    <li>
        <b>src:</b>
        Pasta principal, onde ficam localizados todos os outros arquivos
        como telas, componentes, rotas, assets, etc.
    </li>
    <li>
        <b>assets:</b>
        Pasta responsável por conter imagens, fontes e outros elementos visuais da aplicação
    </li>
    <li>
        <b>components:</b>
        Pasta responsável por conter os componentes da aplicação, como botões, inputs, quadros, etc.
    </li>
    <li>
        <b>contexts:</b>
        Pasta responsável por conter os contextos da aplicação. Utilizando contextAPI para compartilhar informações por toda a aplicação.
    </li>
    <li>
        <b>routes:</b>
        Pasta responsável por conter as rotas da aplicação, responsável
        pela navegação da aplicação.
    </li>
    <li>
        <b>screens:</b>
        Pasta responsável por conter as telas da aplicação, como login, cadastro, home, etc.
    </li>
    <li>
        <b>services:</b>
        Pasta responsável por conter os serviços da aplicação, como
        utilização de api's externas.
    </li>
</ul>

</div>

<div>

<h2 align="center">
    Como rodar o projeto
</h2>

```shell
git clone git@github.com:Dan0Silva/coworking-app.git
```

```shell
cd coworking-app/app-client
```

```shell
npm install
```

```shell
npx expo
```

<p>
    A partir de agora, o app está rodando em seu terminal através do expo, caso queira executar no Android Studio, basta abrir o emulador e pressionar <b>[a]</b>, e caso queira executar no seu dispositivo, basta baixar o app do expo (Expo Go), e escanear o Qr Code presente no terminal após o comando <b>[npx expo]</b>.
</p>

</div>

<hr>
