import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { clientID } from "../../config/googleAuth";
import toast from "react-hot-toast";

const SocialLoging = () => {
    const onSuccess = (credentialResponse) => {
        localStorage.setItem('blood-auth-token', credentialResponse.credential)
    }

    const onError = () => {
        toast.error('Auth Failed')
    }
    return (
        <div className="mt-5">
            <GoogleOAuthProvider clientId={clientID}>
                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={onError}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default SocialLoging