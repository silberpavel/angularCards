# SilberAngular
(npm i @angular/cli)
(npm i -g @angular -S)
## Create new project (with CLI) 
```
ng new projectName
```

## 	Создание компонента
```
ng g c my-component --spec="false" (without unit test)
```

## Selectors in components
1. tag
2. attribute
3. class

## Bootsrtap
```
npm i bootstrap --save
```

* Подключаем Bootstrap
* .agular-cli.json OR angular.json*
```ts
    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
    ],
```

