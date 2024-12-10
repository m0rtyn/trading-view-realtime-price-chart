import { useEffect, useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Cross2Icon, RowSpacingIcon } from '@radix-ui/react-icons'
import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  IconButton,
  Text
} from '@radix-ui/themes'

interface Props {
  error: Error
  resetErrorBoundary: () => void
}
export const ErrorPage: React.FC<Props> = ({
  error,
  resetErrorBoundary: handleErrorResetting
}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => console.error(error), [error])

  return (
    <>
      <Flex
        direction='column'
        gap='7'
        py='9'
        mb='9'
        justify={'center'}
        align='center'
      >
        <Heading
          as='h1'
          size='8'
          align={'center'}
        >
          Something went wrong...
        </Heading>

        <Flex
          width={'auto'}
          justify={'center'}
          direction={'column'}
          gap='2'
        >
          <Button
            size='4'
            onClick={handleErrorResetting}
          >
            Try again
          </Button>
          <Text color='gray'>...or try to reload page</Text>
        </Flex>

        <Collapsible.Root
          open={open}
          onOpenChange={setOpen}
        >
          <Flex
            direction={'column'}
            align={'center'}
            width='100%'
            gap={'3'}
          >
            <Flex
              align={'center'}
              justify={'center'}
              width={'100%'}
              gap='4'
            >
              <Text
                className='no-wrap'
                size='3'
              >
                Open error details
              </Text>

              <Collapsible.Trigger asChild>
                <IconButton>
                  {open ?
                    <Cross2Icon />
                  : <RowSpacingIcon />}
                </IconButton>
              </Collapsible.Trigger>
            </Flex>

            <Collapsible.Content>
              <Code
                size='5'
                color='red'
              >
                {error ? error.stack : 'there are no details'}
              </Code>
            </Collapsible.Content>
          </Flex>
        </Collapsible.Root>
      </Flex>
    </>
  )
}
