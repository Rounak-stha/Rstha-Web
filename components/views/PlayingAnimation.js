import styles from '@/styles/playing.module.css';

export default function playingAnimation({ color }) {
  return (
    <div className={`${styles.playingContainer} inline-block ml-2`}>
      <span style={{ background: color ? color : '#ff6a80' }} />
      <span style={{ background: color ? color : '#ff6a80' }} />
      <span style={{ background: color ? color : '#ff6a80' }} />
    </div>
  );
}
