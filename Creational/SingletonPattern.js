// This is a special creational design pattern in which only one instance of a class can exist
// if no instance of singleton class is exist, then a new instance is created and returned.
// Real life example is mongoose, mongodb packages

class DataBase {
  constructor(data){
    if(DataBase.exists){
      return DataBase.instance
    }
    this._data = data
    DataBase.instance = this
    DataBase.exists = true
    return this;
  }
  getData(){
    return this._data
  }
  setData(data){
    this._data = data
  }
}



const mongo = new DataBase('mongo');
console.log(mongo.getData())

const mysql = new DataBase('mysql');
console.log(mysql.getData())