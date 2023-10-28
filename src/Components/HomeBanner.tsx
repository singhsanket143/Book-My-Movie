type HomeBannerProps = {
    image: string
}
function HomeBanner({ image } : HomeBannerProps) {
    return (
        <div className="h-16 lg:h-24 w-full my-4">
            <img
                src={image}
                className="w-full h-full rounded-lg"
            />
        </div>
    );
}

export default HomeBanner;