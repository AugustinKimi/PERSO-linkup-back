import mysql from 'mysql'

const connection  = mysql.createPool({
    connectionLimit : 10,
    host            : 'mariadb.host',
    port            : 3306,
    user            : 'augustin',
    password        : 'V7ku3PBkbh4H5gM6',
    database        : 'linkup'
  });


  export default connection


