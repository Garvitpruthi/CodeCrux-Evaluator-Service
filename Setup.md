## How to Setup a new TypeScript Express project
1. 
```

npm init -y
```

2. 
```

npm install -D typescript
npm install concurrently
```

3. 
```

npx tsc -init
```

4. 
```

Add the following scripts in package.json
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "dev": "npx concurrently --kill-others \"npm run watch\" \"npm start\""
  };

``` 

Note: Make relevant config changes in tsconfig.js

5.
```

npm run dev
```