export class AuthenticationResponse{
    token : string;
    user : User;
}

export class Role {
    id : string;
    name : string;
    privileges : Map<string,boolean>;
}

export class User {
    id : string;
    email : string;
    fullName : string;
    roles : Array<Role>;
}

export module SecurityConstants {
    export abstract class Privileges {
        readonly MANAGE_USERS : string = "manage_users";
    }
}