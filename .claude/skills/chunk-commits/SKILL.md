---
name: chunk-commits
description: Cluster all uncommitted changes into small logical commits. Use when you need to organize messy changes into clean, focused commits.
context: fork
model: haiku
---

# Chunk Commits

Cluster all uncommitted and unstaged changes into small, logical commits.
NEVER commit Markdown files unless explicitly required by the user

## Instructions

1. Run `git status` and `git diff` to see all changes (staged and unstaged)
2. Analyze the changes and group them into logical chunks based on:
   - Related functionality (same feature, same bug fix, same refactor)
   - Same file or closely related files
   - Same type of change (e.g., all import updates, all type fixes)
3. For each chunk:
   - Stage only the files/changes for that chunk using `git add`
   - Use the `commit-generator-cskill` skill to generate and create the commit
   - Repeat until all changes are committed
4. Keep commits small and focused - prefer more smaller commits over fewer large ones
5. Use conventional commit format (feat:, fix:, chore:, refactor:, docs:, etc.)