import { z } from "zod";

//generic field errors from zod validation. T is an object with fields with our errors as an array of strings, where each string is an error. 
export type FieldErrors<T> = {
    [K in keyof T]?: string[]
}

// field error OR data error like a board error/db error OR data success
export type ActionState<TInput, TOutput> = {
    fieldErrors?: FieldErrors<TInput>
    error?: string | null
    data?: TOutput
}

export const createSafeAction = <TInput, TOutput>(
    schema: z.Schema<TInput>,
    handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
    return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
        const validationResult = schema.safeParse(data)
        if (!validationResult.success) {
            return {
                fieldErrors: validationResult.error.flatten().fieldErrors as FieldErrors<TInput>
            }
        }
        return handler(validationResult.data)
    }
}