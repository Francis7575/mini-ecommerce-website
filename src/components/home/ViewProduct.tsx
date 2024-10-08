import { Link } from "react-router-dom"
import MobileSpeaker from '/assets/product-zx9-speaker/mobile/zx9-speaker.png'
import TabletSpeaker from '/assets/product-zx9-speaker/tablet/zx9-speaker.png'
import DesktopSpeaker from '/assets/product-zx9-speaker/desktop/zx9-speaker.png'
import { ViewProductProps } from "../../types/types"

const ViewProduct = ({ firstTo, secondTo, thirdTo }: ViewProductProps) => {
	return (
		<section className="px-[1.5rem] md:px-[40px] w-full 1110:px-0">
			<div className="max-w-[1110px] w-full mx-auto">
				<div className="bg-reddish-orange flex flex-col lg:flex-row lg:justify-around lg:items-start items-center text-center lg:text-left rounded-[8px] py-[55px] lg:py-0 lg:pt-[110px]">
					<picture>
						<source srcSet={DesktopSpeaker} media="(min-width: 1024px)" />
						<source srcSet={TabletSpeaker} media="(min-width: 768px)" />
						<img src={MobileSpeaker} alt="ZX9 SPEAKER" />
					</picture>
					<div className="flex flex-col items-center lg:items-start">
						<h2 className="text-white max-w-[250px] text-[2.25rem] md:text-[3.5rem] font-bold uppercase tracking-[2px] md:tracking-[2px] leading-[40px] md:leading-[58px] mt-[32px] lg:mt-0 lg:pt-7 md:mt-[64px] mb-[24px]">
							ZX9 SPEAKER
						</h2>
						<p className="text-white-opc-75 text-[.935rem] leading-[25px] mb-[40px] max-w-[280px] md:max-w-[349px]">
							Upgrade to premium speakers that are phenomenally built to
							deliver truly remarkable sound.
						</p>
						<Link to={firstTo} className="inline-block bg-black hover:bg-dark-gray text-white text-[.813rem] tracking-[1px] uppercase font-bold py-[15px] px-[30px]">
							See Product
						</Link>
					</div>
				</div>
				<div className="mt-[1.5rem] bg-ZX7-speaker-mobile md:bg-ZX7-speaker-tablet lg:bg-ZX7-speaker-desktop bg-cover bg-no-repeat h-[320px] ">
					<div className="pl-[1.5rem] md:pl-[62px] lg:pl-[99px] pt-[101px] uppercase font-bold w-full">
						<h2 className="mb-8 text-[1.75rem] tracking-[2px]">
							ZX7 SPEAKER
						</h2>
						<Link to={secondTo} className="inline-block bg-transparent hover:bg-second-black hover:text-white border border-black text-[.813rem] tracking-[1px] py-[1rem] px-[30px]">
							See Product
						</Link>
					</div>
				</div>
				<section className="md:flex md:mt-8 md:gap-[11px] lg:gap-[2rem]">
					<div className="bg-yx1-earphones-mobile md:hidden bg-no-repeat bg-cover h-[300px] mt-[1.5rem] rounded-[1rem] bg-center"></div>
					<div className="md:bg-yx1-earphones-tablet hidden md:block lg:yx1-earphones-desktop md:bg-no-repeat md:bg-center md:bg-cover md:flex-1"></div>
					<div className="bg-lightgray md:flex-1 py-[41px] md:py-[101px] mt-[1.5rem] md:mt-0 pl-[1.5rem] md:pl-[41px] rounded-[8px]">
						<div className="flex flex-col md:items-start gap-[2rem] max-w-[247px] uppercase font-bold">
							<h2 className="text-[1.75rem] tracking-[2px]">
								YX1 EARPHONES
							</h2>
							<Link to={thirdTo} className="inline-block bg-transparent hover:bg-second-black hover:text-white border border-black max-w-[160px] w-full text-[.813rem] tracking-[1px] py-[1rem] text-center">
								See Product
							</Link>
						</div>
					</div>
				</section>
			</div>
		</section>
	)
}

export default ViewProduct