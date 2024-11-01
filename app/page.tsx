import { fotter1, fotter2, items } from '@/constants/menu.constant';
import { Button } from '@/components/ui/button.ui';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <div
        className={`flex justify-center items-center h-32 text-3xl bg-[#f5f5dc] w-screen`}
      >
        Join Our Community
      </div>
      <div className={`flex justify-center items-center bg-[#808000] w-screen`}>
        <div
          className={`flex flex-col md:flex-row justify-center items-center w-screen md:max-w-[87rem]`}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col justify-around items-center md:items-start w-full md:w-1/3 mt-10 mb-10 p-5`}
            >
              <div>
                <Image
                  src={item.imageUrl}
                  alt={`display`}
                  width={400}
                  height={400}
                  className='w-full'
                />
              </div>
              <h2 className={`text-2xl font-bold text-white mt-3 p-5`}>
                {item.title}
              </h2>
              <p className={`text-white`}>{item.description}</p>
              <Button className={`mt-4 rounded-none`}>
                {item.btnContent.toUpperCase()}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <footer className={`flex flex-col flex-grow h-full`}>
        <div className={`bg-white h-1`}></div>

        <div className={`flex flex-col flex-grow bg-[#F5EEE4] w-screen pt-10`}>
          <div className={`flex justify-around items-start `}>
            <div className={`flex flex-col md:flex-row justify-around w-full`}>
              <div>
                <h2 className={`text-xl font-bold text-black`}>Company</h2>
                <ul>
                  {fotter1.map((link) => (
                    <li key={link} className={`text-black`}>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={`text-xl font-bold text-black mt-3`}>
                  Resources
                </h2>
                <ul>
                  {fotter2.map((link) => (
                    <li key={link} className={`text-black`}>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`flex flex-col md:flex-row justify-around w-full`}>
              <div>
                <h2 className={`text-xl font-bold text-black`}>Solutions</h2>
                <ul>
                  <li className={`text-black`}>Pricing</li>
                </ul>
              </div>
              <div className={`md:w-1/6`}>
                <h2 className={`text-xl font-bold text-black mt-3`}>
                  Connect With Us
                </h2>
                <p className={`text-black`}>
                  Sign up to receive special offers, company updates, and the
                  latest industry news and analysis.
                </p>
                <input
                  className={`bg-transparent w-full border-b-2 border-black mt-5`}
                />
                <div className={`flex mt-5 `}>
                  <ul className={`flex justify-around items-center w-full `}>
                    <li>
                      <Instagram />
                    </li>
                    <li>
                      <Facebook />
                    </li>

                    <li>
                      <Twitter />
                    </li>
                    <li>
                      <Youtube />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`pl-10 flex justify-start items-end mt-24`}>
            &copy; 2024, The Folklore Group, Inc. | Terms of Service | Privacy
            Policy
          </div>
        </div>
      </footer>
    </div>
  );
}
