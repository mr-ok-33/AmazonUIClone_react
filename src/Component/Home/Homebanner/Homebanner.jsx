import producthome from '../../../../Producthome.json';

const Homebanner = () => {
  return (
    <div className='w-full relative sm:px-6 lg:px-8'>
      <img className='object-cover w-full h-auto' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg" alt="" />
      {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/100 to-transparent backdrop-blur-md pointer-events-none" /> */}

      <div className="w-full -mt-24 sm:-mt-32 md:-mt-50 lg:-mt-72 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 sm:px-6 md:px-8 gap-4">
        {
          producthome.product.map((item, index) => {
            return (
              <div key={index} className="flex flex-col p-4 box-border bg-white w-full max-w-[350px] mx-auto rounded-md shadow-md ">
                <div className=" text-lg font-semibold text-gray-800 mb-3">{item.itemTitle}</div>
                <div className="grid grid-cols-2 gap-2">
                  {
                    item.imgs.map((it, ind) => {
                      return (
                        <div className="h-[160px] flex flex-col items-start">
                          <img className='object-contain w-[100%] h-[80%] p-1' src={it} alt={`product-${ind}`} />
                          <div className='text-md mt-1 text-gray-900'>Air Conditioners</div>
                        </div>
                      )
                    })
                  }
                  <div className="text-bold text-blue-900 pt-2">See more...</div>
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

