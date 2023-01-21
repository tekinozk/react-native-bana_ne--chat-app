 

export default function (errorCode){
    switch (errorCode) {
        case "auth/email-already-exists":
            return "Kullanıcı zaten kayıtlı"

            case "auth/invalid-email":
                return "e-mail adresi geçersiz"
                case "auth/user-not-found":
                    return "Kullanıcı bulunamadı"
                    case "auth/weak-password":
                        return "Parola en az 6 karakterden oluşmalı"
            
           
    
        default:
       return errorCode
    }
}