+++
title = "Books and Agent Skills"
date = "2026-05-30T23:51:53.916-07:00" 
draft = false
description = "Why writing agent skills is the most effective way to internalize self-help books like The Bullet Journal Method."
+++

We read self-help books because we seek change. But after reading, highlighting and note taking, the momentum often stops as we close the book. I want to propose a different way to learn: turn a self-help book into AI agent skills, distilling its ideas into actionable items.

Writing agent skills forces you to explain the book clearly. Like the teaching part of the Feynman Technique, it requires you to know your content and consider its structure. Explaining the method in simple instructions deepens your understanding and reinforces your memory.

Many self-help books pair a simple idea or system with extensive explanation, examples and anecdotes. Writing agent skills forces you to focus on the core and the actionable items. You need to extract the essence of the book into instructions an agent can follow.

Every time an agent skill is triggered, the agent follows its instructions and reflects them through its actions and output. The system proposed by the book shows up in front of you again. This repeating appearance can reinforce your memory and remind you of what needs to be done, each time you use the skill.

I have to admit that not all books can be converted. Those that emphasize methodology, frameworks or systems are the easiest to transform into agent skills. Also, it is important that you craft your own skills. It is the crafting process, which concentrates your learning and reasoning, that matters most.

### Example skill (Bullet Journal Monthly Migration)

```
# Monthly Log Migration Skill

## Pre-requisite
- Review current month's Monthly Log

## Steps
1. Create next month's Monthly Log file (format: `yyyy-MM` in `z_journal` folder) with frontmatter:
   ---
   tags:
     - monthly-log
   ---
2. Copy the Days section (1-31, empty) to the new file
3. Review all incomplete tasks from current month's task list
4. For each task, decide:
   - Move to next Monthly Log (mark `- [>]`)
   - Move to custom collection (mark `- [>]`)
   - Move to Future Log if not doing next month (mark `- [<]`)
   - Cancel if no longer relevant (mark `- [-]`)
5. Review Future Log (`Future Log.md`) and move tasks to next Monthly Log if doing them next month

## Checklist
- [ ] Next month's Monthly Log created (format: yyyy-MM in z_journal folder)
- [ ] Frontmatter with `tags: - monthly-log` added
- [ ] Days section (1-31, empty) copied to new file
- [ ] All incomplete tasks reviewed
- [ ] Tasks moved to next month marked with `- [>]`
- [ ] Tasks moved to Future Log marked with `- [<]`
- [ ] Irrelevant tasks marked as cancelled `- [-]`
- [ ] Future Log tasks moved to next month if applicable
```