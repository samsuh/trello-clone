
interface FormInputProps {
    errors?: {title?: string[]}
}

export const FormInput = ({errors}: FormInputProps) => {
    return (
        <div>
            <input
                id="title"
                name="title"
                placeholder="Enter name of new Board"
                className="border-black border p-1"
            />
            {errors?.title ? <div>
                {errors.title.map((error: string) => (
                    <p key={error} className="text-rose-500">{error}</p>
                ))}
            </div> : null}
        </div>
    )
}