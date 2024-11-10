import { TravelCard } from "@/components/booking/travel";

export default function Welcome() {
  return (
    <main
      id="home"
      className="relative flex min-h-svh justify-center bg-[radial-gradient(circle,rgba(99,166,245,1)_0%,rgba(11,83,168,1)_55%)]"
    >
      <div
        className="absolute bottom-0 h-[40%] w-screen bg-contain bg-top opacity-30"
        style={{
          backgroundImage: "url('/indonesia.svg')",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute bottom-0 h-[40%] w-screen bg-gradient-to-t from-[#0B53A8] via-90% to-transparent" />
      <div className="container relative flex min-h-svh flex-col items-center justify-center gap-8 px-4 py-24 md:flex-row md:justify-around md:gap-5">
        <div className="flex flex-col text-center md:text-left">
          <p className="text-4xl font-extrabold tracking-tighter text-background sm:text-5xl md:text-6xl lg:text-7xl">
            Ride, Earn, Thrive
          </p>
          <p className="mt-2 text-balance text-xl font-semibold tracking-tight text-background sm:text-2xl md:text-3xl lg:text-4xl">
            Your Journey to a Sustainable Future Starts Here!
          </p>
          <p className="mt-4 max-w-prose text-balance text-base text-background/70 sm:text-lg md:text-xl">
            Users can earn points every time they choose sustainable transport
            options, like public transit or biking and can be redeemed for
            discounts at local businesses or access to community events,
            motivating users to make eco-friendly choices while benefiting from
            real-world rewards.
          </p>
        </div>
        <div className="h-auto w-full max-w-md">
          <TravelCard />
        </div>
      </div>
    </main>
  );
}
