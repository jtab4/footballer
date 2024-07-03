'use server'

export async function authenticate(prevState : any, formData : FormData) {
    try {
        if (!formData.get("email") && !formData.get("password")) {
            return {message: 'Please enter a valid cretendials'}
        }
        console.log(formData.get("email"), formData.get("password"))

    } catch (error) {
        if (error) {}
        throw error
    }
}

export async function signUp(prevState : any, formData : FormData) {
    try {
        if (!formData.get("email") && !formData.get("password")) {
            return {message: 'Please enter a valid cretendials'}
        }
        if (formData.get("password") != formData.get("repeated")) {
            return {message: "Passwords don't matches"}
        }

    } catch (error) {
        if (error) {}
        throw error
    }
}
