'use server'
import {validateData} from '@/lib/utils';

export async function handleActionPlayer(prevState : any, formData : FormData) {
    const firstName = formData.get('firstname') as string || null
    const lastname = formData.get('lastname') as string || null
    const weight = formData.get('weight') as string || null
    const height = formData.get('height') as string || null
    const nationality = formData.get('nationality') as string || null
    const position = formData.get('position') as string || null
    if (!validateData([firstName,lastname,weight,height,nationality,position])) {
        return {message: 'Please enter valid credentials'};
    }
    

    
}