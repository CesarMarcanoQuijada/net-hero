export default function YoutubeVideo({ id, width, height, title }) {
    return (
        <iframe
            width={width || 560}
            height={height || 315}
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
    )
}