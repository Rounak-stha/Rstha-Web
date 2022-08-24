import ImageWithCaption from './ImageWithCaption';

export default function ImageFlexBox({ images }) {
  return (
    <div className='flex justify-center items-center flex-wrap gap-4 w-full'>
      {images.map((image, i) => {
        return <ImageWithCaption key={i} image={image} />;
      })}
    </div>
  );
}
