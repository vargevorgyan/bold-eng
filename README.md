# Starter

Node Test Project

### Quick Start

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Database

We use psql as default, but feel free to replace it with your favorite database. Migrations are done using [knex](http://knexjs.org/).

### Running migrations

-   Install knex globally: `npm i knex -g`. For better compatibility, make sure you are running Node 12.
-   Run migrations: `knex migrate:latest`
-   If needed, rollback migration: `knex migrate:down`

### Running seeds

-   Run seeds: `knex seed:run`

## Environment Variables

To run the app is necessary to set up the following variable in a **.env** file:

|  Variable  |                        Description                        |
| :--------: | :-------------------------------------------------------: |
|  DB_NAME   |                       Database name                       |
|  DB_PASS   |                     Database password                     |
|  DB_HOST   |           Database host (typically "localhost")           |
|  DB_PORT   |              Database port (typically 5432)               |
|  DB_USER   |                       Database user                       |
|    PORT    |     Port where the server will start (typically 3000)     |
| JWT_SECRET | Random string used when generating and validating the JWT |

## Run It

#### Run in _development_ mode:

Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in _production_ mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It

-   Open you're browser to [http://localhost:3000](http://localhost:3000)
-   Invoke the `/examples` endpoint
    ```shell
    curl http://localhost:3000/api/examples
    ```

## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

-   Use the debug pane to run one of the possible debugging modes
