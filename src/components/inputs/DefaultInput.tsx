import { Input } from "tamagui";
const DefaultInput = (props: { placeholder: string | undefined; secure: boolean; mode?: string | undefined }) => {
    return (
        <Input size="$4" borderWidth={1} borderColor='$color.blue6Light' inputMode={props.mode} secureTextEntry={props.secure} placeholder={props.placeholder} />
    )
}

export default DefaultInput;