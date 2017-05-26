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
        static readonly MANAGE_USERS : string = "manage_users";
    }

    export abstract class Errors {
        static readonly WRONG_USER_PASSWORD : string = "wrong_user_password";
    }
}