import React, { useContext } from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { PiKeyReturnLight } from 'react-icons/pi';
import { BsWallet2 } from 'react-icons/bs';
import { LiaGiftSolid } from 'react-icons/lia';
import { BiSupport } from 'react-icons/bi';
import { IoChatboxOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer';

import CartPanel from '../CartPanel/CartPanel';

import '../Footer/Footer.css';
import { MyContext } from '../../App';

const Footer = () => {
    const context = useContext(MyContext);
    return (
        <>
            <footer className="py-6 bg-[#fafafa]">
                <div className="container">
                    <div className="flex items-center justify-center gap-2 py-8 pb-8">
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <LiaShippingFastSolid className="text-[40px] transition-all duration-300  group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-3">Miễn phí giao hàng</h3>
                            <p className="text-[12px] font-[500]">Cho đơn hàng giá trên 400k</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <PiKeyReturnLight className="text-[40px] transition-all duration-300  group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-3">30 ngày đổi trả</h3>
                            <p className="text-[12px] font-[500]">Đổi trả sản phẩm</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <BsWallet2 className="text-[40px] transition-all duration-300  group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-3">Thanh toán an toàn</h3>
                            <p className="text-[12px] font-[500]">Chấp nhận thanh toán online</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <LiaGiftSolid className="text-[40px] transition-all duration-300  group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-3">Quà khuyến mãi</h3>
                            <p className="text-[12px] font-[500]">Cho đơn hàng đầu tiên</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <BiSupport className="text-[40px] transition-all duration-300  group-hover:text-primary group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-3">Hỗ trợ 24/7</h3>
                            <p className="text-[12px] font-[500]">Liên hệ mọi lúc</p>
                        </div>
                    </div>

                    <br />
                    <hr />

                    <div className="footer flex py-8 ">
                        <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.2)]">
                            <h2 className="text-[18px] font-[600] mb-4">Liên hệ chúng tôi</h2>
                            <p className="text-[13px] font-[400] pb-4">
                                Shopify - Cửa hàng lớn <br /> Sản phẩm quốc tế ngay trên đất Việt
                            </p>
                            <Link className="link text-[13px]" to="mailto:tamnguyenforwork@gmail.com">
                                tamnguyenforwork@gmail.com
                            </Link>
                            <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">
                                (+84) 912-874-2025
                            </span>
                            <div className="flex items-center gap-2">
                                <IoChatboxOutline className="text-[40px] text-primary" />

                                <span className="text-[16px] font-[600]">
                                    Nhắn tin online <br /> Nhận sư hỗ trợ
                                </span>
                            </div>
                        </div>
                        <div className="part2 w-[40%] flex pl-8">
                            <div className="part2_col1 w-[50%]">
                                <h2 className="text-[18px] font-[600] mb-4">Về sản phẩm</h2>

                                <ul className="list">
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Giá sốc
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Sản phẩm mới
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Nhiều ưu đãi
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Liên hệ chúng tôi
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Địa chỉ
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Các chi nhánh
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="part2_col2 w-[50%]">
                                <h2 className="text-[18px] font-[600] mb-4">Công ty chúng tôi</h2>

                                <ul className="list">
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Vận chuyển
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Thông báo pháp lý
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Điều khoản và điều kiện sử dụng
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Về chúng tôi
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Thanh toán an toàn
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Đăng nhập
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="part2 w-[35%] flex pl-8 flex-col pr-8">
                            <h2 className="text-[18px] font-[600] mb-4">Đăng ký nhận tin tức</h2>
                            <p className="text-[13px]">
                                Đăng ký nhận thông tin mới nhất về các chương trình giảm giá đặc biệt
                            </p>
                            <form className="mt-5">
                                <input
                                    type="text"
                                    className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                                    placeholder="Nhập địa chỉ email"
                                />
                                <Button className="btn-org !mb-4">Đăng ký</Button>

                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Tôi đồng ý với các điều khoản và điều kiện và chính sách bảo mật"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
                <div className="container flex items-center justify-between">
                    <ul className="flex items-center gap-2">
                        <li className="list-none">
                            <Link
                                to="/"
                                target="_blank"
                                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] 
                                flex items-center justify-center group hover:bg-primary transition-all"
                            >
                                <FaFacebookF className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to="/"
                                target="_blank"
                                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] 
                                flex items-center justify-center group hover:bg-primary transition-all"
                            >
                                <AiOutlineYoutube className="text-[20px]  group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to="/"
                                target="_blank"
                                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] 
                                flex items-center justify-center group hover:bg-primary transition-all"
                            >
                                <FaPinterestP className="text-[15px]  group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to="/"
                                target="_blank"
                                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] 
                                flex items-center justify-center group hover:bg-primary transition-all"
                            >
                                <FaInstagram className="text-[18px]  group-hover:text-white" />
                            </Link>
                        </li>
                    </ul>
                    <p className="text-[13px] text-center mb-0">© 2025 - Shopify</p>

                    <div className="flex items-center">
                        <img src="src/assets/bank1.png" alt="Image Payment 1" />
                        <img src="src/assets/bank2.png" alt="Image Payment 2" />
                        <img src="src/assets/bank3.png" alt="Image Payment 3" />
                        <img src="src/assets/bank4.png" alt="Image Payment 4" />
                        <img src="src/assets/bank5.png" alt="Image Payment 5" />
                    </div>
                </div>
            </div>

            {/* Cart Panel */}
            <Drawer
                className="cartPanel"
                open={context.openCartPanel}
                onClose={() => context.toggleCartPanel(false)}
                anchor={'right'}
            >
                <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] overflow-hidden">
                    <h4>Giỏ hàng (1) </h4>
                    <IoCloseSharp
                        className="text-[20px] cursor-pointer"
                        onClick={() => context.toggleCartPanel(false)}
                    />
                </div>

                <CartPanel />
            </Drawer>
        </>
    );
};

export default Footer;
