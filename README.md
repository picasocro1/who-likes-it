# mob programming

## pre-requisites

- [git](https://git-scm.com/download)
- [node](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/)
- [remotemobprogramming/mob](https://github.com/remotemobprogramming/mob)

## setup

1. clone the repo `git clonegit@github.com:picasocro1/roman-numerals.git`
1. install dependencies `pnpm install`

## how-to mob

1. create a new branch and push it
1. other collaborators are pulling the branch

---

1. start a new mob session `mob start`
1. write a first failing test
1. make `mob next` to hand it over to the next person

---

1. your successor is making `mob start`
1. writing implementation code to satisfy your test
1. writing another failing test
1. making `mob next` to pass on

---

1. continue the loop until you're done
1. last collaborator makes `mob done` (or `mob-done --no-squash`) to finish

----

1. commit final changes to the repo


