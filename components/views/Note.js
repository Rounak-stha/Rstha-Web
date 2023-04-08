import ImageFlexBox from '../MdxComponents/ImageFlexBox'

export default function Note({ note }) {
    const { date, text, image } = note
    return (
        <div className="mb-4">
            <p className="font-semibold">{date}</p>
            <p className="leading-5 mb-2 text-justify">{text}</p>
            <ImageFlexBox images={[{ src: image }]} />
        </div>
    )
}
