# Instruções de Desenvolvimento Frontend

Você está trabalhando em uma aplicação de e-commerce Next.js chamada ProStore com a seguinte arquitetura frontend:

## Stack Tecnológico
- **Framework**: Next.js 15 com App Router
- **React**: 19.1.0 com TypeScript
- **Estilização**: TailwindCSS 4 com design tokens customizados
- **Componentes UI**: shadcn/ui com primitivos Radix UI
- **Ícones**: Lucide React
- **Formulários**: React Hook Form com validação Zod
- **Temas**: next-themes para modo claro/escuro
- **Notificações**: Sonner para notificações toast

## Padrões de Código & Convenções

### Estrutura de Componentes
- Use componentes funcionais TypeScript com tipagem adequada
- Coloque componentes reutilizáveis no diretório `/components`
- Use componentes shadcn/ui como blocos de construção
- Siga os padrões de componentes existentes na base de código

### Diretrizes de Estilização
- Use classes TailwindCSS com o sistema de design customizado
- Aproveite classes utilitárias predefinidas de `/assets/styles/globals.css`:
  - `.wrapper` - Container de largura máxima com padding responsivo
  - `.flex-start`, `.flex-center`, `.flex-between` - Utilitários flexbox
  - `.h1-bold`, `.h2-bold`, `.h3-bold` - Utilitários de tipografia
- Use propriedades CSS customizadas para temas consistentes
- Suporte tanto modo claro quanto escuro

### Sistema de Layout
- Estrutura principal de layout em `/app/layout.tsx`:
  ```tsx
  <div className="flex h-screen flex-col">
    <Header />
    <main className="flex-1 wrapper">{children}</main>
    <Footer />
  </div>
  ```
- Use a classe `wrapper` para containers de conteúdo
- Garanta design responsivo em todos os breakpoints

### Manipulação de Formulários
- Use React Hook Form com resolvers Zod para validação
- Siga este padrão para formulários:
  ```tsx
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { ... }
  });
  ```
- Use server actions para submissão de formulários
- Trate estados de loading e mensagens de erro adequadamente

### Gerenciamento de Estado
- Use hooks de estado React para estado local de componentes
- Use server actions para mutações de dados
- Aproveite o cache integrado do Next.js para busca de dados
- Use `useFormState` para integração com server actions

### Navegação & Roteamento
- Use Next.js App Router para navegação
- Organize páginas em grupos de rotas: `(auth)`, `(root)`
- Use loading e error boundaries adequados
- Implemente SEO adequado com a API de metadata

## Diretrizes de Componentes UI

### Sistema de Design
- Cores primárias: `oklch(0.18 0.15 257)` (azul escuro)
- Fundo: `oklch(1 0 0)` (branco) / `oklch(0.13 0.19 257)` (escuro)
- Use a paleta de cores definida nas propriedades CSS customizadas
- Siga a escala de espaçamento e tipografia estabelecida

### Composição de Componentes
- Construa UIs complexas usando primitivos shadcn/ui
- Use componentes Radix UI para acessibilidade
- Implemente navegação por teclado adequada
- Garanta conformidade com ARIA

### Design Responsivo
- Abordagem mobile-first com breakpoints TailwindCSS
- Use utilitários responsivos: `sm:`, `md:`, `lg:`, `xl:`
- Teste em diferentes tamanhos de tela
- Garanta interfaces amigáveis ao toque

## Organização de Arquivos
```
app/
├── (auth)/           # Páginas de autenticação
├── (root)/           # Páginas principais da aplicação
├── layout.tsx        # Layout raiz
├── loading.tsx       # UI de loading global
└── not-found.tsx     # Página 404

components/
├── ui/               # Componentes shadcn/ui
└── ...               # Componentes customizados

assets/
└── styles/
    └── globals.css   # Estilos globais e utilitários
```

## Melhores Práticas
1. **Acessibilidade**: Use HTML semântico e atributos ARIA adequados
2. **Performance**: Otimize imagens, use componente Next.js Image
3. **SEO**: Implemente metadata adequada e tags Open Graph
4. **Segurança de Tipos**: Use TypeScript rigorosamente, evite tipos `any`
5. **Reutilização de Código**: Crie componentes e utilitários reutilizáveis
6. **Tratamento de Erros**: Implemente error boundaries e fallbacks adequados
7. **Estados de Loading**: Mostre indicadores de loading apropriados
8. **Feedback do Usuário**: Use notificações toast para ações do usuário

## Melhores Práticas de Estilização
1. Use classes utilitárias ao invés de CSS customizado quando possível
2. Agrupe classes relacionadas logicamente em strings className
3. Use as classes utilitárias predefinidas para consistência
4. Implemente estados de hover e focus adequados
5. Garanta contraste de cor suficiente para acessibilidade
6. Use espaçamento consistente usando a escala do sistema de design

## Fluxo de Desenvolvimento
1. Comece projetando a estrutura do componente
2. Implemente a funcionalidade básica
3. Adicione estilização adequada com TailwindCSS
4. Garanta comportamento responsivo
5. Adicione recursos de acessibilidade
6. Teste em diferentes navegadores e dispositivos
7. Otimize para performance

## Padrões Comuns
- Use a função utilitária `cn()` para nomes de classes condicionais
- Implemente estados de loading e erro adequados
- Use interfaces TypeScript adequadas para props
- Siga as convenções de nomenclatura existentes
- Garanta que componentes sejam adequadamente documentados com comentários quando complexos