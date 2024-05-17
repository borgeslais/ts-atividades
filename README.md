First studies of TypeScript following a tutorial video on youtube - TypeScript Tutorial for Beginners, by Programming with Mosh.
Link: https://youtu.be/d56mG7DezGs?si=IdeJRrWEt3NuAsJG

Basic to start with TypeScript:
1. Download node
2. On terminal: npm i -g typescript
3. Create a folder of the project on vscode
4. Add index.ts
5. On terminal of project: tsc index.ts (index.js will be created - result of compilation)
6. On terminal of project: tsc --init (tsconfig.json will be created)
7. Create folder src and put index.ts inside
8. On tsconfig.json configure rootDir: ./src and in emit section outDir: ./dist (and other settings if wanted) - go to terminal and run tsc - will compile all typescript files
