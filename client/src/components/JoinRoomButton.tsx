'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { socket } from '@/lib/socket'
import { joinRoomSchema } from '@/lib/validators/joinRoom'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type JoinRoomForm = z.infer<typeof joinRoomSchema>

export default function JoinRoomButton() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<JoinRoomForm>({
    resolver: zodResolver(joinRoomSchema),
    defaultValues: {
      username: '',
      roomId: '',
    },
  })

  function onSubmit({ roomId, username }: JoinRoomForm) {
    setIsLoading(true)
    socket.emit('join-room', { roomId, username })
  }

  useEffect(() => {
    socket.on('room-not-found', () => {
      setIsLoading(false)
    })
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full'>
          Join a Room
        </Button>
      </DialogTrigger>

      <DialogContent className='w-[90vw] max-w-[400px] bg-white'>
        <DialogHeader className='pb-2'>
          <DialogTitle className='text-lg'>Ready to Sketch, Call, and Collaborate?</DialogTitle>
          <DialogDescription className='text-md'>Join a Room now!</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Username' {...field} />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='roomId'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Room ID' {...field} />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />

            <Button type='submit' className='mt-2'>
              {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Join'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}