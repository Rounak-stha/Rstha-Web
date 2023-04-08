const errorData = {
    404: '404 | Page Not Found',
    500: 'An Unknown Error Occoured',
}

export default function error({ msg }) {
    return (
        <div className="flex items-center justify-center h-[50vh]">
            <p className="font-semibold text-xl md:text-5xl">{msg}</p>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: Object.keys(errorData).map((code) => {
            return { params: { code } }
        }),
        fallback: 'blocking',
    }
}

export function getStaticProps({ params }) {
    const code = params.code
    if (code !== 404 && code !== 500) return { props: {} }
    else return { props: { msg: errorData[code] } }
    return
}
