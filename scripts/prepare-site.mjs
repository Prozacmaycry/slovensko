import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const name of ['index.html','style.css','app.js','data.js','exercises.js']) await copyFile(name,`dist/${name}`);
