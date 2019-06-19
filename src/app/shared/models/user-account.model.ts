import {Deserializable} from '../interfaces/deserializable.interface';
import {Serializable} from '../interfaces/serializable.interface';

export class UserAccount implements Serializable,Deserializable{
    private _email : string;
    get email() : string{
        return this._email;
    }
    set email(v:string){
        this._email = v;
    }

    private _fullname : string;
    get fullname():string{
        return this._fullname;
    }
    set fullname(v:string){
        this._fullname = v;
    }

    private _isAdmin : boolean;
    get isAdmin(){
        return this._isAdmin;
    }
    set isAdmin(v:boolean){
        this._isAdmin = v;
    }

    private _username:string;
    get username() : string{
        return this._username;
    }
    set username(v:string){
        this._username = v;
    }

    private _token:string;
    get token():string{
        return this._token;
    }
    set token(v:string){
        this._token = v;
    }
    constructor(){}
    deserialize(input:string):this{
        Object.assign(this,input);
        return this;
    }
    serializable(){
        let output:any = Object.assign({},this);
        return output;
    }
}