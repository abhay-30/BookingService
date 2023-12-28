
 npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

 npx sequelize init
 npx sequelize db:create
  

 npx sequelize db:migrate


npx sequelize seed:generate --name add-airports
npx sequelize db:seed:all