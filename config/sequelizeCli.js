module.exports ={
    development:{
        dialect: 'postgres',
        host: 'localhost',
        port: '5432',
        database: 'onebitflix_development',
        username: 'onebitflix',
        password: 'onebitflix'
    }
}
//esse objeto é o que a sequelize.cli vai utilizar para se conectasr com o database