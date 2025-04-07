import React, { useState } from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';

import { Collapse } from 'react-collapse';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';

import '../ProductListSidebar/ProductListSidebar.css';
import { Button } from '@mui/material';

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(amount);
};

const ProductListSidebar = () => {
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
    return (
        <aside className="sidebar py-5">
            <div className="box">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
                    Phân loại sản phẩm
                    <Button
                        className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
                        onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
                    >
                        {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className="scroll px-4 relative -left-[13px]">
                        <FormControlLabel control={<Checkbox size="small" />} label="Thời trang" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Đồ điện tử" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Túi" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Giày dép" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Thực phẩm" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Sắc đẹp" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Trang sức" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Máy tính" className="w-full" />
                    </div>
                </Collapse>
            </div>

            <div className="box">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
                    Trạng thái
                    <Button
                        className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
                        onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}
                    >
                        {isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenAvailFilter}>
                    <div className="scroll px-4 relative -left-[13px]">
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Còn hàng (16)"
                            className="w-full"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Hết hàng (20)"
                            className="w-full"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Hàng sắp về (15)"
                            className="w-full"
                        />
                    </div>
                </Collapse>
            </div>

            <div className="box mt-3">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
                    Kích cỡ
                    <Button
                        className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
                        onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
                    >
                        {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenSizeFilter}>
                    <div className="scroll px-4 relative -left-[13px]">
                        <FormControlLabel control={<Checkbox size="small" />} label="Nhỏ (16)" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Vừa (20)" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Lớn (15)" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="XL (15)" className="w-full" />
                        <FormControlLabel control={<Checkbox size="small" />} label="XXL (15)" className="w-full" />
                    </div>
                </Collapse>
            </div>

            <div className="box mt-4">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">Giá</h3>
                <RangeSlider />
                <div className="flex pt-4 pb-2 priceRange">
                    <span className="text-[13px]">
                        Từ <strong className="text-dark">: {formatCurrency(140000)}</strong>
                    </span>
                    <span className="ml-auto text-[13px]">
                        Từ <strong className="text-dark">: {formatCurrency(500000)}</strong>
                    </span>
                </div>
            </div>

            <div className="box mt-4">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">Đánh giá</h3>

                <div className="w-full">
                    <Rating name="size-small" defaultValue={5} readOnly size="small" />
                </div>
                <div className="w-full">
                    <Rating name="size-small" defaultValue={4} readOnly size="small" />
                </div>
                <div className="w-full">
                    <Rating name="size-small" defaultValue={3} readOnly size="small" />
                </div>

                <div className="w-full">
                    <Rating name="size-small" defaultValue={2} readOnly size="small" />
                </div>

                <div className="w-full">
                    <Rating name="size-small" defaultValue={1} readOnly size="small" />
                </div>
            </div>
        </aside>
    );
};

export default ProductListSidebar;
