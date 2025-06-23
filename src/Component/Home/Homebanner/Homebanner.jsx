import producthome from '../../../../Producthome.json';

const Homebanner = () => {
  return (
    <div className='w-full h-full relative px-8'>
      <img className='object-contain bg-gradient-to-b  from-white/60 to-transparent' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg" alt="" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/100 to-transparent backdrop-blur-md pointer-events-none" />

      <div className="absolute ml-4 grid grid-cols-4 w-full top-[50%]">
        {
          producthome.product.map((item, index) => {
            return (
              <div key={index} className="flex flex-col px-4 box-border bg-white w-[345px] ">
                <div className=" text-[22px] text-light pt-7 pl-3 font-semibold">{item.itemTitle}</div>
                <div className=" grid grid-cols-2 w-full my-4 gap-2">
                  {
                    item.imgs.map((it, ind) => {
                      return (
                        <div className="h-[144px] w-[144px] flex flex-col mx-1 py-2">
                          <img className='object-contain w-[100%] h-[80%] p-1' src={it} alt={`product-${ind}`} />
                          <div className='text-semibold pl-1 pt-1'>Air Conditioners</div>
                        </div>
                      )
                    })
                  }
                  <div className="text-bold text-blue-600 pl-3">See more...</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default Homebanner;

