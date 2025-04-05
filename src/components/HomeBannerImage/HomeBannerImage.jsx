import React from 'react';
import '../HomeBannerImage/HomeBannerImage.css';
import { Link } from 'react-router-dom';

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(amount);
};

const HomeBannerImage = ({ info, image }) => {
    return (
        <div className="homeBannerImage w-full overflow-hidden rounded-md group relative">
            <img src={image} alt="" className="w-full transition-all duration-150 group-hover:scale-105" />

            <div
                className={`info p-5 absolute top-0 w-[70%] h-[100%] z-50 flex items-center
                justify-center flex-col gap-2 ${info === 'left' ? 'left-0' : 'right-0'}  ${
                    info === 'left' ? '' : 'pl-14'
                } `}
            >
                <h2 className="text-[18px] font-[600]">Iphone 13 Pro Blue Titanium</h2>
                <span className="text-[20px] text-primary font-[600] w-full">{formatCurrency(12000000)}</span>
                <div className="w-full">
                    <Link to="/" className="text-[16px] font-[600] link">
                        Mua sắm ngay
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBannerImage;
