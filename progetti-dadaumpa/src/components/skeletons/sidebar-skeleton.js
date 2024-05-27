export default function SidebarSkeleton() {
  return (
    <div className="w-full md:w-1/3 bg-white shadow flex flex-col my-4 p-6 animate-pulse mt-10">
      <div className="h-5 bg-gray-200 rounded w-1/4"></div>
      <div className="grid grid-cols-1 gap-3 mt-5">
        <div className="w-full h-80 bg-gray-200 rounded"></div>
        <div className="w-full h-80 bg-gray-200 rounded mt-5"></div>
        <div className="w-full h-80 bg-gray-200 rounded mt-5"></div>
      </div>
      <div className="h-12 bg-gray-200 rounded w-full mt-5"></div>
    </div>
  );
}
