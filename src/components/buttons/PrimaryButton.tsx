import React from 'react'
import { Button } from 'tamagui'

const PrimaryButton = (props: any) => {

    return (
        <Button bc={'$gray12'} w={props.size} color={'$color.gray1Light'} onPress={props.onPress}>{props.title}</Button>

    )
}
export default PrimaryButton
