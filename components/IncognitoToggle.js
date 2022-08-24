import Incognito from './Incognito';

export default function Switch({ incognito, setIncognito }) {
  return (
    <>
      <input
        id='incognito'
        className='hidden'
        type='checkbox'
        onChange={() => setIncognito(!incognito)}
      />
      <label title='Incognito' className='cursor-pointer animate-bounce-1s hover:animate-bounce' htmlFor='incognito'>
        <Incognito fill={incognito ? 'purple' : 'gray'} />
      </label>
    </>
  );
}
