import { useEffect, useState } from 'react';
import { Cart } from '@/components/Cart';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from '@/assets/icons/icons';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

const ShopingCartSideBar = () => {
	const [openCart, setOpenCart] = useState(false);

	const location = useLocation();
    useEffect((
		()=>setOpenCart(false)
		),[location])
	return (
		<>

			<Button
				variant='ghost'
				onClick={() => setOpenCart(!openCart)}
				size='icon'
				className='bg-destructive bottom-0 right-0 m-5 z-50 fixed'
			>
				<ShoppingCart />
			</Button>
            <Sidebar
				toggleClass={!openCart}
				SideBarTitle={'koszyk'}
				children={<Cart />}
			/>
		</>
	);
};

export default ShopingCartSideBar;
