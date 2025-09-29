# VS Code Agent Prompt Instructions

This directory contains instruction files that are automatically applied when using AI agents (like GitHub Copilot) in VS Code for the ProStore project.

## File Structure

```
.github/
├── copilot-instructions.md    # General GitHub Copilot workspace instructions
└── agents/
    ├── api.instructions.md    # Backend/API development instructions
    └── frontend.instructions.md # Frontend/UI development instructions
```

## How It Works

VS Code AI agents automatically read and apply these instruction files based on the context of your work:

- **`copilot-instructions.md`** - Applied globally across the entire workspace
- **`agents/api.instructions.md`** - Applied when working on backend/server-side code
- **`agents/frontend.instructions.md`** - Applied when working on frontend/UI components

## Automatic Application

These files are automatically considered by AI agents when:
- Generating code suggestions
- Reviewing code
- Answering questions about the codebase
- Providing explanations or documentation

You don't need to manually reference these files - they work automatically in the background to provide context-aware assistance.

## File Contents

Each instruction file contains:
- Technology stack information
- Code patterns and conventions
- Best practices and guidelines
- Security considerations
- File organization patterns
- Common utilities and helpers

## Customization

You can modify these files to:
- Update coding standards
- Add new conventions
- Include project-specific guidelines
- Adjust the level of detail for different team members

## Benefits

- **Consistency**: Ensures all team members get the same coding guidance
- **Efficiency**: No need to manually provide context each time
- **Quality**: Helps maintain code quality standards automatically
- **Onboarding**: New team members get instant access to project conventions