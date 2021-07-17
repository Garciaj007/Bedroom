import { useState } from "react";

export default function InputField(props)
{
    const {value, ...options} = props;
    const [field, setField] = useState(value); 

    return (
        <input {...options} onChange={(e) => setField(e.target.value)} value={field} />
    )
}