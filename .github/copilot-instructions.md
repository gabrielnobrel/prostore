# Instruções do GitHub Copilot para ProStore

Esta é uma aplicação de e-commerce Next.js 15 chamada ProStore. Ao auxiliar com este projeto, siga estas diretrizes:

## Visão Geral do Projeto
ProStore é uma plataforma moderna de e-commerce construída com:
- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Next.js App Router, Prisma ORM, PostgreSQL, NextAuth.js
- **Deploy**: Vercel com Neon Database

## Estilo de Código & Convenções

### Diretrizes Gerais
- Escreva código TypeScript limpo, legível e de fácil manutenção
- Siga padrões de código existentes e convenções de nomenclatura
- Use nomes significativos para variáveis e funções
- Adicione comentários JSDoc para funções complexas
- Prefira padrões de programação funcional quando apropriado

### Padrões TypeScript
- Use configurações TypeScript rigorosas
- Defina interfaces e tipos adequados
- Evite usar o tipo `any` - use tipagem adequada
- Use inferência de tipos sempre que possível
- Exporte tipos do diretório `/types`

### Organização de Importações
- Agrupe importações logicamente: React/Next.js, terceiros, locais
- Use importações absolutas com prefixo `@/` para arquivos do projeto
- Importe tipos separadamente quando necessário: `import type { ... }`

### Nomenclatura de Arquivos
- Use kebab-case para nomes de arquivos: `user-profile.tsx`
- Use PascalCase para nomes de componentes: `UserProfile`
- Use camelCase para variáveis e funções: `getUserData`
- Use UPPER_CASE para constantes: `MAX_FILE_SIZE`

## Padrões de Arquitetura

### Arquitetura de Componentes
- Mantenha componentes pequenos e focados em responsabilidade única
- Use composição ao invés de herança
- Separe lógica de negócio da lógica de apresentação
- Use hooks customizados para lógica reutilizável

### Fluxo de Dados
- Use server actions para mutações de dados
- Aproveite o cache integrado do Next.js para busca de dados
- Trate estados de loading e erro consistentemente
- Use validação adequada de formulários com esquemas Zod

### Tratamento de Erros
- Implemente error boundaries adequados
- Use blocos try-catch em server actions
- Retorne respostas de erro estruturadas
- Forneça mensagens de erro amigáveis ao usuário

## Fluxo de Desenvolvimento

### Antes de Escrever Código
1. Entenda a estrutura da base de código existente
2. Verifique implementações similares para manter consistência
3. Considere o impacto em outras partes da aplicação
4. Garanta que os tipos TypeScript estejam adequadamente definidos

### Implementação de Código
1. Escreva o código mínimo necessário para resolver o problema
2. Siga os padrões estabelecidos na base de código
3. Inclua tratamento adequado de erros e validação
4. Garanta design responsivo para componentes de UI
5. Adicione atributos de acessibilidade adequados

### Considerações de Teste
- Escreva código testável com separação adequada de responsabilidades
- Considere casos extremos e cenários de erro
- Garanta validação adequada de entradas do usuário
- Teste comportamento responsivo para componentes de UI

## Diretrizes Específicas

### Operações de Banco de Dados
- Sempre valide dados antes de operações de banco de dados
- Use métodos type-safe do Prisma
- Trate erros de banco de dados graciosamente
- Considere performance e otimização de consultas

### Autenticação & Segurança
- Sempre verifique autenticação do usuário para operações protegidas
- Valide permissões do usuário antes de ações sensíveis
- Nunca exponha dados sensíveis no código client-side
- Use variáveis de ambiente para configuração

### Otimização de Performance
- Use o componente Next.js Image para imagens
- Implemente estados de loading adequados
- Considere code splitting para componentes grandes
- Otimize o tamanho do bundle evitando importações desnecessárias

### Acessibilidade
- Use elementos HTML semânticos
- Inclua atributos ARIA adequados
- Garanta que a navegação por teclado funcione
- Mantenha contraste de cor suficiente
- Teste com leitores de tela quando possível

## Checklist de Qualidade de Código
- [ ] Tipos TypeScript estão adequadamente definidos
- [ ] Tratamento de erros está implementado
- [ ] Código segue padrões existentes
- [ ] Design responsivo é considerado (para UI)
- [ ] Diretrizes de acessibilidade são seguidas (para UI)
- [ ] Implicações de performance são consideradas
- [ ] Práticas de segurança são seguidas
- [ ] Código está adequadamente documentado quando complexo

## Utilitários Comuns Disponíveis
- `cn()` - Utilitário para nomes de classes condicionais
- `formatError()` - Formatação padronizada de erros
- `convertToPlainObject()` - Converte objetos Prisma para uso no cliente
- `formatCurrency()` - Formatar valores de moeda
- `formatId()` - Encurtar UUIDs para exibição

Lembre-se de sempre priorizar qualidade de código, facilidade de manutenção e experiência do usuário ao contribuir com este projeto.