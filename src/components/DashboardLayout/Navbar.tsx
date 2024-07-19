import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-end space-x-4">
        <div className="">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="text-base font-medium tracking-normal text-gray-700">
            Aliosha Milsztein
          </span>
          <span className="text-xs font-normal tracking-normal text-gray-400">
            aurio
          </span>
        </div>
      </div>
    </>
  );
}
