import {SecurityConstants} from './../../../security/models/security.models';

export module Messages {

export abstract class AuthenticationMessages {

    static getMessage(error:any):string  {
        switch (error){
            case SecurityConstants.Errors.WRONG_USER_PASSWORD:return 'Wrong email or password';
            default : return 'Unknown error';
        }
    }
}

}