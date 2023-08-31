# Instalação do NodeJs

## Resumo

## Instalando no Windows

Para instalar o Node.js no Windows, você pode seguir esses passos simples:

1. **Baixar o Instalador:**
   Acesse o site oficial do Node.js em https://nodejs.org/ e clique na versão recomendada ("LTS" - Long-Term Support) ou na versão atual, dependendo das suas preferências. O LTS é geralmente recomendado para projetos estáveis e de produção.

2. **Executar o Instalador:**
   Após o download, execute o arquivo do instalador. Você verá a tela de boas-vindas do instalador.

3. **Aceitar os Termos de Licença:**
   Leia os termos de licença e, se concordar, marque a caixa indicando que você aceita os termos.

4. **Escolher Componentes:**
   Na próxima tela, você pode escolher quais componentes instalar. Por padrão, "Node.js" e "npm package manager" devem estar selecionados. Geralmente, você não precisa alterar essas configurações.

5. **Escolher Local de Instalação:**
   Escolha a pasta onde deseja instalar o Node.js. O diretório padrão é geralmente adequado para a maioria dos usuários.

6. **Custom Setup (Instalação Personalizada - Opcional):**
   Se você quiser fazer uma instalação personalizada, clique em "Custom" (Personalizado) e ajuste as opções conforme suas preferências.

7. **Instalação:**
   Depois de selecionar as opções desejadas, clique no botão "Install" (Instalar) para iniciar o processo de instalação.

8. **Concluir a Instalação:**
   Aguarde até que a instalação seja concluída. Uma vez finalizada, você verá uma tela informando que o Node.js foi instalado com sucesso.

9. **Verificar a Instalação:**
   Para verificar se o Node.js foi instalado corretamente, abra o Prompt de Comando (CMD) ou o PowerShell e digite os seguintes comandos:
   
   - `node -v`: Isso exibirá a versão do Node.js instalada.
   - `npm -v`: Isso exibirá a versão do npm (Node Package Manager) instalada.

Com esses passos, você deve ter o Node.js instalado no seu sistema Windows. Agora você pode começar a desenvolver aplicativos e projetos usando o Node.js e suas bibliotecas.

## Instalando no Windows

A instalação do Node.js no Linux varia um pouco dependendo da distribuição específica que você está usando. Vou lhe fornecer um guia geral que deve funcionar em muitas distribuições baseadas em Debian e Red Hat, que incluem Ubuntu, Debian, CentOS e Fedora.

Para instalar o Node.js no Linux, siga estes passos:

1. **Atualizar Repositórios:**
   Abra o terminal e execute os seguintes comandos para garantir que seus repositórios estejam atualizados:
   
   Para distribuições baseadas em Debian (como Ubuntu):
   
   ```bash
   sudo apt update
   sudo apt upgrade
   ```
   
   Para distribuições baseadas em Red Hat (como CentOS):
   
   ```bash
   sudo yum update
   ```

2. **Instalar o Node.js usando o Gerenciador de Pacotes:**
   Depois de atualizar os repositórios, você pode usar o gerenciador de pacotes para instalar o Node.js.
   
   Para distribuições baseadas em Debian:
   
   ```bash
   sudo apt install nodejs
   ```
   
   Para distribuições baseadas em Red Hat:
   
   ```bash
   sudo yum install nodejs
   ```

3. **Instalar o npm:**
   O npm (Node Package Manager) geralmente é instalado automaticamente junto com o Node.js. No entanto, você pode verificar se o npm está instalado executando:
   
   ```bash
   npm -v
   ```

4. **Verificar a Instalação:**
   Para verificar se o Node.js foi instalado corretamente, execute:
   
   ```bash
   node -v
   ```
   
   Isso exibirá a versão do Node.js instalada.

Com esses passos, você deve ter o Node.js instalado no seu sistema Linux. Lembre-se de que as etapas podem variar um pouco dependendo da distribuição específica que você está usando, mas geralmente os passos mencionados acima devem funcionar na maioria das distribuições populares.


