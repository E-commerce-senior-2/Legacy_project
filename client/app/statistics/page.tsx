import React from 'react'
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineVerified } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
const Statistics = () => {
  return (
    <div className=" flex flex-col gap-7 ">
      <div className=' flex flex-col gap-3 px-6 text-center w-10/12 mx-auto mt-20'>
        <h2 className='text-3xl font-extrabold leading-tight lg:text-4xl'>Top market Statistics</h2>
        <p className="text-base font-medium leading-7 text-[#FFE3E0]">The top NFT________,Nfs on ranked by volume,floor price and other statistics</p>
      </div>

      <div className='flex flex-row gap-[430px]'>
        <div>
          <button className="ml-8 cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
            Market place performance
          </button>
        </div>
        <div className="sm:w-full md:w-[362px] h-[47px] justify-start items-start gap-10 inline-flex">
          <div className="sm:w-full md:w-[171px] h-[47px] relative">
            <div className="sm:w-full md:w-[171px] h-[47px] left-0 top-0 absolute rounded-[5px] border border-white" />
            <div className="left-[20px] top-[14px] absolute flex items-center text-white text-base font-normal font-['SF Pro Display']">Last 7 Days <IoIosArrowDown /></div>

          </div>
          <div className="w-[171px] h-[47px] relative">
            <div className="w-[171px] h-[47px] left-0 top-0 absolute rounded-[5px] border border-white" />
            <div className="left-[20px] top-[14px] absolute flex items-center text-white text-base font-normal font-['SF Pro Display']">All Categories <IoIosArrowDown /></div>
          </div>
        </div>
      </div>
      <section className="container mx-auto p-6 font-mono">
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full flex flex-col overflow-x-auto gap-5">
      <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left border-b border-gray-300">
            <th className="px-4 py-3">collection</th>
            <th className="px-4 py-3">volume</th>
            <th className="px-4 py-3">24H%</th>
            <th className="px-4 py-3">7D%</th>
            <th className="px-6 py-3">Floor Price</th>
            <th className="px-4 py-3">Owners</th>
            <th className="px-4 py-3">items</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="text-gray-700">
            <td className="px-4 py-3 border-b border-b-gray-300">
              <div className="flex items-center  text-sm">
                <div className="relative  w-8 h-8 mr-3 flex rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="https://s3-alpha-sig.figma.com/img/0b07/6a37/08b91a9e58b34419300e5a32482b0405?Expires=1703462400&Signature=TYrqBYVbHsiVmQNzJ1h4~ULfpzfrZ2l9iFprnlTJ~WmcZU1i6cdevuOgPsj35FuPmSEs4ttoQ~DtaiUylQ1zXpXYmq~AF5A6KVKI~OWaIao1ymlsmRGm~RBYFYsMRZHfVG5X3whF2gJYji2poq2lUlBLavAD2~-6otuACcGbsigOLN9bjiZSJ4~pJ01AlH7Xog44W0dui~Mbw2eOFOlsWlLCo1h-74bmf5st8MfbFnfAIGDDMK1K663BRVZBSIjBgSUpdp7U2et3EAYxBO5GFVY2trRrmy1ozmf9j6UMeSBB0vc8Phc5dBfRawWdMfG47q4alxqI3UkKOowotmjjZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold flex items-center text-black">adidas<MdOutlineVerified /></p>
                  
                </div>
              </div>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />27.966</td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 rounded-sm"> +92.96 </span>
            </td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 rounded-sm"> -16.8 </span>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />12.99     </td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">5.9k</td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">10k</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border-b border-b-gray-300">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="https://s3-alpha-sig.figma.com/img/a854/2910/53b83a96868efa72ea8c41c037b0f3fc?Expires=1703462400&Signature=FT6rFwWYL~fYvm4KGr0qciVEiuYMeLr~X00J-~38xuIzojc9HdaX82j723zBcz4QK6xrPf2lxbrxJaU5-viDio6CjxPH6rHdvsn~-ApFcD2MAGYpBF4hRSnPf3jsNK3YcZP3rEYbgrVHkyV~TUlVgDRpJ7H7Y9B92HBB41bB7F8BojKp7VTcPAgUgn-z5DnyfAqWoZ61HkYv4V6MGfnUVabCZYsHNVqdiazaU4eptyrjqcofaTpk9SghlTUfZzIIJRA1ERkJhT~zgWPa2Y9vUJed3k1uJ5atiRKyyABSWGqiGnpRUm29SUpqRmgr0udvN1wXcvN0ao9BjtQW2lAe5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold flex items-center text-black">Nike <MdOutlineVerified /></p>
                  
                </div>
              </div>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />27.966</td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 rounded-sm"> +92.96 </span>
            </td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 rounded-sm"> -16.8 </span>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />12.99     </td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">5.9k</td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">10k</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border-b border-b-gray-300">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="https://i.pinimg.com/736x/27/4e/de/274edea0e3bfd0a2e0211304b8b0532e--behance-net-christian-dior.jpg" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold flex items-center text-black">Dior <MdOutlineVerified /></p>
                  
                </div>
              </div>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />25.966</td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 rounded-sm"> +80.96 </span>
            </td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 rounded-sm"> -16.8 </span>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />10.99     </td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">4.9k</td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">14k</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border-b border-b-gray-300">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="https://th.bing.com/th/id/R.142fc8c8ca87f2a7cc54cfd9aab6d221?rik=XZrLISEVtParfw&pid=ImgRaw&r=0" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold flex item-center text-black">pinko <MdOutlineVerified /></p>
                  
                </div>
              </div>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />23.966</td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 rounded-sm"> +70 </span>
            </td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 rounded-sm"> -17.8 </span>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />10.99     </td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">6k</td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">15k</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border-b border-b-gray-300">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="https://www.logolynx.com/images/logolynx/78/782007807df7f0e4107cd0332c6c53c5.jpeg" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold flex items-center text-black">Hermés <MdOutlineVerified /></p>
                  
                </div>
              </div>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />22</td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 rounded-sm"> +75 </span>
            </td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 rounded-sm"> -13.5 </span>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />9.22     </td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">8k</td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">10k</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border-b border-b-gray-300">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="https://th.bing.com/th/id/R.9eb3c80553ca98c344c9c86e0e55545b?rik=yRKoSeAG0e3mrw&riu=http%3a%2f%2fdgsport.com.au%2fwp-content%2fuploads%2f2017%2f01%2fDG-ON-ORANGE.png&ehk=zNea7AK7vs9GUku6voApyK8zLU662CqjxnHfWt8Lobk%3d&risl=&pid=ImgRaw&r=0" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold flex items-center text-black">D&G</p>
                  
                </div>
              </div>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />22.245</td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 rounded-sm"> +60 </span>
            </td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 rounded-sm"> -15.9 </span>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />14.35     </td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">9.5k</td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">19k</td>
          </tr>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border-b border-b-gray-300">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src="https://th.bing.com/th/id/OIP.OehDiGfDIj233mAKCjIanwHaEo?rs=1&pid=ImgDetMain" alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold flex items-center text-black">Alexander Mcqueen <MdOutlineVerified /></p>
                  
                </div>
              </div>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />24.525</td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 rounded-sm"> +60.55 </span>
            </td>
            <td className="px-4 py-3 text-xs border-b border-gray-300">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 rounded-sm"> -9 </span>
            </td>
            <td className="px-4 py-5 text-ms font-semibold flex items-center border-b border-gray-300"><TiArrowUnsorted />16.23     </td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">6.3k</td>
            <td className="px-4 py-3 text-sm border-b border-gray-300">11k</td>
          </tr>
          
        </tbody>
      </table>
      <div className='self-center items-center'>
        <div className="w-[230px] h-[39px] gap-[30px] inline-flex">
          <div className="h-[39px] p-2.5 rounded-[5px] border border-white border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="text-white text-base font-normal font-['SF Pro Display']">1 - 100</div>
          </div>
          <div className="h-[39px] p-2.5 rounded-[5px] border border-white border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="text-white text-base font-normal font-['SF Pro Display']">101 - 200</div>
          </div>
        </div>
        </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Statistics
