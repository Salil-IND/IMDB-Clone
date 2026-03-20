function SuggestionBanner(){
    return (
        <div className="h-[80vh] w-full">
            <div className="after:absolute after:bottom-0 after:left-0 after:w-full after:h-[150px]
                after:bg-gradient-to-t after:from-black after:to-transparent after:content-['']
                h-[80vh] object-contain bg-cover transition duration-700 ease-in-out hover:shadow-[0_0_30px_20px_rgb(155, 34, 66)]
                " style={{backgroundImage: 'url(https://comicbook.com/wp-content/uploads/sites/4/2025/03/Avengers-Doomsday.jpg)'}}>
            
            </div>
            <p className="relative bottom-[30px] left-0 w-full z-10 text-[4em] text-white text-center ">
                Avengers: Doomsday
            </p>
        </div>
    )
}

export default SuggestionBanner;