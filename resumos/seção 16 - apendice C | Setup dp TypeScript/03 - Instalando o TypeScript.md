# Instalando o TypeScript

### Resumo

Você pode instalar o TypeScript globalmente ou localmente em um projeto específico. Instalar localmente é mais comum, pois permite que você tenha versões diferentes do TypeScript para diferentes projetos, se necessário. Aqui estão os passos para instalar o TypeScript usando o npm (Node Package Manager):

**Instalação Local (recomendada):**

1. Abra o terminal ou prompt de comando.

2. Navegue até a pasta do seu projeto usando o comando `cd` (Change Directory).

3. Execute o seguinte comando para instalar o TypeScript como dependência do seu projeto:
   
   ```bash
   npm install typescript --save-dev
   ```
   
   O parâmetro `--save-dev` indica que o TypeScript é uma dependência de desenvolvimento para o projeto.

4. Após a instalação, você terá o TypeScript disponível no diretório `node_modules` do seu projeto.

5. Você pode executar o compilador TypeScript usando o comando:
   
   ```bash
   npx tsc
   ```
   
   Isso compilará todos os arquivos TypeScript no diretório atual.

**Instalação Global:**

1. Abra o terminal ou prompt de comando.

2. Execute o seguinte comando para instalar o TypeScript globalmente:
   
   ```bash
   npm install -g typescript
   ```
   
   O parâmetro `-g` indica que o TypeScript será instalado globalmente no seu sistema.

3. Após a instalação, você poderá usar o compilador TypeScript globalmente em qualquer projeto.

4. Você pode executar o compilador TypeScript em qualquer diretório usando o comando:
   
   ```bash
   tsc
   ```

Lembre-se de que, ao usar a instalação local, você precisa executar o TypeScript usando o `npx tsc` ou especificar o caminho do binário no diretório `node_modules`. A instalação local é recomendada porque evita conflitos de versão entre diferentes projetos.

Depois de ter o TypeScript instalado, você pode criar arquivos `.ts`, definir tipos, interfaces e outros recursos de tipagem e, em seguida, usar o comando `tsc` para compilar esses arquivos em JavaScript.

## Verificando a Versão

O comando `tsc -v` é usado para verificar a versão do compilador TypeScript instalado no seu sistema. Ao executar esse comando no terminal ou prompt de comando, você verá a versão do TypeScript que está instalada.

Por exemplo, se você ver algo como:

```bash
Version 4.3.5
```

Isso significa que a versão 4.3.5 do TypeScript está instalada no seu sistema. Certifique-se de que o TypeScript esteja instalado corretamente antes de começar a criar e compilar seus arquivos TypeScript.
