import React, { useState, useEffect } from "react";
import fruits from "../data/fruits.json";
import FruitsCards from "../component/FruitsCards";
import Navbar from "../component/Appbar";
import SeasonalFruits from "../component/SeasonalSpecial";
import Divider from '../component/Divider'
import CartSidebar from "../component/CartSidebar";
function Items({ search = "", setSearch,
    cart = [], setCart,
    cartOpen, setCartOpen }) {
    const [loading, setLoading] = useState(true);

    const filtered = fruits.filter((item) =>
        (item.name ?? "")
            .toLowerCase()
            .includes((search ?? "").toLowerCase())
    );

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {/* ✅ Navbar only here */}
            <Navbar search={search} setSearch={setSearch}
            cart={cart} 
            cartOpen={cartOpen} setCartOpen={setCartOpen} />
            {/* ✅ Seasonal fruits only here */}
            <SeasonalFruits search={search} cart={cart} setCart={setCart} />
            {loading ? (
                <section className="w-5/6 mx-auto my-10">
                    <Divider title={"FRESH FRUITS"} />
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-10'>
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <FruitsCards key={item} loading={true} />
                        ))}
                    </div>
                </section>

            ) : (
                <section className="w-5/6 mx-auto  my-10">
                    <Divider title={"FRESH FRUITS"} />

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-10'>

                        {filtered.map((item) => (
                            <FruitsCards
                                key={item.id}
                                item={item}
                                cart={cart}
                                setCart={setCart}
                            />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <h1 className="text-center text-2xl font-poppins text-slate-500 col-span-3">
                            No Fruits Found!
                        </h1>
                    )}

                </section>

            )}

            <CartSidebar
                cart={cart}
                cartOpen={cartOpen}
                setCartOpen={setCartOpen}
                setCart={setCart}
            />
        </div>
    );
}

export default Items;