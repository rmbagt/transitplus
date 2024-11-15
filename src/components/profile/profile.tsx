import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Pencil } from "lucide-react";
import type { Session } from "next-auth";

export function Profile({ session }: { session: Session }) {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 text-blue-900">
        <CardTitle>Personal Information</CardTitle>
        <Button variant="ghost" className="m-0 bg-blue-100 text-primary">
          <span>Edit</span>
          <Pencil className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Name</div>
            <div className="text-lg font-medium">{session.user.name}</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Email address</div>
            <div className="break-words text-lg font-medium">
              {session.user.email}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Phone Number</div>
            <div className="text-lg font-medium">+6289-8612-1245</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Country</div>
            <div className="text-lg font-medium">Indonesia</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">City/State</div>
            <div className="text-lg font-medium">Jakarta, IDN</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="">Upload your photo</div>
          <div className="flex justify-center">
            <div className="relative flex h-32 w-32 cursor-pointer items-center justify-center rounded-full bg-blue-100">
              <Camera className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
