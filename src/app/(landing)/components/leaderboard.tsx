import Image from "next/image";
import { Trophy } from "lucide-react";
import { faker } from "@faker-js/faker";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const transportOptions = [
  { name: "KAI", icon: "/kai.svg" },
  { name: "TransJakarta", icon: "/transjakarta.svg" },
  { name: "MRT", icon: "/mrt.svg" },
  { name: "LRT Jakarta", icon: "/lrt-jakarta.svg" },
  { name: "LRT Jabodebek", icon: "/lrt-jabodebek.svg" },
];

const leaderboardData = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: faker.person.fullName(),
  image: faker.image.avatar(),
  points: faker.number.int({ min: 500, max: 1500 }),
  transportation:
    transportOptions[Math.floor(Math.random() * transportOptions.length)],
})).sort((a, b) => b.points - a.points);

export default function Leaderboard() {
  return (
    <section
      id="leaderboard"
      className="w-full bg-gradient-to-b from-blue-500 to-blue-600 p-4 py-12 sm:p-6 sm:py-20"
    >
      <div className="container mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Leaderboard
          </h1>
          <p className="text-balance text-sm text-blue-100 sm:text-base">
            The leaderboard showcases top users with the highest points earned
            from using sustainable transport options, fostering friendly
            competition and motivating everyone to move up the ranks for bigger
            rewards.
          </p>
        </div>

        {/* Mobile view: Card-based layout */}
        <div className="space-y-4 sm:hidden">
          {leaderboardData.map((user, idx) => (
            <Card key={user.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {idx + 1 <= 3 ? (
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full p-2 ${
                            idx + 1 === 1
                              ? "bg-yellow-100 text-yellow-600"
                              : idx + 1 === 2
                                ? "bg-gray-100 text-gray-600"
                                : "bg-orange-100 text-orange-600"
                          }`}
                        >
                          <Trophy className="h-5 w-5" />
                        </div>
                      ) : (
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                          {idx + 1}
                        </span>
                      )}
                    </div>
                    <div>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">
                        {user.points.toLocaleString()} points
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-2 h-8 w-8">
                      {user.transportation && (
                        <Image
                          src={user.transportation.icon}
                          alt={user.transportation.name}
                          className="object-contain"
                          fill
                          sizes="32px"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop view: Table layout */}
        <div className="hidden overflow-hidden rounded-lg bg-white shadow-lg sm:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24 text-center">Position</TableHead>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Favorite Transportation</TableHead>
                <TableHead className="text-right">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((user, idx) => (
                <TableRow key={user.id}>
                  <TableCell className="text-center">
                    {idx + 1 <= 3 ? (
                      <div
                        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full p-2 ${
                          idx + 1 === 1
                            ? "bg-yellow-100 text-yellow-600"
                            : idx + 1 === 2
                              ? "bg-gray-100 text-gray-600"
                              : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        <Trophy className="h-5 w-5" />
                      </div>
                    ) : (
                      <span className="text-gray-500">{idx + 1}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="relative h-8 w-8">
                        {user.transportation && (
                          <Image
                            src={user.transportation.icon}
                            alt={user.transportation.name}
                            className="object-contain"
                            fill
                            sizes="32px"
                          />
                        )}
                      </div>
                      <span className="text-sm text-gray-600">
                        {user.transportation?.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {user.points.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
