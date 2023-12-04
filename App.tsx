// this provides some helpful reset styles to ensure a more consistent look

// only import this from your web app, not native

import '@tamagui/core/reset.css'
import { Button, TamaguiProvider, Stack, useTheme, Form, YStack, Input } from 'tamagui'
import config from './tamagui.config'
import PrimaryButton from './src/components/buttons/PrimaryButton'
import DefaultInput from './src/components/inputs/DefaultInput'
export default function App() {

  const theme = useTheme()
  return (

    <TamaguiProvider config={config}>
      <Stack flex={1} p='$4' bg="$background">
        <Form onSubmit={() => { alert('lalala') }}>
          <YStack>
            <Stack p={4}>
              <DefaultInput placeholder='Login' mode='email' secure={false} />
            </Stack>
            <Stack p={4}>
              <DefaultInput placeholder='Senha' secure={true} />
            </Stack>
          </YStack>
          <Form.Trigger justifyContent='center'>
            <PrimaryButton size={'$15'} title='Entrar' />
          </Form.Trigger>
        </Form>
      </Stack>
    </TamaguiProvider>

  )
}