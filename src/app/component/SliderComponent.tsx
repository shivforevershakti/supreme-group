"use client";

import {  useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import VideoPlayer from "./VideoPlayer";

const SliderComponent: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000, // 8 seconds before next slide
        beforeChange: (_, next) => setCurrentSlide(next), // Track active slide
    };

    const videoSources = [
        "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/a781/baf7/-bd13-4a3e-81a0-1bd2ddcef3ef?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T0IAmOp4NLkhbkKhHvvWyuk3mhkSvEO32DGt4LJg-O42SGi8xv1cm8TgDf00~2elLB46wpJyQQgSU5g8dZsziK80Hzo8wy2B2H1HFrMK2TDYG7VDoYNcDUrZEevYGKJuJwf6u2TSH2asxnTl5Vvj6RPHKqTozoBIzi6rqa4qBX9vaj1d5nsZ~dl7nPcFEABeTzcjIEwobKZedTl3LAM4GXN1XklBVCjya66Ub07jsTA~9~7UQzDlU5NJa1r-gxJA9frY46VacgXe5kAoXlwZDQyY0OCc9uYg4vsjEDKe9luUB6THC9PyPlFxELvM1YKvhV-x8Mlip4MsIaNROYRg-A__",
        "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/9795/46ac/-303d-445d-a93e-c25b0e48c495?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mWnmcSVPHADpQ2s6pLvpkmubIsBymAaUpnuRsQLiTn97wEl~7enPw~QrqWn8dH7R0BlnS-Eq8BUdB50eGZJzkbaVViaj20QtFeNtOu4hETCRUEoxylZCAGt5x2pvdUDHFdMFG0Jqb-0DiWgPqyR36r-6DwcRUHprKYnh2U3E5ZjK0B4q~uHmfT1i~LryVDakhOOxWGdH3v0EBuPJco37ASZqhRAwnOsgmyTzm7Czil9wa6cI32IAncZgoK2Bi9Dmxx2NzIDfq~sHsSsAg1VoN9C7qnSDjulqQTibAsvDzOlOn7UQhKSvAPYPC4cnqMMLJfpu54qR1nbiGD45FhCxSQ__",
        "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/b026/9297/-1976-4d99-9817-49cf83fc464f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DkWdKH-RPtj~chOlxU-TgHtw8SABTCcVijNwdYycLXbZFqdD3Pg-lqwCVF~Rx2-qp-D35AvcnoN2PbVby~bl57voLQPBNw-nsk3X45BADiq5nluxsp0An2UJg4Ug1jwSg8FH3lmNY0A1I-L0ZlheM9P5m9ua5LVAM1MkvR-UB25f9gG2TDglydb986~ONvsDCDD6p8cqaY2wC4Lz6JQUK8QxBZuMPHKmQUr2lw4Nq6~W4Gbte3dKhJ8ysZR6XBtQRd0oXAo7c9OrtlAO2VAz-BQQiOnog5cNDPS6HKnM7sA0Rw16k8Gkga8QtLFLPQ-eCFrixQrkinwd91FuwyuXVQ__",
        "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/6761/32c5/-5a7d-4558-aeff-0d93f98334ad?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XJ8~~7R-NUzkCnU9xvlE8SUEoFFLVDFJCDT-2o8SsAMZm-E39t0LuRVBv9E4mdzipHl72AMEuCOZ6-v6DX21jXJR-xwShuhs1qvvW6tT43LmhkbaePxKht8P4AK9TcwLRyXZ7PlRZA9DGidBpUGZRmvGalOY6IMoTYJRQnBjoU10tGjH9jYbqU26Q97exBoYdYhcYRUjIshRBJlA2kAsRE4cMMDlIkr4GcymZCoPLZMJ16wFTm85ycDQp1i5usgg5fmj3gXij3rW-eaeDbLZ~NMWVUfxxGcxArZ9ixvtKw-s4BY0sVr0TUN1MIy~1mUzHrln11MOWda63IWVySv7SA__",
        "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/638d/bf77/-5723-48e0-ad7d-5233a3d2cc40?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rY6hjy59mFoO6F8jsmTpPop59M-vI8XnkhFlo7waB1H9p5ZkbG23J~t2tPEsa0OsiDCppKgi9lsY1l0U9lTjne9fu6O6nBIfCjq9eR8AodUNXJk0eXRJTNNETQrbOuMW5WLu-w0I8QcblHCt3DlClyCar~GIk-tLP4ZIfNdf0qSFJCN2upYihiuJo4RYWWimNGWTsO4E2Q10J5JoMqBUPzjnkMvYshEjBN8RQA4Q3xXwPYlORzFBZPeWt8x79tfBYGJWnAN5gkU52A6aNeOwzLEKBfhn7Jfsf6qSOefTuuAYOuqH~KUivR~CX7yFlU2-1ylWXw2BB-TbM7BmQeKC5w__",
        "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/5c03/8fd3/-81de-4ba3-8fa6-6b76c1ea6995?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oaWDE~5AE-8fOV~8YC-mlLEbS16oBFvNah7Lsq0WMhDIlmOugIMubPvET~2wopy2Mhw6LouzE5irLHVAh3G-HRffxWbd9pf5Xm0RLlrbJo8ZdACAw5WO0~Vs1twDLhzygJdtzSMfpyhOZxAIlwU64oczga-nNr6sR41F07CcLynx3o5G1czARqt7XaUmgyK5PHPa89uV9eZ0urPD-1rj4DWeXdyqBkyu-OOKmR4PV8S8QkdJPjqBUJH5eds1aHYcrShG7P3MBO1aId9Fz2YkLX5GdWytd-OPgFMBxNWshaCdh~L7PrTKCYsO6P1O1i2VrM6oA6BnNitwGAzdUeK1ig__",
    ];

    return (
        <div
            ref={sectionRef}
            id="slider-section"
            className="relative flex flex-col items-center min-h-screen bg-black text-white overflow-hidden"
        >
            {/* Content Box - Responsive Text & Centered */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center w-full px-5 max-w-5xl">
                <p className="text-white text-lg">Performance in motion</p>
                <h1 className="text-white text-3xl md:text-5xl leading-tight">
                    Evolving the drive with <span className="font-bold">360-degree</span>
                    <br className="hidden md:block" /> nonwoven solutions
                </h1>
            </div>

            {/* Video Slider - Responsive Adjustments */}
            <div className="absolute bottom-0 w-full max-w-6xl p-5">
                <Slider {...settings}>
                    {videoSources.map((videoUrl, index) => (
                        <div
                            key={index}
                            className="h-[60vh] md:h-[600px] flex items-center justify-center bg-gray-700 rounded-lg overflow-hidden"
                        >
                            <VideoPlayer isActive={currentSlide === index} src={videoUrl} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;
