# Instruções de Prompt dos Agentes VS Code

Este diretório contém arquivos de instruções que são aplicados automaticamente ao usar agentes de IA (como GitHub Copilot) no VS Code para o projeto ProStore.

## Estrutura de Arquivos

```
.github/
├── copilot-instructions.md    # Instruções gerais do workspace do GitHub Copilot
└── agents/
    ├── api.instructions.md    # Instruções de desenvolvimento Backend/API
    └── frontend.instructions.md # Instruções de desenvolvimento Frontend/UI
```

## Como Funciona

Agentes de IA do VS Code leem e aplicam automaticamente estes arquivos de instrução baseados no contexto do seu trabalho:

- **`copilot-instructions.md`** - Aplicado globalmente em todo o workspace
- **`agents/api.instructions.md`** - Aplicado ao trabalhar em código backend/server-side
- **`agents/frontend.instructions.md`** - Aplicado ao trabalhar em componentes frontend/UI

## Aplicação Automática

Estes arquivos são automaticamente considerados por agentes de IA quando:
- Gerando sugestões de código
- Revisando código
- Respondendo perguntas sobre a base de código
- Fornecendo explicações ou documentação

Você não precisa referenciar manualmente estes arquivos - eles funcionam automaticamente em segundo plano para fornecer assistência ciente do contexto.

## Conteúdo dos Arquivos

Cada arquivo de instrução contém:
- Informações da stack tecnológica
- Padrões e convenções de código
- Melhores práticas e diretrizes
- Considerações de segurança
- Padrões de organização de arquivos
- Utilitários e helpers comuns

## Customização

Você pode modificar estes arquivos para:
- Atualizar padrões de código
- Adicionar novas convenções
- Incluir diretrizes específicas do projeto
- Ajustar o nível de detalhe para diferentes membros da equipe

## Benefícios

- **Consistência**: Garante que todos os membros da equipe recebam a mesma orientação de código
- **Eficiência**: Não há necessidade de fornecer contexto manualmente a cada vez
- **Qualidade**: Ajuda a manter padrões de qualidade de código automaticamente
- **Onboarding**: Novos membros da equipe obtêm acesso instantâneo às convenções do projeto