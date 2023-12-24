
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomeSlider = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch('https://task-management-surver.vercel.app/users')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    return (
        <div className='mt-20'>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={1000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                {
                    userData.map(users => <>
                        <div>
                            <div className="card lg:w-96 w-80 bg-base-100  shadow-xl">
                                <figure><img className='rounded-full' src={users.image} alt="Shoes" /></figure>
                                <div className="card-body ">
                                    <h2 className="text-center">{users.name}</h2>
                                    <p>{users.email}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </>)
                }
                
                
            </Carousel>
        </div>
    );
};

export default HomeSlider;