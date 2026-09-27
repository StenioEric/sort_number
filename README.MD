# Numbers Sorter

Sorteador de números online, simples e rápido, desenvolvido com HTML, CSS e JavaScript. O projeto permite definir a quantidade de números, o intervalo mínimo e máximo e gerar resultados aleatórios em poucos segundos.

## 🚀 Funcionalidades

- Sorteio de números dentro de um intervalo definido pelo usuário
- Definição da quantidade de números a serem gerados
- Opção para evitar repetições no sorteio
- Validação de entrada para evitar valores inválidos
- Interface responsiva e visual moderna
- Botão para sortear novamente após a primeira geração

## 🧩 Como funciona

O usuário informa:

- a quantidade de números desejada
- o valor mínimo do intervalo
- o valor máximo do intervalo

Além disso, é possível ativar a opção “Não repetir número” para garantir que cada valor sorteado seja único dentro do intervalo informado.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## 📁 Estrutura do projeto

```text
sort_number/
├── assets/
│   ├── icons/
│   └── logo.svg
├── scripts/
│   └── script.js
├── styles/
│   ├── base/
│   │   ├── global.css
│   │   ├── reset.css
│   │   └── tokens.css
│   ├── components/
│   │   ├── buttons.css
│   │   ├── page-heading.css
│   │   ├── questions.css
│   │   ├── results.css
│   │   └── sorter-form.css
│   ├── layout/
│   │   └── header.css
│   ├── index.css
│   └── utilities.css
├── index.html
├── README.MD
└── .gitignore
```

## ▶️ Como executar

### Opção 1: abrir diretamente no navegador

1. Abra o arquivo `index.html` em um navegador.
2. Preencha os campos de quantidade, mínimo e máximo.
3. Clique em “SORTEAR”.

### Opção 2: executar localmente com um servidor

No terminal, dentro da pasta do projeto, execute:

```bash
python3 -m http.server 8000
```

Depois, abra no navegador:

```text
http://localhost:8000
```

## ✅ Observações

- A quantidade solicitada não pode ser maior que o número de possibilidades do intervalo quando a opção de não repetir estiver ativada.
- Os campos vazios e valores inválidos geram alertas para orientar o usuário.

## 📝 Licença

Este projeto foi desenvolvido como exemplo de estudo e pode ser usado livremente para fins educacionais.
