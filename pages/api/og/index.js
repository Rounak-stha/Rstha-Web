import { ImageResponse } from '@vercel/og';
// import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge'
};

const openSansRegular = fetch(new URL('../../../public/fonts/OpenSans-Regular.ttf', import.meta.url)).then((res) =>
    res.arrayBuffer()
);
const openSansBold = fetch(new URL('../../../public/fonts/OpenSans-Bold.ttf', import.meta.url)).then((res) =>
    res.arrayBuffer()
);

export default async function handler(req) {
    try {
        const { searchParams } = new URL(req.url);

        const regularFont = await openSansRegular;
        const boldFont = await openSansBold;

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const hasType = searchParams.has('type');
        const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Welcome to Rstha Web';
        const type = hasType && searchParams.get('type') === 'blog' ? 'Rstha Blog' : 'Rstha Web';

        return new ImageResponse(
            (
                <div
                    style={{
                        backgroundImage: 'linear-gradient(to right,#111827, #1F2937, #233876)',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        fontFamily: 'Open Sans'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '30px',
                            color: 'white',
                            margin: '40px'
                        }}
                    >
                        <p
                            style={{
                                fontSize: '20px',
                                fontWeight: 'bold'
                            }}
                        >
                            {type}
                        </p>
                        <p
                            style={{
                                fontSize: '36px',
                                fontWeight: 'bold',
                                backgroundImage: 'linear-gradient(to right, #accbeb, #20e3b2, #f64fff)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                overflowWrap: 'break-word',
                                wordWrap: 'break-word'
                            }}
                        >
                            {title}
                        </p>
                        <p
                            style={{
                                fontSize: '20px',
                                display: 'flex',
                                style: 'normal'
                            }}
                        >
                            Rounak Shrestha | Full Stack Developer
                        </p>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Open Sans',
                        data: regularFont,
                        style: 'normal',
                        weight: 400
                    },
                    {
                        name: 'Open Sans',
                        data: boldFont,
                        style: 'normal',
                        weight: 700
                    }
                ]
            }
        );
    } catch (e) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500
        });
    }
}
