# Express 기본 연습

## 1. 세팅 방법

```bash
# 1. package.json 및 git 세팅
npm init -y
git init
```

```bash
# 2. express 및 typescript 설치
npm install express
npm install -D typescript ts-node @types/node @types/express nodemon
```

- express: Express 프레임 워크 설치
- typescript: Typescript를 Javascript로 변환해주는 컴파일러
- ts-node: .ts 파일을 컴파일 없이 바로 실행할 수 있게 해주는 도구
- @types/node: node 모듈에 대한 타입 정의를 제공하는 패키지
- @types/express: express에 대한 타입 정보를 제공하는 패키지
- nodemon: express 자동 재시작 유틸리티

```bash
# tsconfig.json 생성
npx tsc --init
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

```json
// nodemon.json 생성
{
  "watch": ["src"],
  "ext": "ts,js",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node ./src/server.ts"
}
```

```json
// package.json 수정
{
  "name": "basic01",
  "version": "1.0.0",
  "description": "",
  "type": "commonjs",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "@types/express": "^5.0.2",
    "@types/node": "^22.15.21",
    "nodemon": "^3.1.10",
    "ts-node": "^10.9.2",
    "typescript": "^5.8.3"
  }
}
```

```js
// src/app.ts
import express from 'express';

const app = express();

export default app;
```

```js
// src/server.ts
import app from './app';

const port = 8080;

app.listen(port, () => {
  console.log('서버 오픈!');
});
```

```js
// npm run dev로 실행 후 테스트

// 기본 폴더 구조
basic01
├─ nodemon.json
├─ package-lock.json
├─ package.json
├─ Readme.md
├─ src
│  ├─ app.ts
│  └─ server.ts
└─ tsconfig.json
```
