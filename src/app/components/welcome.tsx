import { TravelCard } from "@/components/booking/travel";

export default function Welcome() {
  return (
    <main className="relative flex min-h-svh justify-center bg-[radial-gradient(circle,rgba(99,166,245,1)_0%,rgba(11,83,168,1)_55%)]">
      <div
        className="absolute bottom-0 h-[40%] w-screen bg-contain bg-top opacity-30"
        style={{
          backgroundImage: "url('/indonesia.svg')",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute bottom-0 h-[40%] w-screen bg-gradient-to-t from-[#0B53A8] via-90% to-transparent" />
      <div className="container relative flex h-svh items-center justify-around gap-5">
        <div className="flex flex-col">
          <p className="w-1/2 text-7xl font-extrabold tracking-tighter text-background">
            Ride, Earn, Thrive
          </p>
          <p className="text-balance text-4xl font-semibold tracking-tight text-background">
            Your Journey to a Sustainable Future Starts Here!
          </p>
          <p className="mt-5 max-w-prose text-balance text-xl text-background/70">
            Users can earn points every time they choose sustainable transport
            options, like public transit or biking and can be redeemed for
            discounts at local businesses or access to community events,
            motivating users to make eco-friendly choices while benefiting from
            real-world rewards.
          </p>
        </div>
        <TravelCard />
      </div>
    </main>
  );
}
