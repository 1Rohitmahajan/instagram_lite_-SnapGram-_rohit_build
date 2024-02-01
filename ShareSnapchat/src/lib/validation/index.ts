import * as z from "zod"

export const Signupvalidation = z.object({
    name:z.string().min(2,{message:"this is worng input"}),
    username: z.string().min(2,{message:"to short"}),
    email:z.string().email(),
    password:z.string().min(8,{message:'Password must be at list 8 Character '})
})

export const Signinvalidation = z.object({
    email:z.string().email(),
    password:z.string().min(8,{message:'Password must be at list 8 Character '})
})