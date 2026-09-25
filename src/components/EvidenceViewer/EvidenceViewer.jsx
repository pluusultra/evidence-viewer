import { useEffect, useRef, useState } from "react";
import { photoFront } from "../../assets/index.js";
import styles from "./EvidenceViewer.module.scss";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function EvidenceViewer({ evidence, onClose }) {
    const { image, audio } = evidence;

    const [isBack, setIsBack] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    const handleAudio = async () => {
        const player = audioRef.current;

        if (!player) {
            return;
        }

        if (player.paused) {
            await player.play();
        } else {
            player.pause();
        }
    };

    const handleFlip = () => {
        setIsBack((prev) => !prev);
    };

    return (
        <div className={styles.wrapper}>
            <button className={styles.closeButton} onClick={onClose}>
                <AiOutlineCloseSquare />
            </button>
            <div className={styles.cardScene}>
                <div
                    className={`${styles.card} ${isBack ? styles.cardFlipped : ""}`}
                >
                    <div className={styles.cardFront}>
                        <img className={styles.img} src={image.front} />
                    </div>
                    <div className={styles.cardBack}>
                        <img className={styles.img} src={image.back} />
                    </div>
                </div>
            </div>
            {image?.back && (
                <button className={styles.expandButton} onClick={handleFlip}>
                    Перевернуть
                </button>
            )}
            {audio?.src && (
                <>
                    <audio
                        ref={audioRef}
                        src={audio.src}
                        preload="metadata"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                    />

                    <button
                        className={styles.expandButton}
                        onClick={handleAudio}
                    >
                        {isPlaying ? "Пауза" : "Прослушать"}
                    </button>
                </>
            )}
        </div>
    );
}
