import { nanoid } from 'nanoid'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
// import ThemeMenuButton from '@/components/ThemeMenuButton'
import CreateRoomForm from '@/components/CreateRoomForm'
import JoinRoomButton from '@/components/JoinRoomButton'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default function Home() {
    const roomId = nanoid()

    return (
        <div className='flex flex-col items-center justify-between pb-5 pt-[13vh]'>
            {/* <ThemeMenuButton className='fixed right-[5vw] top-5 flex-1 md:right-5' /> */}

            <Card className='w-[90vw] max-w-[400px]'>
                <CardHeader>
                    <CardTitle>Think. Draw. Discuss.</CardTitle>
                    <CardDescription className='text-md'>
                    A Unified Tool for Smarter Collaboration.
                    </CardDescription>
                </CardHeader>

                <CardContent className='flex flex-col space-y-4'>
                    <CreateRoomForm roomId={roomId} />

                    <div className='max-w-[158px] flex items-center space-x-2 '>
                        <Separator />
                        <span className='text-xs text-muted-foreground'>OR</span>
                        <Separator />
                    </div>

                    <JoinRoomButton />
                </CardContent>
            </Card>

            <div>
                {/* <p className='text-sm text-muted-foreground'>
                    Crafted by{' '}
                    <a
                        href='https://twitter.com/nainglk'
                        target='__blank'
                        rel='noreferrer'
                        className='font-medium underline underline-offset-4'
                    >
                        nainglk
                    </a>
                    . The source code is on{' '}
                    <a
                        href='https://github.com/nainglinnkhant/scribble'
                        target='__blank'
                        rel='noreferrer'
                        className='font-medium underline underline-offset-4'
                    >
                        GitHub
                    </a>
                    .
                </p> */}
                <Image 
                src='/think.jpg' 
                alt='think' 
                width={100} 
                height={100} 
                className='w-32 h-32 object-cover object-center'
                quality={100}
                />
                <Image 
                src='https://cdn.dribbble.com/userupload/10932624/file/original-4ff8ba800fd589b32b58865196535a2a.jpg?resize=1600x1200' 
                alt='think' 
                width={100} 
                height={100} 
                className='w-32 h-32 object-cover object-center'
                quality={100}
                />
                <Image 
                src='/dicuss.png' 
                alt='think' 
                width={100} 
                height={100} 
                className='w-24 h-24 object-cover object-center'
                quality={100}
                />
            </div>
        </div>
    )
}