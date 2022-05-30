### 更改包行为

#### init patch-package

```bash

npm i -D patch-package

# edit /node_modules/naive-ui/es/checkbox/src/Checkbox.js

npx patch-package naive-ui

```

#### add script into package.json

```json
{
  "name": "snippet",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit --skipLibCheck && vite build",
    "preview": "vite preview",
    "postinstall": "patch-package" // new
  },
  // ...
}

```

#### install

```bash

npm install

```