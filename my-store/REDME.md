*/ Comando para ejecutar un nuevo contenedor para PostgreSQL*/

docker-compose up -d db
docker-compose up -d pgadmin

*/ Comando para ejecutar el proyecto*/

npm run dev

*/ Comando para ejecutar las migraciones*/

npx sequelize-cli migration:generate --name create_users_table

*/ Comando para actualizar una  tabla con una nueva columna, la migración*/

npm run migrations:generate add-rol

*/ Para actualizar una columna o agregarla en caso de que no este */

npm run migrations:generate -n update-customer-id

*/ Para ejecutar una migración*/

npm run migration:run

*/ Para actualizar una columna o agregarla en caso de que no este*/
npm run migrations:generate -n products
npm run migrations:generate -n change-change-user-id
npx sequelize-cli migration:generate --name order-product
npx sequelize-cli migration:generate --name create_discounts

-----
npx sequelize-cli db:migrate
