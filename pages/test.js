export default function test() {
    return (
        <div className="relative rounded-md w-64 hover:scale-110 transition-transform duration-[350ms] ease-in-out cont">
            <div className="w-full h-full bg-slate-900 rounded-md px-10 py-8">
                This is a dummy text.hahahhaha
                <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Thi si a h1 tag</h1>
            </div>
            <div className="absolute top-0 left-0 h-full w-full -z-[1] blur bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        </div>
    )
}