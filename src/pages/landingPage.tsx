import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import HeroImg from "@/assets/images/sleeping.png";
import Img1 from "@/assets/images/colchao1.png";
import Img2 from "@/assets/images/colchao2.png";
import Img3 from "@/assets/images/colchao3.png";
import Logo from "@/assets/images/logo.png";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] text-sky-900 bg-white-200 w-full justify-center items-center font-poppins">
      <header className="max-w-7xl px-4 lg:px-6 h-14 flex items-center py-10 z-20  backdrop:blur-3xl w-full">
        <a className="flex items-center justify-center gap-2" href="#">
          <img src={Logo} alt="" className="size-12" />
          <span className="font-bold text-2xl">LaLhama</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 justify-center items-center">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Mattresses
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About Us
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Testimonials
          </a>
          <Button
            variant={"ghost"}
            className="bg-brown-500 font-bold text-brown-100 dark:hover:bg-brown-600"
          >
            Contact Us!
          </Button>
        </nav>
      </header>
      <div className="lg:max-w-7xl">
        <main className="flex-1">
          <section className="w-full md:pt-8 lg:pt-12 xl:pt-24">
            <div className="container flex flex-row items-center justify-center px-4 md:px-6 lg:space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Sleep Like{" "}
                  <span className="bg-gradient-to-r from-brown-600 via-brown-500 to-brown-700 text-transparent bg-clip-text">
                    Royalty
                  </span>
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience the perfect sleep with LaLhama's premium
                  mattresses. Comfort. Support. Luxury.
                </p>
              </div>

              <img
                alt="Hero"
                className="mx-auto hidden md:block overflow-hidden rounded-xl translate-x-12"
                src={HeroImg}
              />
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-grad bg-sky-950 rounded-lg text-sky-100 dark:bg-zin-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The LaLhama Difference
                </h2>
                <p className="mx-auto max-w-[600px] text-brown-300 decoration-sky-100 decoration-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Discover the features that make LaLhama mattresses the perfect
                  choice for a good night's sleep.
                </p>
              </div>
              <div className="mx-auto w-full max-w-2xl grid gap-6 sm:grid-cols-3 md:gap-4 lg:max-w-none lg:grid-cols-3 lg:gap-8 xl:grid-cols-3 xl:gap-8">
                <div className="flex flex-col items-center gap-2">
                  <MoonIcon className="h-10 w-10 rounded-full bg-brown-100 p-2 dark:bg-brown-800" />
                  <h3 className="text-xl font-bold">Superior Comfort</h3>
                  <p className="text-sm text-brown-100 dark:text-brown-100">
                    Experience cloud-like softness with proper support.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ShieldIcon className="h-10 w-10 rounded-full bg-brown-100 p-2 dark:bg-brown-800" />
                  <h3 className="text-xl font-bold">Lasting Durability</h3>
                  <p className="text-sm text-brown-100 dark:text-brown-100">
                    Quality materials ensure your mattress stands the test of
                    time.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SunIcon className="h-10 w-10 rounded-full bg-brown-100 p-2 dark:bg-brown-800" />
                  <h3 className="text-xl font-bold">Restful Sleep</h3>
                  <p className="text-sm text-brown-100 dark:text-brown-100">
                    Wake up refreshed and rejuvenated after a night on a
                    LaLhama.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Explore Our Mattresses
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the perfect mattress that suits your sleep style.
                </p>
              </div>
              <div className="mx-auto w-full max-w-5xl grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                <div className="flex flex-col gap-2">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="225"
                    src={Img1}
                    width="400"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">LaLhama Cloud</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      The perfect mattress for those who love a soft and plush
                      feel.
                    </p>
                    <a
                      className="text-sm underline underline-offset-2 hover:underline underline-offset-2"
                      href="#"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="225"
                    src={Img2}
                    width="400"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">LaLhama Support</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      The perfect mattress for those who love a soft and plush
                      feel.
                    </p>
                    <a
                      className="text-sm underline underline-offset-2 hover:underline underline-offset-2"
                      href="#"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="225"
                    src={Img3}
                    width="400"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">LaLhama Luxury</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      The perfect mattress for those who love a soft and plush
                      feel.
                    </p>
                    <a
                      className="text-sm underline underline-offset-2 hover:underline underline-offset-2"
                      href="#"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t border-brown-100">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Happy Customers
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 pb-4">
                  Don't just take our word for it. Here's what our customers
                  have to say about LaLhama mattresses.
                </p>
              </div>

              <div className="mx-auto w-full max-w-2xl grid gap-4 sm:grid-cols-2 md:gap-8 lg:max-w-4xl lg:grid-cols-2">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <img
                    alt="Image"
                    className="aspect-square overflow-hidden rounded-xl object-cover object-center shadow-md"
                    height="150"
                    src="https://br.web.img3.acsta.net/pictures/15/07/20/18/14/582462.jpg"
                    width="200"
                  />
                  <blockquote className="text-gray-500 text-sm/relaxed italic/0 dark:text-gray-400">
                    "The LaLhama Cloud has transformed my sleep. It feels like
                    sleeping on a fluffy cloud. I wake up refreshed and ready to
                    take on the day. Highly recommended!"
                  </blockquote>
                  <p className="font-semibold">Nicholas Cage</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between ">
                  <img
                    alt="Image"
                    className="aspect-square overflow-hidden rounded-xl object-cover object-center shadow-md"
                    height="150"
                    src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2014_48/786271/141128-chespirito-2242.jpg"
                    width="200"
                  />
                  <blockquote className="text-gray-500 text-sm/relaxed italic/0 dark:text-gray-400">
                    "The LaLhama Support provides the perfect balance of comfort
                    and support. I no longer wake up with aches and pains. It's
                    like magic!"
                  </blockquote>
                  <p className="font-semibold">Chespirito</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-4 md:gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Contact Us
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Have a question? Want to know more about our mattresses?
                    Fill out the form below and we'll get back to you.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Input placeholder="Name" type="text" />
                  <Input placeholder="Email" type="email" />
                  <Textarea className="min-h-[150px]" placeholder="Message" />
                  <Button
                    variant={"ghost"}
                    className="bg-brown-500 font-bold text-brown-100 dark:hover:bg-brown-600"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-brown-100">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 JotaPe.me
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
