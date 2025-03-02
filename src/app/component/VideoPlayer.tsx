import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
    src: string;
    isActive: boolean; // To check if this slide is currently active
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, isActive }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play video when the slide becomes active
    useEffect(() => {
        if (isActive && videoRef.current) {
            videoRef.current.play();
            setIsPaused(false);
        } else if (!isActive && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isActive]);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPaused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPaused(!isPaused);
        }
    };

    return (
        <div className="relative w-full h-full">
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover"
                loop
                playsInline
            />
            {/* Play/Pause Button */}
            <button
                onClick={togglePlayPause}
                className="absolute bottom-5 right-5 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition cursor-pointer"
            >
                {isPaused ? <Play size={24} /> : <Pause size={24} />}
            </button>
        </div>
    );
};

export default VideoPlayer;
