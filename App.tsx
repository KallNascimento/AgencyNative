// this provides some helpful reset styles to ensure a more consistent look

// only import this from your web app, not native

import '@tamagui/core/reset.css'
import { Button, TamaguiProvider, Stack, useTheme, Form, YStack, Input } from 'tamagui'
import config from './tamagui.config'
export default function App() {

  const theme = useTheme()
  return (

    <TamaguiProvider config={config}>
      <Stack flex={1} p={15} bg="$blue10">
        <Form onSubmit={() => alert('Weee')}>
          <YStack>
            <Stack p={4}>
              <Input size="$4" borderWidth={2} placeholder='Login' />
            </Stack>
            <Stack p={4}>
              <Input size="$4" borderWidth={2} placeholder='Senha' />
            </Stack>
          </YStack>
          <Form.Trigger asChild >
            <Button m={4} bg={'$gray12'} color={'$color.gray1Light'}>Entrar</Button>
          </Form.Trigger>
        </Form>
      </Stack>
    </TamaguiProvider>

  )
}