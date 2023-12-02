import { useAuthContext } from "@/features/auth/context/auth_context";
import Link from "next/link";

const user = {
  name: "Rebecca Nicholas",
  role: "Product Designer",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const stats = [
  { label: "Vacation days left", value: 12 },
  { label: "Sick days left", value: 4 },
  { label: "Personal days left", value: 2 },
];

export function WelcomeHeader() {
  const { firstName, lastName } = useAuthContext();
  return (
    <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-white px-3 sm:px-3 lg:px-3">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600">Welcome back,</p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {firstName} {lastName}
              </p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <Link
              href="#"
              className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
